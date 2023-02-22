import UZIP from "uzip";
import pako from "pako";

var UPNG = {};

UPNG.toRGBA8 = function (out) {
  const w = out.width;
  const h = out.height;
  if (out.tabs.acTL === null)
    return [UPNG.toRGBA8.decodeImage(out.data, w, h, out).buffer];

  var frms = [];
  if (out.frames[0].data === null) out.frames[0].data = out.data;
  const len = w * h * 4;
  const img = new Uint8Array(len);
  const empty = new Uint8Array(len);
  const prev = new Uint8Array(len);
  for (let i = 0; i < out.frames.length; i++) {
    const frm = out.frames[i];
    const fx = frm.rect.x;
    const fy = frm.rect.y;
    const fw = frm.rect.width;
    const fh = frm.rect.height;
    const fdata = UPNG.toRGBA8.decodeImage(frm.data, fw, fh, out);

    if (i !== 0) for (let j = 0; j < len; j++) prev[j] = img[j];

    if (frm.blend === 0) UPNG._copyTile(fdata, fw, fh, img, w, h, fx, fy, 0);
    else if (frm.blend === 1)
      UPNG._copyTile(fdata, fw, fh, img, w, h, fx, fy, 1);

    frms.push(img.buffer.slice(0));

    if (frm.dispose === 1) UPNG._copyTile(empty, fw, fh, img, w, h, fx, fy, 0);
    else if (frm.dispose === 2) for (let j = 0; j < len; j++) img[j] = prev[j];
  }
  return frms;
};
UPNG.toRGBA8.decodeImage = function (data, w, h, out) {
  const area = w * h;
  const bpp = UPNG.decode._getBPP(out);
  const bpl = Math.ceil((w * bpp) / 8); // bytes per line

  const bf = new Uint8Array(area * 4);
  const bf32 = new Uint32Array(bf.buffer);
  const ctype = out.ctype;
  const depth = out.depth;
  const rs = UPNG._bin.readUshort;

  if (ctype === 6) {
    // RGB + alpha
    const qarea = area << 2;
    if (depth === 8)
      for (let i = 0; i < qarea; i += 4) {
        bf[i] = data[i];
        bf[i + 1] = data[i + 1];
        bf[i + 2] = data[i + 2];
        bf[i + 3] = data[i + 3];
      }
    if (depth === 16)
      for (let i = 0; i < qarea; i++) {
        bf[i] = data[i << 1];
      }
  } else if (ctype === 2) {
    // RGB
    const ts = out.tabs["tRNS"];
    if (ts === null) {
      if (depth === 8)
        for (let i = 0; i < area; i++) {
          const ti = i * 3;
          bf32[i] =
            (255 << 24) | (data[ti + 2] << 16) | (data[ti + 1] << 8) | data[ti];
        }
      if (depth === 16)
        for (let i = 0; i < area; i++) {
          const ti = i * 6;
          bf32[i] =
            (255 << 24) | (data[ti + 4] << 16) | (data[ti + 2] << 8) | data[ti];
        }
    } else {
      const tr = ts[0];
      const tg = ts[1];
      const tb = ts[2];
      if (depth === 8)
        for (let i = 0; i < area; i++) {
          const qi = i << 2;
          const ti = i * 3;
          bf32[i] =
            (255 << 24) | (data[ti + 2] << 16) | (data[ti + 1] << 8) | data[ti];
          if (data[ti] === tr && data[ti + 1] === tg && data[ti + 2] === tb)
            bf[qi + 3] = 0;
        }
      if (depth === 16)
        for (let i = 0; i < area; i++) {
          const qi = i << 2;
          const ti = i * 6;
          bf32[i] =
            (255 << 24) | (data[ti + 4] << 16) | (data[ti + 2] << 8) | data[ti];
          if (
            rs(data, ti) === tr &&
            rs(data, ti + 2) === tg &&
            rs(data, ti + 4) === tb
          )
            bf[qi + 3] = 0;
        }
    }
  } else if (ctype === 3) {
    // palette
    const p = out.tabs["PLTE"];
    const ap = out.tabs["tRNS"];
    const tl = ap ? ap.length : 0;
    if (depth === 1)
      for (let y = 0; y < h; y++) {
        const s0 = y * bpl;
        const t0 = y * w;
        for (let i = 0; i < w; i++) {
          const qi = (t0 + i) << 2;
          const j = (data[s0 + (i >> 3)] >> (7 - ((i & 7) << 0))) & 1;
          const cj = 3 * j;
          bf[qi] = p[cj];
          bf[qi + 1] = p[cj + 1];
          bf[qi + 2] = p[cj + 2];
          bf[qi + 3] = j < tl ? ap[j] : 255;
        }
      }
    if (depth === 2)
      for (let y = 0; y < h; y++) {
        const s0 = y * bpl;
        const t0 = y * w;
        for (let i = 0; i < w; i++) {
          const qi = (t0 + i) << 2;
          const j = (data[s0 + (i >> 2)] >> (6 - ((i & 3) << 1))) & 3;
          const cj = 3 * j;
          bf[qi] = p[cj];
          bf[qi + 1] = p[cj + 1];
          bf[qi + 2] = p[cj + 2];
          bf[qi + 3] = j < tl ? ap[j] : 255;
        }
      }
    if (depth === 4)
      for (let y = 0; y < h; y++) {
        const s0 = y * bpl;
        const t0 = y * w;
        for (let i = 0; i < w; i++) {
          const qi = (t0 + i) << 2;
          const j = (data[s0 + (i >> 1)] >> (4 - ((i & 1) << 2))) & 15;
          const cj = 3 * j;
          bf[qi] = p[cj];
          bf[qi + 1] = p[cj + 1];
          bf[qi + 2] = p[cj + 2];
          bf[qi + 3] = j < tl ? ap[j] : 255;
        }
      }
    if (depth === 8)
      for (let i = 0; i < area; i++) {
        const qi = i << 2;
        const j = data[i];
        const cj = 3 * j;
        bf[qi] = p[cj];
        bf[qi + 1] = p[cj + 1];
        bf[qi + 2] = p[cj + 2];
        bf[qi + 3] = j < tl ? ap[j] : 255;
      }
  } else if (ctype === 4) {
    // gray + alpha
    if (depth === 8)
      for (let i = 0; i < area; i++) {
        const qi = i << 2;
        const di = i << 1;
        const gr = data[di];
        bf[qi] = gr;
        bf[qi + 1] = gr;
        bf[qi + 2] = gr;
        bf[qi + 3] = data[di + 1];
      }
    if (depth === 16)
      for (let i = 0; i < area; i++) {
        const qi = i << 2;
        const di = i << 2;
        const gr = data[di];
        bf[qi] = gr;
        bf[qi + 1] = gr;
        bf[qi + 2] = gr;
        bf[qi + 3] = data[di + 2];
      }
  } else if (ctype === 0) {
    // gray
    const tr = out.tabs["tRNS"] ? out.tabs["tRNS"] : -1;
    for (let y = 0; y < h; y++) {
      const off = y * bpl;
      const to = y * w;
      if (depth === 1)
        for (let x = 0; x < w; x++) {
          const gr = 255 * ((data[off + (x >>> 3)] >>> (7 - (x & 7))) & 1);
          const al = gr === tr * 255 ? 0 : 255;
          bf32[to + x] = (al << 24) | (gr << 16) | (gr << 8) | gr;
        }
      else if (depth === 2)
        for (let x = 0; x < w; x++) {
          const gr =
            85 * ((data[off + (x >>> 2)] >>> (6 - ((x & 3) << 1))) & 3);
          const al = gr === tr * 85 ? 0 : 255;
          bf32[to + x] = (al << 24) | (gr << 16) | (gr << 8) | gr;
        }
      else if (depth === 4)
        for (let x = 0; x < w; x++) {
          const gr =
            17 * ((data[off + (x >>> 1)] >>> (4 - ((x & 1) << 2))) & 15);
          const al = gr === tr * 17 ? 0 : 255;
          bf32[to + x] = (al << 24) | (gr << 16) | (gr << 8) | gr;
        }
      else if (depth === 8)
        for (let x = 0; x < w; x++) {
          const gr = data[off + x];
          const al = gr === tr ? 0 : 255;
          bf32[to + x] = (al << 24) | (gr << 16) | (gr << 8) | gr;
        }
      else if (depth === 16)
        for (let x = 0; x < w; x++) {
          const gr = data[off + (x << 1)];
          const al = rs(data, off + (x << 1)) === tr ? 0 : 255;
          bf32[to + x] = (al << 24) | (gr << 16) | (gr << 8) | gr;
        }
    }
  }
  return bf;
};

UPNG.decode = function (buff) {
  const data = new Uint8Array(buff);
  let offset = 8;
  const bin = UPNG._bin;
  const rUs = bin.readUshort;
  const rUi = bin.readUint;
  const out = { tabs: {}, frames: [] };
  const dd = new Uint8Array(data.length);
  let doff = 0; // put all IDAT data into it
  let fd;
  let foff = 0; // frames

  const mgck = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
  for (let i = 0; i < 8; i++)
    if (data[i] !== mgck[i]) throw "The input is not a PNG file!";

  while (offset < data.length) {
    const len = bin.readUint(data, offset);
    offset += 4;
    const type = bin.readASCII(data, offset, 4);
    offset += 4;

    if (type === "IHDR") {
      UPNG.decode._IHDR(data, offset, out);
    } else if (type === "CgBI") {
      out.tabs[type] = data.slice(offset, offset + 4);
    } else if (type === "IDAT") {
      for (let i = 0; i < len; i++) dd[doff + i] = data[offset + i];
      doff += len;
    } else if (type === "acTL") {
      out.tabs[type] = {
        num_frames: rUi(data, offset),
        num_plays: rUi(data, offset + 4),
      };
      fd = new Uint8Array(data.length);
    } else if (type === "fcTL") {
      if (foff !== 0) {
        const fr = out.frames[out.frames.length - 1];
        fr.data = UPNG.decode._decompress(
          out,
          fd.slice(0, foff),
          fr.rect.width,
          fr.rect.height
        );
        foff = 0;
      }
      const rct = {
        x: rUi(data, offset + 12),
        y: rUi(data, offset + 16),
        width: rUi(data, offset + 4),
        height: rUi(data, offset + 8),
      };
      let del = rUs(data, offset + 22);
      del = rUs(data, offset + 20) / (del === 0 ? 100 : del);
      const frm = {
        rect: rct,
        delay: Math.round(del * 1000),
        dispose: data[offset + 24],
        blend: data[offset + 25],
      };
      out.frames.push(frm);
    } else if (type === "fdAT") {
      for (let i = 0; i < len - 4; i++) fd[foff + i] = data[offset + i + 4];
      foff += len - 4;
    } else if (type === "pHYs") {
      out.tabs[type] = [
        bin.readUint(data, offset),
        bin.readUint(data, offset + 4),
        data[offset + 8],
      ];
    } else if (type === "cHRM") {
      out.tabs[type] = [];
      for (let i = 0; i < 8; i++)
        out.tabs[type].push(bin.readUint(data, offset + i * 4));
    } else if (type === "tEXt" || type === "zTXt") {
      if (out.tabs[type] === null) out.tabs[type] = {};
      const nz = bin.nextZero(data, offset);
      const keyw = bin.readASCII(data, offset, nz - offset);
      let text;
      const tl = offset + len - nz - 1;
      if (type === "tEXt") text = bin.readASCII(data, nz + 1, tl);
      else {
        const bfr = UPNG.decode._inflate(data.slice(nz + 2, nz + 2 + tl));
        text = bin.readUTF8(bfr, 0, bfr.length);
      }
      out.tabs[type][keyw] = text;
    } else if (type === "iTXt") {
      if (out.tabs[type] == null) out.tabs[type] = {};
      let nz = 0;
      let off = offset;
      nz = bin.nextZero(data, off);
      const keyw = bin.readASCII(data, off, nz - off);
      off = nz + 1;
      const cflag = data[off];
      const cmeth = data[off + 1];
      off += 2;
      nz = bin.nextZero(data, off);
      const ltag = bin.readASCII(data, off, nz - off);
      off = nz + 1;
      nz = bin.nextZero(data, off);
      const tkeyw = bin.readUTF8(data, off, nz - off);
      off = nz + 1;
      let text;
      const tl = len - (off - offset);
      if (cflag === 0) text = bin.readUTF8(data, off, tl);
      else {
        const bfr = UPNG.decode._inflate(data.slice(off, off + tl));
        text = bin.readUTF8(bfr, 0, bfr.length);
      }
      out.tabs[type][keyw] = text;
    } else if (type === "PLTE") {
      out.tabs[type] = bin.readBytes(data, offset, len);
    } else if (type === "hIST") {
      const pl = out.tabs["PLTE"].length / 3;
      out.tabs[type] = [];
      for (let i = 0; i < pl; i++)
        out.tabs[type].push(rUs(data, offset + i * 2));
    } else if (type === "tRNS") {
      if (out.ctype === 3) out.tabs[type] = bin.readBytes(data, offset, len);
      else if (out.ctype === 0) out.tabs[type] = rUs(data, offset);
      else if (out.ctype === 2)
        out.tabs[type] = [
          rUs(data, offset),
          rUs(data, offset + 2),
          rUs(data, offset + 4),
        ];
    } else if (type === "gAMA")
      out.tabs[type] = bin.readUint(data, offset) / 100000;
    else if (type === "sRGB") out.tabs[type] = data[offset];
    else if (type === "bKGD") {
      if (out.ctype === 0 || out.ctype === 4)
        out.tabs[type] = [rUs(data, offset)];
      else if (out.ctype === 2 || out.ctype === 6)
        out.tabs[type] = [
          rUs(data, offset),
          rUs(data, offset + 2),
          rUs(data, offset + 4),
        ];
      else if (out.ctype === 3) out.tabs[type] = data[offset];
    } else if (type === "IEND") {
      break;
    }
    offset += len;
    const crc = bin.readUint(data, offset);
    offset += 4;
  }
  if (foff !== 0) {
    const fr = out.frames[out.frames.length - 1];
    fr.data = UPNG.decode._decompress(
      out,
      fd.slice(0, foff),
      fr.rect.width,
      fr.rect.height
    );
    foff = 0;
  }
  out.data = UPNG.decode._decompress(out, dd, out.width, out.height);

  delete out.compress;
  delete out.interlace;
  delete out.filter;
  return out;
};

UPNG.decode._decompress = function (out, dd, w, h) {
  const bpp = UPNG.decode._getBPP(out);
  const bpl = Math.ceil((w * bpp) / 8);
  const buff = new Uint8Array((bpl + 1 + out.interlace) * h);
  if (out.tabs["CgBI"]) dd = UPNG.inflateRaw(dd, buff);
  else dd = UPNG.decode._inflate(dd, buff);

  if (out.interlace === 0) dd = UPNG.decode._filterZero(dd, out, 0, w, h);
  else if (out.interlace === 1) dd = UPNG.decode._readInterlace(dd, out);
  return dd;
};

UPNG.decode._inflate = function (data, buff) {
  const out = UPNG["inflateRaw"](
    new Uint8Array(data.buffer, 2, data.length - 6),
    buff
  );
  return out;
};
UPNG.inflateRaw = (function () {
  const H = {};
  H.H = {};
  H.H.N = function (N, W) {
    const R = Uint8Array;
    let i = 0;
    let m = 0;
    let J = 0;
    let h = 0;
    let Q = 0;
    let X = 0;
    let u = 0;
    let w = 0;
    let d = 0;
    let v;
    let C;
    if (N[0] === 3 && N[1] === 0) {
      return W || new R(0);
    }
    const V = H.H;
    const n = V.b;
    const A = V.e;
    const l = V.R;
    const M = V.n;
    const I = V.A;
    const e = V.Z;
    const b = V.m;
    const Z = W === null;
    if (Z) W = new R((N.length >>> 2) << 3);
    while (i === 0) {
      i = n(N, d, 1);
      m = n(N, d + 1, 2);
      d += 3;
      if (m === 0) {
        if ((d & 7) !== 0) d += 8 - (d & 7);
        const D = (d >>> 3) + 4;
        const q = N[D - 4] | (N[D - 3] << 8);
        if (Z) W = H.H.W(W, w + q);
        W.set(new R(N.buffer, N.byteOffset + D, q), w);
        d = (D + q) << 3;
        w += q;
        continue;
      }
      if (Z) W = H.H.W(W, w + (1 << 17));
      if (m === 1) {
        v = b.J;
        C = b.h;
        X = (1 << 9) - 1;
        u = (1 << 5) - 1;
      }
      if (m === 2) {
        J = A(N, d, 5) + 257;
        h = A(N, d + 5, 5) + 1;
        Q = A(N, d + 10, 4) + 4;
        d += 14;
        const E = d;
        let j = 1;
        for (let c = 0; c < 38; c += 2) {
          b.Q[c] = 0;
          b.Q[c + 1] = 0;
        }
        for (let c = 0; c < Q; c++) {
          var K = A(N, d + c * 3, 3);
          b.Q[(b.X[c] << 1) + 1] = K;
          if (K > j) j = K;
        }
        d += 3 * Q;
        M(b.Q, j);
        I(b.Q, j, b.u);
        v = b.w;
        C = b.d;
        d = l(b.u, (1 << j) - 1, J + h, N, d, b.v);
        const r = V.V(b.v, 0, J, b.C);
        X = (1 << r) - 1;
        const S = V.V(b.v, J, h, b.D);
        u = (1 << S) - 1;
        M(b.C, r);
        I(b.C, r, v);
        M(b.D, S);
        I(b.D, S, C);
      }
      while (!0) {
        const T = v[e(N, d) & X];
        d += T & 15;
        const p = T >>> 4;
        if (p >>> 8 === 0) {
          W[w++] = p;
        } else if (p === 256) {
          break;
        } else {
          let z = w + p - 254;
          if (p > 264) {
            const _ = b.q[p - 257];
            z = w + (_ >>> 3) + A(N, d, _ & 7);
            d += _ & 7;
          }
          const $ = C[e(N, d) & u];
          d += $ & 15;
          const s = $ >>> 4;
          const Y = b.c[s];
          const a = (Y >>> 4) + n(N, d, Y & 15);
          d += Y & 15;
          while (w < z) {
            W[w] = W[w++ - a];
            W[w] = W[w++ - a];
            W[w] = W[w++ - a];
            W[w] = W[w++ - a];
          }
          w = z;
        }
      }
    }
    return W.length === w ? W : W.slice(0, w);
  };
  H.H.W = function (N, W) {
    const R = N.length;
    if (W <= R) return N;
    const V = new Uint8Array(R << 1);
    V.set(N, 0);
    return V;
  };
  H.H.R = function (N, W, R, V, n, A) {
    const l = H.H.e;
    const M = H.H.Z;
    let I = 0;
    while (I < R) {
      const e = N[M(V, n) & W];
      n += e & 15;
      const b = e >>> 4;
      if (b <= 15) {
        A[I] = b;
        I++;
      } else {
        let Z = 0;
        let m = 0;
        if (b === 16) {
          m = 3 + l(V, n, 2);
          n += 2;
          Z = A[I - 1];
        } else if (b === 17) {
          m = 3 + l(V, n, 3);
          n += 3;
        } else if (b === 18) {
          m = 11 + l(V, n, 7);
          n += 7;
        }
        const J = I + m;
        while (I < J) {
          A[I] = Z;
          I++;
        }
      }
    }
    return n;
  };
  H.H.V = function (N, W, R, V) {
    let n = 0;
    let A = 0;
    const l = V.length >>> 1;
    while (A < R) {
      const M = N[A + W];
      V[A << 1] = 0;
      V[(A << 1) + 1] = M;
      if (M > n) n = M;
      A++;
    }
    while (A < l) {
      V[A << 1] = 0;
      V[(A << 1) + 1] = 0;
      A++;
    }
    return n;
  };
  H.H.n = function (N, W) {
    const R = H.H.m;
    const V = N.length;
    let n;
    let A;
    let l;
    let M;
    let I;
    const e = R.j;
    for (let M = 0; M <= W; M++) e[M] = 0;
    for (M = 1; M < V; M += 2) e[N[M]]++;
    const b = R.K;
    n = 0;
    e[0] = 0;
    for (A = 1; A <= W; A++) {
      n = (n + e[A - 1]) << 1;
      b[A] = n;
    }
    for (l = 0; l < V; l += 2) {
      I = N[l + 1];
      if (I !== 0) {
        N[l] = b[I];
        b[I]++;
      }
    }
  };
  H.H.A = function (N, W, R) {
    const V = N.length;
    const n = H.H.m;
    const A = n.r;
    for (let l = 0; l < V; l += 2)
      if (N[l + 1] !== 0) {
        const M = l >> 1;
        const I = N[l + 1];
        const e = (M << 4) | I;
        const b = W - I;
        let Z = N[l] << b;
        const m = Z + (1 << b);
        while (Z !== m) {
          const J = A[Z] >>> (15 - W);
          R[J] = e;
          Z++;
        }
      }
  };
  H.H.l = function (N, W) {
    const R = H.H.m.r;
    const V = 15 - W;
    for (let n = 0; n < N.length; n += 2) {
      const A = N[n] << (W - N[n + 1]);
      N[n] = R[A] >>> V;
    }
  };
  H.H.M = function (N, W, R) {
    R = R << (W & 7);
    const V = W >>> 3;
    N[V] |= R;
    N[V + 1] |= R >>> 8;
  };
  H.H.I = function (N, W, R) {
    R = R << (W & 7);
    const V = W >>> 3;
    N[V] |= R;
    N[V + 1] |= R >>> 8;
    N[V + 2] |= R >>> 16;
  };
  H.H.e = function (N, W, R) {
    return (
      ((N[W >>> 3] | (N[(W >>> 3) + 1] << 8)) >>> (W & 7)) & ((1 << R) - 1)
    );
  };
  H.H.b = function (N, W, R) {
    return (
      ((N[W >>> 3] | (N[(W >>> 3) + 1] << 8) | (N[(W >>> 3) + 2] << 16)) >>>
        (W & 7)) &
      ((1 << R) - 1)
    );
  };
  H.H.Z = function (N, W) {
    return (
      (N[W >>> 3] | (N[(W >>> 3) + 1] << 8) | (N[(W >>> 3) + 2] << 16)) >>>
      (W & 7)
    );
  };
  H.H.i = function (N, W) {
    return (
      (N[W >>> 3] |
        (N[(W >>> 3) + 1] << 8) |
        (N[(W >>> 3) + 2] << 16) |
        (N[(W >>> 3) + 3] << 24)) >>>
      (W & 7)
    );
  };
  H.H.m = (function () {
    const N = Uint16Array;
    const W = Uint32Array;
    return {
      K: new N(16),
      j: new N(16),
      X: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      S: [
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999,
      ],
      T: [
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
        5, 5, 5, 5, 0, 0, 0, 0,
      ],
      q: new N(32),
      p: [
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
        65535, 65535,
      ],
      z: [
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
        10, 11, 11, 12, 12, 13, 13, 0, 0,
      ],
      c: new W(32),
      J: new N(512),
      _: [],
      h: new N(32),
      $: [],
      w: new N(32768),
      C: [],
      v: [],
      d: new N(32768),
      D: [],
      u: new N(512),
      Q: [],
      r: new N(1 << 15),
      s: new W(286),
      Y: new W(30),
      a: new W(19),
      t: new W(15e3),
      k: new N(1 << 16),
      g: new N(1 << 15),
    };
  })();
  (function () {
    const N = H.H.m;
    const W = 1 << 15;
    for (var R = 0; R < W; R++) {
      let V = R;
      V = ((V & 2863311530) >>> 1) | ((V & 1431655765) << 1);
      V = ((V & 3435973836) >>> 2) | ((V & 858993459) << 2);
      V = ((V & 4042322160) >>> 4) | ((V & 252645135) << 4);
      V = ((V & 4278255360) >>> 8) | ((V & 16711935) << 8);
      N.r[R] = ((V >>> 16) | (V << 16)) >>> 17;
    }
    function n(A, l, M) {
      while (l-- !== 0) A.push(0, M);
    }
    for (let R = 0; R < 32; R++) {
      N.q[R] = (N.S[R] << 3) | N.T[R];
      N.c[R] = (N.p[R] << 4) | N.z[R];
    }
    n(N._, 144, 8);
    n(N._, 255 - 143, 9);
    n(N._, 279 - 255, 7);
    n(N._, 287 - 279, 8);
    H.H.n(N._, 9);
    H.H.A(N._, 9, N.J);
    H.H.l(N._, 9);
    n(N.$, 32, 5);
    H.H.n(N.$, 5);
    H.H.A(N.$, 5, N.h);
    H.H.l(N.$, 5);
    n(N.Q, 19, 0);
    n(N.C, 286, 0);
    n(N.D, 30, 0);
    n(N.v, 320, 0);
  })();
  return H.H.N;
})();

UPNG.decode._readInterlace = function (data, out) {
  const w = out.width;
  const h = out.height;
  const bpp = UPNG.decode._getBPP(out);
  const cbpp = bpp >> 3;
  const bpl = Math.ceil((w * bpp) / 8);
  const img = new Uint8Array(h * bpl);
  let di = 0;

  const starting_row = [0, 0, 4, 0, 2, 0, 1];
  const starting_col = [0, 4, 0, 2, 0, 1, 0];
  const row_increment = [8, 8, 8, 4, 4, 2, 2];
  const col_increment = [8, 8, 4, 4, 2, 2, 1];

  let pass = 0;
  while (pass < 7) {
    const ri = row_increment[pass];
    const ci = col_increment[pass];
    let sw = 0;
    let sh = 0;
    let cr = starting_row[pass];
    while (cr < h) {
      cr += ri;
      sh++;
    }
    let cc = starting_col[pass];
    while (cc < w) {
      cc += ci;
      sw++;
    }
    const bpll = Math.ceil((sw * bpp) / 8);
    UPNG.decode._filterZero(data, out, di, sw, sh);

    let y = 0;
    let row = starting_row[pass];
    while (row < h) {
      let col = starting_col[pass];
      let cdi = (di + y * bpll) << 3;

      while (col < w) {
        if (bpp === 1) {
          let val = data[cdi >> 3];
          val = (val >> (7 - (cdi & 7))) & 1;
          img[row * bpl + (col >> 3)] |= val << (7 - ((col & 7) << 0));
        }
        if (bpp === 2) {
          let val = data[cdi >> 3];
          val = (val >> (6 - (cdi & 7))) & 3;
          img[row * bpl + (col >> 2)] |= val << (6 - ((col & 3) << 1));
        }
        if (bpp === 4) {
          let val = data[cdi >> 3];
          val = (val >> (4 - (cdi & 7))) & 15;
          img[row * bpl + (col >> 1)] |= val << (4 - ((col & 1) << 2));
        }
        if (bpp >= 8) {
          const ii = row * bpl + col * cbpp;
          for (let j = 0; j < cbpp; j++) img[ii + j] = data[(cdi >> 3) + j];
        }
        cdi += bpp;
        col += ci;
      }
      y++;
      row += ri;
    }
    if (sw * sh !== 0) di += sh * (1 + bpll);
    pass = pass + 1;
  }
  return img;
};

UPNG.decode._getBPP = function (out) {
  const noc = [1, null, 3, 1, 2, null, 4][out.ctype];
  return noc * out.depth;
};

UPNG.decode._filterZero = function (data, out, off, w, h) {
  let bpp = UPNG.decode._getBPP(out);
  const bpl = Math.ceil((w * bpp) / 8);
  const paeth = UPNG.decode._paeth;
  bpp = Math.ceil(bpp / 8);

  let i = 0;
  let di = 1;
  let type = data[off];
  let x = 0;

  if (type > 1) data[off] = [0, 0, 1][type - 2];
  if (type === 3)
    for (x = bpp; x < bpl; x++)
      data[x + 1] = (data[x + 1] + (data[x + 1 - bpp] >>> 1)) & 255;

  for (let y = 0; y < h; y++) {
    i = off + y * bpl;
    di = i + y + 1;
    type = data[di - 1];
    x = 0;

    if (type === 0) for (; x < bpl; x++) data[i + x] = data[di + x];
    else if (type === 1) {
      for (; x < bpp; x++) data[i + x] = data[di + x];
      for (; x < bpl; x++) data[i + x] = data[di + x] + data[i + x - bpp];
    } else if (type === 2) {
      for (; x < bpl; x++) data[i + x] = data[di + x] + data[i + x - bpl];
    } else if (type === 3) {
      for (; x < bpp; x++)
        data[i + x] = data[di + x] + (data[i + x - bpl] >>> 1);
      for (; x < bpl; x++)
        data[i + x] =
          data[di + x] + ((data[i + x - bpl] + data[i + x - bpp]) >>> 1);
    } else {
      for (; x < bpp; x++)
        data[i + x] = data[di + x] + paeth(0, data[i + x - bpl], 0);
      for (; x < bpl; x++)
        data[i + x] =
          data[di + x] +
          paeth(data[i + x - bpp], data[i + x - bpl], data[i + x - bpp - bpl]);
    }
  }
  return data;
};

UPNG.decode._paeth = function (a, b, c) {
  const p = a + b - c;
  const pa = p - a;
  const pb = p - b;
  const pc = p - c;
  if (pa * pa <= pb * pb && pa * pa <= pc * pc) return a;
  else if (pb * pb <= pc * pc) return b;
  return c;
};

UPNG.decode._IHDR = function (data, offset, out) {
  const bin = UPNG._bin;
  out.width = bin.readUint(data, offset);
  offset += 4;
  out.height = bin.readUint(data, offset);
  offset += 4;
  out.depth = data[offset];
  offset++;
  out.ctype = data[offset];
  offset++;
  out.compress = data[offset];
  offset++;
  out.filter = data[offset];
  offset++;
  out.interlace = data[offset];
  offset++;
};

UPNG._bin = {
  nextZero: function (data, p) {
    while (data[p] != 0) p++;
    return p;
  },
  readUshort: function (buff, p) {
    return (buff[p] << 8) | buff[p + 1];
  },
  writeUshort: function (buff, p, n) {
    buff[p] = (n >> 8) & 255;
    buff[p + 1] = n & 255;
  },
  readUint: function (buff, p) {
    return (
      buff[p] * (256 * 256 * 256) +
      ((buff[p + 1] << 16) | (buff[p + 2] << 8) | buff[p + 3])
    );
  },
  writeUint: function (buff, p, n) {
    buff[p] = (n >> 24) & 255;
    buff[p + 1] = (n >> 16) & 255;
    buff[p + 2] = (n >> 8) & 255;
    buff[p + 3] = n & 255;
  },
  readASCII: function (buff, p, l) {
    let s = "";
    for (let i = 0; i < l; i++) s += String.fromCharCode(buff[p + i]);
    return s;
  },
  writeASCII: function (data, p, s) {
    for (let i = 0; i < s.length; i++) data[p + i] = s.charCodeAt(i);
  },
  readBytes: function (buff, p, l) {
    const arr = [];
    for (let i = 0; i < l; i++) arr.push(buff[p + i]);
    return arr;
  },
  pad: function (n) {
    return n.length < 2 ? "0" + n : n;
  },
  readUTF8: function (buff, p, l) {
    let s = "";
    let ns;
    for (var i = 0; i < l; i++)
      s += "%" + UPNG._bin.pad(buff[p + i].toString(16));
    try {
      ns = decodeURIComponent(s);
    } catch (e) {
      return UPNG._bin.readASCII(buff, p, l);
    }
    return ns;
  },
};
UPNG._copyTile = function (sb, sw, sh, tb, tw, th, xoff, yoff, mode) {
  const w = Math.min(sw, tw);
  const h = Math.min(sh, th);
  let si = 0;
  let ti = 0;
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      if (xoff >= 0 && yoff >= 0) {
        si = (y * sw + x) << 2;
        ti = ((yoff + y) * tw + xoff + x) << 2;
      } else {
        si = ((-yoff + y) * sw - xoff + x) << 2;
        ti = (y * tw + x) << 2;
      }

      if (mode === 0) {
        tb[ti] = sb[si];
        tb[ti + 1] = sb[si + 1];
        tb[ti + 2] = sb[si + 2];
        tb[ti + 3] = sb[si + 3];
      } else if (mode === 1) {
        const fa = sb[si + 3] * (1 / 255);
        const fr = sb[si] * fa;
        const fg = sb[si + 1] * fa;
        const fb = sb[si + 2] * fa;
        const ba = tb[ti + 3] * (1 / 255);
        const br = tb[ti] * ba;
        const bg = tb[ti + 1] * ba;
        const bb = tb[ti + 2] * ba;

        const ifa = 1 - fa;
        const oa = fa + ba * ifa;
        const ioa = oa === 0 ? 0 : 1 / oa;
        tb[ti + 3] = 255 * oa;
        tb[ti + 0] = (fr + br * ifa) * ioa;
        tb[ti + 1] = (fg + bg * ifa) * ioa;
        tb[ti + 2] = (fb + bb * ifa) * ioa;
      } else if (mode === 2) {
        // copy only differences, otherwise zero
        const fa = sb[si + 3];
        const fr = sb[si];
        const fg = sb[si + 1];
        const fb = sb[si + 2];
        const ba = tb[ti + 3];
        const br = tb[ti];
        const bg = tb[ti + 1];
        const bb = tb[ti + 2];
        if (fa === ba && fr === br && fg === bg && fb === bb) {
          tb[ti] = 0;
          tb[ti + 1] = 0;
          tb[ti + 2] = 0;
          tb[ti + 3] = 0;
        } else {
          tb[ti] = fr;
          tb[ti + 1] = fg;
          tb[ti + 2] = fb;
          tb[ti + 3] = fa;
        }
      } else if (mode === 3) {
        // check if can be blended
        const fa = sb[si + 3];
        const fr = sb[si];
        const fg = sb[si + 1];
        const fb = sb[si + 2];
        const ba = tb[ti + 3];
        const br = tb[ti];
        const bg = tb[ti + 1];
        const bb = tb[ti + 2];
        if (fa === ba && fr === br && fg === bg && fb === bb) continue;
        if (fa < 220 && ba > 20) return false;
      }
    }
  return true;
};

UPNG.encode = function (bufs, w, h, ps, dels, tabs, forbidPlte) {
  if (ps === null) ps = 0;
  if (forbidPlte === null) forbidPlte = false;

  var nimg = UPNG.encode.compress(bufs, w, h, ps, [
    false,
    false,
    false,
    0,
    forbidPlte,
  ]);
  UPNG.encode.compressPNG(nimg, -1);

  return UPNG.encode._main(nimg, w, h, dels, tabs);
};

UPNG.encodeLL = function (bufs, w, h, cc, ac, depth, dels, tabs) {
  const nimg = {
    ctype: 0 + (cc === 1 ? 0 : 2) + (ac === 0 ? 0 : 4),
    depth: depth,
    frames: [],
  };

  const bipp = (cc + ac) * depth;
  const bipl = bipp * w;
  for (let i = 0; i < bufs.length; i++)
    nimg.frames.push({
      rect: { x: 0, y: 0, width: w, height: h },
      img: new Uint8Array(bufs[i]),
      blend: 0,
      dispose: 1,
      bpp: Math.ceil(bipp / 8),
      bpl: Math.ceil(bipl / 8),
    });

  UPNG.encode.compressPNG(nimg, 0, true);

  const out = UPNG.encode._main(nimg, w, h, dels, tabs);
  return out;
};

UPNG.encode._main = function (nimg, w, h, dels, tabs) {
  if (!tabs) tabs = {};
  const crc = UPNG.crc.crc;
  const wUi = UPNG._bin.writeUint;
  const wUs = UPNG._bin.writeUshort;
  const wAs = UPNG._bin.writeASCII;
  let offset = 8;
  const anim = nimg.frames.length > 1;
  let pltAlpha = false;

  let leng = 8 + (16 + 5 + 4) + (anim ? 20 : 0);
  if (tabs["sRGB"] !== null && tabs["sRGB"] !== undefined) leng += 8 + 1 + 4;
  if (tabs["pHYs"] !== null && tabs["pHYs"] !== undefined) leng += 8 + 9 + 4;
  if (nimg.ctype === 3) {
    const dl = nimg.plte.length;
    for (let i = 0; i < dl; i++)
      if (nimg.plte[i] >>> 24 != 255) pltAlpha = true;
    leng += 8 + dl * 3 + 4 + (pltAlpha ? 8 + dl * 1 + 4 : 0);
  }
  for (let j = 0; j < nimg.frames.length; j++) {
    const fr = nimg.frames[j];
    if (anim) leng += 38;
    leng += fr.cimg.length + 12;
    if (j !== 0) leng += 4;
  }
  leng += 12;

  const data = new Uint8Array(leng);
  const wr = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
  for (let i = 0; i < 8; i++) data[i] = wr[i];

  wUi(data, offset, 13);
  offset += 4;
  wAs(data, offset, "IHDR");
  offset += 4;
  wUi(data, offset, w);
  offset += 4;
  wUi(data, offset, h);
  offset += 4;
  data[offset] = nimg.depth;
  offset++; // depth
  data[offset] = nimg.ctype;
  offset++; // ctype
  data[offset] = 0;
  offset++; // compress
  data[offset] = 0;
  offset++; // filter
  data[offset] = 0;
  offset++; // interlace
  wUi(data, offset, crc(data, offset - 17, 17));
  offset += 4; // crc

  // 13 bytes to say, that it is sRGB
  if (tabs["sRGB"] !== null && tabs["sRGB"] !== undefined) {
    wUi(data, offset, 1);
    offset += 4;
    wAs(data, offset, "sRGB");
    offset += 4;
    data[offset] = tabs["sRGB"];
    offset++;
    wUi(data, offset, crc(data, offset - 5, 5));
    offset += 4; // crc
  }
  if (tabs["pHYs"] !== null && tabs["pHYs"] !== undefined) {
    wUi(data, offset, 9);
    offset += 4;
    wAs(data, offset, "pHYs");
    offset += 4;
    wUi(data, offset, tabs["pHYs"][0]);
    offset += 4;
    wUi(data, offset, tabs["pHYs"][1]);
    offset += 4;
    data[offset] = tabs["pHYs"][2];
    offset++;
    wUi(data, offset, crc(data, offset - 13, 13));
    offset += 4; // crc
  }

  if (anim) {
    wUi(data, offset, 8);
    offset += 4;
    wAs(data, offset, "acTL");
    offset += 4;
    wUi(data, offset, nimg.frames.length);
    offset += 4;
    wUi(data, offset, tabs["loop"] != null ? tabs["loop"] : 0);
    offset += 4;
    wUi(data, offset, crc(data, offset - 12, 12));
    offset += 4; // crc
  }

  if (nimg.ctype === 3) {
    const dl = nimg.plte.length;
    wUi(data, offset, dl * 3);
    offset += 4;
    wAs(data, offset, "PLTE");
    offset += 4;
    for (var i = 0; i < dl; i++) {
      const ti = i * 3;
      const c = nimg.plte[i];
      const r = c & 255;
      const g = (c >>> 8) & 255;
      const b = (c >>> 16) & 255;
      data[offset + ti + 0] = r;
      data[offset + ti + 1] = g;
      data[offset + ti + 2] = b;
    }
    offset += dl * 3;
    wUi(data, offset, crc(data, offset - dl * 3 - 4, dl * 3 + 4));
    offset += 4; // crc

    if (pltAlpha) {
      wUi(data, offset, dl);
      offset += 4;
      wAs(data, offset, "tRNS");
      offset += 4;
      for (var i = 0; i < dl; i++)
        data[offset + i] = (nimg.plte[i] >>> 24) & 255;
      offset += dl;
      wUi(data, offset, crc(data, offset - dl - 4, dl + 4));
      offset += 4; // crc
    }
  }

  let fi = 0;
  for (let j = 0; j < nimg.frames.length; j++) {
    const fr = nimg.frames[j];
    if (anim) {
      wUi(data, offset, 26);
      offset += 4;
      wAs(data, offset, "fcTL");
      offset += 4;
      wUi(data, offset, fi++);
      offset += 4;
      wUi(data, offset, fr.rect.width);
      offset += 4;
      wUi(data, offset, fr.rect.height);
      offset += 4;
      wUi(data, offset, fr.rect.x);
      offset += 4;
      wUi(data, offset, fr.rect.y);
      offset += 4;
      wUs(data, offset, dels[j]);
      offset += 2;
      wUs(data, offset, 1000);
      offset += 2;
      data[offset] = fr.dispose;
      offset++; // dispose
      data[offset] = fr.blend;
      offset++; // blend
      wUi(data, offset, crc(data, offset - 30, 30));
      offset += 4; // crc
    }

    const imgd = fr.cimg;
    const dl = imgd.length;
    wUi(data, offset, dl + (j === 0 ? 0 : 4));
    offset += 4;
    const ioff = offset;
    wAs(data, offset, j === 0 ? "IDAT" : "fdAT");
    offset += 4;
    if (j !== 0) {
      wUi(data, offset, fi++);
      offset += 4;
    }
    data.set(imgd, offset);
    offset += dl;
    wUi(data, offset, crc(data, ioff, offset - ioff));
    offset += 4; // crc
  }

  wUi(data, offset, 0);
  offset += 4;
  wAs(data, offset, "IEND");
  offset += 4;
  wUi(data, offset, crc(data, offset - 4, 4));
  offset += 4; // crc

  return data.buffer;
};

UPNG.encode.compressPNG = function (out, filter, levelZero) {
  for (let i = 0; i < out.frames.length; i++) {
    const frm = out.frames[i];
    // const nw = frm.rect.width;
    const nh = frm.rect.height;
    const fdata = new Uint8Array(nh * frm.bpl + nh);
    frm.cimg = UPNG.encode._filterZero(
      frm.img,
      nh,
      frm.bpp,
      frm.bpl,
      fdata,
      filter,
      levelZero
    );
  }
};

UPNG.encode.compress = function (
  bufs,
  w,
  h,
  ps,
  prms // prms:  onlyBlend, minBits, forbidPlte
) {
  const onlyBlend = prms[0];
  const evenCrd = prms[1];
  const forbidPrev = prms[2];
  const minBits = prms[3];
  const forbidPlte = prms[4];

  let ctype = 6;
  let depth = 8;
  let alphaAnd = 255;

  for (let j = 0; j < bufs.length; j++) {
    // when not quantized, other frames can contain colors, that are not in an initial frame
    const img = new Uint8Array(bufs[j]);
    const ilen = img.length;
    for (let i = 0; i < ilen; i += 4) alphaAnd &= img[i + 3];
  }
  const gotAlpha = alphaAnd !== 255;

  // brute : frames can only be copied, not "blended"
  const frms = UPNG.encode.framize(bufs, w, h, onlyBlend, evenCrd, forbidPrev);

  const cmap = {};
  const plte = [];
  const inds = [];

  if (ps !== 0) {
    const nbufs = [];
    for (let i = 0; i < frms.length; i++) nbufs.push(frms[i].img.buffer);

    const abuf = UPNG.encode.concatRGBA(nbufs);
    const qres = UPNG.quantize(abuf, ps);
    let cof = 0;
    const bb = new Uint8Array(qres.abuf);
    for (let i = 0; i < frms.length; i++) {
      const ti = frms[i].img;
      const bln = ti.length;
      inds.push(new Uint8Array(qres.inds.buffer, cof >> 2, bln >> 2));
      for (let j = 0; j < bln; j += 4) {
        ti[j] = bb[cof + j];
        ti[j + 1] = bb[cof + j + 1];
        ti[j + 2] = bb[cof + j + 2];
        ti[j + 3] = bb[cof + j + 3];
      }
      cof += bln;
    }

    for (let i = 0; i < qres.plte.length; i++) plte.push(qres.plte[i].est.rgba);
  } else {
    // what if ps==0, but there are <=256 colors?  we still need to detect, if the palette could be used
    for (let j = 0; j < frms.length; j++) {
      // when not quantized, other frames can contain colors, that are not in an initial frame
      const frm = frms[j];
      const img32 = new Uint32Array(frm.img.buffer);
      const nw = frm.rect.width;
      const ilen = img32.length;
      const ind = new Uint8Array(ilen);
      inds.push(ind);
      for (let i = 0; i < ilen; i++) {
        const c = img32[i];
        if (i !== 0 && c === img32[i - 1]) ind[i] = ind[i - 1];
        else if (i > nw && c === img32[i - nw]) ind[i] = ind[i - nw];
        else {
          let cmc = cmap[c];
          if (cmc === null) {
            cmap[c] = cmc = plte.length;
            plte.push(c);
            if (plte.length >= 300) break;
          }
          ind[i] = cmc;
        }
      }
    }
  }

  const cc = plte.length;
  if (cc <= 256 && forbidPlte === false) {
    if (cc <= 2) depth = 1;
    else if (cc <= 4) depth = 2;
    else if (cc <= 16) depth = 4;
    else depth = 8;
    depth = Math.max(depth, minBits);
  }

  for (var j = 0; j < frms.length; j++) {
    const frm = frms[j];
    // const nx = frm.rect.x;
    // const ny = frm.rect.y;
    const nw = frm.rect.width;
    const nh = frm.rect.height;
    let cimg = frm.img;
    // const cimg32 = new Uint32Array(cimg.buffer);
    let bpl = 4 * nw;
    let bpp = 4;
    if (cc <= 256 && forbidPlte === false) {
      bpl = Math.ceil((depth * nw) / 8);
      const nimg = new Uint8Array(bpl * nh);
      const inj = inds[j];
      for (let y = 0; y < nh; y++) {
        const i = y * bpl;
        const ii = y * nw;
        if (depth === 8) for (let x = 0; x < nw; x++) nimg[i + x] = inj[ii + x];
        else if (depth === 4)
          for (let x = 0; x < nw; x++)
            nimg[i + (x >> 1)] |= inj[ii + x] << (4 - (x & 1) * 4);
        else if (depth === 2)
          for (let x = 0; x < nw; x++)
            nimg[i + (x >> 2)] |= inj[ii + x] << (6 - (x & 3) * 2);
        else if (depth === 1)
          for (let x = 0; x < nw; x++)
            nimg[i + (x >> 3)] |= inj[ii + x] << (7 - (x & 7) * 1);
      }
      cimg = nimg;
      ctype = 3;
      bpp = 1;
    } else if (gotAlpha === false && frms.length === 1) {
      // some next "reduced" frames may contain alpha for blending
      const nimg = new Uint8Array(nw * nh * 3);
      const area = nw * nh;
      for (let i = 0; i < area; i++) {
        const ti = i * 3;
        const qi = i * 4;
        nimg[ti] = cimg[qi];
        nimg[ti + 1] = cimg[qi + 1];
        nimg[ti + 2] = cimg[qi + 2];
      }
      cimg = nimg;
      ctype = 2;
      bpp = 3;
      bpl = 3 * nw;
    }
    frm.img = cimg;
    frm.bpl = bpl;
    frm.bpp = bpp;
  }

  return { ctype: ctype, depth: depth, plte: plte, frames: frms };
};
UPNG.encode.framize = function (bufs, w, h, alwaysBlend, evenCrd, forbidPrev) {
  /**
   * DISPOSE
   * 0 : no change
   * 1 : clear to transparent
   * 2 : retstore to content before rendering (previous frame disposed)
   * BLEND
   * 0 : replace
   * 1 : blend
   */
  const frms = [];
  for (let j = 0; j < bufs.length; j++) {
    const cimg = new Uint8Array(bufs[j]);
    const cimg32 = new Uint32Array(cimg.buffer);
    let nimg;

    let nx = 0;
    let ny = 0;
    let nw = w;
    let nh = h;
    let blend = alwaysBlend ? 1 : 0;
    if (j !== 0) {
      const tlim =
        forbidPrev || alwaysBlend || j === 1 || frms[j - 2].dispose !== 0
          ? 1
          : 2;
      let tstp = 0;
      let tarea = 1e9;
      for (let it = 0; it < tlim; it++) {
        // const pimg = new Uint8Array(bufs[j - 1 - it]);
        const p32 = new Uint32Array(bufs[j - 1 - it]);
        let mix = w;
        let miy = h;
        let max = -1;
        let may = -1;
        for (let y = 0; y < h; y++)
          for (let x = 0; x < w; x++) {
            const i = y * w + x;
            if (cimg32[i] !== p32[i]) {
              if (x < mix) mix = x;
              if (x > max) max = x;
              if (y < miy) miy = y;
              if (y > may) may = y;
            }
          }
        if (max === -1) mix = miy = max = may = 0;
        if (evenCrd) {
          if ((mix & 1) === 1) mix--;
          if ((miy & 1) === 1) miy--;
        }
        const sarea = (max - mix + 1) * (may - miy + 1);
        if (sarea < tarea) {
          tarea = sarea;
          tstp = it;
          nx = mix;
          ny = miy;
          nw = max - mix + 1;
          nh = may - miy + 1;
        }
      }

      // alwaysBlend: pokud zjistím, že blendit nelze, nastavím předchozímu snímku dispose=1. Zajistím, aby obsahoval můj obdélník.
      const pimg = new Uint8Array(bufs[j - 1 - tstp]);
      if (tstp === 1) frms[j - 1].dispose = 2;

      nimg = new Uint8Array(nw * nh * 4);
      UPNG._copyTile(pimg, w, h, nimg, nw, nh, -nx, -ny, 0);

      blend = UPNG._copyTile(cimg, w, h, nimg, nw, nh, -nx, -ny, 3) ? 1 : 0;
      if (blend === 1)
        UPNG.encode._prepareDiff(cimg, w, h, nimg, {
          x: nx,
          y: ny,
          width: nw,
          height: nh,
        });
      else UPNG._copyTile(cimg, w, h, nimg, nw, nh, -nx, -ny, 0);
    } else nimg = cimg.slice(0); // img may be rewritten further ... don't rewrite input

    frms.push({
      rect: { x: nx, y: ny, width: nw, height: nh },
      img: nimg,
      blend: blend,
      dispose: 0,
    });
  }

  if (alwaysBlend)
    for (let j = 0; j < frms.length; j++) {
      const frm = frms[j];
      if (frm.blend === 1) continue;
      const r0 = frm.rect;
      const r1 = frms[j - 1].rect;
      const miX = Math.min(r0.x, r1.x);
      const miY = Math.min(r0.y, r1.y);
      const maX = Math.max(r0.x + r0.width, r1.x + r1.width);
      const maY = Math.max(r0.y + r0.height, r1.y + r1.height);
      var r = { x: miX, y: miY, width: maX - miX, height: maY - miY };

      frms[j - 1].dispose = 1;
      if (j - 1 !== 0)
        UPNG.encode._updateFrame(bufs, w, h, frms, j - 1, r, evenCrd);
      UPNG.encode._updateFrame(bufs, w, h, frms, j, r, evenCrd);
    }
  let area = 0;
  if (bufs.length !== 1)
    for (let i = 0; i < frms.length; i++) {
      const frm = frms[i];
      area += frm.rect.width * frm.rect.height;
    }

  return frms;
};
UPNG.encode._updateFrame = function (bufs, w, h, frms, i, r, evenCrd) {
  const U8 = Uint8Array;
  const U32 = Uint32Array;
  const pimg = new U8(bufs[i - 1]);
  const pimg32 = new U32(bufs[i - 1]);
  const nimg = i + 1 < bufs.length ? new U8(bufs[i + 1]) : null;
  const cimg = new U8(bufs[i]);
  const cimg32 = new U32(cimg.buffer);

  let mix = w;
  let miy = h;
  let max = -1;
  let may = -1;
  for (let y = 0; y < r.height; y++)
    for (let x = 0; x < r.width; x++) {
      const cx = r.x + x;
      const cy = r.y + y;
      const j = cy * w + cx;
      const cc = cimg32[j];
      // no need to draw transparency, or to dispose it. Or, if writing the same color and the next one does not need transparency.
      if (
        !(
          cc === 0 ||
          (frms[i - 1].dispose === 0 &&
            pimg32[j] === cc &&
            (nimg === null || nimg[j * 4 + 3] !== 0))
        )
      ) {
        if (cx < mix) mix = cx;
        if (cx > max) max = cx;
        if (cy < miy) miy = cy;
        if (cy > may) may = cy;
      }
    }
  if (max === -1) mix = miy = max = may = 0;
  if (evenCrd) {
    if ((mix & 1) === 1) mix--;
    if ((miy & 1) === 1) miy--;
  }
  r = { x: mix, y: miy, width: max - mix + 1, height: may - miy + 1 };

  const fr = frms[i];
  fr.rect = r;
  fr.blend = 1;
  fr.img = new Uint8Array(r.width * r.height * 4);
  if (frms[i - 1].dispose === 0) {
    UPNG._copyTile(pimg, w, h, fr.img, r.width, r.height, -r.x, -r.y, 0);
    UPNG.encode._prepareDiff(cimg, w, h, fr.img, r);
  } else UPNG._copyTile(cimg, w, h, fr.img, r.width, r.height, -r.x, -r.y, 0);
};
UPNG.encode._prepareDiff = function (cimg, w, h, nimg, rec) {
  UPNG._copyTile(cimg, w, h, nimg, rec.width, rec.height, -rec.x, -rec.y, 2);
};

UPNG.encode._filterZero = function (img, h, bpp, bpl, data, filter, levelZero) {
  const fls = [];
  let ftry = [0, 1, 2, 3, 4];
  if (filter !== -1) ftry = [filter];
  else if (h * bpl > 500000 || bpp === 1) ftry = [0];
  let opts;
  if (levelZero) opts = { level: 0 };

  const CMPR = data.length > 10e6 && UZIP != null ? UZIP : pako;

  for (let i = 0; i < ftry.length; i++) {
    for (let y = 0; y < h; y++)
      UPNG.encode._filterLine(data, img, y, bpl, bpp, ftry[i]);
    fls.push(CMPR["deflate"](data, opts));
  }

  let ti;
  let tsize = 1e9;
  for (let i = 0; i < fls.length; i++)
    if (fls[i].length < tsize) {
      ti = i;
      tsize = fls[i].length;
    }
  return fls[ti];
};
UPNG.encode._filterLine = function (data, img, y, bpl, bpp, type) {
  const i = y * bpl;
  let di = i + y;
  const paeth = UPNG.decode._paeth;
  data[di] = type;
  di++;

  if (type === 0) {
    if (bpl < 500) for (let x = 0; x < bpl; x++) data[di + x] = img[i + x];
    else data.set(new Uint8Array(img.buffer, i, bpl), di);
  } else if (type === 1) {
    for (let x = 0; x < bpp; x++) data[di + x] = img[i + x];
    for (let x = bpp; x < bpl; x++)
      data[di + x] = (img[i + x] - img[i + x - bpp] + 256) & 255;
  } else if (y === 0) {
    for (let x = 0; x < bpp; x++) data[di + x] = img[i + x];

    if (type === 2) for (let x = bpp; x < bpl; x++) data[di + x] = img[i + x];
    if (type === 3)
      for (let x = bpp; x < bpl; x++)
        data[di + x] = (img[i + x] - (img[i + x - bpp] >> 1) + 256) & 255;
    if (type === 4)
      for (let x = bpp; x < bpl; x++)
        data[di + x] = (img[i + x] - paeth(img[i + x - bpp], 0, 0) + 256) & 255;
  } else {
    if (type === 2) {
      for (let x = 0; x < bpl; x++)
        data[di + x] = (img[i + x] + 256 - img[i + x - bpl]) & 255;
    }
    if (type === 3) {
      for (let x = 0; x < bpp; x++)
        data[di + x] = (img[i + x] + 256 - (img[i + x - bpl] >> 1)) & 255;
      for (let x = bpp; x < bpl; x++)
        data[di + x] =
          (img[i + x] + 256 - ((img[i + x - bpl] + img[i + x - bpp]) >> 1)) &
          255;
    }
    if (type === 4) {
      for (let x = 0; x < bpp; x++)
        data[di + x] = (img[i + x] + 256 - paeth(0, img[i + x - bpl], 0)) & 255;
      for (let x = bpp; x < bpl; x++)
        data[di + x] =
          (img[i + x] +
            256 -
            paeth(img[i + x - bpp], img[i + x - bpl], img[i + x - bpp - bpl])) &
          255;
    }
  }
};

UPNG.crc = {
  table: (function () {
    const tab = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) {
        if (c & 1) c = 0xedb88320 ^ (c >>> 1);
        else c = c >>> 1;
      }
      tab[n] = c;
    }
    return tab;
  })(),
  update: function (c, buf, off, len) {
    for (let i = 0; i < len; i++)
      c = UPNG.crc.table[(c ^ buf[off + i]) & 0xff] ^ (c >>> 8);
    return c;
  },
  crc: function (b, o, l) {
    return UPNG.crc.update(0xffffffff, b, o, l) ^ 0xffffffff;
  },
};

UPNG.quantize = function (abuf, ps) {
  const oimg = new Uint8Array(abuf);
  const nimg = oimg.slice(0);
  const nimg32 = new Uint32Array(nimg.buffer);

  const KD = UPNG.quantize.getKDtree(nimg, ps);
  const root = KD[0];
  const leafs = KD[1];

  const planeDst = UPNG.quantize.planeDst;
  const sb = oimg;
  const tb = nimg32;
  const len = sb.length;

  const inds = new Uint8Array(oimg.length >> 2);
  let nd;
  if (oimg.length < 20e6)
    // precise, but slow :(
    for (let i = 0; i < len; i += 4) {
      const r = sb[i] * (1 / 255);
      const g = sb[i + 1] * (1 / 255);
      const b = sb[i + 2] * (1 / 255);
      const a = sb[i + 3] * (1 / 255);

      nd = UPNG.quantize.getNearest(root, r, g, b, a);
      inds[i >> 2] = nd.ind;
      tb[i >> 2] = nd.est.rgba;
    }
  else
    for (let i = 0; i < len; i += 4) {
      const r = sb[i] * (1 / 255);
      const g = sb[i + 1] * (1 / 255);
      const b = sb[i + 2] * (1 / 255);
      const a = sb[i + 3] * (1 / 255);

      nd = root;
      while (nd.left)
        nd = planeDst(nd.est, r, g, b, a) <= 0 ? nd.left : nd.right;
      inds[i >> 2] = nd.ind;
      tb[i >> 2] = nd.est.rgba;
    }
  return { abuf: nimg.buffer, inds: inds, plte: leafs };
};

UPNG.quantize.getKDtree = function (nimg, ps, err) {
  if (err === null) err = 0.0001;
  var nimg32 = new Uint32Array(nimg.buffer);

  const root = {
    i0: 0,
    i1: nimg.length,
    bst: null,
    est: null,
    tdst: 0,
    left: null,
    right: null,
  }; // basic statistic, extra statistic
  root.bst = UPNG.quantize.stats(nimg, root.i0, root.i1);
  root.est = UPNG.quantize.estats(root.bst);
  const leafs = [root];

  while (leafs.length < ps) {
    let maxL = 0;
    let mi = 0;
    for (let i = 0; i < leafs.length; i++)
      if (leafs[i].est.L > maxL) {
        maxL = leafs[i].est.L;
        mi = i;
      }
    if (maxL < err) break;
    const node = leafs[mi];

    const s0 = UPNG.quantize.splitPixels(
      nimg,
      nimg32,
      node.i0,
      node.i1,
      node.est.e,
      node.est.eMq255
    );
    const s0wrong = node.i0 >= s0 || node.i1 <= s0;
    if (s0wrong) {
      node.est.L = 0;
      continue;
    }

    const ln = {
      i0: node.i0,
      i1: s0,
      bst: null,
      est: null,
      tdst: 0,
      left: null,
      right: null,
    };
    ln.bst = UPNG.quantize.stats(nimg, ln.i0, ln.i1);
    ln.est = UPNG.quantize.estats(ln.bst);
    const rn = {
      i0: s0,
      i1: node.i1,
      bst: null,
      est: null,
      tdst: 0,
      left: null,
      right: null,
    };
    rn.bst = { R: [], m: [], N: node.bst.N - ln.bst.N };
    for (let i = 0; i < 16; i++) rn.bst.R[i] = node.bst.R[i] - ln.bst.R[i];
    for (let i = 0; i < 4; i++) rn.bst.m[i] = node.bst.m[i] - ln.bst.m[i];
    rn.est = UPNG.quantize.estats(rn.bst);

    node.left = ln;
    node.right = rn;
    leafs[mi] = ln;
    leafs.push(rn);
  }
  leafs.sort(function (a, b) {
    return b.bst.N - a.bst.N;
  });
  for (let i = 0; i < leafs.length; i++) leafs[i].ind = i;
  return [root, leafs];
};

UPNG.quantize.getNearest = function (nd, r, g, b, a) {
  if (nd.left == null) {
    nd.tdst = UPNG.quantize.dist(nd.est.q, r, g, b, a);
    return nd;
  }
  const planeDst = UPNG.quantize.planeDst(nd.est, r, g, b, a);

  let node0 = nd.left;
  let node1 = nd.right;
  if (planeDst > 0) {
    node0 = nd.right;
    node1 = nd.left;
  }

  const ln = UPNG.quantize.getNearest(node0, r, g, b, a);
  if (ln.tdst <= planeDst * planeDst) return ln;
  const rn = UPNG.quantize.getNearest(node1, r, g, b, a);
  return rn.tdst < ln.tdst ? rn : ln;
};
UPNG.quantize.planeDst = function (est, r, g, b, a) {
  const e = est.e;
  return e[0] * r + e[1] * g + e[2] * b + e[3] * a - est.eMq;
};
UPNG.quantize.dist = function (q, r, g, b, a) {
  const d0 = r - q[0];
  const d1 = g - q[1];
  const d2 = b - q[2];
  const d3 = a - q[3];
  return d0 * d0 + d1 * d1 + d2 * d2 + d3 * d3;
};

UPNG.quantize.splitPixels = function (nimg, nimg32, i0, i1, e, eMq) {
  const vecDot = UPNG.quantize.vecDot;
  i1 -= 4;
  // const shfs = 0;
  while (i0 < i1) {
    while (vecDot(nimg, i0, e) <= eMq) i0 += 4;
    while (vecDot(nimg, i1, e) > eMq) i1 -= 4;
    if (i0 >= i1) break;

    const t = nimg32[i0 >> 2];
    nimg32[i0 >> 2] = nimg32[i1 >> 2];
    nimg32[i1 >> 2] = t;

    i0 += 4;
    i1 -= 4;
  }
  while (vecDot(nimg, i0, e) > eMq) i0 -= 4;
  return i0 + 4;
};
UPNG.quantize.vecDot = function (nimg, i, e) {
  return (
    nimg[i] * e[0] +
    nimg[i + 1] * e[1] +
    nimg[i + 2] * e[2] +
    nimg[i + 3] * e[3]
  );
};
UPNG.quantize.stats = function (nimg, i0, i1) {
  const R = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const m = [0, 0, 0, 0];
  const N = (i1 - i0) >> 2;
  for (let i = i0; i < i1; i += 4) {
    const r = nimg[i] * (1 / 255);
    const g = nimg[i + 1] * (1 / 255);
    const b = nimg[i + 2] * (1 / 255);
    const a = nimg[i + 3] * (1 / 255);
    m[0] += r;
    m[1] += g;
    m[2] += b;
    m[3] += a;

    R[0] += r * r;
    R[1] += r * g;
    R[2] += r * b;
    R[3] += r * a;
    R[5] += g * g;
    R[6] += g * b;
    R[7] += g * a;
    R[10] += b * b;
    R[11] += b * a;
    R[15] += a * a;
  }
  R[4] = R[1];
  R[8] = R[2];
  R[9] = R[6];
  R[12] = R[3];
  R[13] = R[7];
  R[14] = R[11];

  return { R: R, m: m, N: N };
};
UPNG.quantize.estats = function (stats) {
  const R = stats.R;
  const m = stats.m;
  const N = stats.N;

  // when all samples are equal, but N is large (millions), the Rj can be non-zero ( 0.0003.... - precission error)
  const m0 = m[0];
  const m1 = m[1];
  const m2 = m[2];
  const m3 = m[3];
  const iN = N === 0 ? 0 : 1 / N;
  const Rj = [
    R[0] - m0 * m0 * iN,
    R[1] - m0 * m1 * iN,
    R[2] - m0 * m2 * iN,
    R[3] - m0 * m3 * iN,
    R[4] - m1 * m0 * iN,
    R[5] - m1 * m1 * iN,
    R[6] - m1 * m2 * iN,
    R[7] - m1 * m3 * iN,
    R[8] - m2 * m0 * iN,
    R[9] - m2 * m1 * iN,
    R[10] - m2 * m2 * iN,
    R[11] - m2 * m3 * iN,
    R[12] - m3 * m0 * iN,
    R[13] - m3 * m1 * iN,
    R[14] - m3 * m2 * iN,
    R[15] - m3 * m3 * iN,
  ];

  const A = Rj;
  const M = UPNG.M4;
  let b = [Math.random(), Math.random(), Math.random(), Math.random()];
  let mi = 0;
  let tmi = 0;

  if (N !== 0)
    for (let i = 0; i < 16; i++) {
      b = M.multVec(A, b);
      tmi = Math.sqrt(M.dot(b, b));
      b = M.sml(1 / tmi, b);
      if (i !== 0 && Math.abs(tmi - mi) < 1e-9) break;
      mi = tmi;
    }
  const q = [m0 * iN, m1 * iN, m2 * iN, m3 * iN];
  const eMq255 = M.dot(M.sml(255, q), b);

  return {
    Cov: Rj,
    q: q,
    e: b,
    L: mi,
    eMq255: eMq255,
    eMq: M.dot(b, q),
    rgba:
      ((Math.round(255 * q[3]) << 24) |
        (Math.round(255 * q[2]) << 16) |
        (Math.round(255 * q[1]) << 8) |
        (Math.round(255 * q[0]) << 0)) >>>
      0,
  };
};
UPNG.M4 = {
  multVec: function (m, v) {
    return [
      m[0] * v[0] + m[1] * v[1] + m[2] * v[2] + m[3] * v[3],
      m[4] * v[0] + m[5] * v[1] + m[6] * v[2] + m[7] * v[3],
      m[8] * v[0] + m[9] * v[1] + m[10] * v[2] + m[11] * v[3],
      m[12] * v[0] + m[13] * v[1] + m[14] * v[2] + m[15] * v[3],
    ];
  },
  dot: function (x, y) {
    return x[0] * y[0] + x[1] * y[1] + x[2] * y[2] + x[3] * y[3];
  },
  sml: function (a, y) {
    return [a * y[0], a * y[1], a * y[2], a * y[3]];
  },
};

UPNG.encode.concatRGBA = function (bufs) {
  let tlen = 0;
  for (let i = 0; i < bufs.length; i++) tlen += bufs[i].byteLength;
  const nimg = new Uint8Array(tlen);
  let noff = 0;
  for (let i = 0; i < bufs.length; i++) {
    const img = new Uint8Array(bufs[i]);
    const il = img.length;
    for (let j = 0; j < il; j += 4) {
      let r = img[j];
      let g = img[j + 1];
      let b = img[j + 2];
      const a = img[j + 3];
      if (a === 0) r = g = b = 0;
      nimg[noff + j] = r;
      nimg[noff + j + 1] = g;
      nimg[noff + j + 2] = b;
      nimg[noff + j + 3] = a;
    }
    noff += il;
  }
  return nimg.buffer;
};

export default UPNG;

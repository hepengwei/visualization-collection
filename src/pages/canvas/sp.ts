// @ts-ignore
!(function (t, i) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = i())
    : "function" == typeof define && define.amd
    ? define([], i)
    : "object" == typeof exports
    ? (exports.SphereCollision = i())
    : (t.SphereCollision = i());
})(self, function () {
  return (function () {
    "use strict";
    var t,
      i = {};
    !(function (t) {
      (t[(t.waitStart = 0)] = "waitStart"),
        (t[(t.inAnimation = 1)] = "inAnimation"),
        (t[(t.stop = 2)] = "stop");
    })(t || (t = {}));
    var e = (function () {
        function i(i, e, s, r) {
          (this.ctx = i || null),
            (this.canvas = e || null),
            (this.options = {
              collisionRectX: 0,
              collisionRectY: 0,
              collisionRectWidth: e.width,
              collisionRectHeight: e.height,
              monitorMousePos: !1,
              beforeDrawGlobules: null,
              afterDrawGlobules: null,
              onMouseDownCanvas: null,
              onMouseMoveCanvas: null,
              onMouseUpCanvas: null,
              onMouseLeaveCanvas: null,
            }),
            r && (this.options = Object.assign({}, this.options, r)),
            (this.frameId = 0),
            (this.animationState = t.waitStart),
            (this.mousePos = { mouseX: null, mouseY: null }),
            (this.prevMousePos = { mouseX: null, mouseY: null }),
            (this.isMouseDown = !1),
            (this.mouseDownPos = { mouseX: null, mouseY: null });
          var n = [];
          if (s && s.length > 0)
            for (var h = 0, u = s.length; h < u; h++) {
              var l = s[h],
                a = new o(i, e, l, this.mousePos);
              n.push(a);
            }
          if (((this.globuleList = n), this.options.monitorMousePos)) {
            var c = this;
            e.addEventListener("mousedown", function (t) {
              c._updateMouseProperty(t),
                c.mouseInGlobuleList.forEach(function (t) {
                  var i = t.requiredMouseInteraction,
                    e = t.mouseInteractionBehavior;
                  i && "drag" === e && ((t.vx = 0), (t.vy = 0));
                }),
                c.options.onMouseDownCanvas &&
                  c.options.onMouseDownCanvas(t, c);
            }),
              e.addEventListener("mousemove", function (t) {
                c._updateMouseProperty(t),
                  c.isMouseDown &&
                    c.mouseInGlobuleList.forEach(function (t) {
                      var i = t.requiredMouseInteraction,
                        e = t.mouseInteractionBehavior;
                      if (i && "drag" === e) {
                        var o = c.mousePos.mouseX - c.prevMousePos.mouseX,
                          s = c.mousePos.mouseY - c.prevMousePos.mouseY;
                        (t.x += o), (t.y += s);
                        var r = t.receiveOutForce,
                          n = t.maxMouseOutForce;
                        if (r) {
                          var h = o,
                            u = s;
                          if (n) {
                            var l = t.getXAndYValue(n, o, s),
                              a = l.x,
                              v = l.y;
                            h > a ? (h = a) : h < -a && (h = -a),
                              u > v ? (u = v) : u < -v && (u = -v);
                          }
                          (t.vx = h), (t.vy = u);
                        }
                      }
                    }),
                  c.options.onMouseMoveCanvas &&
                    c.options.onMouseMoveCanvas(t, c);
              }),
              e.addEventListener("mouseup", function (t) {
                c._updateMouseProperty(t),
                  c.options.onMouseUpCanvas && c.options.onMouseUpCanvas(t, c);
              }),
              e.addEventListener("mouseleave", function (t) {
                c._updateMouseProperty(t),
                  c.options.onMouseLeaveCanvas &&
                    c.options.onMouseLeaveCanvas(t, c);
              });
          }
        }
        return (
          (i.prototype.start = function () {
            var i = this;
            (this.animationState = t.inAnimation),
              (i.frameId = requestAnimationFrame(function e() {
                if (i.animationState === t.inAnimation) {
                  var o = i.ctx,
                    s = i.canvas,
                    r = i.globuleList,
                    n = i.options,
                    h = n.beforeDrawGlobules,
                    u = n.afterDrawGlobules,
                    l = n.collisionRectX,
                    a = n.collisionRectY,
                    c = n.collisionRectWidth,
                    v = n.collisionRectHeight,
                    f = s.width,
                    y = s.height;
                  h ? h && h(i) : o.clearRect(0, 0, f, y),
                    r.forEach(function (t, i) {
                      t._drawCurrentFrame(r, i, l, a, c, v);
                    }),
                    u && u(i),
                    r.forEach(function (t) {
                      (t.inCollisionGlobule = !1),
                        (t.inCollisionGlobuleList = []),
                        (t.inCollisionWall = !1);
                    }),
                    r.forEach(function (t, i) {
                      t._calculateNextFrame(r, i, l, a, c, v);
                    }),
                    (i.frameId = requestAnimationFrame(e));
                }
              }));
          }),
          (i.prototype.createGlobule = function (t) {
            return new o(this.ctx, this.canvas, t, this.mousePos);
          }),
          (i.prototype.updateGlobuleList = function (t) {
            "[object Array]" === Object.prototype.toString.call(t) &&
              (this.globuleList = t);
          }),
          (i.prototype.stop = function () {
            this.animationState === t.inAnimation &&
              (this.animationState = t.stop),
              this.frameId &&
                (cancelAnimationFrame(this.frameId), (this.frameId = 0));
          }),
          (i.prototype._updateMouseProperty = function (t) {
            if (
              ((this.prevMousePos.mouseX = this.mousePos.mouseX),
              (this.prevMousePos.mouseY = this.mousePos.mouseY),
              "mouseLeave" === t.type)
            )
              (this.mousePos.mouseX = null), (this.mousePos.mouseY = null);
            else {
              var i = this.canvas.getBoundingClientRect(),
                e = t.clientX - i.left,
                o = t.clientY - i.top;
              (this.mousePos.mouseX = e), (this.mousePos.mouseY = o);
            }
            switch (
              ((this.mouseInGlobuleList = this._getMouseInGlobuleList(t.type)),
              t.type)
            ) {
              case "mousedown":
                (this.isMouseDown = !0),
                  (this.mouseDownPos.mouseX = this.mousePos.mouseX),
                  (this.mouseDownPos.mouseY = this.mousePos.mouseY),
                  this.mouseInGlobuleList.forEach(function (t) {
                    t.controlledByMouse = !0;
                  });
                break;
              case "mousemove":
              default:
                break;
              case "mouseup":
              case "mouseleave":
                (this.isMouseDown = !1),
                  (this.mouseDownPos.mouseX = null),
                  (this.mouseDownPos.mouseY = null);
            }
          }),
          (i.prototype._getMouseInGlobuleList = function (t) {
            var i = [],
              e = this;
            return (
              this.globuleList.forEach(function (o) {
                "mousemove" === t &&
                "drag" === o.mouseInteractionBehavior &&
                o.controlledByMouse
                  ? i.push(o)
                  : ((o.controlledByMouse = !1),
                    e._checkMouseInGlobule(o) && i.push(o));
              }),
              i
            );
          }),
          (i.prototype._checkMouseInGlobule = function (t) {
            var i = this.mousePos,
              e = i.mouseX,
              o = i.mouseY,
              s = !1;
            return (
              null !== e &&
                null !== o &&
                Math.hypot(e - t.x, o - t.y) < t.radius &&
                (s = !0),
              s
            );
          }),
          i
        );
      })(),
      o = (function () {
        function t(t, i, e, o) {
          var s = e.id,
            r = e.initX,
            n = e.initY,
            h = e.vx,
            u = e.vy,
            l = e.radius,
            a = e.color,
            c = e.isPureColor,
            v = e.alpha,
            f = e.alphaChangeV,
            y = e.bgImg,
            d = e.collisionLossV,
            p = e.moveLossV,
            m = e.gDirection,
            x = e.gCoefficient,
            M = e.requiredMouseInteraction,
            b = e.mouseInteractionBehavior,
            F = e.fixedPos,
            g = e.receiveOutForce,
            C = e.receiveWallForce,
            V = e.resistanceWallDirection,
            P = e.onlyCheckCollision,
            X = e.perfectlyElasticCollision,
            Y = e.maxMouseOutForce,
            w = e.maxMoveV,
            _ = e.beforeDrawGlobule,
            L = e.afterDrawGlobule,
            O = e.afterCalculateNextFrameGlobule;
          (this.id = s),
            (this.ctx = t),
            (this.canvas = i),
            (this.initX = r || 0),
            (this.initY = n || 0),
            (this.x = this.initX),
            (this.y = this.initY),
            (this.previousX = null),
            (this.previousY = null),
            (this.vx = h || 0),
            (this.vy = u || 0),
            (this.radius = l || 10),
            (this.color = a || "#666666"),
            (this.isPureColor = !!c),
            (this.alpha =
              "number" == typeof v ? (v < 0 ? 0 : v > 1 ? 1 : v) : 1),
            (this.alphaChangeV = "number" == typeof f ? f : 0),
            (this.bgImg = y || ""),
            (this.collisionLossV = d || 0),
            (this.moveLossV = p || 0),
            (this.gDirection = m),
            (this.gCoefficient = x || 0),
            (this.requiredMouseInteraction = !!M),
            (this.mouseInteractionBehavior =
              b || (this.requiredMouseInteraction ? "over" : void 0)),
            (this.fixedPos = !!F),
            (this.receiveOutForce = "boolean" != typeof g || g),
            (this.receiveWallForce = "boolean" != typeof C || C),
            (this.resistanceWallDirection =
              V && V.length > 1 ? V : ["bottom", "top", "left", "right"]),
            (this.onlyCheckCollision = !!P),
            (this.perfectlyElasticCollision = !!X),
            (this.maxMouseOutForce = Y || null),
            (this.mousePos = o || { mouseX: null, mouseY: null }),
            (this.maxMoveV = w || null),
            (this.controlledByMouse = !1),
            (this.firstHoverX = null),
            (this.firstHoverY = null),
            (this.outForceLastTime = null),
            (this.inCollisionGlobule = !1),
            (this.inCollisionGlobuleList = []),
            (this.inCollisionWall = !1),
            (this.beforeDrawGlobule = _ || null),
            (this.afterDrawGlobule = L || null),
            (this.afterCalculateNextFrameGlobule = O || null);
        }
        return (
          (t.prototype._draw = function () {
            if ((this.ctx.save(), this.ctx.beginPath(), this.color))
              if (this.isPureColor) this.ctx.fillStyle = this.color;
              else {
                var t = this.ctx.createRadialGradient(
                  this.x,
                  this.y,
                  0,
                  this.x,
                  this.y,
                  this.radius
                );
                t.addColorStop(0, "#ffffff"),
                  t.addColorStop(1, this.color),
                  (this.ctx.fillStyle = t);
              }
            if (
              ((this.ctx.globalAlpha = this.alpha),
              this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1),
              this.ctx.fill(),
              this.bgImg)
            ) {
              var i = new Image();
              (i.width = 2 * this.radius),
                (i.height = 2 * this.radius),
                (i.src = this.bgImg),
                this.ctx.drawImage(
                  i,
                  this.x - this.radius,
                  this.y - this.radius,
                  2 * this.radius,
                  2 * this.radius
                );
            }
            this.ctx.restore(),
              (this.previousX = this.x),
              (this.previousY = this.y);
          }),
          (t.prototype._drawCurrentFrame = function (t, i, e, o, s, r) {
            if (this.receiveOutForce)
              for (var n = i + 1, h = t.length; n < h; n++) {
                var u = t[n];
                this._checkOverlap(u);
              }
            this._checkOverWall(e, o, s, r),
              null !== this.previousX &&
                null !== this.previousY &&
                this.previousX === this.x &&
                this.previousY === this.y &&
                (0 !== this.vx && (this.vx = 0),
                0 !== this.vy && (this.vy = 0)),
              this.beforeDrawGlobule && this.beforeDrawGlobule(this),
              this._draw(),
              this.afterDrawGlobule && this.afterDrawGlobule(this);
          }),
          (t.prototype._calculateNextFrame = function (t, i, e, o, s, r) {
            this._checkHover();
            for (var n = i + 1, h = t.length; n < h; n++) {
              var u = t[n];
              this._checkCollisionGlobule(u);
            }
            if (
              (this._checkCollisionWall(e, o, s, r),
              this._addGravitation(),
              this.controlledByMouse ||
                ((this.x += this.vx), (this.y += this.vy)),
              0 !== this.alphaChangeV)
            ) {
              var l = this.alpha + this.alphaChangeV;
              l < 0 ? (l = 0) : l > 1 && (l = 1), (this.alpha = l);
            }
            this._addMoveLoss(),
              this.afterCalculateNextFrameGlobule &&
                this.afterCalculateNextFrameGlobule(this);
          }),
          (t.prototype._getOutForce = function (t, i, e, o, s, r, n) {
            var h = this,
              u = h.x,
              l = h.y,
              a = h.vx,
              c = h.vy;
            if (this.perfectlyElasticCollision || n)
              return this._getPerfectlyElasticOutForce(t, i, e, o);
            var v = 0,
              f = 0;
            if (0 === a && 0 === c) {
              var y = this._getCosspoint(t + e, i + o, t, i, u, l);
              (v = ((p = y.x) - t) / 2), (f = ((m = y.y) - i) / 2);
            } else if (0 === e && 0 === o) {
              var d = this._getCosspoint(u + a, l + c, u, l, t, i),
                p = d.x,
                m = d.y;
              s || r
                ? ((v = 2 * -(p - u)), (f = 2 * -(m - l)))
                : ((v = (3 * -(p - u)) / 2), (f = (3 * -(m - l)) / 2));
            } else {
              var x = this._getLineEquation(u, -l, t, -i);
              if (x) {
                var M = this._getLineEquation(u, -l, u + a, -(l + c));
                if (M && M.k === x.k && M.b === x.b) {
                  var b = this._getLineEquation(t, -i, t + e, -(i + o));
                  if (b) {
                    if (b.k === x.k && b.b === x.b) {
                      if (a * e <= 0 && c * o <= 0)
                        return { outForceVX: -a + e, outForceVY: -c + o };
                    } else if (M.k === -1 / b.k)
                      return ((t - u > 0 && a > 0) || (t - u < 0 && a < 0)) &&
                        ((i - l > 0 && c > 0) || (i - l < 0 && c < 0))
                        ? { outForceVX: -a + e, outForceVY: -c + o }
                        : { outForceVX: 0, outForceVY: 0 };
                  } else if (0 === M.k)
                    return (u > t && a < 0) || (u < t && a > 0)
                      ? { outForceVX: 2 * -a, outForceVY: 0 }
                      : { outForceVX: 0, outForceVY: 0 };
                }
              } else {
                if (0 === a && 0 === e)
                  return { outForceVX: 0, outForceVY: -c + o };
                if (0 === a && c > 0 && 0 === o)
                  return l < i
                    ? { outForceVX: 0, outForceVY: 2 * -c }
                    : { outForceVX: 0, outForceVY: 0 };
                if (0 === a && c < 0 && 0 === o)
                  return l > i
                    ? { outForceVX: 0, outForceVY: 2 * -c }
                    : { outForceVX: 0, outForceVY: 0 };
              }
              var F = this._getCosspoint(t + e, i + o, t, i, u, l);
              (((v = (p = F.x) - t) > 0 && a > 0) || (v < 0 && a < 0)) &&
                (v -= a),
                (((f = (m = F.y) - i) > 0 && c > 0) || (f < 0 && c < 0)) &&
                  (f -= c);
            }
            return { outForceVX: v, outForceVY: f };
          }),
          (t.prototype._getPerfectlyElasticOutForce = function (t, i, e, o) {
            var s = this,
              r = s.x,
              n = s.y,
              h = s.vx,
              u = s.vy,
              l = Math.hypot(h, u),
              a = this._getAngleTypeBetweenTwoVectors(h, u, t - r, i - n);
            if (a && a > 0) {
              var c = this.getXAndYValue(l, r - t, n - i);
              return { outForceVX: -h + c.x, outForceVY: -u + c.y };
            }
            var v = this._getAngleTypeBetweenTwoVectors(e, o, r - t, n - i);
            if (v && v > 0) {
              0 === l && (l = Math.hypot(e, o));
              var f = this.getXAndYValue(l, r - t, n - i);
              return { outForceVX: -h + f.x, outForceVY: -u + f.y };
            }
            return { outForceVX: 0, outForceVY: 0 };
          }),
          (t.prototype._getMouseOutForce = function (t, i) {
            var e = t,
              o = i,
              s = this,
              r = s.requiredMouseInteraction,
              n = s.mouseInteractionBehavior,
              h = s.maxMouseOutForce;
            return (
              r &&
                "over" === n &&
                h &&
                (e > h ? (e = h) : e < -h && (e = -h),
                o > h ? (o = h) : o < -h && (o = -h)),
              { outForceVX: e, outForceVY: o }
            );
          }),
          (t.prototype.addOutForce = function (t, i, e) {
            if (
              (void 0 === e && (e = !1),
              !(this.fixedPos || (0 === t && 0 === i)) &&
                ((this.vx += t),
                (this.vy += i),
                e && this._addCollisionLoss(),
                "number" == typeof this.maxMoveV &&
                  this.maxMoveV >= 0 &&
                  Math.hypot(this.vx, this.vy) > this.maxMoveV))
            ) {
              var o = this.getXAndYValue(this.maxMoveV, this.vx, this.vy),
                s = o.x,
                r = o.y;
              (this.vx = s), (this.vy = r);
            }
          }),
          (t.prototype._checkHover = function () {
            if (
              !this.fixedPos &&
              this.requiredMouseInteraction &&
              "over" === this.mouseInteractionBehavior
            ) {
              var t = this.mousePos,
                i = t.mouseX,
                e = t.mouseY;
              if (
                null !== i &&
                null !== e &&
                Math.hypot(i - this.x, e - this.y) <= this.radius
              ) {
                if (
                  this.outForceLastTime &&
                  new Date().getTime() - this.outForceLastTime < 400
                )
                  return;
                if (null !== this.firstHoverX && null !== this.firstHoverY) {
                  var o = i - this.firstHoverX,
                    s = e - this.firstHoverY,
                    r = this._getMouseOutForce(o, s),
                    n = r.outForceVX,
                    h = r.outForceVY;
                  this.addOutForce(n, h),
                    (this.outForceLastTime = new Date().getTime()),
                    (this.firstHoverX = null),
                    (this.firstHoverY = null);
                } else (this.firstHoverX = i), (this.firstHoverY = e);
              }
            }
          }),
          (t.prototype._checkCollisionWall = function (t, i, e, o) {
            if (this.receiveWallForce && !this.fixedPos) {
              var s = this,
                r = s.x,
                n = s.y,
                h = s.radius,
                u = s.vx,
                l = s.vy,
                a = s.resistanceWallDirection,
                c = 0,
                v = 0,
                f = !1;
              a.includes("bottom") &&
                n >= i + o - h &&
                l > 0 &&
                ((v = 2 * -l), (f = !0)),
                a.includes("top") &&
                  n <= h + i &&
                  l < 0 &&
                  ((v = 2 * -l), (f = !0)),
                a.includes("left") &&
                  r <= h + t &&
                  u < 0 &&
                  ((c = 2 * -u), (f = !0)),
                a.includes("right") &&
                  r >= t + e - h &&
                  u > 0 &&
                  ((c = 2 * -u), (f = !0)),
                f
                  ? ((this.inCollisionWall = !0), this.addOutForce(c, v, !0))
                  : (this.inCollisionWall = !1);
            }
          }),
          (t.prototype._checkCollisionGlobule = function (t) {
            var i = t.x,
              e = t.y,
              o = t.radius,
              s = t.vx,
              r = t.vy,
              n = t.receiveOutForce,
              h = t.onlyCheckCollision,
              u = t.fixedPos,
              l = t.controlledByMouse,
              a = t.perfectlyElasticCollision;
            if (
              (this.receiveOutForce || this.onlyCheckCollision || n || h) &&
              Math.hypot(i - this.x, e - this.y) <= o + this.radius &&
              (s !== this.vx || r !== this.vy)
            ) {
              var c = this.x,
                v = this.y,
                f = this.vx,
                y = this.vy;
              if ((this.receiveOutForce && n) || this.onlyCheckCollision) {
                var d = this._getOutForce(i, e, s, r, u, l, a),
                  p = d.outForceVX,
                  m = d.outForceVY;
                this.receiveOutForce &&
                  n &&
                  !this.fixedPos &&
                  !this.controlledByMouse &&
                  this.addOutForce(p, m, !0),
                  (0 === p && 0 === m) ||
                    ((this.inCollisionGlobule = !0),
                    this.inCollisionGlobuleList.push(t));
              }
              if ((this.receiveOutForce && n) || h) {
                var x = t._getOutForce(
                    c,
                    v,
                    f,
                    y,
                    this.fixedPos,
                    this.controlledByMouse,
                    this.perfectlyElasticCollision
                  ),
                  M = x.outForceVX,
                  b = x.outForceVY;
                this.receiveOutForce &&
                  n &&
                  !u &&
                  !l &&
                  t.addOutForce(M, b, !0),
                  (0 === M && 0 === b) ||
                    ((t.inCollisionGlobule = !0),
                    t.inCollisionGlobuleList.push(this));
              }
            }
          }),
          (t.prototype._addCollisionLoss = function () {
            if (
              this.receiveOutForce &&
              !this.fixedPos &&
              0 !== this.collisionLossV &&
              !this.controlledByMouse
            ) {
              var t = this.getXAndYValue(this.collisionLossV, this.vx, this.vy),
                i = t.x,
                e = t.y;
              Math.abs(this.vx) > Math.abs(i) ? (this.vx -= i) : (this.vx = 0),
                Math.abs(this.vy) > Math.abs(e)
                  ? (this.vy -= e)
                  : (this.vy = 0);
            }
          }),
          (t.prototype._addMoveLoss = function () {
            if (
              !this.fixedPos &&
              0 !== this.moveLossV &&
              !this.controlledByMouse
            ) {
              var t = this.getXAndYValue(this.moveLossV, this.vx, this.vy),
                i = t.x,
                e = t.y;
              Math.abs(this.vx) > Math.abs(i) ? (this.vx -= i) : (this.vx = 0),
                Math.abs(this.vy) > Math.abs(e)
                  ? (this.vy -= e)
                  : (this.vy = 0);
            }
          }),
          (t.prototype._checkOverlap = function (t) {
            var i = t.x,
              e = t.y,
              o = t.radius,
              s = t.receiveOutForce,
              r = t.fixedPos,
              n = t.controlledByMouse;
            if (this.receiveOutForce && s && (!this.fixedPos || !r)) {
              var h = Math.hypot(i - this.x, e - this.y);
              if (h + 0.2 < o + this.radius) {
                var u = o + this.radius - h;
                this.fixedPos || this.controlledByMouse || r || n || (u /= 2);
                var l = 0,
                  a = 0;
                this.x === i
                  ? ((a = u),
                    this.y > e
                      ? (this.fixedPos ||
                          this.controlledByMouse ||
                          (this.y = this.y + a),
                        r || n || (t.y = e - a))
                      : (this.fixedPos ||
                          this.controlledByMouse ||
                          (this.y = this.y - u),
                        r || n || (t.y = e + u)))
                  : this.y === e
                  ? ((l = u),
                    this.x > i
                      ? (this.fixedPos ||
                          this.controlledByMouse ||
                          (this.x = this.x + l),
                        r || n || (t.x = i - l))
                      : (this.fixedPos ||
                          this.controlledByMouse ||
                          (this.x = this.x - l),
                        r || n || (t.x = i + l)))
                  : this.x > i
                  ? ((l = (u / h) * Math.abs(this.x - i)),
                    (a = (u / h) * Math.abs(this.y - e)),
                    this.y > e
                      ? (this.fixedPos ||
                          this.controlledByMouse ||
                          ((this.x = this.x + l), (this.y = this.y + a)),
                        r || n || ((t.x = i - l), (t.y = e - a)))
                      : (this.fixedPos ||
                          this.controlledByMouse ||
                          ((this.x = this.x + l), (this.y = this.y - a)),
                        r || n || ((t.x = i - l), (t.y = e + a))))
                  : ((l = (u / h) * Math.abs(this.x - i)),
                    (a = (u / h) * Math.abs(this.y - e)),
                    this.y > e
                      ? (this.fixedPos ||
                          this.controlledByMouse ||
                          ((this.x = this.x - l), (this.y = this.y + a)),
                        r || n || ((t.x = i + l), (t.y = e - a)))
                      : (this.fixedPos ||
                          this.controlledByMouse ||
                          ((this.x = this.x - l), (this.y = this.y - a)),
                        r || n || ((t.x = i + l), (t.y = e + a))));
              }
            }
          }),
          (t.prototype._checkOverWall = function (t, i, e, o) {
            if (this.receiveWallForce && !this.fixedPos) {
              var s = this,
                r = s.x,
                n = s.y,
                h = s.radius;
              this.resistanceWallDirection.includes("bottom") &&
                n > i + o - h &&
                (this.y = i + o - h),
                this.resistanceWallDirection.includes("top") &&
                  n < h + i &&
                  (this.y = h + i),
                this.resistanceWallDirection.includes("left") &&
                  r < h + t &&
                  (this.x = h + t),
                this.resistanceWallDirection.includes("right") &&
                  this.x > t + e - h &&
                  (this.x = t + e - h);
            }
          }),
          (t.prototype._addGravitation = function () {
            if (
              !this.fixedPos &&
              this.gDirection &&
              this.gCoefficient &&
              !this.controlledByMouse
            )
              switch (this.gDirection) {
                case "toInit":
                  var t = (this.initX - this.x) * this.gCoefficient,
                    i = (this.initY - this.y) * this.gCoefficient;
                  this.addOutForce(t, i);
                  break;
                case "toBottom":
                  var e = this.gCoefficient;
                  this.addOutForce(0, e);
                  break;
                case "toTop":
                  var o = -this.gCoefficient;
                  this.addOutForce(0, o);
                  break;
                case "toLeft":
                  var s = -this.gCoefficient;
                  this.addOutForce(s, 0);
                  break;
                case "toRight":
                  var r = this.gCoefficient;
                  this.addOutForce(r, 0);
              }
          }),
          (t.prototype.getXAndYValue = function (t, i, e) {
            return 0 === i && 0 === e
              ? { x: 0, y: 0 }
              : {
                  x: (t * i) / Math.hypot(i, e),
                  y: (t * e) / Math.hypot(i, e),
                };
          }),
          (t.prototype._getAngleTypeBetweenTwoVectors = function (t, i, e, o) {
            return (0 === t && 0 === i) || (0 === e && 0 === o)
              ? null
              : (t * e + i * o) / (Math.hypot(t, i) * Math.hypot(e, o));
          }),
          (t.prototype._getLineEquation = function (t, i, e, o) {
            if (t === e) return null;
            var s = (o - i) / (e - t);
            return { k: s, b: i - s * t };
          }),
          (t.prototype._getCosspoint = function (t, i, e, o, s, r) {
            var n = this._getLineEquation(e, -o, s, -r);
            if (n) {
              var h = n.k,
                u = n.b;
              if (0 === h) return { x: t, y: o };
              var l = -1 / h,
                a = (u - (-i - l * t)) / (l - h);
              return { x: a, y: -(h * a + u) };
            }
            return { x: e, y: i };
          }),
          t
        );
      })();
    return (i.default = e), i.default;
  })();
});

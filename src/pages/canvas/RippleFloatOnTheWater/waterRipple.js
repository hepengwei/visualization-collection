import bridge from "images/canvas/bridge.png";

class WaterRipple {
  constructor(props) {
    this.init(props);
  }

  init(props) {
    this.boxRef = props.boxRef;
    this.canvas = props.canvas;
    this.ctx = this.canvas.getContext("2d", { willReadFrequently: true });
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    this.max_amplitude = 1024;
    this.amplitude = props.amplitude || 512;

    this.background = props.background;
    this.load = false;

    this.img_data = null;
    this.new_img_data = null;
    this.animation_idx = null;

    this.mousemove_interval = props.mousemove_interval || 50;
    this.animation_interval = props.animation_interval || 20;
    this.ripple_radius = props.ripple_radius || 3;

    this.bridge = new Image();
    this.bridge.src = bridge;

    if (props.resize) {
      this.setResize();
    }
  }

  drawBackground() {
    if (!this.background.complete) return;

    this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
    this.img_data = this.ctx.getImageData(0, 0, this.width, this.height);
    this.new_img_data = this.ctx.getImageData(0, 0, this.width, this.height);

    this.buffer_1 = new Array(this.width)
      .fill(0)
      .map(() => new Array(this.height).fill(0));
    this.buffer_2 = new Array(this.width)
      .fill(0)
      .map(() => new Array(this.height).fill(0));

    this.load = true;
  }

  render() {
    if (!this.load) {
      this.drawBackground();
      return;
    }

    const w = this.width;
    const h = this.height;
    const half_w = w >> 1;
    const half_h = h >> 1;
    const len = this.new_img_data.data.length;

    for (let i = 0; i < len; i += 4) {
      const buffer_idx = i >> 2;
      const x = buffer_idx % w;
      const y = (buffer_idx - x) / w;

      const left = Math.max(x - 1, 0);
      const right = Math.min(x + 1, w - 1);
      const top = Math.min(y + 1, h - 1);
      const bottom = Math.max(y - 1, 0);

      let next_amplitude =
        this.buffer_1[x][top] +
        this.buffer_1[x][bottom] +
        this.buffer_1[right][y] +
        this.buffer_1[left][y];
      next_amplitude >>= 1;
      next_amplitude -= this.buffer_2[x][y];
      next_amplitude -= next_amplitude >> 5;

      this.buffer_2[x][y] = next_amplitude;

      const ratio = (this.max_amplitude - next_amplitude) / this.max_amplitude;

      if (next_amplitude !== 0) {
        let offset_x = (((x - half_w) * ratio) << 0) + half_w;
        let offset_y = (((y - half_h) * ratio) << 0) + half_h;

        offset_x = Math.min(offset_x, w - 1);
        offset_x = Math.max(offset_x, 0);
        offset_y = Math.max(offset_y, 0);
        offset_y = Math.min(offset_y, h - 1);

        const img_data_idx = (offset_y * w + offset_x) << 2;
        const r = this.img_data.data[img_data_idx];
        const g = this.img_data.data[img_data_idx + 1];
        const b = this.img_data.data[img_data_idx + 2];

        this.new_img_data.data[i] = r;
        this.new_img_data.data[i + 1] = g;
        this.new_img_data.data[i + 2] = b;
      }
    }

    this.ctx.putImageData(this.new_img_data, 0, 0);
    this.ctx.drawImage(
      this.bridge,
      0,
      this.height * 0.35,
      this.width,
      this.height * 0.65
    );

    const temp_data = this.buffer_2;
    this.buffer_2 = this.buffer_1;
    this.buffer_1 = temp_data;
  }

  animate() {
    let start = new Date().getTime();
    const update = () => {
      const end = new Date().getTime();
      if (end - start > this.animation_interval) {
        this.render();
        start = end;
      }

      this.animation_idx = requestAnimationFrame(update);
    };
    update();
  }

  throttle(func, time) {
    let start = new Date().getTime();
    return function () {
      const end = new Date().getTime();
      if (end - start >= time) {
        start = end;
        func.apply(this, arguments);
      }
    };
  }

  ripple(x, y) {
    if (!this.load) return;
    const left = Math.max(x - this.ripple_radius, 0);
    const right = Math.min(x + this.ripple_radius, this.buffer_1.length - 1);
    const top = Math.max(y - this.ripple_radius, 0);
    const bottom = Math.min(
      y + this.ripple_radius,
      this.buffer_1[0].length - 1
    );

    for (let i = left; i < right; i++) {
      for (let j = top; j < bottom; j++) {
        this.buffer_1[i][j] = this.amplitude;
      }
    }
  }

  addMousemove() {
    this.canvas.addEventListener(
      "mousemove",
      this.throttle((e) => {
        const { top, left } = this.canvas.getBoundingClientRect();
        this.ripple(Math.floor(e.layerX - left), Math.floor(e.layerY - top));
      }, this.mousemove_interval)
    );
  }

  setResize() {
    window.addEventListener("resize", () => {
      const { offsetWidth, offsetHeight } = this.boxRef.current;
      this.canvas.width = offsetWidth;
      this.canvas.height = offsetHeight;

      this.width = this.canvas.width;
      this.height = this.canvas.height;

      this.load = false;
    });
  }

  stop() {
    cancelAnimationFrame(this.animation_idx);
  }

  resume() {
    this.animate();
  }
}

export default WaterRipple;

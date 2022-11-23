const particlesParams = {
  particles: {
    number: {
      value: 160, // 数量
      density: {
        enable: true, // 启用粒子的稀密程度
        value_area: 800, // 区域散布密度大小
      },
    },
    color: {
      value: "#00aeff", // 原子的颜色
    },
    shape: {
      type: "circle", // 原子的形状 "circle" ,"edge" ,"triangle" ,"polygon" ,"star" ,"image" ,["circle", "triangle", "image"]
      stroke: {
        width: 0, // 原子的宽度
        color: "#362cff", // 原子颜色
      },
      polygon: {
        nb_sides: 5, // 原子的多边形边数
      },
      image: {
        src: "img/github.svg", // 原子的图片可以使用自定义图片 "assets/img/yop.svg" , "http://mywebsite.com/assets/img/yop.png"
        width: 100, // 图片宽度
        height: 100, // 图片高度
      },
    },
    opacity: {
      value: 1, // 不透明度
      random: true, // 随机不透明度
      anim: {
        enable: true, // 渐变动画
        speed: 1, // 渐变动画速度
        opacity_min: 0, // 渐变动画不透明度
        sync: true,
      },
    },
    size: {
      value: 3, // 原子大小
      random: true, // 原子大小随机
      anim: {
        enable: false, // 原子渐变
        speed: 4, // 原子渐变速度
        size_min: 0.3,
        sync: false,
      },
    },
    line_linked: {
      enable: false, // 连接线
      distance: 150, // 连接线距离
      color: "#ffffff", // 连接线颜色
      opacity: 0.4, // 连接线不透明度
      width: 1, // 连接线的宽度
    },
    move: {
      enable: true, // 原子移动
      speed: 1, // 原子移动速度
      direction: "none", // 原子移动方向   "none" ,"top" ,"top-right" ,"right" ,"bottom-right" ,"bottom" ,"bottom-left" ,"left" ,"top-left"
      random: true, // 移动随机方向
      straight: false, // 直接移动
      out_mode: "out", // 是否移动出画布
      bounce: false, // 是否跳动移动
      attract: {
        enable: false, // 原子之间吸引
        rotateX: 600, // 原子之间吸引X水平距离
        rotateY: 600, // 原子之间吸引Y水平距离
      },
    },
  },
  interactivity: {
    detect_on: "canvas", // 原子之间互动检测 "canvas", "window"
    events: {
      onhover: {
        enable: true, // 悬停
        mode: "bubble", // 悬停模式      "grab"抓取临近的,"bubble"泡沫球效果,"repulse"击退效果,["grab", "bubble"]
      },
      onclick: {
        enable: false, // 点击效果
        mode: "repulse", // 点击效果模式   "push" ,"remove" ,"bubble" ,"repulse" ,["push", "repulse"]
      },
      resize: true, // 互动事件调整
    },
    modes: {
      grab: {
        distance: 100, // 原子互动抓取距离
        line_linked: {
          opacity: 0.8, // 原子互动抓取距离连线不透明度
        },
      },
      bubble: {
        distance: 250, // 原子抓取泡沫效果之间的距离
        size: 4, // 原子抓取泡沫效果之间的大小
        duration: 2, // 原子抓取泡沫效果之间的持续事件
        opacity: 1, // 原子抓取泡沫效果透明度
        speed: 3,
      },
      repulse: {
        distance: 400, // 击退效果距离
        duration: 0.4, // 击退效果持续事件
      },
      push: {
        particles_nb: 4, // 粒子推出的数量
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

export default particlesParams;

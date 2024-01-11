const changeImageShow = (dir: number) => {
  const img = document.getElementById(
    "attach_image"
  ) as HTMLImageElement | null;
  if (img) {
    const imgScale = img.height / img.width;
    if (dir === 0) {
      // 缩小
      img.style.width = `${img.clientWidth - 50}px`;
      img.style.height = `${img.clientHeight - 50 * imgScale}px`;
    } else {
      // 放大
      img.style.width = `${img.clientWidth + 50}px`;
      img.style.height = `${img.clientHeight + 50 * imgScale}px`;
    }
  }
};

const imgPreview = () => {
  const img: any = document.getElementById("attach_image");
  if (img) {
    let draggable = false;
    let downX: number | null = null;
    let downY: number | null = null;
    img.onmousewheel = (e: any) => {
      e.stopPropagation();
      e.preventDefault();
      const directMark = e.wheelDelta || e.detail;
      if (directMark > 0) {
        changeImageShow(1);
      } else {
        changeImageShow(0);
      }
    };
    img.onmousedown = (e: MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      draggable = true;
      downX = e.clientX;
      downY = e.clientY;
    };
    img.onmouseup = (e: MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      draggable = false;
    };
    img.onmousemove = (e: MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      if (draggable) {
        const x = e.clientX;
        const y = e.clientY;
        const disX = x - (downX as number);
        const disY = y - (downY as number);
        const imageDiv = document.getElementById("attach_imgDiv");
        if (imageDiv) {
          let left = parseFloat(img.style.left) + disX;
          let top = parseFloat(img.style.top) + disY;
          // 边界限制
          const leftMin = parseFloat(img.style.width) * -0.75;
          const leftMax =
            parseFloat(imageDiv.style.width) -
            parseFloat(img.style.width) * 0.25;
          const topMin = parseFloat(img.style.height) * -0.75;
          const topMax =
            parseFloat(imageDiv.style.height) -
            parseFloat(img.style.height) * 0.25;
          if (left < leftMin) {
            left = leftMin;
          } else if (left > leftMax) {
            left = leftMax;
          }
          if (top < topMin) {
            top = topMin;
          } else if (top > topMax) {
            top = topMax;
          }
          img.style.left = `${left}px`;
          img.style.top = `${top}px`;
          downX = x;
          downY = y;
        }
      }
    };
  }
};

export default imgPreview;

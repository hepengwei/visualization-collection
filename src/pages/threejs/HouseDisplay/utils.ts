export const safePlay = (video: HTMLVideoElement | null) => {
  if (document.visibilityState !== "visible") return;
  const p = video?.play();
  if (p && p.catch) {
    p.catch(() => {
      /* 省电中断，忽略 */
    });
  }
};

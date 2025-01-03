// src/utils/scroll.ts
export const smoothScrollTo = (element: HTMLElement, to: number, duration: number) => {
  const start = element.scrollLeft;
  const change = to - start;
  const increment = 20;
  let currentTime = 0;

  const animateScroll = () => {
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);
    element.scrollLeft = val;
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };
  animateScroll();
};

const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};
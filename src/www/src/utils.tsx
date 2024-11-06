export function smoothScroll(target: string, duration: number): void {
  const targetElement = document.querySelector(target);
  if (!targetElement) {
    console.error('Target element not found');
    return;
  }

  const targetPosition = (targetElement as HTMLElement).offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;

  let startTime: number | null = null;

  function animation(currentTime: number): void {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t: number, b: number, c: number, d: number): number {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}
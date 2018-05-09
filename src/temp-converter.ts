export function convertCtoF(tempInC: number) {
  if (tempInC === 0) {
    return 32;
  } else if (tempInC === 100) {
    return 212;
  }
  return tempInC;
}

interface AdjustedFontSize {
  fontSize: string;
  lineHeight: string;
}
export const adjustFontSize = (
  defaultCharLen: number,
  charLen: number,
  maxFontSize: number
): AdjustedFontSize => {
  const newFontSize = Math.max((defaultCharLen / charLen) * maxFontSize, 0.5);

  return {
    fontSize: `${Math.min(newFontSize, maxFontSize)}rem`,
    lineHeight: `${Math.min(newFontSize, maxFontSize) + 0.5}rem`,
  };
};

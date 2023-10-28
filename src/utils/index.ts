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

export const handleFile = (file: any) => {
  return new Promise((resolve, reject) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e?.target?.result) {
          resolve(e.target?.result);
        }
      };
      reader.readAsDataURL(file);
    } else {
      reject();
    }
  });
};

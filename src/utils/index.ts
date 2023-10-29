import html2canvas from "html2canvas";

interface AdjustedFontSize {
  fontSize: string;
  lineHeight: string;
}

interface UploadedImage {
  url: string | ArrayBuffer | null | undefined;
  dimension: { height: number; width: number };
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

export const handleFile = (file: any): Promise<UploadedImage> => {
  return new Promise((resolve, reject) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e?.target?.result) {
          const image = new Image();
          image.onload = () => {
            const dimension = {
              width: image.width,
              height: image.height,
            };
            resolve({
              url: e.target?.result,
              dimension: { ...dimension },
            });
          };
          image.src = e.target.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  });
};

export const downloadDesign = (designName = "new_design") => {
  const divElement: any = document.getElementsByClassName("template");
  if (divElement[0]) {
    html2canvas(divElement[0], {
      scrollX: 0,
      scrollY: 0,
    }).then((canvas) => {
      const dataURL = canvas.toDataURL("image/png");

      const a = document.createElement("a");
      a.href = dataURL;
      a.download = designName;
      a.click();
    });
  }
};

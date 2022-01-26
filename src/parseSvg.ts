const getEvenOddPath = (div: HTMLDivElement) => {
  const p = div.querySelector('path[d][fill-rule="evenodd"]');

  return p ? p.getAttribute("d") : "";
};

const getViewBox = (div: HTMLDivElement) => {
  const svg = div.querySelector("svg");

  const viewBox = svg.getAttribute("viewBox");

  if (viewBox) {
    return viewBox;
  }

  const width = svg.getAttribute("width") || 300;
  const height = svg.getAttribute("height") || 300;

  return `0 0 ${width} ${height}`;
};

const parseSvg = (svg: string) => {
  const div = document.createElement("div");
  div.innerHTML = svg;

  return [getViewBox(div), getEvenOddPath(div)];
};

export default parseSvg;

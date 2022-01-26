import { FillType, Path2D } from "@napi-rs/canvas";

const unwindRs = (d) => {
  const path = new Path2D(d);

  path.setFillType(FillType.EvenOdd);

  return path.asWinding().toSVGString();
};

export default unwindRs;

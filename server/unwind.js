import { Path2D } from "skia-canvas";

const unwind = (d) => {
  const path = new Path2D(d);

  return path.unwind().d;
};

export default unwind;

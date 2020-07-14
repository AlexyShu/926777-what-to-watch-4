
export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const formatTime = (time) =>
  [60, 60, 24]
    .map((n) => {
      const result = time % n;
      time = (time - result) / n;
      return (`0` + result).slice(-2);
    })
    .reverse()
    .join(`:`);

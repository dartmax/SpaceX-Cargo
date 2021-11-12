export const calculateCargoBays = (boxes: string | null): number =>
  boxes
    ? Math.ceil(
      boxes
        .split(',')
        .map(x => +x)
        .reduce((a, b) => a + b, 0) / 10
    )
    : 0

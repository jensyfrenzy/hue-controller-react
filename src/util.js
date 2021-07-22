const EnhanceColor = (normalized) => {
  if (normalized > 0.04045) {
    return Math.pow((normalized + 0.055) / (1.0 + 0.055), 2.4);
  } else {
    return normalized / 12.92;
  }
};

export const RGBtoXY = (r, g, b) => {
  let rNorm = r / 255.0;
  let gNorm = g / 255.0;
  let bNorm = b / 255.0;

  let rFinal = EnhanceColor(rNorm);
  let gFinal = EnhanceColor(gNorm);
  let bFinal = EnhanceColor(bNorm);

  let X = rFinal * 0.649926 + gFinal * 0.103455 + bFinal * 0.197109;
  let Y = rFinal * 0.234327 + gFinal * 0.743075 + bFinal * 0.022598;
  let Z = rFinal * 0.0 + gFinal * 0.053077 + bFinal * 1.035763;

  if (X + Y + Z === 0) {
    return [0, 0];
  } else {
    let xFinal = X / (X + Y + Z);
    let yFinal = Y / (X + Y + Z);

    return [xFinal, yFinal];
  }
};

// pulled from https://stackoverflow.com/questions/22894498/philips-hue-convert-xy-from-api-to-hex-or-rgb
export const xyBriToRgb = (x, y, bri) => {
  let z = 1.0 - x - y;
  let Y = bri / 255.0; // Brightness of lamp
  let X = (Y / y) * x;
  let Z = (Y / y) * z;
  let r = X * 1.612 - Y * 0.203 - Z * 0.302;
  let g = -X * 0.509 + Y * 1.412 + Z * 0.066;
  let b = X * 0.026 - Y * 0.072 + Z * 0.962;
  r =
    r <= 0.0031308 ? 12.92 * r : (1.0 + 0.055) * Math.pow(r, 1.0 / 2.4) - 0.055;
  g =
    g <= 0.0031308 ? 12.92 * g : (1.0 + 0.055) * Math.pow(g, 1.0 / 2.4) - 0.055;
  b =
    b <= 0.0031308 ? 12.92 * b : (1.0 + 0.055) * Math.pow(b, 1.0 / 2.4) - 0.055;
  let maxValue = Math.max(r, g, b);
  r /= maxValue;
  g /= maxValue;
  b /= maxValue;
  r = r * 255;
  if (r < 0) {
    r = 255;
  }
  g = g * 255;
  if (g < 0) {
    g = 255;
  }
  b = b * 255;
  if (b < 0) {
    b = 255;
  }
  return [r, g, b];
};

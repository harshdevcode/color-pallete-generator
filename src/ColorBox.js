import React, { useState } from 'react';
import './ColorBox.css';

const ColorBox = () => {
  const generateColor = () => {
    let r = generateRandomRGB();
    let g = generateRandomRGB();
    let b = generateRandomRGB();
    return `rgb(${r},${g},${b})`;
  };

  const generateRandomRGB = () => {
    return Math.floor(Math.random() * 256);
  };

  const [color, setColor] = useState(generateColor());
  const [isCopied, setIsCopied] = useState(false);

  const handleBoxClick = () => {
    setColor(generateColor());
  };

  const handleNameClick = (e) => {
    // Check if the event object is defined before using it
    if (e) {
      e.stopPropagation();
      navigator.clipboard.writeText(RGBToHex(color));
      setIsCopied(true);
    }
  };

  const RGBToHex = (rgb) => {
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    rgb = rgb.substr(4).split(")")[0].split(sep);

    let r = (+rgb[0]).toString(16),
      g = (+rgb[1]).toString(16),
      b = (+rgb[2]).toString(16);

    if (r.length === 1) r = "0" + r;
    if (g.length === 1) g = "0" + g;
    if (b.length === 1) b = "0" + b;

    return `#${r}${g}${b}`.toUpperCase();
  };

  return (
    <div className='ColorBox' style={{ backgroundColor: color }} onClick={handleBoxClick}>
      <div className='ColorBox-ColorName' onClick={handleNameClick}>
        {isCopied ? 'Copied!' : RGBToHex(color)}
      </div>
    </div>
  );
};

export default ColorBox;

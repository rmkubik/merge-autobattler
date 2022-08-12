import { tileSize } from "../config";

function drawGrid({ width, height, offset = vec2(0, 0) }) {
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const isEvenRow = row % 2 === 0;
      const isEvenCol = col % 2 === 0;

      let greenValue;

      switch (true) {
        case !isEvenRow && !isEvenCol:
        case isEvenRow && isEvenCol:
          greenValue = 0.5;
          break;
        case !isEvenRow && isEvenCol:
        case isEvenRow && !isEvenCol:
          greenValue = 0.3;
          break;
      }

      drawRect(
        vec2(
          row * tileSize.x + tileSize.x / 2 + offset.x,
          col * tileSize.y + tileSize.y / 2 + offset.y
        ),
        tileSize,
        new Color(0.2, greenValue, 0.3)
      );
    }
  }
}

export default drawGrid;

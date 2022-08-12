import { tileSize } from "../config";
import drawTile from "../grid/drawTile";

function drawShop({ slots, offset = vec2(0, 0) }) {
  slots.forEach((slot, index) => {
    const screenPos = vec2(
      index * (tileSize.x + tileSize.x / 2) + tileSize.x / 2 + offset.x,
      offset.y
    );

    const tileCenter = tileSize.divide(vec2(2, 2));
    drawRect(screenPos, tileSize, new Color(0.8, 0.8, 0.8));
    drawTile({
      icon: slot.icon,
      screenPos: screenPos.subtract(tileCenter),
    });
  });
}

export default drawShop;

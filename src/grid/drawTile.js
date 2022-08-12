import { tileSize, iconSize, iconOffset } from "../config";

function drawTile({ icon, gridPos, screenPos }) {
  const finalIconSizeOffset = iconSize.subtract(iconOffset);

  if (gridPos) {
    drawText(
      icon,
      tileSize.multiply(gridPos).add(finalIconSizeOffset),
      iconSize.x
    );

    return;
  }

  drawText(icon, screenPos.add(finalIconSizeOffset), iconSize.x);
}

export default drawTile;

import { tileSize } from "../config";

function convertScreenPosToGridPos(pos) {
  return pos.divide(tileSize).floor();
}

export default convertScreenPosToGridPos;

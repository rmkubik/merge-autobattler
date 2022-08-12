import convertScreenPosToGridPos from "./grid/convertScreenPosToGridPos";
import drawGrid from "./grid/drawGrid";
import drawTile from "./grid/drawTile";
import drawShop from "./shop/drawShop";

let playerIcons = [
  { icon: "🔥", gridPos: vec2(0, 0) },
  { icon: "💣", gridPos: vec2(3, 3) },
];
let shopSlots = [
  { icon: "🔥", gridPos: vec2(0, 0) },
  { icon: "🔥", gridPos: vec2(0, 0) },
  { icon: "🔥", gridPos: vec2(0, 0) },
];
let levelSize;

function gameInit() {
  // called once after the engine starts up
  // setup the game
  canvasFixedSize = vec2(1920, 1080); // 1080p

  canvasPixelated = false;
  mainCanvas.style.background = new Color(0.2, 0.2, 0.2);
  levelSize = vec2(12, 6);

  cameraPos = levelSize.scale(0.5);
  cameraScale = 900 / levelSize.y;
}

function gameUpdate() {
  // called every frame at 60 frames per second
  // handle input and update the game state
  if (mouseWasPressed(0)) {
    console.log({ mousePos, gridPost: convertScreenPosToGridPos(mousePos) });
  }
}

function gameUpdatePost() {
  // called after physics and objects are updated
  // setup camera and prepare for render
}

function gameRender() {
  // called before objects are rendered
  // draw any background effects that appear behind objects
  // drawRect(cameraPos, levelSize.scale(2), new Color(0.4, 0.4, 0.4));
  drawRect(cameraPos, levelSize, new Color(0.3, 0.3, 0.3));
  drawGrid({ width: 10, height: 8 });
  playerIcons.forEach(drawTile);

  drawShop({ slots: shopSlots, offset: vec2(5, 5) });
}

function gameRenderPost() {
  // called after objects are rendered
  // draw effects or hud that appear above all objects
}

// startup LittleJS with your game functions after the tile image is loaded
engineInit(gameInit, gameUpdate, gameUpdatePost, gameRender, gameRenderPost);

// Parcel hot reload adjustments
if (module.hot) {
  module.hot.dispose(function (data) {
    // module is about to be replaced.

    // LittleJS is injecting its 3 canvas elements
    // again every time Parcel hot reloads.
    // We need to manually clean these old canvas
    // elements up when Parcel is disposing the
    // old module.
    document.querySelectorAll("canvas").forEach((canvas) => canvas.remove());
  });
}

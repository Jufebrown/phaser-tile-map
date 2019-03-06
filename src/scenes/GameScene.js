export default class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene',
    });
  }

  preload() {
    this.preload.image('', '../assets/tilesets/black-grey-tilemap.png');
  }

  create() {
    const level = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    const map = this.make.tilemap({ data: level, tilewidth: 32, tileheight: 32 });
    const tiles = map.addTilesetImage('black-grey-tilemap');
    const layer = map.createStaticLayer(0, tiles, 0, 0);
  }
}

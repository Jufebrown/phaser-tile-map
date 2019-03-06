export default class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene',
    });
  }

  preload() {
    this.load.image('black-grey-tilemap', '../assets/tilesets/black-grey-tilemap.png');

    const level = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    this.make.tilemap({ data: level, tilewidth: 32, tileheight: 32 });
    this.addTilesetImage('black-grey-tilemap');
  }
}

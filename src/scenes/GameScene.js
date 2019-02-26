export default class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene',
    });
  }

  create() {
    this.add.text(100, 100, 'Game Scene', { font: '65px arial', fill: '#fff' });
  }
}

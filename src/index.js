import 'phaser';
import TitleScene from './scenes/TitleScene';
import GameScene from './scenes/GameScene';
import './style.css';

const config = {
  type: Phaser.WEBGL,
  pixelArt: true,
  roundPixels: true,
  parent: 'content',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
  },
  scene: [
    TitleScene,
    GameScene,
  ],
};

const game = new Phaser.Game(config);

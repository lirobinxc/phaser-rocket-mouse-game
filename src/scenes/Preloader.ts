import Phaser from 'phaser';

// Images
import img_houseBg from '../../public/house/bg_repeat_340x640.png';
import img_mouse from '../../public/characters/rocket-mouse.png';
import json_mouse from '../../public/characters/rocket-mouse.json';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preloader');
  }

  preload() {
    this.load.image('background', img_houseBg);

    /* ------- Load the rocket-mouse sprite sheet ------- */
    // .atlas = varying sized sprites
    // .spritesheet = each sprite frame is fixed size
    this.load.atlas('rocket-mouse', img_mouse, json_mouse);
  }

  create() {
    this.scene.start('game');
  }
}

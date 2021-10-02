import Phaser from 'phaser';

export default class Game extends Phaser.Scene {
  constructor() {
    super('game');
  }

  create() {
    // We will use tileSprite instead of image because tileSprites are repeatable
    // this.add.image(0, 0, 'background').setOrigin(0, 0);

    const width = this.scale.width;
    const height = this.scale.height;

    this.add.tileSprite(0, 0, width, height, 'background').setOrigin(0, 0);

    /* ---------------- Create animations --------------- */
    this.anims.create({
      key: 'rocket-mouse-run', // name of this animation
      // helper to generate frames
      frames: this.anims.generateFrameNames('rocket-mouse', {
        start: 1,
        end: 4,
        prefix: 'rocketmouse_run',
        zeroPad: 2,
        suffix: '.png',
      }),
      frameRate: 10,
      repeat: -1, // -1 to loop forever
    });

    /* ---------------- Add mouse sprite ---------------- */
    this.add
      .sprite(width / 2, height / 2, 'rocket-mouse', 'rocketmouse_fly01.png')
      .play('rocket-mouse-run');
  }
}

import Phaser from 'phaser'
import BootScene from '@/components/GameCenterComponents/scenes/BootScene'
import PlayScene from '@/components/GameCenterComponents/scenes/PlayScene'


function launch(containerId) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: containerId,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false
      }
    },
    scene: [BootScene, PlayScene]
  })
}

export default launch
export { launch }
//gameState = {};


function create(){
    let controlBox = this.add.rectangle(0,config.height-100, config.width, 100,50, 0x37c3be);
    controlBox.setOrigin(0,0);
}


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0x84ba75,
    scene: {
        create,
    },
}

const game = new Phaser.Game(config)
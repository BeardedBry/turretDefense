//gameState = {};


function create(){
    let controlBox = this.add.rectangle(0,475, 440, 75,50, 0x37c3be,100);
    controlBox.setOrigin(0,0);
}


const config = {
    type: Phaser.AUTO,
    width: 500,
    height: 600,
    backgroundColor: 0x84ba75,
    scene: {
        create,
    },
}

const game = new Phaser.Game(config)
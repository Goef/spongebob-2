/// <reference path="gameObjects.ts"/>
class Character extends gameObjects{
    
    public keyBoardButtons:KeyboardButtons

    constructor() {
        console.log("ik ben er klaar voor")
        super("character", 250, 192)
        this.keyBoardButtons = new KeyboardButtons(this)
    }

    public update() : void {
        this.keyBoardButtons.move()
    }
}
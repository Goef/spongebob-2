class Game{
    private static instance:Game

    constructor(){
        this.gameLoop()

    }

    public static getInstance(){
        if (! Game.instance) {
            Game.instance = new Game()
        }
        return Game.instance
    }

    private gameLoop():void{
        requestAnimationFrame(() => this.gameLoop())
    }

}

window.addEventListener("load", () => {
    Game.getInstance();
});
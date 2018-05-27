class Game{
    private static instance:Game
    character:Character

    constructor(){
        
        this.character = new Character()
        console.log("skuur")
        this.gameLoop()




    }

    public static getInstance(){
        if (! Game.instance) {
            Game.instance = new Game()
        }
        return Game.instance
    }

    private gameLoop():void{
        this.character.update()

        requestAnimationFrame(() => this.gameLoop())


    }

}

window.addEventListener("load", () => {
    Game.getInstance();
});
abstract class gameObjects{
    protected element: HTMLElement
    public posX:number
    public posY:number
    private div:string

    constructor(div:string, x:number, y:number){
        this.posX = x
        this.posY = y
        this.div = div
        this.element = document.createElement(this.div)
        this.createElement()
        this.setPosition()
    }
    public setPosition() {
        this.element.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)"
    }

    createElement(){
        this.element = document.createElement(this.div)
        let map = document.getElementsByTagName("map")[0]
        map.appendChild(this.element)
    }

   
}
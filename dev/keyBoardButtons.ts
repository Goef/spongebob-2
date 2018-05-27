class KeyboardButtons{
    private upKey:number = 87
    private leftKey:number = 65
    private rightKey:number = 68
    private downKey:number = 83

    
	private xSpeed: number = 0
    private ySpeed: number = 0
    
    private instance:any

    constructor(i:any){
        this.instance = i
        window.addEventListener("keydown", this.onKeydown.bind(this))
        window.addEventListener("keyup", this.onKeyUp.bind(this))
    }

    
    
    public move() {

      
       
        
        
		this.instance.posX += this.xSpeed
		this.instance.posY +=this.ySpeed
        

        
        

        this.instance.element.style.transform = "translate(" +this.instance.posX + "px, " + this.instance.posY + "px)"
        
    }
 // dit is om de character te laten lopen.
    onKeydown(event: KeyboardEvent): void {
        switch (event.keyCode) {
            case this.leftKey:
                this.xSpeed = -3
                break

            case this.rightKey:
                this.xSpeed = 3
                break
                
            case this.upKey:
                this.ySpeed = -3
                break
                
            case this.downKey:
                this.ySpeed = 3
                break
        }
    }

    onKeyUp(event: KeyboardEvent): void {
        switch (event.keyCode) {
            case this.leftKey:
                this.xSpeed = 0
                break

            case this.rightKey:
                this.xSpeed = 0
                break

            case this.upKey:
                this.ySpeed = 0
                break

            case this.downKey:
                this.ySpeed = 0
                break

        
        }

    }
}
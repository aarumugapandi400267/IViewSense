class Car{
    constructor(model,speed){
        this.model=model
        this.speed=speed
    }
    Accelerate(){
        this.speed+=10
        console.log(`${this.model} increased it's speed to ${this.speed}`)
    }
    Brake(){
        this.speed-=5
        console.log(`${this.model} slow downed it's speed to ${this.speed}`)
    }
}

const Car1=new Car('Ford',120)
Car1.Accelerate()
Car1.Brake()
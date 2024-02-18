function Car(make,speed){
    this.make=make
    this.speed=speed
}

Car.prototype.accelerate=function(){
    this.speed+=10
    console.log(`Car speed increased to ${this.speed} km/h`)
}

Car.prototype.brake=function(){
    this.speed-=5
    console.log(`Car speed decreased to ${this.speed}`)
}

const car1=new Car('BMW',120)
const car2=new Car('Bugatti',400)

car2.accelerate()
car1.brake()
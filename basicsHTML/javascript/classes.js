class Animal{
    constructor(name, height, weight){
        console.log("created ", name)
        this.height = height;
        this.weight = weight;
        this.name = name;
    }

    getWeight(){
        return this.weight
    }
    getHeight(){
        return this.height;
    }
    

}

var dog = new Animal("dog", 25, 100);
var fish = new Animal("fish", 2, 5);

console.log(dog.getHeight) //dog.height

class Cat extends Animal{
    constructor(name, height, weight, furColor){
        super(name, height, weight); //the animal constructor
        this.furColor = furColor
        console.log("cat created")
    }
}
const text1 = { name: "abc", grade: "abc", age: 18 };
text1 = { name: "abc", grade: "abc", age: 18 };
text1.age = 20;

click = value => "Hi There " + value;

click2 = (value = " ") => {
    value = "Mr. " + value;
    return "Hi There " + value
}
console.log(click2("Jacob"));
click2();

add = (number1, number2 = 1, number3) => {
    return number1 + number2 + number3;
}
sum = add(5, null, 7);

class Person {
    constructor(newName, newAge) {
        this._name = newName;
        this._age = newAge;
        this.showName();
    }
    get name() { return this._name };
    set name(newNameSet){this._name=newNameSet}
    showName() {
        console.log(this._name);
    }
    static printHello(value){
        console.log("Hello " + this._name);
    }
};
var p1 = new Person("Avi", 19);
p1.name="David";
p1.showName();
Person.printHello(p1);


txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}
document.getElementById("root").innerHTML=txt;

txt = "";
var numbers = [16, 4, 9,  45, 25];
numbers.forEach(value=> txt = txt + value + "<br>");
document.getElementById("root").innerHTML=txt;
myFunction=(value)=> {
  txt = txt + value + "<br>";
}
num= numbers.find(value=> value >30);
document.getElementById("root").innerHTML=numbers.indexOf(num);
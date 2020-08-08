window.onload = function () {
    var listOfPages = [["pic1", "pic2", "pic3", "pic4"], ["luufy", "brock", "osop", "zoro", "sanji"], ["link1", "link2", "link3"]];
    for (var i = 0; i < listOfPages.length; i++) {
        for (var j = 0; j < listOfPages[i].length; j++) {
            var newA = document.createElement("a");
            newA.href = "#" + listOfPages[i][j];
            newA.innerText = listOfPages[i][j];
            var newLi = document.createElement("li");
            newLi.appendChild(newA);
            document.getElementById("listOfItems").appendChild(newLi);
        }
    }
    this.console.log("");
    countris.forEach(countrie, index => {
        var newA = document.createElement("a");
        newA.href = links[index];
        newA.innerText = countrie;
        var newLi = document.createElement("li");
        newLi.appendChild(newA);
        document.getElementById("listOfCuntries").appendChild(newLi);
    });
};
[[dsdf, dfgdf, fgfghgh], [], []]
const persons = ["Avi", "Yossi", "David"];
persons = ["", "Moshe", "Avram"];
persons[0] = "TOMI";
persons.push("DGND")
persons.splice()
function name() {
    let text = "yes";
}
person1 = { name: "Yossi", age: 17 };
person1.age = 14;
console.log(text);

Hello = () => "hello" + this;
console.log(Hello(" Jacob"));

add = (num1, num2 = 1, num3) => {
    if (num3) {
        return num1 + num2 + num3;
    }
    return num1 + num2;
}
console.log(add(7));

class Person{
    constructor (newName){
        this._name=newName;
    }
    printName(){
        return this._name;
    }
}
var p1 = new Person("Avi")

class Studnet extends Person{
    constructor(newName, grade){
        super(newName);
        this._grade = grade;
    }
    print(){
        return this.printName() + this._grade;
    }
}
var stu1 = new Studnet("newName", 10);
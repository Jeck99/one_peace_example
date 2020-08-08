// var text = "הכנס דמות";
// var name = "luffy";
// function clickImg(text, name) {
//     let input = prompt(text, name);
//     changePicture(input);
// }
// text = "";
// function changePicture(input) {
//     var x = input == "luffy" || input == "Sanji" || input == "Zoro";
//     document.getElementById("pic").src = x ? input + ".png" : "one-piece-2.jpg";
// }
// function addNewLiItem() {
//     var inputFromUser = prompt("הכנס משהו בבקשה");
//     var newLiItem = document.createElement("li");
//     newLiItem.innerText = inputFromUser;
//     document.getElementById("list").appendChild(newLiItem);
// }
// // var result = condion ? true:false;טי

// window.onload = function () {
//     //     var leftPos = 0;
//     //    //our box element
//     //    var smallDiv = document.getElementById("smallDiv");
//     //    var t = setInterval(move, 10);

//     //    function move() {
//     //        if(leftPos >= 450) {
//     //            clearInterval(t);
//     //        }
//     //        else {
//     //            leftPos += 1;
//     //            smallDiv.style.left = leftPos+'px';
//     //        }
//     //    }
// };


// var picturs = ["one-piece-2.jpg", "luffy.png", "Zoro.png", "Sanji.png"];
// var picturs = [[2, "luffy.png", "Zoro.png", "Sanji.png"], ["one-piece-2.jpg", "luffy.png", "Zoro.png", "Sanji.png"]];
// picturs[1][3]
// var curentPicture = picturs[0];

// // window.onload = function () {
// //     document.getElementById("pic").src = curentPicture;
// //     var t = setInterval(nextPicture, 3000);
// // };

// function nextPicture() {
//     if ((picturs.indexOf(curentPicture) + 1) < picturs.length) {
//         curentPicture = picturs[picturs.indexOf(curentPicture) + 1];
//     }
//     else {
//         curentPicture = picturs[0];
//     }
//     document.getElementById("pic").src = curentPicture;
// }
// function previousPicture() {
//     if ((picturs.indexOf(curentPicture) - 1) >= 0) {
//         curentPicture = picturs[picturs.indexOf(curentPicture) - 1];
//     }
//     else {
//         curentPicture = picturs[picturs.length - 1];
//     }
//     document.getElementById("pic").src = curentPicture;
// }

// // var episous = {ep: 1,Link: "ghfdsgfh.com",name: "some name"}

// var episous = [
//     [672, "dsgfh.com", " name"],
//     [572, "65464ghfdsgfh.com", "some "],
//     [692, "gfjjghfdsgfh.com", "erer"],
//     [172, "ggfh.com", "jhjjkh"],
// ]

// window.onload = function () {
//     // function addNewData() {re5ewq1
//     for (let i = 0; i < episous.length; i++) {
//         var newTr = document.createElement("tr");
//         var element = episous[i];
//         for (let index = 0; index < episous[i].length; index++) {
//             var newTd = document.createElement("td");
//             newTd.innerText = element[index];
//             newTr.appendChild(newTd);
//         }
//         document.getElementById("epTable").appendChild(newTr);
//     }
// }
var listOfPages = [["pic1", "pic2", "pic3", "pic4"], ["luufy", "brock", "osop", "zoro", "sanji"], ["link1", "link2", "link3"]];
var menuItems = ["picturs", "charcters", "Links"]


// function clickEvent(params) {
//     // var elemant = document.getElementsByTagName("button");
//     // elemant.
//     alert(params)
// }
var studnets =
    [
        {
            "name": "jacob",
            "age": 20,
            "grades": [
                {
                    "sport": 100,
                    "math2": 100

                },
                {
                    "sport": 80,
                    "sport2": 80

                },
                {
                    "english": 90
                }
            ]
        },
        {
            "name": "jacob",
            "age": 20,
            "grades": [
                {
                    "math": 100
                },
                {
                    "sport": 80
                },
                {
                    "english": 90
                }
            ]
        }
    ]
window.onload = function () {
    //     var divElemant = document.getElementById("allDiv");
    //     var someText = "Click here";
    //     var buttonElemant = document.createElement('button');
    //     buttonElemant.innerHTML=someText;
    //     var textToAlert="hello hello hello hello hello hello";
    //     divElemant.appendChild(buttonElemant);

    //     buttonElemant.addEventListener("click", function(){
    //         divElemant.innerHTML = textToAlert;
    //       });
    console.log(studnets);
    obj = JSON.parse(studnets);
    // document.getElementById("div1").innerHTML =
    //     obj[1].name + " " + obj[1].age;
}



    // for (var i = 0; i < listOfPages.length; i++) {
    //     var newMainLi = document.createElement("li");
    //     newMainLi.innerText = menuItems[i];
    //     var newUl = document.createElement("ul");
    //     newUl.className = "ulInerClass";
    //     newUl.id = "inerUl" + i;
    //     for (var j = 0; j < listOfPages[i].length; j++) {
    //         var newLi = document.createElement("li");
    //         newLi.id = "inerLi" + j;
    //         var newA = document.createElement("a");
    //         newA.id = "inera" + j;


    //         newA.href = "#" + listOfPages[i][j];
    //         newA.innerText = listOfPages[i][j];

    //         newLi.appendChild(newA);
    //         newUl.appendChild(newLi);
    //         newMainLi.appendChild(newUl);
    //     }
    //     document.getElementById("menu").appendChild(newMainLi);
    // }
// }

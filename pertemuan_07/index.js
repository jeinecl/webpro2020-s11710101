//Exercise 01

//A. JavaScript Conditional: 
//If, Else-if, Else
let targetSteps = 6000;
if(targetSteps == 6000){
    console.log("Congratulation you've reached your daily target!");
}
else if(targetSteps >= 6000){
    console.log("You've walked too far")
}
else{
    console.log("Almost there!");
}

//Switch Case
let meeting = 7;
let topics;

switch (meeting){
    case 1:
    case 2:
        topics = "Introduction and GitHub";
        break;
    case 3:
        topics = "Variabel dan Operator";
        break;
    case 4:
        topics = "Function";
        break;
    case 5:
        topics = "Array";
        break;
    case 6:
        topics = "Object";
        break;
    case 7:
        topics = "JavaScript Conditional and JavaScript Loop";
        break;
}
console.log(topics);

//B. JavaScript Loop
//For In Loop
const student = {
    nim: "105021710047",
    name: "Jeine Claudia",
    dateOfBirth: "11 Juni 2000",
    address: "Luwuk"
};
for(property in student){
    console.log(property, ':', student[property]);
}

//For Of Loop
const smithFamily = ["Father: Will Smith",
    "Mother: Jada Smith",
    "Son: Trey Smith, Jaden Smith",
    "Daughter: Willow Smith"
];
for (members of smithFamily){
    console.log(members);
}

//While Loop
let a = 15; //penurunan angka, dikurang 2
while (a >= 0){
    console.log(a);
    a -= 2;
}

//Do While Loop
let b = 15;
do{
    console.log(b + "th lines");
    b++;
}while (b <= 20);
//this is for practing
// we have created more before commit the command promp
//net we can check the the comming process is going on
//this is last message
//after submit the code to git hub i am adding more line to check the text
// this matter is saving in the new branch which i created new one
// i had put another headding in matter

console.log("i am mujahid");

//assignment one
var DOB = 1988;
var PY = 2022;
var age = PY-DOB;
console.log(age);

// assignment two
var age = 35;
console.log(age.toString());
var age ="38";
console.log(Number(age));

// assignment three
var a = "coding" + " " + "is";
var b = "easy";
var letter = (a +" "+ b);
console.log(letter);

// assignment four
var english = 98;
var telugu = 95;
var hindi = 93;
var totalmarks = english+telugu+hindi;
console.log(totalmarks);

// assignment Five
var length = 4;
var height = 2;
var perimeter = 2*length + 2*height;
var area = length*height;
console.log(perimeter);
console.log(area);

// assignment Six

var location = "2nd Floor, 2nd Street, Panjagutta, ";
var city = "Hyderabad, ";
var state = "Telangana.";

console.log(location + city + state);

// assignment Seven

var months = 26;
console.log(months % 12);

// assignment Eight

var principleAmount = 1000;
var percentage = 6.5;
var time = 2;

var simpleInterest = (principleAmount * percentage * time)/100;
console.log(simpleInterest);

// assignment Nine

var stu1 = 180;
var stu2 = 150;
var stu3 = 140;
var stu4 = 180;
var stu5 = 160;
var stu6 = 150;

var average = stu1+stu2+stu3+stu4+stu5+stu6;
console.log(average/6);

// assignment Ten

var pprice1 = 25;
var pprice2 = 48;
var pprice3 = 45

var qnty = (pprice1*2 + pprice2*8 + pprice3*6);

console.log(qnty);

// assignment Eleven

var itemprice1 = 80;
var itemprice2 = 140;
var qnty = (itemprice1*6 + itemprice2*3);
var tip = 50;
var tax5per = (qnty)*5/100+(tip);
var tax8per = (qnty)*8/100+(tip);
var total = tax5per+tax8per;

console.log(total);

// assignment Twelve

var number = 8976;

var thou = (8%1000)*1000;
var hun = (9%100)*100;
var ten = (7%10)*10;
var one = (6)*1;

console.log(thou);
console.log(hun);
console.log(ten);
console.log(one);

// assignment Thirteen
var p = 5000;
var i = 0.05;
var n = 12;
var t = 3;
var co = 1+i/n;
var total = p*co**n*3/n;
console.log(total);

// assignment 14

year = 2024;

if ((year % 4==0 && year % 100 !=0) || year % 400==0){
    console.log("This is Leap Year");

} else {console.log("This is Not Leap Year")};

// assignment 15

var birth = 1988;
var latesYear = 2022;
var age = latesYear - birth;

if (age >= 18) {
    console.log("Yes You can Vote");

} else {
    console.log("No You can't Vote");
}

// assignment 16

var alp = "u";

if (alp == "a" || alp == "e" || alp == "i" || alp == "o" || alp == "u") {
    
    console.log(alp + " is Vowel");
   
} else {
    console.log(alp + " is Constant");
}

// assignment 17

var pin = "500027";

if (pin.length == 6) {
    
    console.log (pin + " This is valid pin");

} else {console.log (pin + " This is Not valid pin");}

// assignment 18

var state = "Gujarat";
switch (true) {

    case (state == "Kerala"):
    console.log (state + " is in SOUTH")
    break;

    case (state == "Gujarat"):
    console.log (state + " is in WEST")
    break;

    case (state == "Assam"):
    console.log (state + " is in EAST")
    break;

    case (state == "Haryana"):
    console.log (state + " is in NORTH")
    break;

    default: 
    console.log("Not Mentioned");
}
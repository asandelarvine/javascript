//Addition of four numbers
function addFourNumbers(Num1, Num2, Num3, Num4){
    var sum = Num1 + Num2 + Num3 + Num4;
    return sum;
}
//Area of a circle
function areaOfACircle(radius){
    var pi = 3.142;
    var area = pi * radius * radius;
    return area;
}
//Area of a rectangle
function areaOfARectangle(length, width){
    var area = length * width;
    return area;
}

//getting Age
function getAge(yearofBirth){
    var age = currentage - yearofBirth;
    return age;
}
//Area of a triangle
function areaOfATriangle(base, height){
    area = 0.5 * base * height;
    return area;
}

//Example of Addition of four numbers
var sum = addFourNumbers(3, 4, 5, 6);
    document.write(sum);

//Example of area of a circle
var area=areaOfACircle(14);
    document.write(area);

//Example of area of a rectangle
var area = areaOfARectangle(20,38);
    document.write(area);

//Example of getting age
var age = getAge(1999);
    document.write(age);

//Example of area of a triangle
var area = areaOfATriangle(10, 12);
    document.write(area);



arrays
var names = ["larv" , "marv" , "larvmarv"];
    document.write(names[2]);

conditions
var teacher="kany";

if(teacher !== "kany"){
    document.write("we learn");
}else{
    document.write("we dont learn");
}
   

var lecturer="ken";

if (lecturer){
    document.write("i learn");

}

var pen ="black";

if (pen == "black"){
    document.write("black");
}else if(pen=="blue") {
    document.write("blue");
}else if(pen=="green"){
    document.write("green");
}else{
    document.write("none");
}

//arrays
var cars = ["Volvo", "Toyota", "BMW", "Mercedes", "Audi"];

var rand = Math.random();

console.log(rand);

var carTypes = cars[rand];

//condition1
var car ="BMW";
if(car == "BMW"){
    document.write("BMW Match");
}else{
    document.write("Not BMW Match");
}

//condition2
if(car == "BMW" || car == "Audi"){
    document.write("Pure German Match");
}else{
    document.write("Not Pure German Match");
}

//key position of Mercedes
var cars = ["Volvo", "Toyota", "BMW", "Mercedes", "Audi"];
document.write(cars.indexOf("Mercedes"));

//length of the arrays
var cars = ["Volvo", "Toyota", "BMW", "Mercedes", "Audi"];
document.write(cars.length);

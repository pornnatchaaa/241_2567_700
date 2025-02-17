/*console.log("hello world");
let name = prompt("What is your name?");
console.log(name);*/

/*let fisrtname = 'John';
const idcard = '1234';
let age = 25;
let isMarried = false;*/

/*let number1 = 5;
let number2 = 10;
let result = number1 + number2; //15
console.log(result);*/

/*let number3 = 5;
let number4 = 3;
if(number3 > number4){
    console.log("number3 is greater than number4");
}else{
    console.log("number3 is less than number4");
} //true*/

/* let counter =0;
while (counter < 5){
    console.log("This is while loop");
    counter++;
} //5 รอบ */

/*for (let i=1; i<5; i++){
    console.log("This is for loop");
}//4 รอบ*/


/*
let number5 ='5';
let number6 ='3';
let condition1 = number5 >= number6;
let condition2 = number5 < number6;
console.log('result of condition1 is',condition1); //true
console.log('result of condition2 is',condition2);//false
//&& และ
//|| หรือ    
//! ไม่ 
let number7 = 5;
let number8 = 3;
let condition3 = number7 >= 3 || number8 >= number7;
let condition4 = number7 < 5 && number8 <= number7;
console.log('result of condition3 is',condition3); //true
console.log('result of condition4 is',condition4); //false
*/

/*
//หาเลขคู่-เลขคี่
let number9 = 24; //คู่
if(number9 %2 ==0 ){
    console.log('This is even number'); //เลขคู่
}else{
    console.log('This is odd number'); //เลขคี่
}
let number10 = 25; //คี่
if(!(number10 % 2 == 0)){
    console.log('This is odd number'); //เลขคี่
}else{
    console.log('This is even number'); //เลขคู๋
}
*/

/*
//การใช้งาน arrays
let ages =[30,35,40,45,50];
console.log(ages);
ages.push(55); //เพิ่ม 55 ลงใน array
console.log(ages);
ages.reverse(); //เรียงจากมากไปน้อย
console.log(ages); 
ages.sort(); //เรียงจากน้อยไปมาก
console.log(ages);
ages.pop(); //ลบตัวสุดท้ายออก
console.log(ages);
*/

/*
//การใช้งาน object
let student = {
    name: 'John',
    age : 25,
    grade : 'A'
};
console.log(student.name);
console.log(student.age);
console.log(student.grade);
*/

/*
let scores = [50,60,70,80,90];
// map คูณ 2 ทุกตัวใน array
let dubbleScores = scores.map((score) => score * 2);
console.log(dubbleScores);
// filter กรอกเฉพาะค่าที่มากกว่า 80
let highScore = scores.filter((score) => score > 80);
console.log(highScore); //นำค่าที่ยังไม่คูณ 2 มากรอง
// forEach แสดงค่าทุกตัวใน array
scores.forEach((score) =>{
    console.log('Score',score);
});
*/

/*
//การหาข้อมูลใน array โดยใช้ find()
let students = [
    {name: 'John', score:90},
    {name: 'Jane', score:75},
    {name: 'Jim' , score:60}
];
let student1 = students.find((s)=> s.name =='Jane');
console.log(student1);
let student2 = students.find((s)=> s.name == 'Jim');
console.log(student2);
let student3 =students.find((s) => s.score == 75);
console.log(student3);
*/

/*
//push() เพิ่มข้อมูลไปท้าย array
//pop() ลบข้อมูลท้าย array
//shift() ลบข้อมูลหน้า array
//unshift() เพิ่มข้อมูลหน้า array
let names = ['John','Jane','Jim'];
names.push('Jake'); //เพิ่ม Jeke ไปท้าย array
console.log(names);
names.pop(); //ลบ Jake ท้าย array ตัวท้ายสุด
console.log(names);
names.shift();//ลบ John หน้า array ตัวหน้าสุด
console.log(names); 
names.unshift('Jew'); //เพิ่ม Jew หน้า array ตัวหน้าสุด
console.log(names); 
*/

/*
//ประกาศ function ชื่อ calculateGrade ที่มี parameter ชื่อ scores
let scores1 =50;
let scores2 =90;
let grade ='';
function calculateGrade(scores){
    if(scores >= 80){
        grade ='A';
    }else if(scores >=70){
        grade ='B';
    }else if(scores >=60){
        grade ='C';
    }else if(scores >=50){
        grade ='D';
    }else{
        grade ='F';
    }
    return grade;
    }
let student1 = calculateGrade(scores1);
let student2 = calculateGrade(scores2);
console.log('grade student1 :',student1);
console.log('grade student2 :',student2);  
*/

/*
//วนลูปโดยใช้ index
for(let index=0; index < 5;index++){
    console.log(index);
}
*/

/*
let scores = [50,60,70,80,90,100]; //index จะทำซ้ำจนจะมากกว่าความยาวของ array
for(let index=0;index < scores.length;index++){
    console.log(scores[index]);
}
*/

/*
let scores = [10, 20, 30, 40, 50];
let newScore = scores1.filter((s) => s >= 30);
newScore1.forEach((ns) => {
    console.log('New Score', ns);
});
*/

/*
let ages =[30,35,40,45,50];
ages.sort();
console.log(ages);
if (!ages.includes(40)){
    console.log('you have to be 40');
}else{
    console.log('you have 40');
}
*/

/*
let age = 25;
let gender = 'male';
if(age >= 20 && gender == 'male'){
    console.log('you are male adult');
}else{
    console.log('you are not male adult');
}
*/

/*
let score = prompt('Enter you score');
console.log('Your score is',score);
if(score >= 80){
    console.log('Your grade is A');
}else if(score >= 70){
    console.log('Your grade is B');
}else if(score >= 60){
    console.log('Your grade is C');
}else if(score >= 50){
    console.log('Your grade is D');
}else {
    console.log('Your grade is F');
} 
*/   

/*
function add(a, b) {
    return a + b;
}
console.log(add(3, 5));  
*/

/*
for(let i =1; i<=5;i++){
    console.log(i);
}
*/


let students = [ {
    name: 'John',
    score: 25,
    grade: 'A'
},
{
    name: 'Jane',
    score: 24,
    grade: 'B'
},
{
    name: 'Jim',
    score: 30,
    grade: 'C'
}
];
let student =students.find((s) => {
    if(s.name == 'Jane'){
        return true;
    }
});
let doubleScore_student =students.map((s) =>{
    s.score = s.score*2;
    return s;
});
let hihtScore_student =students.filter((s) =>{
    if(s.score >= 20){
        return s;
    }
});
console.log('student',student);
console.log('doubleScore_student',doubleScore_student);
console.log('hihtScore_student',hihtScore_student);


/*
let score1 = prompt('Enter your first score');
let score2 = prompt('Enter your second score');
let sumScore = score1+score2;
console.log ('sum score is',sumScore);
*/
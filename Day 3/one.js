// // Task1
const submit = document.getElementById('submit');
const inputt = document.getElementById('oneq');
const one1 = document.getElementById('first-submit');
function fun1() {
    one1.innerHTML = inputt.value + '&nbsp' +"something";
}
submit.addEventListener('click', fun1);



// Task2

const submit1 = document.getElementById('submit1');
const inputt1 = document.getElementById('secondq');
const one2 = document.getElementById('second-submit');
function fun2(num) {
    one2.innerHTML = inputt1.value.toString().length;
}
submit1.addEventListener('click', fun2);


// task3
const submit2 = document.getElementById('submit2');
const inputt2 = document.getElementById('thirdq');
const one3 = document.getElementById('third-submit');

var hasEl = function (str, char) {
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j <= i + 1; j++) {
            if (str[i] + str[j] == char) {
                return true;
            }
            else {
            
            }
        }

    }
};
function fun3() {
    one3.innerHTML = hasEl(inputt2.value, "ee");
}
submit2.addEventListener('click', fun3);

// Task4
const submit3 = document.getElementById('submit3');
const inputt3 = document.getElementById('fourq');
const one4 = document.getElementById('four-submit');
function table(n) {
    for (var i = 1; i <= 10; i++) {
        one4.innerHTML += (`${n} * ${i} = ${n * i} <br>`);
    }
}
function fun4() {
    table(inputt3.value);
}
submit3.addEventListener('click', fun4);

// Task5

const submit5 = document.getElementById('submit5');
const inputt5 = document.getElementById('fiveq');
const one5 = document.getElementById('five-submit');

function swapNCheckbiggestNumber(n) {
    if (n < 10 || n > 99) {
        return "Number should be between 10 and 99";
    }

    const tens = Math.floor(n / 10);
    const ones = n % 10;

    const swapNumber = ones * 10 + tens;

    if (swapNumber > n) {
        one5.innerHTML = swapNumber
    }
    else {
        one5.innerHTML = n
    }
}
function fun5() {
    swapNCheckbiggestNumber(inputt5.value);
}
submit5.addEventListener('click', fun5);


// Task6
const submit6 = document.getElementById('submit6');
const inputt6_1 = document.getElementById('sixq1');
const inputt6_2 = document.getElementById('sixq2');
const one6 = document.getElementById('six-submit');

function shift(number, shift) {
    return Math.floor(number / (2 ** shift));
}

function fun6() {
    one6.innerHTML = shift(inputt6_1.value, inputt6_2.value);
}

submit6.addEventListener('click', fun6);

// Task7
const submit7 = document.getElementById('submit7');
const inputt7 = document.getElementById('sevenq');
const one7 = document.getElementById('seven-submit');

function leadingNTrailing(str) {
    return Number(str)
}
function fun7() {
    one7.innerHTML = leadingNTrailing(inputt7.value);
}
submit7.addEventListener('click', fun7);
// Tassk8
const submit8 = document.getElementById('submit8');
const inputt8 = document.getElementById('eightq');
const one8 = document.getElementById('eight-submit');
function getVowels(str) {
    var vowelsCount = 0;

    var string = str.toString();

    for (var i = 0; i <= string.length - 1; i++) {

        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}

function fun8() {
    one8.innerHTML = getVowels(inputt8.value);
}
submit8.addEventListener('click', fun8);

//   Task9
const submit9 = document.getElementById('submit9');
const inputt9 = document.getElementById('nineq');
const one9 = document.getElementById('nine-submit');

function capToFront(s) {
    var sp = s.split("");
    var caps = [];
    var lower = []
    for (var i = 0; i < sp.length; i++) {
        if (sp[i] == sp[i].toUpperCase()) {
            caps.push(sp[i]);

        }
        if (sp[i] == sp[i].toLowerCase()) {
            lower.push(sp[i]);
        }
    }
    return caps.join("").concat(lower.join(""));
}

function fun9() {
    one9.innerHTML = capToFront(inputt9.value);
}
submit9.addEventListener('click', fun9);

// Task10
const submit10 = document.getElementById('submit10');
const inputt10 = document.getElementById('tenq');
const one10 = document.getElementById('ten-submit');

function sortString(s) {
    let N = s.length;

   
    let freq = new Array(256).fill(0)

    for (let i = 0; i < N; i++) {
        freq[s[i].charCodeAt(0)]++;
    }

    s = "";

    for (let i = 0; i < 256; i++) {
        for (let j = 0; j < freq[i]; j++)
            s = s + String.fromCharCode(i);
    }


    return s;
}

function fun10() {
    one10.innerHTML = sortString(inputt10.value)
}
submit10.addEventListener('click', fun10)

// Task11
const submit11 = document.getElementById('submit11');
const inputt11=document.getElementById('elevenq');
const one11=document.getElementById('eleven-submit');

function add(str){
    var arr=[];
    arr=str.split(' ');
    console.log(arr);

    let sum = 0;
    for (let i =0; i<arr.length; i++){
        sum = sum + parseInt(arr[i]);
    }

    let mul;
    let mul_arr = sum.toString()
    console.log(mul_arr)

    while(mul_arr.length > 1){
        mul = 1;
        for(let i=0; i<mul_arr.length;i++){
            mul = mul * parseInt(mul_arr[i])
        }
        mul_arr = mul.toString();
    }
    console.log(mul)
    return mul

}

function fun11(){
    one11.innerHTML = add(inputt11.value)
}

submit11.addEventListener('click', fun11)


// Task12
const submit12 = document.getElementById('submit12');
const inputt12 = document.getElementById('twelveq');
const one12 = document.getElementById('twelve-submit');
function factors(num) {
    fac = [];
    for (var i = 0; i < num; i++) {
        if (inputt12.value % i == 0) {
            fac.push(i);
        }
    }
    return fac;
}
function fun12() {
    one12.innerHTML = `[${factors(inputt12.value)}]`;
}
submit12.addEventListener('click', fun12)


// Task13
const submit13 = document.getElementById('submit13');
const inputt13 = document.getElementById('thirteenq');
const one13 = document.getElementById('thirteen-submit');

function check(str) {
    arr3 = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i].codePointAt() % 2 == 0) {
            arr3.push(str[i].toUpperCase())
        }
        else{
            arr3.push(str[i].toLowerCase());
        }
    }
    check1=arr3.join("");
    return check1
}
function fun13(){
    one13.innerHTML=check(inputt13.value);
}
submit13.addEventListener('click',fun13);

// Task14
const submit14 = document.getElementById('submit14');
const inputt14 = document.getElementById('fourteenq');
const one14 = document.getElementById('fourteen-submit');

function highestAndLowest(numbers){
    numbers = numbers.split(" ");
    return Math.max.apply(null,numbers) + " " +  Math.min.apply(null,numbers)
  }

function fun14(){
    one14.innerHTML=highestAndLowest(inputt14.value);
}

submit14.addEventListener('click',fun14);
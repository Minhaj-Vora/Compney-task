// first
function one(){
    let input_1 = document.getElementById("input-1").value;
    let output_one = document.getElementById("output-one");
    output_one.innerHTML = input_1;
}
let submit = document.getElementById('submit');
submit.addEventListener('click',one);

// second
function Myfunction(){
    let input_2 = document.getElementById("input-2");
    input_2.value = input_2.value.toUpperCase();
}

// third
function Myfunction3(){
    window.alert("This is on abort function");
}
function Myfunction4(){
    window.alert("this is onbeforeprint");
}

// four
const div1 = document.getElementById("myDIV");

function myfunction() {
  div1.style.animation = "mymove 4s 2";
}

div1.addEventListener("animationstart", myStartFunction);
div1.addEventListener("animationiteration", myRepeatFunction);
div1.addEventListener("animationend", myEndFunction);

function myStartFunction() {
  this.innerHTML = "The animation has started";
  this.style.backgroundColor = "pink";
}
function myRepeatFunction() {
  this.innerHTML = "The animation was played again";
  this.style.backgroundColor = "lightblue";
}
function myEndFunction() {
  this.innerHTML = "The animation has completed";
  this.style.backgroundColor = "lightgray";
}

// five
function Myfunction5(){
    document.getElementById("demo").innerHTML = "Can start playing video.";
}
function Myfunction6(){
    document.getElementById("demo2").innerHTML = "Can play through without stopping.";

}


function myFunction6() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo3").innerHTML = "You selected: " + x;
  }

  function myFunction8() {
    document.getElementById("demo4").innerHTML = "You copied text!"
  }


//   cut
function myFunction9() {
    document.getElementById("demo5").innerHTML = "You cutted text!";
  }


// dbclick
function myFunction10() {
    document.getElementById("demo6").innerHTML += "Clicked double time! ";
  }


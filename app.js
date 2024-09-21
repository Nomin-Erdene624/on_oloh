// function -> dahij ashiglah bolomjtoi kodnii tsugluulga
// define/uusgeh->function funcName(){}
// argument/parametr->func-iin zaaval avah utga
function hello(name,age,gender){
	console.log("hello "+name);
	console.log("I am "+age+" years old");
	console.log("I am "+gender);
}
//call/duudaj ajluulah
hello("Bat",10,"male");
hello("Misheel",16,"female");

function bodlogo(too1,too2){
	console.log(too1+too2);
}
bodlogo(15,3);

function zereg(too){
	console.log(too*too);
}
zereg(3)

function nas(nas){
	if(nas>=18){
		console.log(nas+" Nasand hursen");
	}else{
		console.log(nas+" Nasand hureegui")
	}
}
nas(16)

// DOM ->document-> html deer baigaa buh kod
console.log(document);
var a =document.getElementsByTagName("h1")[0];
console.log(a);
// varName.style.styleName ="value";
a.style.color="red";
//varName.innerText="word";
a.innerText="Hello World";

console.log(document);
var a1 =document.getElementsByTagName("h1")[1];
console.log(a1);
a1.style.color="blue";
a1.innerText="Hello";
var h2=document.getElementsByTagName("h2")[0];
function click2(){
	h2.style.color="pink";
	h2.innerText="changed";
}
var input=document.getElementsByTagName("input")[0];
var p=document.getElementsByTagName("p")[0];
console.log(p);
console.log(input);
function findYear(){
	// .value->input deer bichden utga
	//alert(input.value);
	var year=2024-input.value;
	var ten=parseInt(input.value) + 10;
	if(input.value>=120){
		p.style.color="red";
		p.innerText="Hun iim naslahgui";
	}else if(input.value<=0){
		p.style.color="yellow";
		p.innerText="Ta turuugui baina";
	}else {
		p.innerText='Your birth year:'+year;
	}
}


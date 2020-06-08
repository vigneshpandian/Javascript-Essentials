	

{

var firstName = 'vignesh'; //can be accessed outside the scope
let lastName = 'pandian';  //scopped variable
const notChangable = 1; //scopped variable

	
}
function TestScope(){
	console.log(firstName); //will print
	console.log(lastName); //will raise an error
}

//Contructor
function Phone(name, phoneNumber){
	this.name = name;
	this.phoneNumber = phoneNumber;
}

//prototype for phone
Phone.prototype = {
	call: function() { console.log('Calling from phone number ' + this.phoneNumber);}
}

//phone constructor instatiations
var phone1 = new Phone('Pixel', '80150892770');
var phone2 = new Phone('Pixel', '9791141980');

//overriding phone1 call functionality 
phone1.call = function(){ return "hello"; }

//creating array
var arrayOfElements = ['Vignesh', 'Pandian', 2, function(){ return "vignesh";}, call]

//for native functions
Array.prototype.destroyElement =  function(i) { this.splice(0,i);}





	

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
phone1.call = function () { return "hello"; };

//creating array
var arrayOfElements = ['Vignesh', 'Pandian', 2, function(){ return "vignesh";}]

//for native functions
Array.prototype.destroyElement =  function(i) { this.splice(0,i);}


/*Array Helpers*/

/*forEach Helper*/

var computers = ["Acer", "Dell", "HP", "Orgin PC", undefined];

/*Iteration using forEach*/
computers.forEach(function(computer){
	console.log(computer);
});

function checkComputerStatus(computer){
	if(computer!=undefined && computer!=null)
		console.log("The "+ computer +" is ready to use");
}

/*Passing function reference to forEach*/

computers.forEach(checkComputerStatus);



/*Map Helper*/

var servers = [{model : 'Acer', ram: 16, isSSD: true, isHighCapacity : true}, {model : 'Dell', ram: 16, isSSD: false, isHighCapacity : true},
				{model : 'Orgin', ram: 16, isSSD: true, isHighCapacity : false}];
				

var serverModels;

serverModels = servers.map(function(server){
	return  server.model + " server is ready to operate" ;
});

serverModels;

/* Filter helper*/

var ssdServers;

ssdServers = servers.filter(function(server){
	return server.isSSD;
});

/*complex filter*/

/*Create a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.  Hint: you can reuse filter.*/

var numbers = [10,20,30];

/*Function that returns the opposite value*/
function reject(array, iteratorFunction) {
  return array.filter(function(item){
    return !iteratorFunction(item)
  });
}

/*Expected output is 10*/
var lessThanFifteen = reject(numbers, function(number){
    return number > 15;
});

/*Find Helper*/

/*find the lessCapacityServer*/
var lessCapacityServer = servers.find(function(server){
	return !server.isHighCapacity;
});
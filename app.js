

{

    var firstName = 'vignesh'; //can be accessed outside the scope
    let lastName = 'pandian';  //scopped variable
    const notChangable = 1; //scopped variable

   

}
function TestScope() {
    console.log(firstName); //will print
    console.log(lastName); //will raise an error
}

//Contructor
function Phone(name, phoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;
}

//prototype for phone
Phone.prototype = {
    call: function () { console.log('Calling from phone number ' + this.phoneNumber); }
}

//phone constructor instatiations
var phone1 = new Phone('Pixel', '80150892770');
var phone2 = new Phone('Pixel', '9791141980');

//overriding phone1 call functionality 
phone1.call = function () { return "hello"; };

//creating array
var arrayOfElements = ['Vignesh', 'Pandian', 2, function () { return "vignesh"; }]

//for native functions
Array.prototype.destroyElement = function (i) { this.splice(0, i); }


/*Array Helpers*/

/*forEach Helper*/

var computers = ["Acer", "Dell", "HP", "Orgin PC", undefined];

/*Iteration using forEach*/
computers.forEach(function (computer) {
    console.log(computer);
});

function checkComputerStatus(computer) {
    if (computer != undefined && computer != null)
        console.log("The " + computer + " is ready to use");
}

/*Passing function reference to forEach*/

computers.forEach(checkComputerStatus);



/*Map Helper*/

var servers = [{ model: 'Acer', ram: 16, isSSD: true, isHighCapacity: true }, { model: 'Dell', ram: 16, isSSD: false, isHighCapacity: true },
{ model: 'Orgin', ram: 16, isSSD: true, isHighCapacity: false }];


var serverModels;

serverModels = servers.map(function (server) {
    return server.model + " server is ready to operate";
});

serverModels;

/* Filter helper*/

var ssdServers;

ssdServers = servers.filter(function (server) {
    return server.isSSD;
});

/*complex filter*/

/*Create a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.  Hint: you can reuse filter.*/

var numbers = [10, 20, 30];

/*Function that returns the opposite value*/
function reject(array, iteratorFunction) {
    return array.filter(function (item) {
        return !iteratorFunction(item)
    });
}

/*Expected output is 10*/
var lessThanFifteen = reject(numbers, function (number) {
    return number > 15;
});

/*Find Helper*/

/*find the lessCapacityServer*/
var lessCapacityServer = servers.find(function (server) {
    return !server.isHighCapacity;
});

/*Every and Some helper*/

var doesEveryServerIsHighCapacity = servers.every(function (server) {
    return server.isHighCapacity;
});

var anyServersWithHighCapacity = servers.some(function (server) {
    return server.isHighCapacity;
});

/*Reduce helper*/


/*Solve the parathesis problem 
Case 1: (()) ->correct
Case 2: ()() ->correct
Case 3: )(  -> incorrect
Case 4: 'vig()' incorrect


*/

/*
( -> +1
)-> -1
*/

/*
Formula -> (Total no of open brackets - total no of close brackets ) = 0

*/

function validateParanthesis(input) {
    return !input.split('').reduce(function (previous, current) {

        //previous less than 0
        if (previous < 0)
            return previous;

        if (current === '(')
            ++previous;
        if (current === ')')
            --previous;

        return previous;
    }, 0);
}




/*Template strings*/

function printMyName(name) {
    console.log('Hi ' + name + ' welcome to the app!');
    console.log(`Hi ${name} welcome to the app!`);
}

/* fat arrow function => */

//main purpose to cut short the function

/*let serverModels = servers.map(function (server) {
    return server.model + " server is ready to operate";
});*/

let activeServers = servers.map(server => `${server.model} server is ready to operate`);

let totalRam = servers.reduce((prev, current) => prev + current.ram, 0);

/*another use of fat arrow function*/

//the below will execute however the teamName will undefined eventhough it's in the scope.
const team = {
    members: ['Paul', 'Lacey'],
    teamName: 'Vector',
    getTeamMembers: function () {
        return this.members.map(function (member) {
            return `${member} is member of ${this.teamName}`;
        });
    }
};

//Fixed version

const fixedTeam = {
    members: ['Paul', 'Lacey'],
    teamName: 'Vector',
    getTeamMembers: function () {
        return this.members.map(member => `${member} is member of ${this.teamName}`);
    }
};

//for basic functions
let doubleUpSalary = function (n) {
    return n * 2;
};

//using fat arrow
let incrementSalary = n => n * 2;


/*object literals*/

const offShoreTeam = {
    members: [
        { name: 'Vignesh', role: 'Lead Dev' },
        { name: 'Sathish', role: 'Dev' },
        { name: 'Elango', role: 'Dev' },
        { name: 'Ganapragasam', role: 'Dev' },
        { name: 'Dhinesh', role: 'Dev' },
        { name: 'Priya', role: 'QA' },
        { name: 'Muthu', role: 'QA' }
    ],
    skills:['.Net', 'Selenium', 'SpecFlow', 'Full Stack QA', 'Full Stack dev']
};

let formTeam = function (team) {
    return {
        team: team,
        members: team.members,
        getDevTeam: function () {

            return this.members.filter(n => n.role === 'Dev' || n.role === 'Lead Dev');
        },
        getQATeam: function () {
            return this.members.filter(n => n.role === 'QA');
        }
    };
};

/*
 * Short vesion using object literals

 */
let createVectorTeam = function (team) {
    return {
        team,
        members: team.members,
        getDevTeam() {

            return this.members.filter(n => n.role === 'Dev' || n.role === 'Lead Dev');
        },
        getQATeam() {
            return this.members.filter(n => n.role === 'QA');
        }
    };
};

/*Default paramters*/

let add = function (a, b) {
    if (!a)
        a = 0;
    if (!b) {
        b = 0;
    }

    return a + b;
};

let addition = (a = 0, b = 0) => a + b;

/*Rest and spread 
 * Rest combines all the paramters
 * Spreads all parameters
 */

/**
 * 
 * To add multiple paramters
 */
function multipleParamAdd(...rest) {

    
    var numbers = rest;

    var result = numbers.reduce((prev, current) => current + prev, 0);

    console.log(result);
}


//Using join 

function joinArrays(array1, array2) {
    var result = [...array1, ...array2];

    console.log(result);
}

/*ES6 Destructing*/

const computer = {
    ram: 32,
    motherBoard: 'Asus z170K',
    processor: 'i7',
    ssdCapacity: '969',
    

};

let { ram } = computer;



function assembleComputer( motherBoard, ram, ssdCapacity, processor ) {
    return `your computer with ram ${ram} gb and processor ${processor} with ssd capacity of ${ssdCapacity} and build on the motherboard ${motherBoard}`;
}

function makeComputer({ motherBoard, ram, ssdCapacity, processor }) {
    return `your computer with ram ${ram} gb and processor ${processor} with ssd capacity of ${ssdCapacity} and build on the motherboard ${motherBoard}`;
}

var x = [1, 2];

let [i, j, k] = x;


//Protype class


function Computer(parts) {
    this.ram = parts.ram;
}

Computer.prototype.process = function () {
    return "I can process anything";
};

const pc = new Computer({ ram: 32 });

console.log(pc);

function Dell(parts) {
    Computer.call(this, parts);
    this.model = parts.model;
}
Dell.prototype = Object.create(Computer.prototype);
Dell.prototype.constructor = Dell;

Dell.prototype.getModel = function () {
    return this.model;
};





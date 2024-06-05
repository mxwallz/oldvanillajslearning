//alert('hello world');
console.log('hello there');



//var, let const 
// only let and const 
// let reassign vars 
// const you use as a constant -> cant be changed
// always use constant unless you reassign var -> makes code more secure
// primitive direclty assigned to memory (not a resrouc)


const name = 'John'; 
const age = 30; 

const isCool = true; 
const x = null; 

let z

const y = undefined;

typeof(x); // not really an object 

console.log('my name is' + name); 


//template string

const hello = `hello  my name is ${name} and i ams ${age}`;
console.log(hello); 



const s = 'helloworld'; 

console.log(s.length);
console.log(s.substring(0,5));
console.log(s.toLowerCase);

console.log(s.split(''));

const l = "technology, computer, lexis";
console.log(l.split(', ')); 


/* 

multi line commments 

*/
 

//Arrays 

const numbers = ['apples', 'oranges', 40]; 

const numbers2 = new Array(1,2,3,4,5); 

numbers[7]= 5; // this will make 3 or however many empty spots 

// add to end 
numbers.push('numbers yo'); 

// add to beginning 
numbers.unshift(1);

//indexof, other  methods 

console.log(numbers, numbers2); 

/* 
using const and still add values, manipulate, etc to arrays with const 
only thing you can't do is take the array and reassign it 
e.g., 
numbers = []


*/



//object literals 

const person = {

    firstName: 'john',
    lastName : 'Doe',
    age: 30, 
    hobbies: ['music', 'drinking', 'degenracy'], 
    address: {
        street: '130 market', 
        city: 'san fran', 
        state: 'CA'
    }
}

console.log(person); 

console.log(person.name); 



//getting two in, just use dot syntax twice 
console.log(person.address.city)


// destructuring

const { firstName, lastName, address: { city }} = person; 

console.log(city);

person.email = 'joe@gmail.com';
console.log(person); 


const todos = [
    {
        id: 1, 
        text: 'jerk off', 
        isCompleted : true
    }, 
    {
        id: 2, 
        text: 'fuck yourself',
        isCompleted: false
    }
]

console.log(todos); 

console.log(todos[1].text);


// JSON
/*
used alot in web dev,sending stuff to APIs 
and to and back from a server 


*/ 

//let's say we wanted to convert above 
// to send to a server, there's a method for that


const todoJSON = JSON.stringify(todos)
console.log(todoJSON); 


//for 
for(let i = 0; i < 10; i++){

    console.log('yer' + i); 
    console.log(`forloop num: ${i}`);
}

let i = 0; 
while (i < 10){
    console.log('yet'); 
    i ++;
}


for(let i = 0; i < todos.length; i ++){
    console.log(todos[i].text); 
}
 

//better way to go through arrays 
for(let todo of todos){
    console.log(todo)
    console.log(todo.text)
}

//high order array methods -> best way to loop through arrays
//foreach (loops through)
// map -> create an array from an array 
// filter -> create an array from an array + condition 



// these hihger order functions take in functions 
// callback function
todos.forEach(function(todo) { 
    console.log(todo.text);
});

//map returns an array, so want to assign it 
const todoText = todos.map(function(todo){
     return todo.text;
});

console.log(todoText);


const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true; 
});


// can map together
const todoCompleted2 = todos.filter(function(todo){
    return todo.isCompleted === true; 
}).map(function(todo){
    return todo.text;
});

// this is functional programmingm can really
// manipulate data p easily



if (x == 10){

    // == doesnt do data type matching 

}


const e = 10;


const color = x > 10 ? 'red': 'blue';  // ternary operator


switch(color){
    case 'red': 
    console.log('red');
    break;
    case 'blue':
        console.log('blue');
        break;
    default:
        console.log('your not down');
        break;
}


function addNum(num1, num2){
    console.log(num1 + num2)
    return  num1 + num2
}


addNum(5,2);

const addNums = (num1 = 1, num2 = 1) => {
    console.log('hi');
    return num1 + num2;
}

// arrow function dont even need parantheses if one exact param 

///plus if one line implicit return
//makes readibility and concisess the shiz 


todos.forEach((todo) => console.log(todo)); 


//object literals with prototyping (same as classes in es6)
function Person(firstName, lastName, dob){
    this.firstName = firstName; 
    this.lastName = lastName;
    this.dob = new Date(dob);

    // can add methods to this person object
    this.getBirthYear = function() {
        return this.dob.getFullYear;
    }

    this.getFullName = function (){
        return `${this.firstName} ${this.lastName}`;
    }

}

// better way to do methods -- why exactly? 
// bc the methods aren't always attached to the object?
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}


const person1 = new Person('john', 'Doe', '4-3-1980');
const person2 = new Person('john', 'Doe', '4-3-1980');


console.log(person1.getBirthYear());

// way above is just a way to create objects and instantiate them w
// o classes (done via prototypes  )





// creating class 

class PersonJawn {
    //can do default jawns? 
    constructor(firstName, lastName, dob){
        this.firstName = firstName; 
        this.lastName = lastName;
        this.dob = new Date(dob);

    }

    
    // no need to use functin keyword or this 
    getBirthYear(){
        return this.dob.getFullYear;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}   
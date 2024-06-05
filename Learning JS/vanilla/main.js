// parent object of the broswer -> window objc
console.log(window);

/*
since window is the top level- dont actually 
have to do anything w window . just the funciton

document object -> makes up the dom 


*/
// single element selection from the dom 


console.log(document.getElementById('my-form'));

const form = document.getElementById('my-form');


 //newer than get element byid 
//people have been using j query which has given the devs chance to 
// select stuff like classes, tags themselves, p much everything


console.log(document.querySelector('my-form'));
// works just like j query in terms of single elements
// single element selector so even if there';s more thanone will only
// get the first one 


// mulitple element selection

// this gives a node list which is v similar to an array -> what's the diff between node list vs array? 
// can even run methods like foreach on it 
console.log(document.querySelectorAll('.item'));

//older one (should just use query selectorall )
//this gives us an HTML collection (Cant run array methods on them)
// would have to manually convert them to an array
console.log(document.getElementsByClassName('item'));
// can do by tag, etc 


const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));


// now loking at manipulating things in the dom (user interface)


//single element that i want to select, use single element selector 

const ul = document.querySelector('.items');

//ul.remove(); 
//ul.lastElementChild.remove();

// can also edit content e
//ul.firstElementChild.textContent = 'hello';

// what done is taken the UL which grabbed from dom
// chosen first child elemente
// and changed first content to hello 

//node list so can index like an array
//ul.children[1].innerText = 'marco';

// add html dynamically -> do it w inner html 
//ul.lastElementChild.innerHTML = '<h1> Cookie and Cream </h1>';


// let's change the style 
const btn = document.querySelector('.btn');


// why would i do this we have css -> 
// can make it dynamic -> have events and make stuff change 

btn.style.background = 'red'; 

// and can manipulate stuff in real time 

//time for events now 


// creating event listener -> event we want, second param
//function that runs when the event happens 
// when you use event takes in an event parameter 

//different events -> mousevover, click, mouseout


/*
btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    console.log('clicked yaurd'); 

    //looking at event object 
    console.log(e);
    //target-> actual element that the event is on 
    ///can get things like the class name 
    // can get all of the different attributes of the
    // event you clicked

    console.log(e.target); 

    // when you click change some stuff up 
    document.querySelector('#my-form').style.background = 'blue';

    //add a class 
    document.querySelector('body').classList.add('bg-dark');

    document.querySelector('.items').lastElementChild
    .innerHTML = '<h1> Hello </h1>';


} )

*/




//make functional form script
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


//can also just have fx name and create below 

// myForm.addEventListener('submit, onSubmit);
// function onSubmit()...

myForm.addEventListener('submit', (e) => {
    //since it's a submit, want to prevent default beh
    e.preventDefault();

    // input set to actual element and what stg insde
    // can do .value 
    console.log(nameInput.value);


    //for empty check, does type matter here or is it more abt consistency?
    if(nameInput.value === '' || emailInput.value === ''){
        //alert('please enter fields ');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }else {
        //console.log('success');
        const li = document.createElement('li');


        //can be broken into twoparrts 
        li.appendChild(document.createTextNode(`${
            nameInput.value} : ${emailInput.value}
        `));

        userList.appendChild(li);

        //clear fields 
        nameInput.value = ''; 
        emailInput.value = ''; 


    }

})
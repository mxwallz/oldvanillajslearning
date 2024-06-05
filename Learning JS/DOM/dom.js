//Examine doc obkect 
//console.dir(document);
//
//
//console.log(document.URL);
//console.log(document.title);
//document.title = "yeerrr";
//
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.all); 
//
////wanted to grab the 10th element from HTML collection from 
//// everything in the doc.all 
//
//console.log(document.all[5]);
//
//// get all forms or links
//
//
//console.log(document.links);
//console.log(document.forms);
//
//console.log(images);


// getelement byid

console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title'); 

headerTitle.textContent = 'Changing via text Content';
headerTitle.innerText = 'changing via inner text';


//doesnt change it but puts it inside of it 
headerTitle.innerHTML = '<h2> New Title </h2>'; 
// if you wanted to change it you've have to get the parent element 

var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';

// a good amount of this stuff used to be done via jquery but can be done
//w vanilla js 



//get elements by class name

var items = document.getElementsByClassName('list-group-item');
//console.log(document.getElementsByClassName('list-group-item'));
console.log(items);

console.log(items[1]);

//change the text of that speciifc one 
items[1].textContent = 'this is changed via text content!';

items[2].style.fontWeight = 'bold';

items[0].style.backgroundColor = 'lightgrey';


//what if we wanted to change the background color for all ofthem 
//items.style.backgroundColor = 'black';

Array.from(items).forEach((item) => {
    item.style.backgroundColor = 'black';
});

//technically it's an HTML collection -> have to convert to 
//actual array first


// can also do via for

for (let i = 0; i < items.length; i ++){
    items[i].style.backgroundColor = 'pink';
}



// get elements by tag name 

var li = document.getElementsByTagName('li');
console.log(li);
Array.from(li).forEach((item) => {
    item.style.backgroundColor = 'blue';
});

for (var i = 0; i < li.length; i++){
    li[i].style.backgroundColor = 'blue';
}

//Query selector -> can use any CSS selector
 
var input = document.querySelector('input'); 
input.value  = 'hello world'; 

var submit = document.querySelector('input[type = "submit"');
submit.value = "SEND";

// with selector -> first, last child + nth child
var nthChild = document.querySelector('.list-group-item:last-child');
nthChild.style.color = 'red';


// queryselector ALL 

var titles = document.querySelectorAll('.title');

console.log(titles);



//using pseudo selector -> pseudo selectors 
var odd = document.querySelectorAll('li:nth-child(odd)');

for (var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'pink'; 
}
  


//Traversing the DOM 
var itemList = document.querySelector('#items');
//lets look at the parent node property 
console.log(itemList.parentNode); 


//can use this as a selector 
itemList.parentNode.style.backgroundColor = 'pink';


//can keep chaining these on 
itemList.parentNode.parentNode.parentNode.style.backgroundColor = 'lightgrey';
//can use parentElement (more or less same thing)

//child nodes

console.log(itemList.childNodes);
//this is giving us node list(essentially an array)
//but childnodes includes line breaks "in the file?"

//use children instead 
console.log(itemList.children);
// -> doesnt include linebreaks but is no longer a node list is
//HTML collection 

console.log(itemList.children[1]);
itemList.children[1].style.color = 'orange';


//first child
//itemList.firstChild.style.color = 'yellow';

console.log(itemList.firstChild);
// just like childNodes includes line breaks/ text nodes 

console.log(itemList.firstElementChild);
itemList.firstElementChild.style.color = 'yellow';


//also same above for last child and lastElementChild  



//getting next sibling 
console.log(itemList.nextSibling);
//same w first and las tchild -> line break 

console.log(itemList.nextElementSibling);

// previous sibling 

console.log(itemList.previousElementSibling);


//now creating elements inside the DOM 
var newDiv = document.createElement('div');

// add class
newDiv.className = 'item'; 

//add id
newDiv.id = 'newid';

//adding attributes -> (param , value)
newDiv.setAttribute('title', 'yeeerr');

// create something in it -> create a text node and append ? 

var newDivText = document.createTextNode('hello there');

//now we append it to the div 
newDiv.appendChild(newDivText);

//but now we insert it into the dom (rn just exisitng 
//inside js not the DOM)
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

//what we're inserting, and before what
container.insertBefore(newDiv, h1);


//now we can treat it like any other eleement 


newDiv.style.fontSize = '50px';



// Events -> interactive to DOM

//adding event listeners best practice for adding events 

/*
var button = document.getElementById('button').addEventListener
('click', function() {
    console.log('button is clicked YAHOOOO');
});

*/


//this is the ideal way of doing things 
 
//var button = document.getElementById('button').addEventListener
//('click', buttonClick);


// can pass in event param
function buttonClick(e){
 //console.log('button clicked');
 //document.getElementById('header-title').textContent = 'Changed';
 //document.querySelector('#main').style.backgroundColor = 'red';
 console.log(e);
 //can also see element clicked via e.target
 console.log(e.target);
 console.log(e.target.id);
 console.log(e.target.className);
 console.log(e.target.classList); // will give something like an array


 var output = document.getElementById('output');
 output.innerHTML = '<h3>'+e.target.id + '</h3>';

 console.log(e.type);

 //entire client 
 console.log(e.clientX);
 console.log(e.clientY);


 // wrt where you are element wise 
 console.log(e.offsetX, e.offsetY);

 //can test to see if while clicked alt key, or other 
 //keys were being pressed too 
 console.log(e.altkey); 
 console.log(e.ctrlkey);
 console.log(e.shiftkey);
}



// looking at other event types 

var button2 = document.getElementById('button');
var box = document.getElementById('box'); 
/*
button2.addEventListener(
    'click', runEvent
);
*/


//button2.addEventListener('dblclick', runEvent);
//button2.addEventListener('mouseover', runEvent);
//have all types mouse out mouseneter te
//box.addEventListener('mousemove', runEvent);

//mouse leve/enter just the parent
// 



/*
function runEvent(e){
console.log('EVENT Type: ' + e.type);

    output.innerHTML = '<h3> MouseX: ' + e.offsetX + '</h3><h3>' + 
    'MouseY: ' + e.offsetY + '</h3>';
}

*/ 
 
// keyboard events
var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');

//itemInput.addEventListener('keydown',runEvent);
// keypress, keyup 


//itemInput.addEventListener('focus', runEvent);
itemInput.addEventListener('blur', runEvent);

itemInput.addEventListener('input',runEvent);

function runEvent(e){
    console.log('Event type: :' + e.type); 
    // catching what you actually type
    console.log(e.target.value);
    document.getElementById('output').innerHTML = `${e.target.value}`
}


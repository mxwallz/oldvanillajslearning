 var form = document.getElementById('addForm');
 var itemList = document.getElementById('items');


 //form submit event 
 form.addEventListener('submit', addItem); 

 //Delete event
 itemList.addEventListener('click', removeItem);

 //filter event
 filter.addEventListener('keyup', filterItems);


 function addItem(e){
    e.preventDefault();

    // get input value 
    var newItem = document.getElementById('item');

    //create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';


    // not e.target.val 
    var newText = document.createTextNode(newItem.value); 


    li.appendChild(newText);


    //create and add button 

    var deleteBtn = document.createElement('button')


    //add classes to delete button 
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // append textnode
    deleteBtn.appendChild(document.createTextNode('X'));
    
    // append button to li 
    li.appendChild(deleteBtn); 



    itemList.appendChild(li);
 }


 function removeItem(e){
    if (e.target.classList.contains('delete')){
        console.log(1);
        if (confirm('are you sure?')){
            // what we're clicking on is button -> 
            //we want the parent element (li )
            var li = e.target.parentElement 
            itemList.removeChild(li);
        }
    }
 }



 function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();


    // get items/ li
    var items = itemList.getElementsByTagName('li');

    // convert to an array
    Array.from(items).forEach((item) =>{
        var itemName = item.firstChild.textContent;
        
        if(itemName.toLowerCase().indexOf(text) != -1){

            // if it's equal, we wantt to display it 
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }

    })

 }
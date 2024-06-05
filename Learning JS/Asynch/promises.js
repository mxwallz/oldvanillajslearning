/*
before es6 was introduced -> 
async code was written in the form of callbacks
-> then promises were introduceds in the lang in es6 

*/


//mimic getting blog posts from a server 
// and creating posts from them 
const posts = [
    {title: 'post one', body: 'this is body 1'},
    {title: 'post two', body: 'this is body 2'}
]; 

//leave get posts  
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {

            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;

    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post); 

            const error = true;

            // do some kind of errror checking 
            if (!error){
                resolve();
            }else{
                //if it rejects -> need to catch 
                reject('Error: something went wrong');

            }
        }, 2000);

    }); 
}


createPost({ title: 'post3', body: 'this is body 3'}, getPosts)
.then(getPosts)
.catch(error => console.log(error));

/*
fetch API uses promises -> 
axios
mongoose library (node js library for mongo )


mostly going to dealw the response -> 
should know how to create them yourself tho 

don't want to keep having promises. 
.then.then.thenn etc
can use => promise.all 


*/
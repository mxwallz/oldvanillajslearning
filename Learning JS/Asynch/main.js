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


function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {

            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;

    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post); 
        callback();
    }, 2000);
}


createPost({ title: 'post3', body: 'this is body 3'}, getPosts);
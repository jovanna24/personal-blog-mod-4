
const blogPost = document.getElementById('blog-input')

const submitBtn = document.getElementById('submit')


const blogArr =JSON.parse(localStorage.getItem('blogEntry')) || []; 



blogPost.addEventListener('submit', function (event){
    event.preventDefault();

    const usernameEl = document.getElementById('username').value;
    console.log(usernameEl);
    const titleEl = document.getElementById('title').value;
    console.log(titleEl);
    const contentEl = document.getElementById('content').value;
    console.log(contentEl);

    const blogEntry = {
        usernameEl: usernameEl,
        titleEl: titleEl,
        contentEl: contentEl,



    };


    blogArr.push(blogEntry);

    localStorage.setItem('blogEntry', JSON.stringify(blogArr)); 
    window.open("./blog.html")

});








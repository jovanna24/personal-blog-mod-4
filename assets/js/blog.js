const themeButton = $('#theme-btn'); 
const postList = document.querySelector('#post-list')

let isLight = true; 

themeButton.on('click', function(){
    if (isLight){
        $('body').css({'background-color': 'rgb(184, 204, 204)', color: 'rgb(23, 70, 79)' }); 
        isLight = !isLight;
    }else{
        $('body').css({'background-color': 'rgb(23, 70, 79)', color: 'rgb(184, 204, 204)' }); 
        isLight = !isLight;
    }
});



function renderBlogPost() {

    const allPosts = JSON.parse(localStorage.getItem('blogEntry'));
    


    for (let i = 0; i < allPosts.length; i++) {
        const post =allPosts[i];
    
        const li = document.createElement('li');
        const h2 = document.createElement('h2'); 
        h2.textContent= `Title: ${post.titleEl} `
        const p = document.createElement('p')
        p.textContent= `Post: ${post.contentEl} `
        const p2 = document.createElement('p'); 
        p2.textContent = `Author: ${post.usernameEl} `
        li.appendChild(h2)
        li.appendChild(p)
        li.appendChild(p2)
        postList.appendChild(li);
    }

}
renderBlogPost(); 

function init(){
    const storedPosts = JSON.parse(localStorage.getItem('allPosts'));

    if (storedPosts !== null) {
        allPosts = storedPosts;
    }
};
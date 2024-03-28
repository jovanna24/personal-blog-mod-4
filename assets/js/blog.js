const themeButton = $('#theme-btn'); 
const postList = document.querySelector('#post-list')

let isLight = true; 

themeButton.on('click', function(){
    if (isLight){
        $('body').css({'background-color': '#1a1a1a', color: '#d9e9e8' }); 
        isLight = !isLight;
    }else{
        $('body').css({'background-color': '#d9e9e8', color: '#1a1a1a' }); 
        isLight = !isLight;
    }
});



function renderBlogPost() {

    const lastPost = JSON.parse(localStorage.getItem('blogEntry'));
    
    if (lastPost !== null) {
        document.querySelector('.blog-title').textContent = lastPost.titleEl; 
        document.querySelector('.blog-content').textContent = lastPost.contentEl;
        document.querySelector('.username-saved').textContent = lastPost.usernameEl;
    }

    for (let i = 0; i < lastPost.length; i++) {
        const post =lastPost[i];
    
        const li = document.createElement('li');
        li.textContent = post;

        lastPost.appendChild(li);
    }

}
renderBlogPost(); 

function init(){
    const storedPosts = JSON.parse(localStorage.getItem('lastPost'));

    if (storedPosts !== null) {
        lastPost = storedPosts;
    }
};
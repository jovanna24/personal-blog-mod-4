const formEl = $('#blog-input')
const usernameEl = $('input[name="username"]'); 
const titleEl = $('input[name="title"]'); 
const contentEl = $('input[name="content"]'); 

function handleFormSubmit(event){

    event.preventDefault(); 

    console.log('Username:', usernameEl.val());
    console.log('Title:', titleEl.val());
    console.log('Content:', contentEl.val());


}

formEl.on('submit', handleFormSubmit);
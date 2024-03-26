const themeButton = $('#theme-btn'); 

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
var domId = function (id) {
    return document.getElementById(id);
}
domId("btnSignin").addEventListener('click', function () {
    var bg_black = document.querySelector('.background_black');
    var modalSignin = document.querySelector('.modal.signin');   
    modalSignin.classList.add("visibleSignin");
    bg_black.classList.add("visibleBg");     
})
domId('btnCloseSignin').addEventListener('click', function () {
    var bg_black = document.querySelector('.background_black');
    var modalSignin = document.querySelector('.modal.signin');   
    modalSignin.classList.remove("visibleSignin");
    bg_black.classList.remove("visibleBg");   
})

domId('btnSignup').addEventListener('click', function () {
    var bg_black = document.querySelector('.background_black');
    bg_black.classList.add("visibleBg"); 
    var modalSignUp = document.querySelector('.modal.signup');   
    modalSignUp.classList.add("visibleSignup");
})
    
domId('btnCloseSignup').addEventListener('click', function () {
    var bg_black = document.querySelector('.background_black');
    var modalSignUp = document.querySelector('.modal.signup');   
    modalSignUp.classList.remove("visibleSignup");
    bg_black.classList.remove("visibleBg");   
})
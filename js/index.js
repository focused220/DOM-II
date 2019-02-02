// Your code goes here

/*--import stops all normal js events for some reason----
 import {TweenMax, CSSPlugin, AttrPlugin, CSSRulePlugin } from "gsap/all"; */

/*---Documentation said to make a declaration of plugins to handle Tree Shaking issues with plugins--- 
const plugins = [TweenMax, CSSPlugin, AttrPlugin, CSSRulePlugin];*/





//Element Selectors
let h1 = document.querySelector('.logo-heading');
let navblock = document.querySelector('.nav');
let navlinks = document.querySelectorAll('.nav-link');
let navlinksArray = Array.from(navlinks);
let images = document.querySelectorAll('img');
let imagesArray = Array.from(images);
let intro = document.querySelector('.intro');
let h2 = document.querySelectorAll('h2');
let h4 = document.querySelectorAll('h4');
let textArea = document.querySelectorAll('.text-content');
let destination = document.querySelectorAll('.destination');
let p = document.querySelectorAll('p');
let pArray = Array.from(p);
let footer = document.getElementsByClassName('footer');


//Event Listenters
imagesArray.forEach(function(image){
    image.addEventListener('mouseenter',(event) => {
        image.style.border = "6px dashed skyblue";
        event.stopPropagation();
    });
    image.addEventListener('mouseleave', (event) => {
        image.style.border = "none";
    });
});

h1.addEventListener('mouseover',(event) => {
    h1.textContent = "FUN BUS !!!";
    h1.style.color = "skyblue";
    h1.style.fontWeight = "700";
    h1.style.textShadow = "5px 10px yellow";
    event.stopPropagation();

});
h1.addEventListener('mouseout',(event) => {
    h1.textContent = 'Choose an Excursion :]';
    h1.style.color = "black";
    h1.style.fontWeight = "none";
    h1.style.textShadow = "none";   
    event.stopPropagation(); 
});
/*---Tried nesting GSAP data within eventListener scope----
h1.addEventListener('load', (event) => {
    import {TweenMax, CSSPlugin, AttrPlugin, CSSRulePlugin } from "gsap/all"; 
    const plugins = [TweenMax, CSSPlugin, AttrPlugin, CSSRulePlugin];
    TweenMax.to(h1, 2, {width: "50%", height: "40%"});
})*/


navlinksArray.forEach(function(link){
    link.addEventListener('mouseover',(event) =>{
        link.style.color = "skyblue";
        link.style.fontWeight = "700";
        link.style.textShadow = "5px 7px yellow";
        link.style.fontFamily = "'Indie Flower', cursive"
    });
    link.addEventListener('mouseout',(event) =>{
        link.style.color = "black";
        link.style.fontWeight = "400";
        link.style.textShadow = "none";
        link.style.fontFamily = "none"
    });
    link.addEventListener('click',(event) =>{
        alert("That goes nowhere!!!")
    });
});

pArray.forEach((P) => {
    P.addEventListener('keydown', (event) =>{
        P.style.color = "transparent";
        P.style.textShadow = "0 0 5px rgba(0,0,0,0.5)";
    });
});

textArea.forEach((ta) => {
    ta.addEventListener('mouseenter', (event) =>{
        ta.style.backgroundColor = "skyblue";
        ta.style.color = "white";
    });
    ta.addEventListener('mouseleave', (event) =>{
        ta.style.backgroundColor = "white";
        ta.style.color = "black";
    });
});

destination.forEach((d) => {
    d.addEventListener('mouseenter', (event) =>{
        d.style.backgroundColor = "skyblue";
        d.style.color = "white";
    });
    d.addEventListener('mouseleave', (event) =>{
        d.style.backgroundColor = "white";
        d.style.color = "black";
    });
});




//Stop Propagation
intro.addEventListener('mouseover', (event) =>{
    intro.style.border = "4px dashed yellow";
    event.stopPropagation();
});

intro.addEventListener('mouseleave', (event) =>{
    intro.style.border = "none";
});


//GSAP - TweenMax usage
//TweenMax.to(".logo-heading",8, {left:800});

//Crew bubble naviagtion
let btns = document.querySelectorAll(".toggle-button")
let currentLocation = location.href
for(let i=0;i<btns.length;i++){
    if (btns[i].href === currentLocation) {
        btns[i].classList.add('opacity')
    }

}
//Main nav bar
let currentLocation1=location.pathname.slice(1,2)==""?"/":location.pathname.slice(1,2)
let mainNav=document.querySelectorAll('#link')
for(let i=0;i<mainNav.length;i++){
    mainNav[i].classList.remove('underline')
    mainNav[i].classList.add('hover')
    if (mainNav[i].dataset.navtype === currentLocation1) {
        mainNav[i].classList.add('underline')
        mainNav[i].classList.remove('hover')

    }

}
//Destination page navigation
let link=document.querySelectorAll("#links1");
for(let i=0;i<link.length;i++){
    link[i].classList.remove('underline')
    link[i].classList.add('hover')
    if (link[i].href === currentLocation) {
        link[i].classList.add('underline')
        link[i].classList.remove('hover')

    }
}
//Technology page navigation
let numB=document.querySelectorAll(".num-btn");
for(let i=0;i<numB.length;i++){
    numB[i].classList.remove('active')
    numB[i].classList.add('hover1')
    if (numB[i].href === currentLocation) {
        numB[i].classList.add('active')
        numB[i].classList.remove('hover1')

    }
}

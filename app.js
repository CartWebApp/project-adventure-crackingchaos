// import {story} from "story.js";
let position = [];

function goTo(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screen).classList.add('active');
    findPos();
}

function findPos(){
    let current = document.querySelectorAll('active');
    position.push(current);
    console.log(position);
};
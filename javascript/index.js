const info = [{
    id: 1,
    name: "Diana Miller",
    img: "./images/image-diana.jpg",
    job: "Marketing Manager",
    text: "\" Smart Slider 3 is more than powerful. It is amazing. Thanks to developer for putting so much effort to create this well-though plugin. \"",
},
{
    id: 2,
    name: "Zack Salomon",
    img: "./images/image-zack.jpg",
    job: "Head Developer",
    text: "\" I've been searching for a good free slider plugin for a long time. This is definitely the one! For a free plugin it does a lot of things! \"",
},
{
    id: 3,
    name: "Tanya Sinclair",
    img: "./images/image-tanya.jpg",
    job: "UX Engineer",
    text: "\" I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. \"",
},
{
    id: 4,
    name: "John Tarkpor",
    img: "./images/image-john.jpg",
    job: "Junior Front-end Developer",
    text: "\" If you want to lay the best foundation possible i'd recommend taking this course. The depth the instrucors go into is incredible. I now feel so confident about starting up as a professional developer. \"",
},
];

const txt = document.querySelector(".text");
const personName = document.querySelector(".name");
const job = document.querySelector(".job");
const img = document.querySelector(".img-person");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
});

function showPerson(person){
    const item = info[person];
    txt.textContent = item.text;
    personName.textContent = item.name;
    job.textContent = item.job;
    img.src = item.img;
}

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > info.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = info.length - 1;
    }
    showPerson(currentItem);
});

document.addEventListener("keydown", function(event){
    if(event.key === "ArrowRight"){
        currentItem++;
        if(currentItem > info.length - 1){
            currentItem = 0;
        }
    } else if(event.key == "ArrowLeft"){
        currentItem--;
        if(currentItem < 0){
            currentItem = info.length - 1;
        }
    }
    showPerson(currentItem);
});
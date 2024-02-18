const inputBox = document.querySelector("#inputBox");
const listContainer = document.querySelector("#listContainer");
const addButton = document.querySelector(".add");
const spanCounter = document.querySelector(".counter");
const allButton = document.querySelector(".all");
const activeButton = document.querySelector(".active");
const completedButton = document.querySelector(".completed");
const clearButton = document.querySelector(".clear");
let counter = localStorage.getItem("count");


inputBox.addEventListener("keydown", function(e){
    if(e.key === "Enter")
      return addTask()
});


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
};

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
};
showTask();


const inputBox = document.querySelector("#inputBox");
const listContainer = document.querySelector("#listContainer");
const addButton = document.querySelector(".add");
const spanCounter = document.querySelector(".counter");
const allButton = document.querySelector(".all");
const activeButton = document.querySelector(".active");
const completedButton = document.querySelector(".completed");
const clearButton = document.querySelector(".clear");
let counter = localStorage.getItem("count");


addButton.addEventListener("click", addTask);
listContainer.addEventListener("click", checkRemove);
inputBox.addEventListener("keydown", function(e){
    if(e.key === "Enter")
      return addTask()
});

function addTask() {
  if (inputBox.value === "") {
    alert("Write task befor add");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    li.classList.add("all");
    li.classList.add("active");
    listContainer.append(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.append(span);
    counter++;
    spanCounter.innerHTML = counter;
  }
  inputBox.value = "";
  saveData();
};

function checkRemove(event) {
  const eT = event.target;
  if (eT.tagName === "LI") {
    eT.classList.toggle("checked");
    saveData();
    if (eT.className.includes("checked")) {
      counter--;
      spanCounter.innerHTML = counter;
    } else {
      counter++;
      spanCounter.innerHTML = counter;
    }
  } 
  if (eT.tagName === "SPAN") {
    if(eT.parentElement.className.includes("checked")){
      eT.parentElement.remove()
    } else {
      eT.parentElement.remove()
      counter--;
      spanCounter.innerHTML = counter;
      saveData();
    }
  }
};


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
};

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
};
showTask();


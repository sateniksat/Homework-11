// function count(){
// const leftItems= document.querySelectorAll('.uncomplited');
// const result = leftItems.length;
// const counter= document.querySelectorAll('.counter');
// counter.innerText =result;}
// count();
// const addtodoli = () =>{ return result++};
// const drawMessage = () => `It's a Draw!`;
const input = document.getElementById("myInput");
const todoList = document.querySelector(".todo-list");

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && input.value === "") {
    alert("You must write something!");
  }
  if (e.key === "Enter" && input.value !== "") {
    let todoLI = document.createElement("li");
    let div1=document.createElement("div");
    
    // todoLI.classList.add("uncomplited");
    todoLI.innerHTML = `<div class="mark uncompleted"><div class="tik"></div></div>${input.value}<span class="close"></span>`;
    todoList.appendChild(todoLI);
    // result.innerHTML = addtodoli();
    input.value = "";
  }
});

document.querySelector(".clear").addEventListener("click", () => {
  document.querySelectorAll("li.completed").forEach((element) => {
    element.closest("li").remove();
  });
});

document.querySelectorAll(".mark").forEach((box) =>
  box.addEventListener("click", () => {
    box.classList.toggle("completed");
    box.querySelector(".tik").classList.toggle("completed");
    box.closest("li").classList.toggle("completed");
  })
);
// document.querySelectorAll(".mark.uncompleted").forEach((box) =>
//   box.addEventListener("click", () => {
//     box.classList.replace("uncompleted", "completed");
//     box.querySelector(".tik").classList.add("completed");
//     box.closest("li").classList.add("completed");
//   })
// );
// document.querySelectorAll('.mark').forEach(element => {
//     element.addEventListener('click', (evt) => {
//         evt.target.classList.add("complited");

// });
// // });
// // });
// // .addEventListener('click', (evt) => {
// //         evt.target.classList.add("complited");

// // });
// document.querySelector('.close').addEventListener('click', () => {
//     document.querySelectorAll('li.completed').forEach(item => {
//         (item.closest('li').remove());
//     }});
// });

//style
document.querySelector(".mode.moon").addEventListener("click", () => {
  document.querySelector(".mode.moon").style.display = "none";
  document.querySelector(".mode.sun").style.display = "unset";
  document
    .querySelectorAll("body,.todo-container,input,.status,.result")
    .forEach((item) => {
      item.classList.add("dark");
    });
  document.querySelectorAll(".mark").forEach((item) => {
    item.classList.add("dark");
  });
  document.querySelectorAll("li").forEach((item) => {
    item.classList.add("dark");
  });
});
document.querySelector(".mode.sun").addEventListener("click", () => {
  document.querySelector(".mode.sun").style.display = "none";
  document.querySelector(".mode.moon").style.display = "unset";
  document.querySelectorAll(".dark").forEach((item) => {
    item.classList.remove("dark");
  });
});

// function count(){
// const leftItems= document.querySelectorAll('.uncomplited');
// const result = leftItems.length;
// const counter= document.querySelectorAll('.counter');
// counter.innerText =result;}
// count();
// const addtodoli = () =>{ return result++};
// const drawMessage = () => `It's a Draw!`;
const input = document.getElementById("myInput");
const  todoList = document.querySelector(".todo-list");

input.addEventListener('keypress' ,function(e){
    if (e.key === "Enter" && input.value === '') {
        alert("You must write something!");
      }
    if(e.key === "Enter" && input.value !== ''){
        let todoLI = document.createElement("li");
        todoLI.classList.add("uncomplited");
        todoLI.innerHTML=`<div class="mark "><div class="tik"></div></div>${input.value}<span class="close"></span>`;
        todoList.appendChild(todoLI);
        // result.innerHTML = addtodoli();
        input.value = "";
    }
});

document.querySelector('.clear').addEventListener('click', () => {
    document.querySelectorAll('li.completed').forEach(element => {
        (element.closest('li').remove());
    });
});
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
document.querySelector('.mode').addEventListener('click', () => {
    // document.querySelector('.mode').style.display=none;
    document.querySelector('body').classList.add("dark");
    // document.querySelector('.mode').classList.add("dark");
    });
    document.querySelector('.mode.dark').addEventListener('click', () => {
        document.querySelector('body').classList.remove("dark");
            
        });


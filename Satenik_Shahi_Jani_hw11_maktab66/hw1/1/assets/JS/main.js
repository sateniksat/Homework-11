// function count(){
// const leftItems= document.querySelectorAll('.uncomplited');
// const result = leftItems.length;
// const counter= document.querySelectorAll('.counter');
// counter.innerText =result;}
// count();
// const addtodoli = () =>{ return result++};
// const drawMessage = () => `It's a Draw!`;
function count(){
  let countList=document.querySelectorAll("li.uncompleted").length;
  let counter=document.querySelector(".counter");
  counter.innerText=null;
  counter.innerText=countList;
  }
  count();
  const input = document.getElementById("myInput");
  const todoList = document.querySelector(".todo-list");
  let value1 = document.createTextNode(input.value);
  
  //add itm
  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && input.value === "") {
      alert("You must write something!");
    }
    if (e.key === "Enter" && input.value !== "") {
      let todoLI = document.createElement("li");
      
      todoLI.classList.add("uncomplited");    
      todoLI.innerHTML = `<div class="mark uncompleted"><div class="tik"></div></div>${input.value}<span class="close"></span>`;
      // let mark = document.createElement("div");
      // mark.className="mark uncomplited";
      // // mark.classList.add("uncomplited");    
      // todoLI.appendChild(mark);
      // let tik = document.createElement("div");
      // tik.className="tik";
      // mark.appendChild(tik);
      // todoLI.innerHTML = input.value;
      // let close = document.createElement("span");
      // close.className="close";
      // todoLI.appendChild(close);
      todoList.appendChild(todoLI);

      if( document.querySelector("body").classList.contains("dark")){
        todoLI.classList.add("dark");  
        document.querySelectorAll(".mark").forEach((item) => {
          item.classList.add("dark");
        });
      }
      // result.innerHTML = addtodoli();
      count();
      input.value = "";
    }
  });
  //clear
  document.querySelector(".clear").addEventListener("click", () => {
    document.querySelectorAll("li.completed").forEach((element) => {
      element.closest("li").remove();
    });
    count();
  });
  //mark
  document.querySelectorAll(".mark").forEach((box) =>
    box.addEventListener("click", () => {
      box.classList.toggle("completed");
      box.classList.toggle("uncompleted");
      box.querySelector(".tik").classList.toggle("completed");
      box.closest("li").classList.toggle("completed");
      box.closest("li").classList.toggle("uncompleted");
      count();
    })
    
  );
  //close
  document.querySelectorAll(".close").forEach((box) =>
    box.addEventListener("click", () => {
      box.closest("li").remove();
      count();
    })
  );
  function colorChange() {
    document.querySelectorAll(".btn").forEach((element) => {
      if (element.classList.contains("blue")) {
        element.classList.remove("blue");
      }
    });
  }
  //all
  document.querySelector(".all").addEventListener("click", () => {
    colorChange();
    document.querySelector(".all").classList.add("blue");
    document.querySelectorAll("li").forEach((element) => {
      element.classList.remove("display-none");
    });
  });
  //active
  document.querySelector(".active").addEventListener("click", () => {
    colorChange();
    document.querySelector(".active").classList.add("blue");
  
    document.querySelectorAll("li.completed").forEach((element) => {
      element.closest("li").classList.add("display-none");
    });
    document.querySelectorAll("li.uncompleted").forEach((element) => {
      element.closest("li").classList.remove("display-none");
    });
  });
  //completed
  document.querySelector(".complete").addEventListener("click", () => {
    colorChange();
    document.querySelector(".complete").classList.add("blue");
    document.querySelectorAll("li.completed").forEach((element) => {
      element.closest("li").classList.remove("display-none");
    });
    document.querySelectorAll("li.uncompleted").forEach((element) => {
      element.closest("li").classList.add("display-none");
    });
  });
  
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
  
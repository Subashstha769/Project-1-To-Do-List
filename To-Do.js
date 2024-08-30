let inputfield = document.querySelector("#inputfield");
let add = document.querySelector("#add-btn");
let list = document.querySelector(".task-container");
let error = document.querySelector(".error");

// Event & condition;

add.addEventListener("click", (event)=>{
    event.preventDefault();
    if(inputfield.value==""){
        error.innerHTML=" 'Please Enter Your Task'";
    }
    else{
        error.innerHTML="";
        let para = document.createElement('p');
        para.innerHTML = inputfield.value + "<hr>";
        para.style.fontSize ="20px";
        para.style.fontFamily ="Fantasy";
        para.style.cursor = "pointer";

        list.appendChild(para);
        inputfield.value = "";

        para.addEventListener("click",()=>{
            para.style.textDecoration = "line-through";
            para.style.color = "green";
            

        });
        para.addEventListener("dblclick",()=>{
            para.remove();
        })

        

    }
    
})


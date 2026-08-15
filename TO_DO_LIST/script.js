const addTask=document.getElementById("add-task");
const input=document.getElementById("task-input");
const taskContainer=document.querySelector(".task-container");
const errorMsg=document.querySelector(".error-msg");
const allBtn=document.getElementById("all");
const activeBtn=document.getElementById("active");
const completedBtn=document.getElementById("completed");
const emptyMsg=document.querySelector(".empty-msg");


const priorityOptions=document.querySelectorAll(".priority-option");
let selectedPriority="high";
priorityOptions.forEach((button)=>{
    button.addEventListener("click",()=>{
        priorityOptions.forEach((btn)=>{
            btn.classList.remove("active");
        });
        button.classList.add("active");
        selectedPriority=button.dataset.priority;
    });
});


addTask.addEventListener('click' , ()=>{
    const task=input.value.trim();
    if (task===""){
        errorMsg.textContent="Please Enter A Task!!";
        return;
    } 
    else{
        errorMsg.textContent="";
        
        // creating task-item
        const taskElement=document.createElement("div");
        taskElement.classList.add("task-item");
        
        // LEFT TASK
        const taskLeft=document.createElement("div");
        taskLeft.classList.add("task-left");
        
        // INPUT-CHECKBOX
        const checkBox=document.createElement("input");
        checkBox.type="checkbox";
        
        // TASK
        const taskTextElement=document.createElement("p");
        taskTextElement.textContent=task;
        
        // APPEND INPUT AND TASK
        taskLeft.appendChild(checkBox);
        taskLeft.appendChild(taskTextElement);
        
        // APPEND LEFT TASK
        taskElement.appendChild(taskLeft);
        
        // RIGHT TASK
        const taskRight=document.createElement("div");
        taskRight.classList.add("task-right");
        
        // HIGH
        
        const priority=document.createElement("span");
        // priority.classList.add("priority-high");
        priority.textContent=`• ${selectedPriority}`;
        
        if(selectedPriority==="High"){
            priority.classList.add("priority-high");
        }
        else if(selectedPriority==="Medium"){
            priority.classList.add("priority-medium");
        }
        else{
            priority.classList.add("priority-low");
        }


        // APPEND HIGH
        taskRight.appendChild(priority);
        
        // EDIT BTN
        const editBtn=document.createElement("button");
        editBtn.classList.add("edit-btn");
        const editIcon=document.createElement("i");
        editIcon.classList.add("ri-edit-line");
        editBtn.appendChild(editIcon);
        
        // APPEND EDIT BTN
        taskRight.appendChild(editBtn);
        
        // DELETE BTN
        const deleteBtn=document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        const deleteIcon=document.createElement("i");
        deleteIcon.classList.add("ri-delete-bin-6-line");
        deleteBtn.appendChild(deleteIcon);
        
        // APPEND DELETE BTN
        taskRight.appendChild(deleteBtn);

        // APPEND LEFT TASK , RIGHT TASK , TASK ELEMENT
        taskElement.appendChild(taskLeft);
        taskElement.appendChild(taskRight);
        taskContainer.appendChild(taskElement); 

        // DELETE BUTTON
        deleteBtn.addEventListener('click', ()=>{
            taskElement.remove();
        });

        // SAVE BUTTON
        editBtn.addEventListener('click',()=>{
            const editInput=document.createElement("input");
            editInput.type="text";
            editInput.value=taskTextElement.textContent;
            taskTextElement.replaceWith(editInput);
            editInput.focus();

            const saveButton=document.createElement("button");
            saveButton.classList.add("save-btn");
            const saveIcon=document.createElement("i");
            saveIcon.classList.add("ri-check-line");
            saveButton.appendChild(saveIcon);
            editBtn.replaceWith(saveButton);

            saveButton.addEventListener('click',()=>{
                const updatedTask=editInput.value.trim();
                if(updatedTask===""){
                    return;
                }
                taskTextElement.textContent=updatedTask;
                editInput.replaceWith(taskTextElement);
                saveButton.replaceWith(editBtn);
            });
        });

        // TASK COMPLETED
        checkBox.addEventListener("change",()=>{
            if (checkBox.checked){
                taskTextElement.classList.add("completed-task");
            }
            else{
                taskTextElement.classList.remove("completed-task");
            }
        });
        // const priorityBadge=document.createElement("span");
        // priorityBadge.classList.add("priority-high");
        // priorityBadge.textContent="• High";
        // taskRight.appendChild(priorityBadge);

        // PRIORITY BADGE
    };
});

allBtn.addEventListener("click", () => {
    setActiveButton(allBtn);
    const tasks = taskContainer.querySelectorAll(".task-item");
    tasks.forEach((task) => {
    const checkbox = task.querySelector("input[type='checkbox']");
    const taskText = task.querySelector("p");
        task.style.display = "flex";
        if (checkbox.checked) {
            taskText.classList.add("completed-task");
        } else {
            taskText.classList.remove("completed-task");
        }
    });
});

activeBtn.addEventListener('click',()=>{
    setActiveButton(activeBtn);
    const tasks=taskContainer.querySelectorAll(".task-item");
    tasks.forEach((task)=>{
        const checkbox=task.querySelector("input[type=checkbox]");
        if (checkbox.checked){
            task.style.display="none"
        }
        else{
            task.style.display="flex"
        }
    });
});
completedBtn.addEventListener('click',()=>{
    setActiveButton(completedBtn);
    const tasks=taskContainer.querySelectorAll(".task-item");
    tasks.forEach((task)=>{
        const checkbox=task.querySelector("input[type=checkbox]");
        if (checkbox.checked){
            task.style.display="flex"
            const taskText=task.querySelector("p");
            taskText.classList.remove("completed-task");
        }
        else{
            task.style.display="none"
            
        }
    });
})
function setActiveButton(button){
    allBtn.classList.remove("active");
    activeBtn.classList.remove("active");
    completedBtn.classList.remove("active");
        button.classList.add("active");
}

// const lightMode=document.querySelector(".light-mode");
// const darkMode=document.querySelector(".dark-mode");

// darkMode.addEventListener('click',()=>{
//     document.body.classList.add("dark");
//     darkMode.classList.add("active");
//     lightMode.classList.remove("active");
// })
// lightMode.addEventListener('click',()=>{
//     document.body.classList.remove("dark");
//     lightMode.classList.add("active");
//     darkMode.classList.remove("active");
// })

const lightMode = document.querySelector(".light-mode");
const darkMode = document.querySelector(".dark-mode");

darkMode.addEventListener("click", () => {
    document.body.classList.add("dark");

    darkMode.classList.add("active");
    lightMode.classList.remove("active");
});

lightMode.addEventListener("click", () => {
    document.body.classList.remove("dark");

    lightMode.classList.add("active");
    darkMode.classList.remove("active");
});

const date=document.getElementById("date");
const day=document.getElementById("day");

const today=new Date();
date.textContent=today.toLocaleDateString("en-GB",{
    day:"numeric",
    month:"short",
    year:"numeric"
});

day.textContent=today.toLocaleDateString("en-GB",{
    weekday:"long"
})


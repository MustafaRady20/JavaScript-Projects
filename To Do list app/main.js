window.addEventListener('load',()=>{
    const form=document.querySelector("#new_Task_form");
    const input=document.querySelector("#new_task_input");
    const list_el=document.querySelector("#tasks");

    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        const task=input.value;
        if(!task){
            alert("Please fill out the task");
            return;
        }
        const task_el=document.createElement("div");
        task_el.classList.add("task");
        const task_content_el=document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);
        const task_input_el=document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type="text";
        task_input_el.value=task;
        task_input_el.setAttribute("readonly","readonly");
        task_content_el.appendChild(task_input_el)
        task_actions_el=document.createElement("div");
        task_actions_el.classList.add("action")
        const edit_el=document.createElement("button")
        edit_el.classList.add("edit")
        edit_el.innerHTML="Edit"
        const delet_el=document.createElement("button")
        delet_el.classList.add("delete")
        delet_el.innerHTML="Delete"
        task_actions_el.appendChild(edit_el)
        task_actions_el.appendChild(delet_el)
        task_el.appendChild(task_actions_el)
        list_el.appendChild(task_el)
        input.value="";

        edit_el.addEventListener('click',()=>{
        if(edit_el.innerText.toLowerCase()=="edit")
        {
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            edit_el.innerText="Save";
        }
        else
        {
            task_input_el.setAttribute("readonly", "readonly");
            edit_el.innerText="Edit";
        }
        });
        delet_el.addEventListener('click',()=>{
            list_el.removeChild(task_el);
        });
    });
});
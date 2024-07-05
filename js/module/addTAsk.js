const url =  `https://667788a1145714a1bd74f785.mockapi.io/tasks`

export const postTask = async (task)=>{
    let newTask = {
        task:task,
        status:"On hold"
    };

    let config = {
        method:'POST',
        headers:{"content-type":"application/json"},
        body:JSON.stringify(newTask)
    }
     
    await fetch(url,config)
}

export const printNewTask =async (getAllTask)=>{
    let data = await getAllTask();
    let lastTask;
    let plantilla;
    lastTask = data.at(-1);
    plantilla = /*html*/`
    <article id="${lastTask.id}" class="to__do__task">
        <p>${lastTask.task}</p>
        <div class="to__do__buttons">
            <div class="check__to__do">
                <img src="storage/img/checkmark.svg" alt="">
            </div>
            <div class="trash__to__do">
                <img src="storage/img/trash.svg" alt="">
            </div>
        </div>
    </article>`;

    return plantilla;
}
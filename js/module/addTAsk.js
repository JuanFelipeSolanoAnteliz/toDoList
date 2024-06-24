const url =  `https://6674179975872d0e0a950e53.mockapi.io/todoList`

export const postTask = async (task)=>{
    let config = {
        method:'POST',
        headers:{"content-type":"application/json"},
        body:JSON.stringify(task)
    }
    await fetch(url,config)
}

export const printNewTask =async ()=>{
    data = await getAllTask();
    let lastTask;
    let plantilla;
    lastTask = data.at(-1);
    plantilla = /*html*/`
    <article id="${lastTask.id}" class="to__do__task">
        <p>${input__search.value}</p>
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
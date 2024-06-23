
export const getReadyTasks = async(data)=>{
    let plantilla = ''
    data.forEach(element => {
        for(let i in element){
            if(element[i] === "ready"){
                plantilla+=/*html*/`
                <article class="mark__task">
                    <p>${element.task}</p>
                    <div class="mark__buttoms">
                        <div class="check__mark">
                            <img src="storage/img/checkmark _mark.svg" alt="">
                        </div>
                        <div class="trash__mark">
                            <img src="storage/img/trash_mark.svg" alt="">
                        </div>
                    </div>  
                </article>`;
                // console.log(element);
                // return /*html*/`<p>a</p>`
            }
        }
    });
    return plantilla;
}
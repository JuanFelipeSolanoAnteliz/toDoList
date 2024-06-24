
export const getReadyTasks = async(data)=>{
    let plantilla = ''
    data.forEach(element => {
        for(let i in element){
            if(element[i] === "ready"){
                plantilla+=/*html*/`
                <article id="${element.id++}" class="mark__task">
                    <p>${element.task}</p>
                    <div class="mark__buttoms">
                        <div id="check__ready" class="check__mark">
                            <img src="storage/img/checkmark_mark.svg" alt="">
                        </div>
                        <div id="trash__mark" class="trash__mark">
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

export const getOnholdTasks = async(data)=>{
    let plantilla = ''
    data.forEach(element => {
            for(let i in element){
                if(element[i] === "On hold"){
                    plantilla +=/*html*/`
                    <article class="to__do__task">
                        <p>${element.task}</p>
                        <div class="to__do__buttons">
                            <div class="check__to__do">
                                <img src="storage/img/checkmark.svg" alt="">
                            </div>
                            <div class="trash__to__do">
                                <img src="storage/img/trash.svg" alt="">
                            </div>
                        </div>
                    </article>`;
                };
            };
        });
    return plantilla;
}
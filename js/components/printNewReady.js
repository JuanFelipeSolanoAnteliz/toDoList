export const printNewReady = async(data)=>{
    let plantilla='';
    lastTask = data.at(-1);
    plantilla+=/*html*/`
    <article class="mark__task">
        <p>${text}</p>
        <div class="mark__buttoms">
            <div class="check__mark">
                <img src="storage/img/checkmark _mark.svg" alt="">
            </div>
            <div class="trash__mark">
                <img src="storage/img/trash_mark.svg" alt="">
            </div>
        </div>  
    </article>`;
    return plantilla;
}


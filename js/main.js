import { getAllTask } from "./module/app.js";
import { getReadyTasks } from "./components/readyTask.js";
import { getOnholdTasks } from "./components/onHoldTasks.js";
import { postTask } from "./module/addTAsk.js";
import { deleteTask } from "./module/deleteTAsk.js";
import { markAsReady } from "./module/markAsReady.js";
import { markAsUnready } from "./module/markAsUndready.js";
import { taskById } from "./module/taskById.js";
import { printNewTask } from "./module/addTAsk.js";




// clock in real time------------------------------------------

let real__time__clock = document.querySelector('#real__time__clock');
function updateDateTime() {
    const now = new Date();
    
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const formattedDateTime = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
    
    real__time__clock.textContent = formattedDateTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);
// ------------------------------------------------------------
let main = document.querySelector(".main");
let input__section = document.querySelector(".input__section");
let main__section__content = document.querySelector("#main__section__content");
let onHold__task = document.querySelector("#onHold__task");
let ready__Task = document.querySelector("#ready__Task");

let data = await getAllTask();



const  evetRefresh = () => {
    input__section.addEventListener('click', async e =>{
        if(e.target.tagName === 'BUTTON'){
            let closeInput = e.target.parentElement.querySelector('#input__search').value;
            await postTask(closeInput)
            e.target.parentElement.querySelector('#input__search').value = null;
            console.log('asdasd')
            await reloader();
        }
    })
    
    main__section__content.addEventListener('click', async e => {
        
    if(e.target.tagName === 'IMG' && e.target.closest('div').id === 'check__to__do' ){
        let idToMArk = e.target.closest('article').id;
        let text = e.target.closest('article').querySelector('p').textContent
        await markAsReady(idToMArk,text);
        await reloader();
        console.log('asdasd');
    }
    else if(e.target.tagName === 'IMG' && e.target.closest('div').id === 'trash__button'|| e.target.closest('div').id === 'trash__mark'){
        let idToDelete = e.target.closest('article').id;
        console.log(idToDelete)
        await deleteTask(idToDelete);
        e.target.closest('article').remove()
        
    }else if(e.target.tagName === 'IMG' && e.target.closest('div').id === 'check__ready' ){
        let idToUnmark = e.target.closest('article').id;
        let text = e.target.closest('article').querySelector('p').textContent;
        await markAsUnready(idToUnmark, text);
        await reloader();
    }
    
})

}

const reloader = async()=>{
    let data = await getAllTask();
    onHold__task.innerHTML = await getOnholdTasks(data)
    ready__Task.innerHTML = await getReadyTasks(data)
}
evetRefresh();

await reloader();














// let add__button = document.querySelector("#add__button");
// let input__search = document.querySelector("#input__search");

// async function updateTasks() {
//     data = await getAllTask();
//     let onHold__task = document.querySelector("#onHold__task");
//     onHold__task.innerHTML = await getOnholdTasks(data);

//     let ready__Task = document.querySelector("#ready__Task");
//     ready__Task.innerHTML = await getReadyTasks(data);

//     attachEventListeners();
// }

// async function attachEventListeners() {
//     // Event to delete tasks
//     let list__trash__button = document.querySelectorAll("#trash__button");
//     list__trash__button.forEach(element => {
//         element.addEventListener('click', async (article) => {
//             let closestArticle = article.target.closest('article');
//             let idToDelete = closestArticle.id;
//             closestArticle.remove();
//             await deleteTask(idToDelete);
//             await updateTasks();
//         });
//     });

//     // Event to mark tasks as ready
//     let check__to__do = document.querySelectorAll("#check__to__do");
//     check__to__do.forEach(element => {
//         element.addEventListener('click', async (article) => {
//             console.log(article);
//             let closestArticle = article.target.closest('article');
//             let idToMarkAsReady = closestArticle.id;
//             let taskContent = await taskById(closestArticle.id);
//             let text = taskContent.task;
//             const printNewReady = async (data) => {
//                 let plantilla = '';
//                 plantilla += /*html*/`
//                 <article class="mark__task">
//                     <p>${text}</p>
//                     <div class="mark__buttoms">
//                         <div class="check__mark">
//                             <img src="storage/img/checkmark_mark.svg" alt="">
//                         </div>
//                         <div class="trash__mark">
//                             <img src="storage/img/trash_mark.svg" alt="">
//                         </div>
//                     </div>
//                 </article>`;
//                 return plantilla;
//             }
//             await markAsReady(idToMarkAsReady, text);
//             closestArticle.remove();
//             ready__Task.innerHTML += await printNewReady(data);
//             attachEventListeners();
//         });
//     });

//     // Event to unmark tasks
//     let check__ready = document.querySelectorAll("#check__ready");
//     check__ready.forEach(element => {
//         element.addEventListener('click', async (article) => {
//             let closestArticle = article.target.closest('article');
//             let idToUnmark = closestArticle.id;
//             let task = await taskById(idToUnmark);
//             let textTask = task.task;
//             const printAsUnmark = async (data) => {
//                 let plantilla = '';
//                 plantilla += /*html*/`
//                 <article id="${task.id++}" class="to__do__task">
//                     <p>${textTask}</p>
//                     <div class="to__do__buttons">
//                         <div id="check__to__do" class="check__to__do">
//                             <img src="storage/img/checkmark.svg" alt="">
//                         </div>
//                         <div id="trash__button" class="trash__to__do">
//                             <img src="storage/img/trash.svg" alt="">
//                         </div>
//                     </div>
//                 </article>`;
//                 return plantilla;
//             }
//             await markAsUnready(idToUnmark, textTask);
//             closestArticle.remove();
//             onHold__task.innerHTML += await printAsUnmark(data);
//             attachEventListeners();
//         });
//     });

//     // Event to delete marked tasks
//     let trash__mark = document.querySelectorAll("#trash__mark");
//     trash__mark.forEach(element => {
//         element.addEventListener('click', async (article) => {
//             let getClosestArticle = article.target.closest('article');
//             let idToDelete = getClosestArticle.id;
//             getClosestArticle.remove();
//             await deleteTask(idToDelete);
//         });
//     });
// }

// // Add new task
// add__button.addEventListener('click', async (e) => {
//     let valueTask = input__search.value;
//     let dataOfNewTask = {
//         task: valueTask,
//         status: "On hold"
//     };
//     await postTask(dataOfNewTask);
//     await updateTasks();
//     input__search.value = null;
// });

// // Initial load
// updateTasks();

// --------------------------------------------------------------

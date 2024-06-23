import { getAllTask } from "./module/app.js";
import { getReadyTasks } from "./components/readyTask.js";
import { getOnholdTasks } from "./components/onHoldTasks.js";

let data = await getAllTask();

let onHold__task = document.querySelector("#onHold__task");
onHold__task.innerHTML = await getOnholdTasks(data);

let ready__Task = document.querySelector("#ready__Task");
ready__Task.innerHTML = await getReadyTasks(data);






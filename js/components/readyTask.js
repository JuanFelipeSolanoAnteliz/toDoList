
export const getReadyTasks = async(data)=>{
    data.forEach(element => {
        for(let i in element){
            if(element[i] === "ready"){
                 return element;
                // console.log(element);
            }
        }
    });
}

export const getOnholdTasks = async(data)=>{
    data.forEach(element => {
        for(let i in element){
            if(element[i] === "On hold"){
                return element;
                // console.log(element);
            }
        }
    });
}
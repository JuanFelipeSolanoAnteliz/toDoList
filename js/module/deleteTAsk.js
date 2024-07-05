

export const deleteTask = async(id)=>{
    console.log(id)
    let config={
        method:'DELETE',
        headers:{"content-type":"application/json"}
    };

    let res = await fetch(`https://667788a1145714a1bd74f785.mockapi.io/tasks/${id}`, config)
    if(res.status === 200){
        console.log({status:200, message:"task deleted successfully!"})
    };
};
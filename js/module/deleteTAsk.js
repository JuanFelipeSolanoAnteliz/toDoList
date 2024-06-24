

export const deleteTask = async(id)=>{
    console.log(id)
    let config={
        method:'DELETE',
        headers:{"content-type":"application/json"}
    };

    let res = await fetch(`https://6674179975872d0e0a950e53.mockapi.io/todoList/${id}`, config)
    if(res.status === 200){
        console.log({status:200, message:"task deleted successfully!"})
    };
};
export const taskById=async(id)=>{
    let config = {
        method:'GET',
        headres:{"content-type":"application/json"}
    };
    
    let res = await fetch(`https://6674179975872d0e0a950e53.mockapi.io/todoList/${id}`,config);
    let data = await res.json();
    return data;
}


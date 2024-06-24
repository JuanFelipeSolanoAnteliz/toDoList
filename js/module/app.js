

export const getAllTask = async() =>{
    let res = await fetch(`https://6674179975872d0e0a950e53.mockapi.io/todoList`);
    let data = await res.json();
    return data 
}


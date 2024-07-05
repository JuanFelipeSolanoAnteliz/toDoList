

export const getAllTask = async() =>{
    let res = await fetch(`https://667788a1145714a1bd74f785.mockapi.io/tasks`);
    let data = await res.json();
    return data 
}



const url = await fetch(`https://667788a1145714a1bd74f785.mockapi.io/tasks`)

export const getAllTask = async() =>{
    let res = url;
    let data = await res.json();
    return data 
}


export const taskById=async(id)=>{
    let config = {
        method:'GET',
        headres:{"content-type":"application/json"}
    };
    
    let res = await fetch(`https://667788a1145714a1bd74f785.mockapi.io/tasks/${id}`,config);
    let data = await res.json();
    return data;
}
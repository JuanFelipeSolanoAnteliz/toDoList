const url =  `https://667788a1145714a1bd74f785.mockapi.io/tasks`

export const postTask = async (task)=>{
    let config = {
        method:'POST',
        headers:{"content-type":"application/json"},
        body:JSON.stringify(task)
    }
    console.log()
    let res = await fetch(url,config)
    let data = res.json();
    console.log(data)
}
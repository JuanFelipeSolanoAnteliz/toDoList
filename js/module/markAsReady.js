export const markAsReady = async (id,text)=>{

    let readyTask ={
        task:text,
        status:"ready"
    }

    let config ={
        method:'PUT',
        headers:{"content-type":"application/json"},
        body:JSON.stringify(readyTask)
    };
    let res = await fetch(`https://667788a1145714a1bd74f785.mockapi.io/tasks/${id}`,config);
    let data = await res.json();
    if(res.status===200) return {status:200, message:'task mark as ready successfull!'}
}
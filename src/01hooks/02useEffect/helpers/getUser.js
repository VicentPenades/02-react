export const getUser=async()=>{

    const userID=Math.floor(Math.random()*10)+1;
    console.log(userID)
    const url="https://jsonplaceholder.typicode.com/users/"+userID;
    const response=await fetch(url);
    return await response.json()

}
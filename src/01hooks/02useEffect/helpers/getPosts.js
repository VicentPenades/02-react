export const getPosts=async(userID)=>{

    const url="https://jsonplaceholder.typicode.com/posts?userId="+userID;
    const response=await fetch(url);
    return await response.json()

}
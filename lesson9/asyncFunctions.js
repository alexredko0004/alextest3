import Utility from "file:/D:/Hillel/Study/lesson9/controller.js";

let postUrl = 'https://jsonplaceholder.typicode.com/posts/1'
let commentUrl = 'https://jsonplaceholder.typicode.com/comments/1'
let post1 = new Utility(postUrl);
let comment1 = new Utility(commentUrl);

Promise.all([comment1.getComment(commentUrl),post1.getPost(postUrl)]).then(result=>console.log(result),result=>console.log('Promise all ',result))
Promise.allSettled([comment1.getComment(commentUrl),post1.getPost(postUrl)]).then(result=>console.log(result)).catch(result=>console.log(result))

// let comment = function (url) {                             //Did not remove solution without class usage in order to show that it was created as well
//     return new Promise(async (resolve,reject)=>{
//     let data = await fetch(url)
//     if (data.status==200) resolve(data.json())
//     else reject('Something went wrong while retrieving your comment')
// })
// }
// let post = function (url) {
//     return new Promise(async (resolve,reject)=>{
//     let data = await fetch(url)
//     if (data.status==200) resolve(data.json())
//     else reject('Something went wrong while retrieving your post')
// })
// }
// Promise.all([comment(commentUrl),post(postUrl)]).then(result=>console.log(result),result=>console.log('Promise all ',result))
// Promise.allSettled([comment(commentUrl),post(postUrl)]).then(result=>console.log(result)).catch(result=>console.log(result))
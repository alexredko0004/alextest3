export default class Utility {
    constructor(url){
         this.url=url
        }
        getComment (url){
            return new Promise(async (resolve,reject)=>{
                let data = await fetch(url)
                if (data.status==200) resolve(data.json())
                else reject('Something went wrong while retrieving your comment')
            })
        }
        getPost(url) {
            return new Promise(async (resolve,reject)=>{
            let data = await fetch(url)
            if (data.status==200) resolve(data.json())
            else reject('Something went wrong while retrieving your post')
        })
        }
    }
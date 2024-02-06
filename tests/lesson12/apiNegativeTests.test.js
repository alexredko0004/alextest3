import { test, expect} from '@playwright/test'

let testInvalidData=[
    {
        petId:"mhs234", //invalid
        petName:"dino",
        categoryId:2354,
        categoryName:"2398222",
        tagId:98282,
        tagName:"2882jdjnd",
        resultCode:500,
        resultMessage: "something bad happened"
    },
    {
        petId:54748, 
        petName:"Alisa", 
        categoryId:"test",//invalid
        categoryName:"2398222",
        tagId:98282,
        tagName:"2882jdjnd",
        resultCode:500,
        resultMessage: "something bad happened"
    },
]

testInvalidData.forEach((data,index)=>{
    let {petId,petName,categoryId,categoryName,tagId,tagName,resultCode,resultMessage} = data;
    test(`Validation for petstore API${index}`, async({request})=>{
        let req = await request.post('https://petstore.swagger.io/v2/pet', {
            data:{
                "id": petId,
                "category": {
                  "id": categoryId,
                  "name": categoryName
                },
                "name": petName,
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": tagId,
                    "name": tagName
                  }
                ],
                "status": "available"
              }});
        let parsed = await req.json();
        console.log(parsed, req.status())
        expect(req.status(resultCode));
        expect(parsed.message).toEqual(resultMessage);
        })
    })
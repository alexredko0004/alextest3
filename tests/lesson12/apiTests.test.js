import { test, expect} from '@playwright/test'

const endpoint = 'https://petstore.swagger.io/v2/pet'
let petId = Math.floor(Math.random() * 10000)
let categoryId = Math.floor(Math.random() * 100)
let tagId = Math.floor(Math.random() * 100)
let petName = Math.floor(Math.random() * 100)+"Freddie"+Math.floor(Math.random() * 100)
let updatedPetName = "Barney"+Math.floor(Math.random() * 100)+Math.floor(Math.random() * 100)

test.describe.serial('CRUD for petstore API', async()=>{

    test('Create new pet', async({request})=>{
    let req = await request.post(endpoint,{
        data:{
            "id": petId,
            "category": {
              "id": categoryId,
              "name": "fish"
            },
            "name": petName,
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": tagId,
                "name": "Unbelievable "+petId
              }
            ],
            "status": "available"
          }}
    );
    let data = await req.json();
    console.log(data)
    expect(data.id).toEqual(petId);
    expect(data.category.id).toEqual(categoryId);
    expect(data.name).toEqual(petName);
    });

    test('Check that just created pet can be retrieved', async({request})=>{
    let data = await request.get(`${endpoint}/${petId}`);
    let parsed = await data.json();
    console.log(parsed)
    expect(data.status(200));
    expect(parsed.id).toEqual(petId);
    expect(parsed.category.id).toEqual(categoryId);
    expect(parsed).toEqual(expect.objectContaining(
        {
            "id": petId,
            "category": {
              "id": categoryId,
              "name": "fish"
            },
            "name": petName,
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": tagId,
                "name": "Unbelievable "+petId
              }
            ],
            "status": "available"
          }
    ));
    });

    test('Update just created pet', async({request})=>{
    let req = await request.put(endpoint,{
        data:{
                "id": petId,
                "category": {
                  "id": categoryId,
                  "name": "frog"
                },
                "name": updatedPetName,
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": tagId,
                    "name": "Terrific "+petId
                  },
                  {
                    "id": 90803865718094,
                    "name": "Outstanding "+petId
                  }
                ],
                "status": "available"
              }}
        );
    let data = await req.json();
    console.log(data)
    expect(data.id).toEqual(petId);
    expect(data.category.name).toEqual('frog');
    expect(data.name).toEqual(updatedPetName);
    expect(data.tags).toEqual(expect.arrayContaining(
            [
                {
                  "id": tagId,
                  "name": "Terrific "+petId
                },
                {
                  "id": 90803865718094,
                  "name": "Outstanding "+petId
                }
              ]
        ))
    });

    test('Remove just created pet', async({request})=>{
        await request.delete(`${endpoint}/${petId}`);
        let data = await request.get(`${endpoint}/${petId}`);
        let parsed = await data.json();
        console.log(parsed)
        expect(data.status(404));
        expect(parsed.message).toEqual('Pet not found');
        });
})
const {MongoClient}=require("mongodb")
const url="mongodb://localhost:27017/"

const client=new MongoClient(url)

async function main(){

    await client.connect()

    const database=client.db("Mongosh")
    const collection=database.collection("mongo")
    const Details=[{
        name:"Pallavi",
        age:25,
        gender:"Female"
    },{
        name:"Sagar",
        age:21,
        gender:"male"
    },
    {
        name:"Deeksha",
        age:26,
        gender:"Female"
    }
]
   

//   const response= await collection.insertMany(Details)
// const response=await collection.find().toArray()
// const response=await collection.updateOne({name:"Pallavi"},{$set:{name:"Lovely"}})
const response=await collection.deleteOne({name:"Lovely"})
const response1=await collection.find().toArray()
  console.log(response1);
}

main()
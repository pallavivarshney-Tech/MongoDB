const {MongoClient}=require("mongodb");
const url="mongodb://localhost:27017/"

const client=new MongoClient(url);
async function main(){
    await client.connect()

    //creating the database
    const database=client.db("MainTwo")
    const collection=database.collection("insideThis") //created the collection
    const Details=[{
        name:"Pallavi",
        age:25,
        gender:"Female"
    },{
        name:"Sagar",
        age:22,
        gender:"male"
    }
]

    // const response=await collection.insertMany(Details)
    // const response=await collection.updateMany({name:"Pallavi",gender:"Female"},{$set:{name:"Lavi",gender:"MALE"}})
    // const response=await collection.updateMany({name:"Lavi",age:25},{$set:{name:"Pallavi",age:21}})
    const response=await collection.deleteOne({name:"Pallavi"})
    const response1=await collection.find().toArray()
    console.log(response1);
    // console.log(response);
}
main()
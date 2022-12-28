const {MongoClient}=require("mongodb");

const url="mongodb://localhost:27017/"

const client=new MongoClient(url)

async function main(){
    await client.connect()

    const database=client.db("mongo")
    const collection=database.collection("datattta")

    const details=[
        {
            name:"wfdjf",
            age:23,
            course:"WSFDf"
        },
        {
        name:"WDFef",
        age:23,
        course:"WQDWFDW"
        }

    ]

//    const response=await collection.insertMany(details)
//    const response=await collection.find().toArray()
// const response=await collection.update({name:"WDFef"},{$set:{name:"Pallavi"}})
// const response=await collection.deleteOne({name:"Pallavi"})
const response =await collection.find().toArray()


   console.log(response);

}
main()
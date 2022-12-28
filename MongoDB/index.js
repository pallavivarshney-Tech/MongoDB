const {MongoClient}=require('mongodb');
const url="mongodb://localhost:27017/"

const client=new MongoClient(url);

async function main(){
    await client.connect()     //creating the connection using mongodb


  

    const database=client.db("MyNewDatabase");  //creating the database
    const collection=database.collection("Mydb") // creating the collection

    const Details=[{    //creating the documents
    name:"Pallavi",
    gender:"Female"
    },
    {
        name:"Jeevesh",
        gender:"Male"
    }

    ]

//    const response= await collection.insertMany(Details)  //create the data
// const response=await collection.updateOne({name:"Pallavi"},{$set:{name:"Lavi"}})  //updated the data
const responseTwo=await collection.find().toArray()  //read the data

// const response=await collection.updateOne({name:"Jeevesh"},{$set:{name:"Pallavi"}})

// const response=await collection.updateOne({name:"Pallavi"},{$set:{name:"Sagar"}})
// const response =await collection.deleteMany({name:"Sagar"})
// const responseTwo=await collection.find().toArray()
// console.log(response);
console.log(responseTwo);
}


main()
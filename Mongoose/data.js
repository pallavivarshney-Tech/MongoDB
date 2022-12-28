const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/Data").then(()=>console.log("hello"))
.catch((err)=>console.log(err))

const playlistSchema=new mongoose.Schema({
    name:String,
    age:Number,
    gender:String,
    course:String,
    date:{
        type:Date,
        default:Date.now
    }

})
const Playlist=new mongoose.model("Playlist",playlistSchema)

const createDocument=async()=>{
    try{
        const reactPlaylist=new Playlist({
            name:"John",
            age:35,
            gender:"male",
            course:"React JS",
            
            
        })
        const reactPlaylist1=new Playlist({
            name:"Ram",
            age:35,
            gender:"male",
            course:"Express JS",
            
            
        })
        const reactPlaylist2=new Playlist({
            name:"Rohan",
            age:35,
            gender:"male",
            course:"JS",
            
            
        })
        
        const result=await Playlist.insertMany([reactPlaylist,reactPlaylist1,reactPlaylist2])
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}
// createDocument()      //create the data 


const ReadDocument=async()=>{
    const result=await Playlist.find().sort({name:1})
    console.log(result);
}

ReadDocument()


// const updateDocument=async(_id)=>{
//     const result=await Playlist.findByIdAndUpdate({_id},{$set:{name:"Shyam",course:"Angular"}})
//     console.log(result);

// }
// updateDocument("638ca9cd29e0d2b4593f497f")

// const deleteDocument=async(_id)=>{
//     const result=await Playlist.findByIdAndDelete({_id})
//     console.log(result);
// }
// deleteDocument("638ca9cd29e0d2b4593f497d")
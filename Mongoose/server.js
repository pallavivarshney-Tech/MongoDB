const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Pal").then(()=>console.log("connected"))
.catch((err)=>console.log(err))

//creating the scehma

const playlistSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    gender:String,
    salary:Number,
    date:{
        type:Date,
        default:Date.now
    }

})


const Playlist=new mongoose.model("Playlist",playlistSchema)


const createDocument=async()=>{
    try{
        const reactPlaylist1=new Playlist({
    
            name:"Pallavi Varshney",
            age:25,
            gender:"Female",
            salary:600000,
        
        })
        const reactPlaylist2=new Playlist({
        
            name:"Sagar Varshney",
            age:22,
            gender:"male",
            salary:700000,
        
        })
        const reactPlaylist3=new Playlist({
        
            name:"Deeksha Varshney",
            age:26,
            gender:"Female",
            salary:800000,
        
        })
        const reactPlaylist4=new Playlist({
        
            name:"Sakshi Varshney",
            age:18,
            gender:"Female",
            salary:500000,
        
        })
        const reactPlaylist5=new Playlist({
        
            name:"Varun Varshney",
            age:16,
            gender:"male",
            salary:700000,
        
        })
        
        
        
        const result=await Playlist.insertMany([reactPlaylist1,reactPlaylist2,reactPlaylist3,reactPlaylist4,reactPlaylist5])
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
    
}

// createDocument()

const readDocument=async()=>{
    const result=await Playlist.find({salary:{$lt:600000}})
    console.log(result);
}
readDocument()


const updateDocument=async(_id)=>{
    const result=await Playlist.findByIdAndUpdate({_id},{$set:{name:"Lovely Varshney"}})
    console.log(result);
}
// updateDocument("638ce6af5ce9dd2a3663b40b")

const deleteDocument=async(_id)=>{
    const result=await Playlist.findByIdAndDelete({_id},{$set:{name:"Pallavi Varshney"}})
    console.log(result);
}

// deleteDocument("638ce5ce278c053565a0a049")
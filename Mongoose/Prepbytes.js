const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/Prep").then(()=>console.log("successfull")).catch((err)=>console.log(err))


//creating the schema

const playlistSchema=new mongoose.Schema({
    name:String,
    age:Number,
    gender:String,
})

const Playlist=new mongoose.model("Playlist",playlistSchema)


const createDocument=async()=>{
    const reactPlaylist=new Playlist({
        name:"Pallavi",
        age:25,
        gender:"Female",
    
    })
    const reactPlaylist1=new Playlist({
        name:"Sagar",
        age:22,
        gender:"Male",
    
    })
    const reactPlaylist2=new Playlist({
        name:"Deeksha",
        age:26,
        gender:"Female",
    
    })
    const result =await Playlist.insertMany([reactPlaylist,reactPlaylist1,reactPlaylist2])
    console.log(result);
}
createDocument()
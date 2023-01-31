const mongoose=require('mongoose');
const env=require('dotenv')
env.config();
const connection=async ()=>
{
    await mongoose.connect(`mongodb+srv://todo:todo123@cluster0.ztvrxgd.mongodb.net/?retryWrites=true&w=majority`)
}
module.exports=connection;
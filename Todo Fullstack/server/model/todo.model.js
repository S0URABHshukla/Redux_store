const mongoose=require('mongoose');

const todoschema=new mongoose.Schema(
    {
        task:{typeof:String, required:true},
        status:{typeof:Boolean, required:true},
        tag:{typeof:String, required:true},
    },
    {
        timestamps:true,
        versionKey:false
    },
)
const todos= mongoose.model('todoschema',todoschema);
module.exports=todos;
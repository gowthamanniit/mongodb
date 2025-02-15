const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:String,
    age:{
        type:Number,
        min:18,
        max:90,
        validate:
        {
            validator:v=>v%2===0,
            message:props => `${props.value} is not even number`
        }
    },
    email:{
        type:String,
        required:true,
        uppercase:true // lowercase:true
    },
    address:{
        city:String,
        street:String        
    },
    createdAt:{
        type:Date,
        default:()=>Date.now()   // better
        // default:new Date()    // avoid
    },
    hobbies:[String],
    bestFriend:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Usr'
    }
    //meaning: connection b/w 2 documents
    // Usr : collection name    
})

//schema functions : 1) user defined function
userSchema.methods.sayHai=function(){
    console.log(`my name is ${this.name}`)
}
// here sayHai is a userdefined function name 

//2) static method with parameters passing //arry return
userSchema.statics.findByName=function(argname){
    return this.find({name:argname})
}
//3) query method  custom function
userSchema.query.byName=function(argname){
    return this.where({name:argname})
}

//4)schema virtual
userSchema.virtual("namedEmail").get(function(){
    return `${this.name} ${this.email}`
})

//5) schema middleware : before/after insert/update (pre,post inbuilt)
// next is middleware
//5.1) pre
userSchema.pre('save',function(next){
    this.name = `Mr. ${this.name}`
    next()
})
//5.2) post
//post method we can't use this keyword 
// use doc middleware 
userSchema.post('save',function(doc,next){
doc.name=`${doc.name} modified`
next()
})

const userMdl=mongoose.model("Usr",userSchema)
module.exports=userMdl

// here Usr is collection name : see collection name in your db usr(s) name
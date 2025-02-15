const mongoose=require("mongoose")
const User=require("./models/userModel")
// here User is a class
mongoose.connect("mongodb://127.0.0.1:27017/gtest").then(()=>{
    console.log("connected")
}).catch(()=>{
    console.log("connection error")
})
//--------------------------------------------------
/*
async function run()
{
    try
    {        
    const newUser=await User.create({        
            name:"karurgowthaman",
            age:42,
            email:"gowthamAN@Gmail.com",
           hobbies:["studies","sports","learning"],
           address:{
            city:"pothanur",
            street:"56 east street"
           },
        }) 
        await newUser.save()    
    console.log("Inserted:",newUser)
    }
    catch(e)
    {
        console.log(e.message)        
    }
}
run(); 
*/
//-------------------------------query methods---------------------
async function run()
{
    try
    {        
    // const findUser=await User.findById("67a9aee7b78f3521b0c8ae71")
    //const findUser=await User.find({name:"karurgowthaman"})
    //const findUser=await User.findOne({name:"karurgowthaman"})
    //const findUser=await User.exists({name:"karurgowthaman"})
    //const findUser=await User.where('name').equals("karurgowthaman")
    //const findUser=await User.where('age').gt("43")
    //const findUser=await User.where('age').gt("40").lt('50')
    //const findUser=await User.where('age').gt("40").lt('50').limit(1)
    //const findUser=await User.where('_id').equals('67a9ace2f898b404157fa838').populate('bestFriend').limit(1)
    //const findUser=await User.findOne({name:"karurgowthaman"})
    //findUser.sayHai()
    //const findUser=await User.findByName("karurgowthaman")
    
    //const findUser=await User.find().byName("karurgowthaman")
    //task: byAddress byCity byPhoneNumber task
    //find() method must

    //const findUser=await User.findById('67a9ae70b39e0eff86bf7171')
    //console.log(findUser)
    //console.log(findUser.namedEmail) 
    //namedEmail is virtual, not shown in db

    //using schema middlewares (pre post methods)
    const findUser=await User.findById('67a9ae70b39e0eff86bf7171')
    findUser.name="veerappan"
    await findUser.save()  // save return promise so await must use
    console.log(findUser)
    console.log(findUser.namedEmail) 
    

    }
    catch(e)
    {
        console.log(e.message)        
    }
}
run(); 
//---------------------------------------------------------










//or
//user.save().then(()=>{
 //console.log("successfully inserted")
//});

//.then  is a promise
//.then is a success response
//.catch is a failure response
// ()=>{}   is a callback function
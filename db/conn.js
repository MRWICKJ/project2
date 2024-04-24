const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/project2',{

}).then(()=>{
    console.log(`DataBase SuccessFully Connected ✅`);
}).catch((err)=>{
    console.log(`Database Connection Failed ❌`);
})
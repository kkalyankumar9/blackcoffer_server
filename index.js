const  express=require("express");
const { connectionDB } = require("./db");
const { dataRouter } = require("./Routes/DataRoute");
const cors = require('cors')
const app =  express()
app.use(express.json())
app.use("/",dataRouter)
app.use(cors())


const port = process.env.PORT
app.listen(port,async()=>{
    try {
        await connectionDB
        console.log(`Database connected`);
        console.log(`Server running on port ${port}`);
        
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    }

})
import { app } from "../app.js";
import { connection } from "../db.js";
const port = process.env.PORT || 4000;

connection.connect((err)=>{
    if(err) console.log("MYSQL CONNECTION FAILED ",err);
    else{
          console.log('MYQL CONNECTED SUCCESSFULLY')
          
        app.listen(port,()=>{
            console.log('Server listening on PORT ',port)
            
        })
    }
    
})
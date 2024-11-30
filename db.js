import sql from "mysql"

const connection = sql.createConnection(
    {
        host:"localhost",
        user:'root',
        password:'665003fgh',
        database:'school_management'
    }
)


const query =  (sql,values) =>{
   return new Promise((resolve,reject)=>{
     connection.query(sql,values,(err,data)=>{
        if(err) return reject(err.message);
        else resolve(data);
     })
   })
}

export {connection,query}
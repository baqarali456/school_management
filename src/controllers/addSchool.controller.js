import { query } from "../../db.js";


const addSchool = async (req, res) => {

    const { id, name, address, latitude, longitude } = req.body;


    if (!id || !name || !address || !latitude || !longitude) {
        return res.status(400).json({ message: "All fields are required" });
    }


    const addquery = `INSERT INTO school (id, name, address, latitude, longitude) VALUES (?, ?, ?, ?, ?)`;
    const values = [id, name, address, latitude, longitude];

    try {
       // exist 
        const allreadyExistschool = await query(`SELECT * FROM school WHERE id=${id} AND name=${name}`);
        console.log(allreadyExistschool)
        
        if(allreadyExistschool){
            return res.status(401).json({message:"already exist"});
        }
        
        const result = await query(addquery, values)
        return res.status(201).json({ message: 'School added successfully', school: result });
    } catch (error) {
        
        return res.status(500).json({ error: 'Database error', details: error.message });
    }

};


export { addSchool };
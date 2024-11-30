import { query } from "../../db.js";
const getAllSchools = async (req,res) => {
    const { latitude, longitude } = req.params;

    if (!latitude || !longitude) {
        return res.status(400).json({ error: 'Latitude and Longitude are required' });
    }

    try {
        const schools = await query('SELECT * FROM school');


        const calculatedDistance = (lat1, lon1, lat2, lon2) => {
            const toRad = (value) => (value * Math.PI) / 180;
            const R = 6371; // Earth's radius in km
            const dLat = toRad(lat2 - lat1);
            const dLon = toRad(lon2 - lon1);
            const a = Math.sin(dLat / 2) ** 2 +
                Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
                Math.sin(dLon / 2) ** 2;
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return R * c;
        };

        const sortedSchools = schools.map((school) => ({
            ...school,
            distance: calculatedDistance(
                parseFloat(latitude),
                parseFloat(longitude),
                school.latitude,
                school.longitude,
            ),
        })).sort((a, b) => a.distance - b.distance);

       return  res.status(200).json(sortedSchools);
    } catch (error) {
        res.status(500).json({ error: 'Database error', details: error.message });
    }
}


export { getAllSchools };
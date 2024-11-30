import { Router } from "express";
import { addSchool } from "../controllers/addSchool.controller.js";
import { getAllSchools } from "../controllers/getSchools.controller.js";

const router = Router();

router.route('/addSchool').post(addSchool);
router.route('/getSchools/:longitude/:latitude').get(getAllSchools)

export {router};
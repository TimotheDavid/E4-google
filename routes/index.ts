
import {Router} from "express";
import google from "./google"
// 2
const router = Router();

router.use('/google', google);


export default router;

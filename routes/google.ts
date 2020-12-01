import {Router} from "express";
import {GoogleAuth} from "../controller/GoogleAuth";

const router = Router();

router.get('/callback',  GoogleAuth.callback);

router.get('/success',GoogleAuth.success);

export default router;

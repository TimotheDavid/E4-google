import {NextFunction, Response, Request} from "express";
import {google} from "googleapis";
import * as config from "../config.json";
import { OAuth2Client } from "googleapis-common";

export class GoogleAuth {
    static defaultscope = [
        'https://www.googleapis.com/auth/gmail.readonly'
    ]


    static async callback(request: Request, response: Response, next: NextFunction) {
        let url = GoogleAuth.urlGoogle();
        response.redirect(url);
    }

   static async success(request: Request, response: Response, next: NextFunction) {
        response.send("ok")
    }


     static   createconnection() {
        return new google.auth.OAuth2(
            config.web.client_id,
            config.web.client_secret,
            config.web.redirect_uris[0]
        );
    }

    static getConnectionUrl(auth: OAuth2Client){
        return auth.generateAuthUrl({
            access_type:"offline",
            prompt:"consent",
            scope: GoogleAuth.defaultscope
        })
    }

    static urlGoogle(){
        const auth = GoogleAuth.createconnection();
        return GoogleAuth.getConnectionUrl(auth);

    }

}

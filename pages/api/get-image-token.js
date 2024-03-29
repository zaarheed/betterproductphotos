import * as uuid from "uuid";
import * as crypto from "crypto";
import { IMAGEKIT_PRIVATE_KEY } from "@/constants/config";

export default async function (req, res) {
    const token = req.query.token || uuid.v4();
    const expire = req.query.expire || parseInt(Date.now()/1000) + 2400;
    const privateApiKey = IMAGEKIT_PRIVATE_KEY;
    const signature = crypto.createHmac("sha1", privateApiKey).update(token+expire).digest("hex");
    
    res.json({
        token: token,
        expire: expire,
        signature: signature
    });
}
import { Configuration, OpenAIApi } from "openai";
import fs from "fs";
import Jimp from "jimp";
import { Duplex } from "stream";
import { promisify } from "util";

const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function Generate(req, res) {

    await Jimp.read("https://scontent-lcy1-2.cdninstagram.com/v/t51.2885-15/310333947_795316898555447_210301358453808066_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=scontent-lcy1-2.cdninstagram.com&_nc_cat=111&_nc_ohc=w9kZdTI1THcAX-sXO_3&edm=APU89FABAAAA&ccb=7-5&oh=00_AfDxi21vzOMu-4Qc0U1EmyA_W4XD9BXKtHCdM7h-TJHG7w&oe=636C1198&_nc_sid=86f79a")
    .then((img) => {
        const r = img.resize(100, 100);
        const b = promisify(r.getBuffer.bind(r));
        return b(Jimp.MIME_PNG);
    })
    .then((buff) => {
        const stream = new Duplex();
        stream.push(buff);
        stream.push(null);
        return stream;
    })
    .then(async (stream) => {
        console.log(stream);

        try {
            const { data } = await openai.createImageVariation(
                stream,
                4,
                "256x256"
            );

            res.json(data);
            return;
        }
        catch (error) {
            res.json({ error: error.response.data });
            return;
        }
    })
}
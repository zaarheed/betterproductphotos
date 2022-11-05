import { Configuration, OpenAIApi } from "openai";
import got from "got";
import fs from "fs";
import _file from "../../public/assets/temp/fathippo.png";
import path from "path";
import https from "https";
import Jimp from "jimp";

const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function Generate(req, res) {
    const { posts = [] } = req.body;

    // if (posts.length < 1) {
    //     res.status(400).json({ error: "No posts provided" });
    //     return;
    // }

    const post = posts[0];

    // const imageUrl = post.display_url;
    try {
        const fileName = "308935607_1467103023763481_3239669449011058984_n";
        const filePath = `https://instaigram.vercel.app/assets/temp/${fileName}.jpg`;
        const savePath = `${process.cwd()}/public/uploads`;

        const image = await Jimp.read(filePath);
        image.cover(1000, 1000, Jimp.HORIZONTAL_ALIGN_LEFT | Jimp.VERTICAL_ALIGN_TOP);
        await image.writeAsync(`${process.cwd()}/public/uploads/${fileName}.png`);
        
        const fileRead = fs.createReadStream(`${savePath}/${fileName}.png`);

        const completion = await openai.createImageVariation(
            fileRead,
            1,
            "256x256"
        );
        res.status(200).json({ result: completion.data });
    } catch (error) {
        console.log(error);
        console.log(error.response.data);
        res.status(400).json({ error: "AI error" });
        return;
    }
}


async function getImage(url) {
    return new Promise((resolve) => {
        https.get(url, response => {
            resolve(response);
        })
    })
}

async function pipeResponse(response, file) {
    return new Promise(
        (resolve) => response.pipe(file).on('close', () => resolve())
    );
}
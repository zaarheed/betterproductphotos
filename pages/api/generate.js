import { Configuration, OpenAIApi } from "openai";
import fs from "fs";
import Jimp from "jimp";
import { IMAGEKIT_PRIVATE_KEY, IMAGEKIT_PUBLIC_KEY, IMAGEKIT_URL_ENDPOINT, TEMP_FOLDER_PATH } from "@/constants/config";
import ImageKit from "imagekit";

const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function Generate(req, res) {
    const { posts = [], folder } = req.body;

    if (posts.length < 1) {
        res.status(400).json({ error: "No posts provided" });
        return;
    }
    
    const resultImages = [];
    const loopLength = posts.length > 4 ? 4 : posts.length;

    const imagekit = new ImageKit({
        publicKey : IMAGEKIT_PUBLIC_KEY,
        privateKey : IMAGEKIT_PRIVATE_KEY,
        urlEndpoint : IMAGEKIT_URL_ENDPOINT
    });

    for (let i = 0; i < loopLength; i++) {
        const post = posts[i];
        const { copy_url, remote_url, shortcode } = post;

        const remoteImage = await Jimp.read(copy_url);
        remoteImage.cover(1000, 1000, Jimp.HORIZONTAL_ALIGN_LEFT | Jimp.VERTICAL_ALIGN_TOP);
        await remoteImage.writeAsync(`${TEMP_FOLDER_PATH}/${shortcode}.png`);

        const localImage = fs.createReadStream(`${TEMP_FOLDER_PATH}/${shortcode}.png`);

        let response;

        try {
            response = await openai.createImageVariation(
                localImage,
                3,
                "256x256"
            );
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Error generating images" });
            return;
        }

        const { data } = response;

        for (let j = 0; j < data.data.length; j++) {
            const image = data.data[j];

            const { url } = await imagekit.upload({
                file : image.url,
                fileName : `${shortcode}.png`,
                folder: folder ? folder : ""
            });

            resultImages.push({ shortcode, copy_url: url, openai_url: image.url, variation: j + 1, version: 0, remote_url: remote_url });
        }
    }

    res.json({ images: resultImages });
    return;
}
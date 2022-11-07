import { Configuration, OpenAIApi } from "openai";
import fs from "fs";
import Jimp from "jimp";
import config from "@/constants/config";
import ImageKit from "imagekit";

const { imagekitPrivateKey, imagekitPublicKey, imagekitUrlEndpoint, tempFolderPath } = config;

const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function Generate(req, res) {
    const { posts = [] } = req.body;

    if (posts.length < 1) {
        res.status(400).json({ error: "No posts provided" });
        return;
    }

    const resultImages = [];
    const loopLength = posts.length > 4 ? 4 : posts.length;

    const imagekit = new ImageKit({
        publicKey : imagekitPublicKey,
        privateKey : imagekitPrivateKey,
        urlEndpoint : imagekitUrlEndpoint
    });

    for (let i = 0; i < loopLength; i++) {
        const post = posts[i];
        const { copy_url, remote_url, shortcode } = post;

        const remoteImage = await Jimp.read(copy_url);
        await remoteImage.writeAsync(`${tempFolderPath}/${shortcode}.png`);

        const localImage = fs.createReadStream(`${tempFolderPath}/${shortcode}.png`);

        const { data } = await openai.createImageVariation(
            localImage,
            3,
            "256x256"
        );

        for (let j = 0; j < data.data.length; j++) {
            const image = data.data[j];

            const { url } = await imagekit.upload({
                file : image.url,
                fileName : `${shortcode}.png`,
            });

            resultImages.push({ shortcode, copy_url: url, openai_url: image.url, variation: j + 1, version: 0, remote_url: remote_url });
        }
    }

    res.json({ images: resultImages });
    return;
}
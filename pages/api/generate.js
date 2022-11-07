import { Configuration, OpenAIApi } from "openai";
import fs from "fs";
import Jimp from "jimp";

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

    // res.json({ images: posts.map(p => ({ shortcode: p.shortcode, variation: 1, version: 0, url: `/uploads/${p.shortcode}.png` })) });
    // return;

    const resultImages = [];
    const loopLength = posts.length > 4 ? 4 : posts.length;

    for (let i = 0; i < loopLength; i++) {
        const post = posts[i];
        const { local_url, remote_url, shortcode } = post;

        const localImage = fs.createReadStream(`${process.cwd()}/public${local_url}`);

        const { data } = await openai.createImageVariation(
            localImage,
            3,
            "256x256"
        );

        for (let j = 0; j < data.data.length; j++) {
            const image = data.data[j];
            resultImages.push({ shortcode, local_url: image.url, variation: j + 1, version: 0, remote_url: remote_url });
        }
    }

    res.json({ images: resultImages });
    return;
}
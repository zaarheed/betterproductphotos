import Jimp from "jimp"
import ImageKit from "imagekit";
import fs from "fs";
import config from "@/constants/config";

const { imagekitPrivateKey, imagekitPublicKey, imagekitUrlEndpoint, tempFolderPath } = config;

export default async function LoadImagesFromDump(req, res) {
    const { posts = [] } = req.body;

    if (posts.length < 1) {
        res.status(400).json({ error: "No posts provided" });
        return;
    }

    const imagekit = new ImageKit({
        publicKey : imagekitPublicKey,
        privateKey : imagekitPrivateKey,
        urlEndpoint : imagekitUrlEndpoint
    });

    const resultImages = [];

    for (let i = 0; i < 1; i++) {
        const post = posts[i];
        const { display_url, shortcode } = post;

        const remoteImage = await Jimp.read(display_url);
        remoteImage.cover(1000, 1000, Jimp.HORIZONTAL_ALIGN_LEFT | Jimp.VERTICAL_ALIGN_TOP);
        await remoteImage.writeAsync(`${tempFolderPath}/${shortcode}.png`);

        const localImage = fs.createReadStream(`${tempFolderPath}/${shortcode}.png`);

        const { url } = await imagekit.upload({
            file : localImage,
            fileName : `${shortcode}.png`,
        });

        resultImages.push({ shortcode, remote_url: display_url, copy_url: url });
    }

    res.json({ images: resultImages });
    return;
}
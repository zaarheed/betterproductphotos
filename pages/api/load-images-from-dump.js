import Jimp from "jimp"

export default async function Generate(req, res) {
    const { posts = [] } = req.body;

    if (posts.length < 1) {
        res.status(400).json({ error: "No posts provided" });
        return;
    }

    const resultImages = [];

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        const { display_url, shortcode } = post;

        const remoteImage = await Jimp.read(display_url);
        remoteImage.cover(1000, 1000, Jimp.HORIZONTAL_ALIGN_LEFT | Jimp.VERTICAL_ALIGN_TOP);
        await remoteImage.writeAsync(`${process.cwd()}/public/uploads/${shortcode}.png`);

        resultImages.push({ shortcode, url: `/uploads/${shortcode}.png` });
    }

    res.json({ images: resultImages });
    return;
}
import { Configuration, OpenAIApi } from "openai";
import got from "got";

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
        const stream = got.stream("https://scontent-lcy1-2.cdninstagram.com/v/t51.2885-15/313899822_141806018598311_2046522328759021892_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=scontent-lcy1-2.cdninstagram.com&_nc_cat=111&_nc_ohc=DoTP3uddRMcAX_jhTlI&edm=APU89FABAAAA&ccb=7-5&oh=00_AfDnJczWR5ZKFwCwhEMtgcdlkXV08uM5MCeo9E6CHdRwTw&oe=636AAF17&_nc_sid=86f79a");


        const completion = await openai.createImageVariation(stream, 1, "1024x1024");
        res.status(200).json({ result: completion.data });
    } catch (error) {
        console.log(error.response.data.error);
        res.status(400).json({ error: "AI error" });
        return;
    }
}
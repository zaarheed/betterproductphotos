import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function Generate(req, res) {

    const response = await fetch("https://scontent-lcy1-2.cdninstagram.com/v/t51.2885-15/310333947_795316898555447_210301358453808066_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=scontent-lcy1-2.cdninstagram.com&_nc_cat=111&_nc_ohc=w9kZdTI1THcAX-sXO_3&edm=APU89FABAAAA&ccb=7-5&oh=00_AfDxi21vzOMu-4Qc0U1EmyA_W4XD9BXKtHCdM7h-TJHG7w&oe=636C1198&_nc_sid=86f79a");

    console.log(response);
    
    try {
        const { data } = await openai.createImageVariation(
            response.body.blob,
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
}
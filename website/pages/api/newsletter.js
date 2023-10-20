import { NewsletterEmail } from './../emails/NewsletterEmail';
import { render } from '@react-email/render';
import sendEmail from "../../utils/sendEmail";

export default async function POST(req,res) {
    try {
        const { email } = req.body;
        console.log({email})

        const emailHtml = render(<NewsletterEmail email={email}/>);
        const result = sendEmail(email,emailHtml);
        
        return res.json({
            status: "ok",
            data: result
        })
    }catch (error){
        console.error('Error:', error);
        return res.json(error);
    }
}


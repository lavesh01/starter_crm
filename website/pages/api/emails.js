import nodemailer from "nodemailer"
import { render } from '@react-email/render';
import WelcomeEmail from "../emails/WelcomeEmail";

export default async function POST(req,res) {
    try {
        const {name, email,phone,message } = req.body;
        const result = Email(name,email,phone,message);
    
        return res.json({
            status: "ok",
            data: result
        })
    }catch (error){
        console.error('Error:', error);
        return res.json(error);
    }
    
}

function Email(name,email,phone,message){
    const emailHtml = render(<WelcomeEmail name={name} email={email} phone={phone} message={message} />);

    const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, 
    auth: {
        user: 'support@eurasiaglobal.net',
        pass: 'Support@8090551004'
    }
    });

    const mailOptions = {
        from: 'support@eurasiaglobal.net',
        to: email, 
        cc: 'sales@eurasiaglobal.net',  
        bcc: 'keshav.singh4@gmail.com',
        subject: 'Thank You for Contacting Eurasia',
        html: emailHtml,
        attachments: [{
            filename: "FINAL EURASIA GLOBAL LOGO.png",
            path: `${process.env.BASE_URL}/img/general/FINAL EURASIA GLOBAL LOGO.png`,
            cid: "unique@logoImage.info"
        }]    
    };


    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent:', info.response);
        return info;
    }
    });

}
const nodemailer = require('nodemailer');


const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: "projectmailtestyc@gmail.com",
        pass: "youcode2020",
    },
});
module.exports = async function sendEmail() {
    const mailOptions = {
        from: 'projectmailtestyc@gmail.com',
        to:'saraelhamel88@gmail.com',
        subject:'validation',
        html: 'message',
    };
    console.log('hola')
    transport.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error);
        }
    });
};
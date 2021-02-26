const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'mprakhar117@gmail.com',
        subject: 'thanks for choosing this app',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancelationEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'mprakhar117@gmail.com',
        subject: 'sorry to see you go!!',
        text: `GoodBye, ${name}. I hope to see you soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

const sgMail = require('@sendgrid/mail')
const sendgridApiKey = process.env.SENDGRID_API_KEY
sgMail.setApiKey(sendgridApiKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rodrigo@fizzmod.com',
        subject: 'Welcome to the app',
        text: `Welcome to  the app, ${name}. Let me know whatever.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rodrigo@fizzmod.com',
        subject: 'Your acount has been cancelled',
        text: `Dear ${name} your account has been sucessfully cancelled.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
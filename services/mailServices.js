const nodemailer = require('nodemailer');
const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, API_URL } = require('../utils/config');

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'hememh2@gmail.com',
                pass:'lfupgjgcgvokjoxa'
            }
        })
    }

    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: SMTP_USER,
            to,
            subject: 'Активация аккаунта на ' + API_URL,
            text: '',
            html:
                `
                    <div>
                        <h1>код для активации</h1>
                        <div>${link}</div>
                    </div>
                `
        })
    }
}

module.exports = new MailService();

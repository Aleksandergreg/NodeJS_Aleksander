import 'dotenv/config';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

// debugging where to put the .env file
console.log(`Your API key is: ${process.env.API_KEY}`);

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const sentFrom = new Sender("info@aleksandergregersen.dk", "Your name");

const recipients = [
  new Recipient("agregersen0@gmail.com", "Your Client")
];

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setReplyTo(sentFrom)
  .setSubject("This is a Subject")
  .setHtml("<strong>This is the HTML content</strong>")
  .setText("This is the text content");

await mailerSend.email.send(emailParams);

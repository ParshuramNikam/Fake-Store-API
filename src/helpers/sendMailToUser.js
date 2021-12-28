const nodemailer = require('nodemailer');
require('dotenv').config();

const signupTempate = () => {
	return `
	<div style="">
		<h1> Thank you for signup! </h1>
	</div>
	`
}

const otpLinkEmailTemplate = (link) => {
	return `
	<section style="max-width:500px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; text-align: center;">
        <div
            style="color: #1F2937; max-width: 80vw; margin: 1rem auto; background-color: #EFF6FF; border-radius: 10px; padding: 1rem 1.5rem;">
            <div style="font-weight: 500; margin-bottom: 1.2rem;">
                <h1 style="color: #1b5ae4;">FakeStores API</h1>
            </div>
            <div style="font-weight: 600; font-size: 2rem; padding: 0; margin-bottom: 0.8rem">
				Verify your Account!
			</div>
            <div>
				<a href=${link}>
					<button style=" background-color: #3b82f6; color: white; outline: none; border: 0; padding: 10px 25px; font-size: 1.2rem; text-align: center; margin: 10px auto; border-radius: 6px; cursor: pointer;">
						Verify Your Credientials!
					</button>
				</a>
            </div>
        </div>
    </section>
	`
}

const changePasswordTemplate = (link) => {
	return `
	<div style="text-align: center;">
		<h1> Change your password from here! </h1>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
 			<path fill-rule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clip-rule="evenodd" />
		</svg>
		<a href=${link}>
			<button style=" background-color: #3b82f6; color: white; outline: none; border: 0; padding: 10px 25px; font-size: 1.2rem; text-align: center; margin: 10px auto; border-radius: 6px; cursor: pointer;">
				Change Your Password!
			</button>
		</a>
	</div>
	`
}

const sendMailToUser = (receiverEmail, subject, link) => {
	try {
		let emailContent;

		const mailTransporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_PASSWORD,
			}
		});

		console.log(process.env.GMAIL_PASSWORD);

		if (subject.toLowerCase() === 'sign-up') {
			emailContent = signupTempate();
			subject = "Thank you for SignUp!"
		}
		else if (subject.toLowerCase() === 'change-password') {
			emailContent = changePasswordTemplate(link);
			subject = "Change your Password!"
		}
		else if (subject.toLowerCase() === 'send-otp-link') {
			emailContent = otpLinkEmailTemplate(link);
			subject = "Verify Your Credentials!"
		}
		else emailContent = "nothing..."


		const mailDetails = {
			from: 'FakeStore API <fakestoresapi@gmail.com>',
			to: receiverEmail,
			subject: subject,
			html: emailContent
		}

		mailTransporter.sendMail(mailDetails, function (err, data) {
			if (err) {
				console.log('Error Occurs');
				console.log(err.message);
				console.log(err);
			} else {
				console.log('Email sent successfully');
			}
		});

		return true;

	} catch (error) {
		console.log(error);
		return false;
	}
}

module.exports = sendMailToUser;
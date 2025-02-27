from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS  # Import CORS
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Allow your Vercel frontend to communicate with this backend
CORS(app, origins=["https://your-vercel-frontend.vercel.app"])  # Enable CORS for Vercel

# Configure Flask-Mail
app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 587
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USERNAME"] = os.getenv("EMAIL_USER")
app.config["MAIL_PASSWORD"] = os.getenv("EMAIL_PASS")
app.config["MAIL_DEFAULT_SENDER"] = os.getenv("EMAIL_USER")

mail = Mail(app)

@app.route("/send-email", methods=["POST"])
def send_email():
    try:
        data = request.json
        full_name = data.get("fullName")
        email = data.get("email")
        subject = data.get("subject")
        message = data.get("message")

        if not all([full_name, email, subject]):
            return jsonify({"error": "Full Name, Email, and Subject are required"}), 400

        # HTML Email to Admin
        admin_msg = Message(
            subject=f"New Contact Form Inquiry: {subject}",
            recipients=[os.getenv("RECEIVER_EMAIL")],
            html=f"""
            <html>
                <body>
                    <h1>Hello {{ vipul khanvilkar }}</h1>
                    <p>You have received a new inquiry through the contact form. Here are the details:</p>
                    <div>
                        <p><strong>Full Name:</strong> {full_name}</p>
                        <p><strong>Subject:</strong> {subject}</p>
                        <p><strong>Message:</strong> {message}</p>
                        <p><strong>Email:</strong> {email}</p>
                    </div>
                </body>
            </html>
            """
        )
        mail.send(admin_msg)

        # HTML Confirmation Email to User
        user_msg = Message(
            subject=f"Thank You for Contacting Us, {full_name}",
            recipients=[email],
            html=f"""
            <html>
                <body>
                    <h1>Dear {full_name},</h1>
                    <p>Thank you for reaching out to us! We have received your message with the following details:</p>
                    <div>
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Subject:</strong> {subject}</p>
                        <p><strong>Message:</strong> {message}</p>
                    </div>
                    <p>Our team will review your request and get back to you shortly.</p>
                    <p>Best regards,<br>Vipul Khanvilkar <br>Founder, Vipul Khanvilkar <br>
                    <a href="https://www.linkedin.com/in/vipul-khanvilkar-184890242/">linkedin.com/in/vipul-khanvilkar</a></p>
                </body>
            </html>
            """
        )
        mail.send(user_msg)

        return jsonify({"message": "Emails sent successfully"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))  # Set port from environment, default to 5000
    app.run(debug=True, host="0.0.0.0", port=port)  # Listen on all IP addresses and the dynamic port

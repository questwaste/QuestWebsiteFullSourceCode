# EmailJS Setup Instructions for Quest Waste Solutions Contact Form

The contact form has been updated to send emails to support@questwaste.net using EmailJS, a client-side email service that works perfectly with static sites.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (supports 200 emails/month)
3. Verify your email address

## Step 2: Set Up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup wizard to connect your email account
5. Note down the **Service ID** (e.g., `service_gmail123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Submission - Quest Waste Solutions

From: {{from_name}} <{{from_email}}>
Phone: {{phone}}

{{form_data}}
```

4. Set the template name to: `Contact Form Submission`
5. Note down the **Template ID** (e.g., `template_abc123`)

## Step 4: Get Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (starts with something like `user_abc123`)

## Step 5: Update the Contact Form

In `src/app/contact-us/page.tsx`, replace these placeholders with your actual values:

```javascript
const serviceId = 'service_questwaste'; // Replace with your Service ID
const templateId = 'template_contact'; // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

## Step 6: Test the Form

1. Save your changes and rebuild the static site
2. Test the contact form on your website
3. Check that emails arrive at support@questwaste.net

## Email Format

The emails will be formatted like this:

```
Subject: New Contact Form Submission - Quest Waste Solutions

From: John Doe <john@example.com>
Phone: (248) 555-0123

Contact Form Submission:

First Name: John
Last Name: Doe
Email: john@example.com
Phone: (248) 555-0123
SMS Opt-in: Yes

Message:
I need a 20-yard dumpster for my home renovation project. When can you deliver?
```

## Security Note

The EmailJS public key is safe to include in your static site code. EmailJS uses domain restrictions to prevent unauthorized use.

## Troubleshooting

- **CORS Errors**: Make sure your domain is added to EmailJS allowed origins
- **Template not found**: Double-check your Template ID matches exactly
- **Service issues**: Verify your email service is properly connected and tested
- **Rate limits**: Free plan allows 200 emails/month, upgrade if needed

For support: [EmailJS Documentation](https://www.emailjs.com/docs/)

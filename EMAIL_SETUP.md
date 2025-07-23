# Email Setup Guide

The contact form is currently set up to work locally. Here are options to connect it to send real emails:

## Option 1: EmailJS (Recommended for simplicity)

1. Sign up at https://www.emailjs.com/
2. Create a service and template
3. Install EmailJS: `npm install @emailjs/browser`
4. Update ContactForm.tsx:

```typescript
import emailjs from '@emailjs/browser';

// In handleSubmit function:
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    message: formData.message,
    to_email: 'marc.luettecke1@gmail.com'
  },
  'YOUR_PUBLIC_KEY'
);
```

## Option 2: Formspree

1. Sign up at https://formspree.io/
2. Create a form
3. Update the form action in ContactForm.tsx:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

## Option 3: Netlify Forms (if deploying to Netlify)

Add these attributes to your form:
- `data-netlify="true"`
- `data-netlify-honeypot="bot-field"`

## Current Implementation

For now, form submissions are:
1. Logged to the console
2. Stored in localStorage
3. Show a success message

You can view submissions in the browser console or by running:
```javascript
JSON.parse(localStorage.getItem('contactSubmissions'))
```
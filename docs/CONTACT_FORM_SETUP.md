# Contact Form Setup Guide

This document explains how to configure the Web3Forms contact form for local development and production deployment on AWS Amplify.

## Overview

The contact form uses:

- **Web3Forms** free plan for email delivery (no backend required)
- **hCaptcha** spam protection (free, included with Web3Forms)
- **React Hook Form** for validation
- **Client-side submission** via Web3Forms API

**Free plan features used:**

- Email delivery to one recipient
- hCaptcha spam protection
- Reply-to uses visitor's email
- Basic form submission

**Paid features NOT used:**

- Autoresponder confirmation email
- Domain restriction
- Cloudflare Turnstile
- File attachments
- Webhooks
- Multiple recipients

## Local Development Setup

### 1. Install Dependencies

First, resolve the npm cache permission issue if present:

```bash
# Fix npm cache permissions (run once)
sudo chown -R $(whoami) ~/.npm

# Install dependencies
npm install
```

This will install `@hcaptcha/react-hcaptcha` along with other dependencies.

### 2. Get a Web3Forms Access Key

1. Visit [https://web3forms.com/](https://web3forms.com/)
2. Click **"Get Started Free"**
3. Enter your **test/development email address** (where you want to receive test submissions)
4. Click **"Create Access Key"**
5. Copy the access key shown (format: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

**Important:** Use your own email for development testing, not the client's production inbox.

### 3. Configure Environment Variable

Create a `.env.local` file in the project root (if it doesn't exist):

```bash
# Create .env.local
touch .env.local
```

Add the Web3Forms access key:

```env
VITE_WEB3FORMS_ACCESS_KEY=your-dev-access-key-here
```

**Security notes:**

- `.env.local` is already in `.gitignore` and will not be committed
- The access key is designed to be public (used client-side)
- Anyone can submit to this email, so use it only for general inquiries
- Never commit real keys to version control

### 4. Enable hCaptcha in Web3Forms Dashboard

1. Log in to [https://web3forms.com/](https://web3forms.com/)
2. Go to your access key dashboard
3. Navigate to **"Spam Protection"** settings
4. Enable **"hCaptcha"** (free plan default)
5. Save changes

The form automatically uses the Web3Forms free-plan hCaptcha site key:  
`50b2fe65-b00b-4b9e-ad62-3ba471098be2`

### 5. Restart Development Server

```bash
npm run dev
```

Environment variables are only loaded at server start. After adding `VITE_WEB3FORMS_ACCESS_KEY`, you must restart the dev server.

### 6. Test the Form Locally

1. Open [http://localhost:5173/contact](http://localhost:5173/contact)
2. Fill out all required fields:
   - Your name
   - Email
   - How can we help? (select a reason)
   - Brief message
3. Complete the hCaptcha challenge
4. Click **"Send message"**
5. Check your test email inbox (and spam folder)
6. Verify the notification includes:
   - Subject: "New website inquiry | A Child's Perspective"
   - From name: "A Child's Perspective Website"
   - Reply-to: visitor's email address
   - All form fields (name, email, reason, relationship, message)

### 7. Test Error Cases

Verify the form handles errors correctly:

**Missing environment variable:**

```bash
# Temporarily rename .env.local
mv .env.local .env.local.backup
npm run dev
```

- Form should show: "Add VITE_WEB3FORMS_ACCESS_KEY to .env.local to enable contact form submissions."
- Restore: `mv .env.local.backup .env.local`

**Validation errors:**

- Submit with empty required fields
- Submit with invalid email format
- Submit without completing hCaptcha
- Errors should appear next to affected fields

**Network errors:**

- Disconnect internet or block `web3forms.com`
- Form should show error state with retry option
- Fields should be preserved (not cleared)

## AWS Amplify Production Setup

### 1. Get Production Access Key

**Do not reuse the development key for production.**

Create a separate production key:

1. Visit [https://web3forms.com/](https://web3forms.com/)
2. Click **"Create Access Key"**
3. Enter the **client's production email** (e.g., `help@achildsperspective.com`)
4. Copy the production access key
5. Store it securely (password manager, AWS Secrets Manager, etc.)

### 2. Add Environment Variable to Amplify

1. Open the [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Select the **A Child's Perspective** app
3. In the left sidebar, click **"Environment variables"**
4. Click **"Manage variables"**
5. Add a new variable:
   - **Variable name:** `VITE_WEB3FORMS_ACCESS_KEY`
   - **Value:** `[paste production access key here]`
6. **Important:** Ensure the variable is applied to the **production branch** (usually `main` or `launch-hardening`)
7. Click **"Save"**

**Security notes:**

- The access key is used client-side and is visible in the built JavaScript
- This is by design — Web3Forms access keys are public-safe
- Do not store passwords, API secrets, or HIPAA data in environment variables
- Anyone can submit to this email, so use it only for general inquiries

### 3. Enable hCaptcha for Production

Repeat the same steps as development:

1. Log in to [https://web3forms.com/](https://web3forms.com/)
2. Navigate to the production access key dashboard
3. Enable **"hCaptcha"** under Spam Protection
4. Save changes

### 4. Trigger a New Build

Adding an environment variable does not automatically rebuild the app. Trigger a new deployment:

**Option A: Push a commit**

```bash
git commit --allow-empty -m "Trigger rebuild for contact form env var"
git push origin main  # or your production branch
```

**Option B: Manual redeploy in Amplify Console**

1. Go to the Amplify app
2. Click the latest build
3. Click **"Redeploy this version"**

### 5. Test Production Form

After the build completes:

1. Visit [https://a-childs-perspective.com/contact](https://a-childs-perspective.com/contact)
2. Fill out the form with **real test data**
3. Complete hCaptcha
4. Submit
5. Verify:
   - Success panel appears: "Your message has been sent."
   - Form fields are cleared
   - hCaptcha is reset

### 6. Verify Email Delivery

1. Check the **client's production inbox** (e.g., `help@achildsperspective.com`)
2. **Also check spam/junk folder** (Web3Forms may be flagged initially)
3. Verify the notification contains:
   - Subject: "New website inquiry | A Child's Perspective"
   - From: "A Child's Perspective Website"
   - Reply-to: the email you entered in the form
   - All form fields

### 7. Test Reply-to Functionality

1. In the production inbox, click **"Reply"** to the test notification
2. Verify the reply is addressed to the email you submitted in the form
3. This confirms visitors will receive replies when the client responds

### 8. Mobile Testing

Test the form on actual mobile devices:

**iOS Safari:**

- Open [https://a-childs-perspective.com/contact](https://a-childs-perspective.com/contact)
- All inputs should be at least 16px to prevent auto-zoom
- hCaptcha should work with touch
- Success panel should be readable
- Form should not have horizontal scroll

**Android Chrome:**

- Same tests as iOS
- Verify native select dropdown works correctly
- Test keyboard navigation

## Monitoring and Maintenance

### Check Form Submissions

Web3Forms provides a dashboard to view recent submissions:

1. Log in to [https://web3forms.com/](https://web3forms.com/)
2. Go to the production access key dashboard
3. View **"Recent Submissions"** (last 7 days on free plan)
4. Check for errors, spam attempts, or delivery failures

### Spam Protection

The form uses two layers of spam protection:

1. **hCaptcha:** Interactive challenge that blocks automated bots
2. **Honeypot:** Hidden `botcheck` field that catches basic scrapers

If spam increases, consider upgrading to:

- Domain restriction (paid feature)
- Cloudflare Turnstile (paid feature)

### Email Deliverability

If emails are not arriving:

1. **Check spam folder** (most common issue)
2. **Whitelist Web3Forms sender:** Add `noreply@web3forms.com` and `@web3forms.com` to your email provider's safe senders list
3. **Check Web3Forms dashboard** for delivery errors
4. **Verify access key** is correct in Amplify environment variables
5. **Test with a different email provider** (Gmail, Outlook, etc.)

## Upgrading to Paid Features (Future)

The current implementation uses only free features. If the client wants to add:

### Autoresponder Confirmation Email

**What it does:** Automatically sends a confirmation email to the visitor after they submit the form.

**Setup:**

1. Upgrade to Web3Forms Pro plan ($10/month)
2. In Web3Forms dashboard, enable **"Autoresponder"**
3. Customize the confirmation email template
4. Add these fields to the form payload in `ContactForm.tsx`:
   ```typescript
   autoresponse: "true",
   autoresponse_subject: "We received your message | A Child's Perspective",
   autoresponse_message: "Thank you for contacting us. We'll reply within 2 business days.",
   ```

**Current behavior:** Form shows an in-page success message only. No email is sent to the visitor.

### Domain Restriction

**What it does:** Only accepts submissions from `a-childs-perspective.com` and `localhost`. Blocks submissions from other domains.

**Setup:**

1. Upgrade to Web3Forms Pro
2. In Web3Forms dashboard, enable **"Domain Restriction"**
3. Add allowed domains: `a-childs-perspective.com`, `localhost:5173`

**Current behavior:** Anyone with the access key can submit from any domain. This is acceptable for general inquiries.

### Cloudflare Turnstile

**What it does:** Replaces hCaptcha with Cloudflare's invisible CAPTCHA (better user experience).

**Setup:**

1. Upgrade to Web3Forms Pro
2. In Web3Forms dashboard, switch spam protection from hCaptcha to Turnstile
3. Update `ContactForm.tsx` to use Cloudflare Turnstile widget instead of hCaptcha

**Current behavior:** Uses free hCaptcha (requires user interaction).

### Additional Recipients / CC

**What it does:** Send copy to multiple inboxes (e.g., both providers).

**Setup:**

1. Upgrade to Web3Forms Pro
2. In Web3Forms dashboard, add additional recipients or CC addresses

**Current behavior:** Sends to one inbox only (the email associated with the access key).

## Troubleshooting

### Form shows "Add VITE_WEB3FORMS_ACCESS_KEY..."

**Local development:**

- Verify `.env.local` exists and contains `VITE_WEB3FORMS_ACCESS_KEY=...`
- Restart dev server: `npm run dev`
- Verify no typos in variable name (must be exact)

**Production (Amplify):**

- Verify environment variable is set in Amplify Console
- Verify it uses `VITE_` prefix (not `NEXT_PUBLIC_`)
- Trigger a new build after adding the variable
- Check build logs for environment variable errors

### hCaptcha not appearing

- Verify network is not blocking `hcaptcha.com`
- Check browser console for errors
- Verify `@hcaptcha/react-hcaptcha` is installed: `npm list @hcaptcha/react-hcaptcha`
- Try in an incognito/private window

### Form submits but no email arrives

1. **Check spam folder first**
2. Check Web3Forms dashboard for delivery status
3. Verify access key is correct (copy-paste again)
4. Test with a different email provider (Gmail, Outlook)
5. Verify hCaptcha is enabled in Web3Forms dashboard
6. Check browser console for network errors

### "Your message could not be sent" error

**Check browser console:**

- Open DevTools → Console
- Submit the form
- Look for network errors or CORS issues

**Common causes:**

- Network timeout (slow connection)
- Access key is invalid or expired
- Web3Forms API is down (check status.web3forms.com)
- Browser blocking third-party requests

### Fields not preserved after error

This is a bug. The form is designed to preserve all fields after an error. Check:

- `react-hook-form` is correctly installed
- No console errors from form validation
- Form state is not being reset unintentionally

### Submit button stuck on "Sending..."

The form has a 15-second timeout. If this happens:

- Network is too slow or blocked
- `AbortController` is not working correctly
- Web3Forms API is not responding

Check browser console for timeout errors.

## Development vs Production Checklist

Before going live, verify:

- [ ] Production access key uses client's email (not your dev email)
- [ ] Environment variable is set in AWS Amplify (not just `.env.local`)
- [ ] New Amplify build completed after adding the variable
- [ ] hCaptcha is enabled in Web3Forms dashboard for production key
- [ ] Test submission from `https://a-childs-perspective.com/contact`
- [ ] Email arrives at client's production inbox
- [ ] Email does not land in spam folder (or client knows to check)
- [ ] Reply-to uses visitor's email (test by replying)
- [ ] Success panel appears and form resets
- [ ] Error handling works (test by blocking network)
- [ ] Mobile layout works on iPhone and Android
- [ ] Form does not expose sensitive errors in production
- [ ] `.env.local` is not committed to git

## Support

**Web3Forms:**

- Documentation: [https://docs.web3forms.com/](https://docs.web3forms.com/)
- Support: [support@web3forms.com](mailto:support@web3forms.com)

**hCaptcha:**

- Documentation: [https://docs.hcaptcha.com/](https://docs.hcaptcha.com/)

**React Hook Form:**

- Documentation: [https://react-hook-form.com/](https://react-hook-form.com/)

## Related Files

- `src/app/components/forms/ContactForm.tsx` - Main form component
- `src/app/components/pages/Contact.tsx` - Contact page (renders ContactForm)
- `src/styles/theme.css` - Form input styles (`.contact-input`)
- `.env.example` - Environment variable template
- `.env.local` - Local environment variables (not committed)

# Stripe Payment Integration Setup Guide

This guide will walk you through setting up Stripe payments for the NQBlade website.

## Prerequisites

- A Stripe account (sign up at [https://stripe.com](https://stripe.com) if you don't have one)
- Access to your website's environment variables (`.env.local` file)

## Step 1: Get Your Stripe API Keys

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com)
2. Make sure you're in **Test mode** (toggle in the top right) for initial setup and testing
3. Navigate to **Developers** → **API keys** in the left sidebar
4. You'll see two keys:

   - **Publishable key** (starts with `pk_test_...` or `pk_live_...`)
   - **Secret key** (starts with `sk_test_...` or `sk_live_...`)

   ⚠️ **Important:** Click "Reveal test key" or "Reveal live key" to see your secret key. Copy it immediately as it won't be shown again.

## Step 2: Create a Product and Price in Stripe

Since NQBlade is a one-time purchase (not a subscription), you need to create a product with a one-time payment price:

1. In your Stripe Dashboard, go to **Products** → **Add product**
2. Fill in the product details:
   - **Name:** NQBlade EA (or your preferred name)
   - **Description:** (Optional) Add a description of your product
3. Under **Pricing**, select:
   - **Pricing model:** Standard pricing
   - **Price:** Enter `349.00` (or your price)
   - **Currency:** EUR (or your preferred currency)
   - **Billing period:** One time
4. Click **Save product**
5. After saving, you'll see the product page. Click on the price you just created
6. In the price details, you'll find the **Price ID** (it looks like `price_xxxxxxxxxxxxx`)
   - Copy this Price ID - you'll need it for the next step

## Step 3: Set Up Environment Variables

1. In your project root directory, create or edit the `.env.local` file
2. Add the following environment variables:

```env
# Stripe Configuration
STRIPE_SECRET_KEY=your_stripe_secret_key_here
STRIPE_PRICE_ID=your_stripe_price_id_here

# Base URL (for production, use your actual domain)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

3. Replace the values:
   - `STRIPE_SECRET_KEY`: Paste your Stripe Secret Key from Step 1
   - `STRIPE_PRICE_ID`: Paste the Price ID from Step 2
   - `NEXT_PUBLIC_BASE_URL`:
     - For local development: `http://localhost:3000`
     - For production: `https://yourdomain.com` (replace with your actual domain)

## Step 4: Install Dependencies (if not already installed)

Make sure the Stripe package is installed:

```bash
npm install stripe
```

## Step 5: Test the Integration

1. **Restart your development server** after adding environment variables:

   ```bash
   npm run dev
   ```

2. Navigate to your website and click the **"Buy NQBlade Now"** button in the Pricing section

3. You should be redirected to Stripe's checkout page

4. Use Stripe's test card numbers to complete a test payment:

   - **Card number:** `4242 4242 4242 4242`
   - **Expiry date:** Any future date (e.g., `12/34`)
   - **CVC:** Any 3 digits (e.g., `123`)
   - **ZIP code:** Any 5 digits (e.g., `12345`)

5. After completing the test payment, you should be redirected to the success page

## Step 6: Production Setup

When you're ready to accept real payments:

1. **Switch to Live mode** in your Stripe Dashboard (toggle in the top right)

2. **Get your Live API keys:**

   - Go to **Developers** → **API keys**
   - Copy your **Live Secret key** (starts with `sk_live_...`)

3. **Create a Live Product and Price:**

   - Repeat Step 2, but make sure you're in **Live mode**
   - Copy the new Live Price ID

4. **Update your production environment variables:**

   - In your hosting platform (Vercel, Netlify, etc.), add or update:
     - `STRIPE_SECRET_KEY` with your Live Secret key
     - `STRIPE_PRICE_ID` with your Live Price ID
     - `NEXT_PUBLIC_BASE_URL` with your production domain (e.g., `https://nqblade.com`)

5. **Important:** Never commit your `.env.local` file to version control. Make sure it's in your `.gitignore` file.

## Troubleshooting

### Error: "Stripe secret key is not configured"

- Make sure `STRIPE_SECRET_KEY` is set in your `.env.local` file
- Restart your development server after adding environment variables
- Check that there are no extra spaces or quotes around the key

### Error: "Stripe Price ID is not configured"

- Make sure `STRIPE_PRICE_ID` is set in your `.env.local` file
- Verify the Price ID is correct (should start with `price_`)
- Make sure you're using the correct Price ID for your current mode (test vs live)

### Error: "Invalid API Key provided"

- Verify you're using the correct key for your current mode:
  - Test mode: keys start with `sk_test_...`
  - Live mode: keys start with `sk_live_...`
- Make sure you copied the entire key without any extra spaces

### Checkout page not loading

- Check your browser console for errors
- Verify `NEXT_PUBLIC_BASE_URL` is set correctly
- Make sure your Stripe account is activated and in good standing

## Additional Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Testing Guide](https://stripe.com/docs/testing)
- [Stripe Dashboard](https://dashboard.stripe.com)

## Support

If you encounter any issues, check:

1. Your Stripe Dashboard for any error messages
2. Your server logs for detailed error information
3. The Stripe Dashboard's **Developers** → **Logs** section for API errors

---

**Note:** Always test thoroughly in Test mode before switching to Live mode to accept real payments.

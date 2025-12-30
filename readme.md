# Stripe Payment Integration Setup Guide

This guide will walk you through setting up Stripe payments for the NQBlade website.

## Prerequisites

- A Stripe account (sign up at [https://stripe.com](https://stripe.com) if you don't have one)

## Step 1: Get Your Stripe API Keys

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com)
2. Make sure you're in **Test mode** (toggle in the top right) for initial setup and testing
3. Search for "API keys" in the Stripe Dashboard or navigate to **Developers** → **API keys**
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
   - Copy this Price ID - you'll need to provide it to your developer

## Step 3: Provide Information to Your Developer

Provide the following information to your developer so they can set up the payment integration:

- **Stripe Secret Key** (from Step 1): `sk_test_...` or `sk_live_...`
- **Stripe Price ID** (from Step 2): `price_...`

Your developer will configure these in the website's environment variables.

## Step 4: Test the Integration

Once your developer has set up the integration, you can test it:

1. Navigate to your website and click the **"Buy NQBlade Now"** button in the Pricing section
2. You should be redirected to Stripe's checkout page
3. Use Stripe's test card numbers to complete a test payment:
   - **Card number:** `4242 4242 4242 4242`
   - **Expiry date:** Any future date (e.g., `12/34`)
   - **CVC:** Any 3 digits (e.g., `123`)
   - **ZIP code:** Any 5 digits (e.g., `12345`)
4. After completing the test payment, you should be redirected to the success page

## Step 5: Production Setup

When you're ready to accept real payments:

1. **Switch to Live mode** in your Stripe Dashboard (toggle in the top right)

2. **Get your Live API keys:**

   - Search for "API keys" in the Stripe Dashboard or navigate to **Developers** → **API keys**
   - Copy your **Live Secret key** (starts with `sk_live_...`)

3. **Create a Live Product and Price:**

   - Repeat Step 2, but make sure you're in **Live mode**
   - Copy the new Live Price ID

4. **Provide the Live keys to your developer:**
   - Share your Live Secret key and Live Price ID with your developer
   - They will update the production environment variables

## Troubleshooting

### Error: "Stripe secret key is not configured" or "Stripe Price ID is not configured"

- Contact your developer to verify the environment variables are set correctly
- Double-check that you provided the correct keys and Price ID to your developer
- Verify the Price ID is correct (should start with `price_`)

### Error: "Invalid API Key provided"

- Verify you're using the correct key for your current mode:
  - Test mode: keys start with `sk_test_...`
  - Live mode: keys start with `sk_live_...`
- Make sure you copied the entire key without any extra spaces
- Double-check that you're using the Secret Key (not the Publishable Key)
- Provide the correct key to your developer if it was incorrect

### Checkout page not loading

- Make sure your Stripe account is activated and in good standing
- Check your Stripe Dashboard's **Developers** → **Logs** section for API errors
- Contact your developer if the issue persists

## Additional Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Testing Guide](https://stripe.com/docs/testing)
- [Stripe Dashboard](https://dashboard.stripe.com)

## Support

If you encounter any issues, check:

1. Your Stripe Dashboard for any error messages
2. The Stripe Dashboard's **Developers** → **Logs** section for API errors
3. Contact your developer if issues persist

---

**Note:** Always test thoroughly in Test mode before switching to Live mode to accept real payments.

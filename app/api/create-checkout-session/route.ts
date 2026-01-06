import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Helper function to ensure URL doesn't have trailing slash
const getBaseUrl = () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  return url.replace(/\/$/, ''); // Remove trailing slash if present
};

export async function POST(req: NextRequest) {
  try {
    // Check if Stripe secret key is configured
    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === '') {
      console.error('STRIPE_SECRET_KEY is not set');
      return NextResponse.json({ error: 'Stripe secret key is not configured. Please set STRIPE_SECRET_KEY in your .env.local file.' }, { status: 500 });
    }

    // Initialize Stripe only at runtime (not during build)
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-12-15.clover',
    });

    // Check if Price ID is configured
    const priceId = process.env.STRIPE_PRICE_ID;
    if (!priceId || priceId === '{{PRICE_ID}}' || priceId === '') {
      console.error('STRIPE_PRICE_ID is not set');
      return NextResponse.json({ error: 'Stripe Price ID is not configured. Please set STRIPE_PRICE_ID in your .env.local file.' }, { status: 500 });
    }

    // Fetch the price to determine if it's recurring or one-time
    const price = await stripe.prices.retrieve(priceId);
    const isRecurring = price.type === 'recurring';

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: isRecurring ? 'subscription' : 'payment',
      success_url: `${getBaseUrl()}/success`,
      cancel_url: `${getBaseUrl()}/cancel`,
    });

    if (!session.url) {
      console.error('No checkout URL returned from Stripe');
      return NextResponse.json({ error: 'Failed to create checkout session. No URL returned.' }, { status: 500 });
    }

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      {
        error: error.message || 'Failed to create checkout session',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}

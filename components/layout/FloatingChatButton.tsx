'use client';

import { MessageCircle } from 'lucide-react';

export function FloatingChatButton() {
  return (
    <a
      href="http://t.me/Marlon_NQBlade"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Chat with us on Telegram"
      style={{ bottom: 'calc(24px + env(safe-area-inset-bottom, 0px))', right: '24px' }}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-primary)]"></span>
      </span>
    </a>
  );
}


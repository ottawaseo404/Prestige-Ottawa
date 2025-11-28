import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';

function generateSessionId(): string {
  const stored = sessionStorage.getItem('analytics_session_id');
  if (stored) return stored;
  
  const newId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  sessionStorage.setItem('analytics_session_id', newId);
  return newId;
}

export function useAnalytics() {
  const [location] = useLocation();
  const lastTracked = useRef<string>('');
  const sessionId = useRef<string>('');

  useEffect(() => {
    if (!sessionId.current) {
      sessionId.current = generateSessionId();
    }

    if (location === lastTracked.current) return;
    lastTracked.current = location;

    const trackPageView = async () => {
      try {
        await fetch('/api/analytics/pageview', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sessionId: sessionId.current,
            page: location,
            referrer: document.referrer || null,
          }),
        });
      } catch (error) {
        console.error('Failed to track page view:', error);
      }
    };

    trackPageView();
  }, [location]);
}

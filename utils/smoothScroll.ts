let smoothScrollInitialized = false;
let transitionCallback: (() => void) | null = null;

function getHeaderOffset(headerSelector: string): number {
  const header = document.querySelector<HTMLElement>(headerSelector);
  if (header) {
    return header.offsetHeight || 0;
  }
  return 0;
}

function findAnchor(element: Element | null): HTMLAnchorElement | null {
  let current: Element | null = element;
  while (current) {
    if (current instanceof HTMLAnchorElement) return current as HTMLAnchorElement;
    current = current.parentElement;
  }
  return null;
}

export interface SmoothScrollOptions {
  headerSelector?: string;
  defaultOffset?: number;
  onTransition?: (targetId: string) => void;
}

export function initSmoothScroll(options: SmoothScrollOptions = {}): void {
  if (smoothScrollInitialized) return;
  smoothScrollInitialized = true;

  const headerSelector = options.headerSelector ?? 'header';
  const defaultOffset = options.defaultOffset ?? 80;
  transitionCallback = options.onTransition || null;

  const scrollToHash = (hash: string) => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const id = hash.startsWith('#') ? hash.slice(1) : hash;
    if (!id) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    
    // Trigger transition overlay if callback exists
    if (transitionCallback) {
      transitionCallback(id);
    }
    
    const headerOffset = getHeaderOffset(headerSelector) || defaultOffset;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetTop = Math.max(elementPosition - headerOffset, 0);
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  };

  document.addEventListener(
    'click',
    (event) => {
      const target = event.target as Element | null;
      const anchor = findAnchor(target);
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';
      if (!href || href === '#' || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
      }

      // same-page hash links like '#section'
      if (href.startsWith('#')) {
        event.preventDefault();
        scrollToHash(href);
        return;
      }

      // full URL with hash pointing to same page
      try {
        const url = new URL(href, window.location.href);
        if (url.origin === window.location.origin && url.pathname === window.location.pathname && url.hash) {
          event.preventDefault();
          scrollToHash(url.hash);
        }
      } catch (_) {
        // ignore invalid URLs
      }
    },
    { capture: true }
  );

  // Handle initial load with hash after React mounts a frame
  if (window.location.hash) {
    requestAnimationFrame(() => {
      scrollToHash(window.location.hash);
    });
  }

  // Handle navigating via back/forward when hash changes
  const handleHashChange = () => {
    scrollToHash(window.location.hash);
  };
  
  window.addEventListener('hashchange', handleHashChange);
  
  // Cleanup function for proper memory management
  return () => {
    window.removeEventListener('hashchange', handleHashChange);
  };
}



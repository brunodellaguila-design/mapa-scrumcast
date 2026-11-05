// Initialize Vercel Web Analytics
// This script loads the Vercel Analytics tracking code
(function() {
  // The window.va queue is already initialized in the HTML
  // Now we inject the actual analytics script
  if (typeof window !== 'undefined' && !document.querySelector('script[src*="/_vercel/analytics"]')) {
    var script = document.createElement('script');
    script.defer = true;
    script.src = '/_vercel/analytics/script.js';
    document.head.appendChild(script);
  }
})();

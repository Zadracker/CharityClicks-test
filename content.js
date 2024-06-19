// Simulated content script for ad and affiliate tracking
console.log('Content script loaded.');

// Example: Track ad impressions
let adsViewed = 0;

function trackAdImpression() {
  adsViewed++;
  console.log(`Ad viewed! Total: ${adsViewed}`);
}

// Example: Track affiliate link clicks
let affiliateClicks = 0;

function trackAffiliateClick() {
  affiliateClicks++;
  console.log(`Affiliate link clicked! Total: ${affiliateClicks}`);
}

// Listen for ad impressions and affiliate link clicks
document.addEventListener('DOMContentLoaded', () => {
  trackAdImpression(); // Simulate ad impression on page load
});

document.body.addEventListener('click', (event) => {
  if (event.target.matches('a[href*="affiliate-link"]')) {
    trackAffiliateClick(); // Simulate affiliate link click
  }
});

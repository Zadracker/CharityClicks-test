import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Popup() {
  const [totalDonations, setTotalDonations] = useState(0);
  const [adsViewed, setAdsViewed] = useState(0);
  const [affiliateClicks, setAffiliateClicks] = useState(0);

  useEffect(() => {
    // Simulated data for demonstration
    setTotalDonations("$100.00");
    setAdsViewed(50);
    setAffiliateClicks(20);
  }, []);

  return (
    <div className="container">
      <h1>CharityClicks Dashboard</h1>
      <div className="donation-info">
        <p>Total Donations: <span>{totalDonations}</span></p>
        <p>Ads Viewed: <span>{adsViewed}</span></p>
        <p>Affiliate Clicks: <span>{affiliateClicks}</span></p>
      </div>
      <div className="settings">
        <h2>Settings</h2>
        <label htmlFor="charitySelect">Select Charity:</label>
        <select id="charitySelect">
          <option value="charity1">Charity 1</option>
          <option value="charity2">Charity 2</option>
          <option value="charity3">Charity 3</option>
        </select>
        <label htmlFor="donationFrequency">Donation Frequency:</label>
        <select id="donationFrequency">
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
        </select>
      </div>
    </div>
  );
}

// Render React component into popup.html
ReactDOM.render(<Popup />, document.getElementById('root'));

import React from 'react';
import './AdSection.css';

const adsData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop',
    title: 'Latest Gadgets',
    description: 'Explore the newest tech and accessories.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop',
    title: 'Work From Home Essentials',
    description: 'Upgrade your home office setup today.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop',
    title: 'Summer Fashion Sale',
    description: 'Get up to 40% off on the summer collection.',
  },
];

const AdSection = () => {
  return (
    <section className="ad-section">
      {adsData.map((ad) => (
        <div key={ad.id} className="ad-card">
          <img src={ad.image} alt={ad.title} className="ad-card__image" />
          <div className="ad-card__content">
            <h4 className="ad-card__title">{ad.title}</h4>
            <p className="ad-card__description">{ad.description}</p>
            <button className="ad-card__button">Shop Now &rarr;</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AdSection;


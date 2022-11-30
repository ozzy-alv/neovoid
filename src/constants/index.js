import { facebook, instagram, twitter, shield, star, send } from '../assets';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'Our Company',
  },
  {
    id: 'service',
    title: 'Services',
  },
  {
    id: 'contact',
    title: 'Contact Us',
  },
];

export const features = [
  {
    id: 'feature-1',
    icon: star,
    title: 'Mission to Grow',
    content:
      'We focus primarily on reaching potential new clients for your business to expand.',
  },
  {
    id: 'feature-2',
    icon: shield,
    title: '100% Secured',
    content:
      'We take proactive steps make sure your information and transactions are secure.',
  },
  {
    id: 'feature-3',
    icon: send,
    title: 'Results',
    content:
      'The main focus for us is to do the work and your main focus is to see the results.',
  },
];

export const footerLinks = [
  {
    id: 'footerLink-1',
    title: 'Useful Links',
    links: [
      {
        name: 'Content',
        id: '#home',
      },
      {
        name: 'About',
        id: '#about',
      },
      {
        name: 'Service',
        id: '#service',
      },
      {
        name: 'Explore',
        id: '#contact',
      },
      {
        name: 'Terms & Services',
        id: 'https://www.termsfeed.com/live/8c9833ef-cb99-4813-bee0-ebcdc6d3978f',
      },
    ],
  },
];

export const socialMedia = [
  {
    id: 'social-media-1',
    icon: facebook,
    link: 'https://www.facebook.com/',
  },
  {
    id: 'social-media-2',
    icon: twitter,
    link: 'https://www.twitter.com/',
  },
  {
    id: 'social-media-3',
    icon: instagram,
    link: 'https://www.instagram.com/',
  },
];

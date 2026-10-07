// Revive site config — edit here, every page reads from this file.

// Paste the booking calendar link here once it exists. While empty, every
// "Book a 15-Minute Call" button opens the site chat (or email as a fallback).
export const BOOK_URL = 'https://api.leadconnectorhq.com/widget/bookings/revivedemo';
export const BOOK_FALLBACK = 'mailto:kobe@revivereputation.com?subject=Book%20a%2015-minute%20call';

export const PRICE_FROM = '$397';
export const PRICING = [
  { size: 'Up to 1,000 customers', price: '$397/mo' },
  { size: '1,001 – 3,000 customers', price: '$597/mo' },
  { size: '3,001 – 7,500 customers', price: '$797/mo' },
  { size: '7,500+ customers', price: 'Custom' },
];

export const CONTACT = {
  email: 'kobe@revivereputation.com',
  phone: '(774) 239-3471',
  phoneHref: 'tel:+17742393471',
  address: '450 Ocean Ridge Pkwy SW, Ocean Isle Beach, NC 28469',
};

// Paste a YouTube embed URL (https://www.youtube.com/embed/ID) once the
// testimonial video is uploaded. Empty = polished placeholder.
export const JULIE_VIDEO_URL = 'https://share.descript.com/embed/alEs64EW6hY';

// ── /julie case-study page ──────────────────────────────────────────────
// Best: a direct vertical .mp4 link (enables poster + play/complete tracking).
// If empty, the page falls back to the JULIE_VIDEO_URL embed above.
export const JULIE_VIDEO_FILE = '';
// Optional poster image (portrait, ~1080x1920) shown before the video plays.
export const JULIE_VIDEO_POSTER = '';
// Real campaign screenshots, shown in this order. Empty list = labeled placeholder.
export const JULIE_CAMPAIGN_SCREENSHOTS = [
  { src: 'julie-donna.jpg', w: 800, h: 819, caption: 'Replied within the hour asking for a time' },
  { src: 'julie-brian.jpg', w: 800, h: 985, caption: 'Asked to book a birthday massage' },
  { src: 'julie-kyle.jpg', w: 800, h: 982, caption: 'Missed the first text. The follow-up got a reply' },
  { src: 'julie-ashley.jpg', w: 800, h: 962, caption: 'Booked after the follow-up reminder' },
];

export const TESTIMONIALS = [
  { id: 'julie-missing-link', quote: 'When Kobe showed up, it was like the missing link I didn\u2019t know I needed.', name: 'Julie Romero', business: 'Hands in the Sands Mobile Massage Therapy' },
  { id: 'julie-recommend', quote: 'If somebody was looking for someone to promote their business, I would absolutely recommend Revive.', name: 'Julie Romero', business: 'Hands in the Sands Mobile Massage Therapy' },
  { id: 'julie-excited', quote: 'Super excited for the campaigns going forward. Very excited to continue working with Kobe, and Revive.', name: 'Julie Romero', business: 'Hands in the Sands Mobile Massage Therapy' },
];

// Real results only. Add a new object to add a case study to the Results page.
export const CASE_STUDIES = [
  {
    id: 'hands-in-the-sands',
    business: 'Hands in the Sands Mobile Massage Therapy',
    person: 'Julie Romero, owner',
    type: 'Mobile massage therapy',
    summary: 'Julie runs a mobile massage therapy business. Revive ran a text campaign to the clients she already had, no ads and no new audience.',
    stats: [
      { value: '11', label: 'bookings in the first 5 days' },
      { value: '~$1,600', label: 'in booked business, as reported by Julie' },
    ],
    quoteId: 'julie-missing-link',
  },
];

// Illustrative campaign demos for the homepage. These are examples, not client results.
export const CAMPAIGNS = [
  {
    id: 'winback', label: 'Bring past customers back',
    name: 'Win-back campaign',
    audience: 'Customers who haven\u2019t booked in 90+ days',
    handles: ['Finds who has gone quiet', 'Writes the message', 'Follows up with anyone who didn\u2019t reply'],
    thread: [
      { from: 'biz', text: 'Hi Jess, it\u2019s been a little while since your last visit and we wanted to check in. We have a few openings next week. Want me to save you a spot?' },
      { from: 'cust', text: 'Oh wow, it has been way too long. Anything Thursday afternoon?' },
      { from: 'biz', text: 'Thursday at 3:30 is open. Want it?' },
      { from: 'cust', text: 'Perfect, book me' },
      { from: 'biz', text: 'Done. See you Thursday at 3:30.' },
    ],
  },
  {
    id: 'launch', label: 'Promote a new service',
    name: 'New service launch',
    audience: 'Regulars most likely to want it',
    handles: ['Picks who hears first', 'Shapes the intro offer', 'Sends booking times to everyone interested'],
    thread: [
      { from: 'biz', text: 'Hi Jess, since you\u2019re one of our regulars: we just added a new add-on treatment and we\u2019re offering the first appointments to existing clients before we announce it. Want the details?' },
      { from: 'cust', text: 'Yes! What is it?' },
      { from: 'biz', text: 'It\u2019s a 20-minute add-on to your usual visit. Regulars get the intro price this month. Want me to add it to your next appointment?' },
      { from: 'cust', text: 'Sure, add it' },
    ],
  },
  {
    id: 'fill', label: 'Fill the schedule',
    name: 'Open-spot campaign',
    audience: 'Nearby customers who usually book midweek',
    handles: ['Targets the right customers for the open time', 'Sends it the moment spots open', 'Stops once the spots are filled'],
    thread: [
      { from: 'biz', text: 'Hi Jess, two spots just opened up tomorrow at 11 and 2. We wanted to offer them to our regulars first. Want one?' },
      { from: 'cust', text: '2 works!' },
      { from: 'biz', text: 'It\u2019s yours. See you tomorrow at 2.' },
    ],
  },
  {
    id: 'reviews', label: 'Get more reviews',
    name: 'Review request',
    audience: 'Customers who visited in the last 2 days',
    handles: ['Times the ask right after a visit', 'Sends one friendly reminder', 'Keeps requests within review-platform rules'],
    thread: [
      { from: 'biz', text: 'Thanks for coming in yesterday, Jess. If you have 30 seconds, a quick Google review would mean a lot to us: g.page/review' },
      { from: 'cust', text: 'Happy to. Just left one!' },
      { from: 'biz', text: 'Thank you, that really helps a small business like ours.' },
    ],
  },
  {
    id: 'referrals', label: 'Generate referrals',
    name: 'Referral campaign',
    audience: 'Your happiest repeat customers',
    handles: ['Chooses who to ask', 'Designs a reward worth sharing', 'Tracks who referred who'],
    thread: [
      { from: 'biz', text: 'Hi Jess, you\u2019ve been with us a while and we really appreciate you. If a friend would like us too, send them our way and you\u2019ll both get $20 off your next visit.' },
      { from: 'cust', text: 'My sister has been asking about you actually' },
      { from: 'biz', text: 'Love that. Here\u2019s a link she can book with. Your $20 applies once she comes in.' },
    ],
  },
];

export const bookHref = () => BOOK_URL || BOOK_FALLBACK;

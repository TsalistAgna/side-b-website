import { useEffect, useRef, useState } from 'react';
import { destinations, messages } from './config.js';
import PrivacyPage from './PrivacyPage.jsx';

function ActionButton({ className, destination, onOpen, children }) {
  const url = destinations[destination];
  return url ? <a className={className} href={url} aria-current={destination === 'privacy' && window.location.pathname.replace(/\/$/, '') === '/privacy' ? 'page' : undefined}>{children}</a> :
    <button className={className} onClick={() => onOpen(destination)}>{children}</button>;
}

function PhonePreview({ className, src, width, height, alt }) {
  const [missing, setMissing] = useState(false);
  return <div className={`${className} asset-slot${missing ? ' asset-missing' : ''}`}>
    <img src={src} width={width} height={height} alt={alt} hidden={missing} onError={() => setMissing(true)} />
    {missing && <span className="asset-notice">Original app preview<br />awaiting Figma asset</span>}
  </div>;
}

function ArchiveNote({ className, title, note }) {
  return <article className={`paper ${className}`}><p className="note-label">ARCHIVE NOTE</p><h3>{title}</h3><p>{note}</p></article>;
}

function Step({ number, title, description }) {
  return <li><span className="step-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="arrow" aria-hidden="true">→</span></li>;
}

function InfoDialog({ active, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    if (active && !ref.current.open) ref.current.showModal();
    else if (!active && ref.current.open) ref.current.close();
  }, [active]);
  const message = messages[active];
  return <dialog ref={ref} id="info-dialog" aria-labelledby="dialog-title" onClose={onClose} onClick={event => {
    if (event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose();
  }}>
    <button className="close" aria-label="Close dialog" onClick={onClose}>×</button>
    <h2 id="dialog-title">{message?.[0]}</h2><p>{message?.[1]}</p>
    <button className="button secondary" onClick={onClose}>Got it</button>
  </dialog>;
}

export default function App() {
  const [active, setActive] = useState(null);
  const isPrivacy = window.location.pathname.replace(/\/$/, '') === '/privacy';
  useEffect(() => {
    document.title = isPrivacy ? 'Privacy Policy — Side-B' : 'Side-B — A second life for your screenshots';
  }, [isPrivacy]);
  return <>

<a className="skip-link" href="#main">Skip to content</a>
<header className="navigation"><a className="brand" href="/" aria-label="Side-B home">Side-B</a><nav aria-label="Main navigation"><a href="/#app">The App</a><ActionButton className="text-link" destination="privacy" onOpen={setActive}>Privacy</ActionButton><ActionButton className="text-link" destination="support" onOpen={setActive}>Support</ActionButton><ActionButton className="button primary" destination="download" onOpen={setActive}>Get the App ↗</ActionButton></nav></header>
{isPrivacy ? <PrivacyPage /> : <main id="main">
<section className="hero" aria-labelledby="hero-title"><div className="hero-copy"><p className="eyebrow">YOUR CAMERA ROLL'S SECOND CHANCE</p><h1 id="hero-title">Your screenshots<br />have unfinished<br />business.</h1><p className="hero-description">All those places, products, and plans you swore you'd come back to? Let's give them another life.</p><div className="actions"><ActionButton className="button primary" destination="download" onOpen={setActive}>Give your screenshots a second life ↗</ActionButton><a className="button secondary" href="#how-it-works">See how it works ↓</a></div><p className="footnote">No more screenshot archaeology.</p></div><div className="collage" aria-label="Side-B screenshot collection preview"><div className="backing"></div><PhonePreview className="hero-phone" src="/assets/side-b-collection-phone.png" width={298} height={610} alt="Side-B Collection app screen" /><div className="sticker">SAVED. FORGOTTEN.<br />FOUND AGAIN.</div><ArchiveNote className="hero-note" title="restaurant / maybe" note="saved for later" /><span className="archive-pill hero-pill">#847 / UNFINISHED</span></div></section>
<section className="problem" aria-labelledby="problem-title"><div className="scrapbook"><ArchiveNote className="place" title="Places to visit." note="I’ll come back to this." /><ArchiveNote className="buy" title="Things to buy." note="Saved 3 months ago. Oops." /><ArchiveNote className="ideas" title="Ideas to remember." note="Future me’s problem." /><ArchiveNote className="plans" title="Plans for later." note="Maybe this weekend?" /></div><div className="problem-copy"><p className="eyebrow">THE SCREENSHOT GRAVEYARD</p><h2 id="problem-title">A camera roll full<br />of good intentions.</h2><p>That restaurant you wanted to try. That outfit you saved. That trip you keep postponing. Somewhere between screenshot number 847 and number 848, the plan disappeared.</p></div></section>
<section className="how" id="how-it-works" aria-labelledby="how-title"><p className="eyebrow">HOW IT WORKS</p><h2 id="how-title">From screenshot graveyard<br />to second life.</h2><ol className="steps"><Step number="01" title="Save the thing." description="Capture the things you want to remember." /><Step number="02" title="Give it a place." description="Organize screenshots into useful categories." /><Step number="03" title="Make it happen." description="Rediscover saved intentions and decide what to do next." /></ol></section>
<section className="feature" id="app" aria-labelledby="feature-title"><div className="feature-visual"><PhonePreview className="feature-phone" src="/assets/side-b-screenshot-detail-phone.png" width={274} height={560} alt="Side-B saved screenshot detail screen" /></div><div className="feature-copy"><p className="eyebrow">FIND THE GOOD STUFF.</p><h2 id="feature-title">Lost in your camera roll? Not anymore.</h2><p>Give saved information a better chance of being found when you need it.</p><span className="archive-pill">FEATURE / 01</span></div></section>
<section className="final-cta"><div><h2>Your next favorite thing<br />might already be in<br />your screenshots.</h2><p>Give all those saved-for-later moments somewhere to go.</p><ActionButton className="button secondary" destination="download" onOpen={setActive}>Give them a second life ↗</ActionButton></div></section>
</main>}
<footer><div className="footer-top"><div><a className="brand" href="/">Side-B</a><p>A second life for the things you save.</p></div><nav aria-label="Footer navigation"><a href="/">Home</a><ActionButton className="text-link" destination="privacy" onOpen={setActive}>Privacy Policy</ActionButton><ActionButton className="text-link" destination="terms" onOpen={setActive}>Terms of Use</ActionButton><ActionButton className="text-link" destination="support" onOpen={setActive}>Support</ActionButton></nav></div><hr /><p className="copyright">© 2026 side-b. All rights reserved.</p></footer>

<InfoDialog active={active} onClose={() => setActive(null)} />
</>;
}

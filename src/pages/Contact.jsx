import { site } from '../data/site.js';
import '../styles/contact.css';

// Add your portfolio or showreel URL here to enable View Our Work.
const workUrl = '';

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact-inner">
        <div className="contact-copy">
          <h2 id="contact-title">Ready to make<br />your content<br />sharper?</h2>
          <p className="contact-subtitle">Let's talk about your project.</p>
        </div>
        <div className="contact-actions">
          <a className="button button-dark" href={`mailto:${site.email}?subject=Project%20enquiry`}>
            Contact HawkDigi
          </a>
          {workUrl ? (
            <a className="button contact-work-button" href={workUrl}>View Our Work</a>
          ) : (
            <button className="button contact-work-button" type="button" disabled title="Portfolio link coming soon">
              View Our Work
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

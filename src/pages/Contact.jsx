import { site } from '../data/site.js';
import '../styles/contact.css';
export default function Contact() {
  return <section id="contact" className="section contact" aria-labelledby="contact-title"><div className="container contact-inner"><h2 id="contact-title">Ready to make<br />your content<br />sharper?</h2><a className="button button-dark" href={`mailto:${site.email}?subject=Project%20enquiry`}>Talk to our team</a></div></section>;
}

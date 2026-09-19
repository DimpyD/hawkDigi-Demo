import Brand from './Brand.jsx';
import { site, navigation } from '../data/site.js';
import '../styles/footer.css';
export default function Footer() {
  return <footer className="site-footer"><div className="container"><div className="row gy-5"><div className="col-md-5"><Brand /><p className="footer-description">A full-service post-production agency for editing,<br className="desktop-break" /> AI, shoot, and post — one team, start to finish.</p></div><div className="col-md-4"><h2 className="footer-label">Contact</h2><address><a href={`mailto:${site.email}`}>{site.email}</a><span>{site.phone}</span><span>{site.location}</span></address></div><div className="col-md-3"><h2 className="footer-label">Explore</h2><nav className="footer-links" aria-label="Footer navigation">{navigation.filter(item => item.id !== 'contact').map(item => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}</nav></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} HawkDigi. All rights reserved.</span><span>Dummy content for preview purposes.</span></div></div></footer>;
}

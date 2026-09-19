import { useState } from 'react';
import Brand from './Brand.jsx';
import { navigation } from '../data/site.js';
import '../styles/header.css';
export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container header-inner"><Brand /><button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}<span aria-hidden="true">{open ? ' ×' : ' ☰'}</span></button><nav id="site-navigation" className={`site-navigation${open ? ' is-open' : ''}`} aria-label="Main navigation" onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); document.querySelector('.menu-toggle')?.focus(); } }}><div className="nav-links">{navigation.map(item => <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>{item.label}</a>)}</div><a href="#contact" className="button button-gold" onClick={() => setOpen(false)}>Get in touch</a></nav></div></header>;
}

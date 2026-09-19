import { stats } from '../data/site.js';
import '../styles/home.css';
export default function Home() {
    return <section id="home" className="hero"><div className="container"><div className="row align-items-center gy-5"><div className="col-lg-7">
        <p className="eyebrow">Post-production, done right</p><h1>Precision in<br /><span className="gold">every frame.</span></h1>
        <p className="hero-description">From the first shot to the final render, HawkDigi brings sharp, cinematic quality to every project. Editing, AI-powered production, shoot, and post — all under one roof.</p><div className="hero-actions"><a className="button button-gold" href="#contact">Get a free consultation</a><a className="button button-outline" href="#services">See our services</a></div><dl className="stats">{stats.map(stat => <div key={stat.label}><dt>{stat.value}</dt><dd>{stat.label}</dd></div>)}</dl></div><div className="col-lg-5"><div className="logo-placeholder" role="img" aria-label="Placeholder for your company logo"><span>LOGO</span></div></div></div></div></section>;
}

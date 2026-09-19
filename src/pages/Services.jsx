import { services } from '../data/site.js';
import '../styles/services.css';
export default function Services() {
    return <section id="services" className="section services" aria-labelledby="services-title"><div className="container">
        <h2 id="services-title">What we do</h2><p className="section-intro">Four services, working as one pipeline — so nothing gets lost
            <br className="desktop-break" /> between the shoot and the final export.</p><div className="row g-0 services-grid">
            {services.map(service => <article className="col-md-6 col-lg-3 service-card" key={service.title}>
                <span className="service-accent" aria-hidden="true" /><h3>{service.title}</h3><p>{service.description}</p></article>)}</div></div></section>;
}

import { benefits } from '../data/site.js';
import '../styles/why-us.css';
export default function WhyUs() {
  return <section id="why-us" className="section why-us" aria-labelledby="why-title"><div className="container"><div className="row gy-4"><div className="col-lg-4"><h2 id="why-title">Why HawkDigi</h2><p className="section-intro">Like the hawk, we don’t miss a detail.</p></div><div className="col-lg-7 offset-lg-1"><ol className="benefits">{benefits.map((benefit, index) => <li key={benefit.title}><span className="benefit-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><div><h3>{benefit.title}</h3><p>{benefit.description}</p></div></li>)}</ol></div></div></div></section>;
}

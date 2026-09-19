import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import WhyUs from './pages/WhyUs.jsx';
import Contact from './pages/Contact.jsx';
export default function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main"><Home /><About /><Services /><WhyUs /><Contact /></main><Footer /></>;
}

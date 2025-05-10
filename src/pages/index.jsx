import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Contact } from '../components/Contact';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

//mobil nav
const navToggle = document.querySelector('.nav-btn');
const mobileNav = document.querySelector('.rollout-nav');

navToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('nav-closed');
});

mobileNav.addEventListener('click', () => {
  mobileNav.classList.add('nav-closed');
});

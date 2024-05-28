import gsap from 'gsap';
import '../index.html';
import '../styles/app.scss';
import { pageLoad } from './utils';
import header from './components/header';
import fade from './components/fade';
import initBarba from './components/init-barba';

pageLoad(() => {
    header();
    fade();
    initBarba();
});


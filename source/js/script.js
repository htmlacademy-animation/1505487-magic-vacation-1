// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import {AnimationSettings, TextAniMaker} from './modules/text-ani-maker';
import svgLoader from './modules/svg-loader';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

svgLoader(fullPageScroll.activeScreen);
init();

function init() {
  // event listeners
  window.addEventListener(`load`, () => {
    document.body.classList.add(`page-ready`);
  }, {once: true});

  // initial set up logic
  const rulesScreen = document.querySelector(`.screen--rules`);
  const lastRuleEl = rulesScreen.querySelector(`.rules__list > :last-child`);
  lastRuleEl.addEventListener(`animationend`, () => {
    rulesScreen.classList.add(`show-controls`);
  });

  const animationSettings = new AnimationSettings();
  const taglineTransformer = new TextAniMaker(document.querySelector(`.intro__title`), animationSettings);
  const dateTransformer = new TextAniMaker(document.querySelector(`.intro__date`), animationSettings);
  taglineTransformer.runAnimation(400);
  dateTransformer.runAnimation(1400);
}

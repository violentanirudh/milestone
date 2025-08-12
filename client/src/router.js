import Navigo from 'navigo';
import { Home } from './views/home.js';
import { Story } from './views/story.js';
import { Profile } from './views/profile.js';

const router = new Navigo('/');

router
  .on('/', () => {
    document.querySelector('#app').innerHTML = Home();
  })
  .on('/story/:id', ({ data }) => {
    document.querySelector('#app').innerHTML = Story(data.id);
  })
  .on('/profile', () => {
    document.querySelector('#app').innerHTML = Profile();
  });

export default router;

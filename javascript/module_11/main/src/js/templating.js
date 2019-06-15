import posts from '../menu.json';
import postFeedItemTemplate from '../templates/post-feed-item.hbs';

const refs = {
  postMenu: document.querySelector('#menu'),
};

buildPostFeed(posts);

function buildPostFeed() {
  const markup = posts.map(post => postFeedItemTemplate(post)).join('');
  refs.postMenu.insertAdjacentHTML('beforeend', markup);
}

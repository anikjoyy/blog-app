import { Fragment } from 'react';

import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-nextjs1',
    title: 'getting-started-nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'getting-started-nextjs',
    date: '2022-09-29',
  },
  {
    slug: 'getting-started-nextjs2',
    title: 'getting-started-nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'getting-started-nextjs',
    date: '2022-09-29',
  },
  {
    slug: 'getting-started-nextjs3',
    title: 'getting-started-nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'getting-started-nextjs',
    date: '2022-09-29',
  },
  {
    slug: 'getting-started-nextjs4',
    title: 'getting-started-nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'getting-started-nextjs',
    date: '2022-09-29',
  },
];

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;

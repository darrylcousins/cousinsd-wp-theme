import React from 'react';
import Thumbnail from '../components/thumbnail.jsx';
import Page from '../components/page.jsx';

const textClass = 'lh-copy ph4 near-black';
const items = [
  {
    src: 'http://darrylcousins.net.nz/media/cousinsd/1999-19.jpg',
    target: 'https://goo.gl/photos/yjKQ6hzwfpGRC2qh8',
    headline: 'Painting',
    text:
  <p className={textClass}>
    I studied painting at various art schools, firstly in Australia and then
    later a year in Dublin and in Bratislava. This gallery of images are
    paintings that I made during the 2 years of study at the Vysoká škola
    výtvarných umení in Bratislava, Slovakia 1998/99.
  </p>,
  },
  {
    src: 'http://darrylcousins.net.nz/media/cousinsd/taumutu-1.jpg',
    target: 'https://goo.gl/photos/9XbnbTsgK3txB2Tx5',
    headline: 'House',
    text:
  <p className={textClass}>
    Originally built as a 4 room cottage in the
    1920&apos;s the house was extended in the 1970&apos;s and the roof reframed at that
    time. It is still very much
    a work in progress (never to be completed I sometimes ask myself). Some
    of the project is documented in this gallery of images.
  </p>,
  },
  {
    src: 'http://darrylcousins.net.nz/media/cousinsd/oven-1.jpg',
    target: 'https://goo.gl/photos/eprUyH4BHXoNZBB98',
    headline: 'Ovens',
    text:
  <p className={textClass}>
    I&apos;ve built more than a few brick and clay
    ovens over the years. This gallery documents a couple of them, including
    one that I use as a wood-fired kiln to bake smaller clay objects of
    practical and creative purpose.
  </p>,
  },
  {
    src: 'http://darrylcousins.net.nz/media/cousinsd/porch-1.jpg',
    target: 'https://goo.gl/photos/Yq8TepCxAk8U73FR9',
    headline: 'Porch',
    text:
  <p className={textClass}>
    Probably the biggest building project that
    I completed on my own around 2005. The high deck was rebuilt, framed, and
    partially enclosed with second-hand windows. Steps were built down to a
    new lower deck. At the same time the front porch was rebuilt copying the
    style of the original build.
  </p>,
  },
  {
    src: 'http://darrylcousins.net.nz/media/cousinsd/canoe-1.jpg',
    target: 'https://goo.gl/photos/fHsTe2Btx7n9Namk9',
    headline: 'Canoe',
    text:
  <p className={textClass}>
    Another unfinished project built to plans
    from a book on building strip canoes. One day the hull will be covered
    with transparent fibreglass. One day I may get there.
  </p>,
  },
  {
    src: 'http://darrylcousins.net.nz/media/cousinsd/camper-1.jpg',
    target: 'https://goo.gl/photos/naU5SxQsd9zqYNgA8',
    headline: 'Camper',
    text:
  <p className={textClass}>
    This timber camper was built on the back on
    a ute. It did get a number of years of use as a covered ute canopy and
    camper before I finally sold it with the ute.
  </p>,
  },
  {
    src: 'http://darrylcousins.net.nz/media/cousinsd/trailer-1.jpg',
    target: 'https://goo.gl/photos/Dd5Zv8rgAtuVKapo7',
    headline: 'Trailer',
    text:
  <p className={textClass}>
    This was my first and remains the biggest
    engineering project that I&apos;ve undertaken. It was built in 2008 and is
    still registered and in great condition.
  </p>,
  },
  {
    src: 'http://darrylcousins.net.nz/media/cousinsd/bay-window-1.jpg',
    target: 'https://goo.gl/photos/64DT8BDpC7cqzzST7',
    headline: ' Repairs',
    text:
  <p className={textClass}>
    After the Christchurch earthquake of 2010 I
    was working for my cousin in demolition and soon after for a small
    building company carrying out earthquake repairs. This gallery documents
    a portion of that work.
  </p>,
  },
];

const Gallery = () => (
  <Page>
    <div className="center pa1 pa3-ns">
      <div className="cf ph2-ns">
        {items.map((item) => {
          const {
            src, target, headline, text,
          } = item;
          return (
            <Thumbnail
              key={target.split('/').pop()}
              src={src}
              target={target}
              headline={headline}
            >{ text }</Thumbnail>
          );
        })}
      </div>
    </div>
  </Page>
);

export default Gallery;

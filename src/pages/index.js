import Head from 'next/head';

import React from 'react';
import { getFeaturedEvents } from '../helpers/api-utils';
import EventList from '../components/events/event-list';
import NewsletterRegistration from '@/components/input/newsletter-registration';

function HomePage(props) {
  return (
    <main>
      <div>
        <Head>
          <title>NextJS Events</title>
          <meta
            name='description'
            content='Find a lot of great events that allow you to evolve...'
          />
        </Head>
        <NewsletterRegistration />
        <EventList items={props.events} />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;

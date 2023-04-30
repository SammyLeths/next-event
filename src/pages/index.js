import React from 'react';
import { getFeaturedEvents } from '../../dummy-data';
import EventList from '../components/events/event-list';

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);

  return (
    <main>
      <div>
        <EventList items={featuredEvents} />
        <h1>Home Page</h1>
      </div>
    </main>
  );
}

export default HomePage;

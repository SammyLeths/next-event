import React from 'react';
import { getFeaturedEvents } from '../../dummy-data';
import EventList from '../components/events/event-list';

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <main>
      <div>
        <EventList items={featuredEvents} />
      </div>
    </main>
  );
}

export default HomePage;

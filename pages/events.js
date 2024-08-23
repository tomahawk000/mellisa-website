import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Events() {
  const [rsvpData, setRsvpData] = useState({
    name: '',
    email: '',
    eventId: null
  })

  // Placeholder data for upcoming events
  const events = [
    { id: 1, title: 'Open House: Coastal Retreat', date: '2023-06-15', time: '2:00 PM - 4:00 PM', location: 'La Jolla', image: '/images/events/event1.jpg' },
    { id: 2, title: 'First-Time Homebuyer Workshop', date: '2023-06-20', time: '6:00 PM - 8:00 PM', location: 'Virtual', image: '/images/events/event2.jpg' },
    { id: 3, title: 'Luxury Property Showcase', date: '2023-06-25', time: '1:00 PM - 5:00 PM', location: 'Downtown San Diego', image: '/images/events/event3.jpg' },
  ]

  const handleRSVP = (eventId) => {
    setRsvpData(prevState => ({ ...prevState, eventId }))
    // Here you would typically open a modal or navigate to an RSVP form
    console.log(`RSVP for event ${eventId}`)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Upcoming Events - Mellisa Real Estate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-primary-color text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold cursor-pointer">Mellisa Real Estate</h1>
          </Link>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link href="/listings" className="hover:text-gray-300">Listings</Link></li>
            <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
            <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            <li><Link href="/events" className="hover:text-gray-300">Events</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary-color">Upcoming Events</h1>

        <section id="events-list">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map(event => (
              <div key={event.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <Image src={event.image} alt={event.title} width={400} height={250} className="w-full" />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                  <p className="text-gray-600 mb-2">{event.date} | {event.time}</p>
                  <p className="mb-4">{event.location}</p>
                  <button
                    onClick={() => handleRSVP(event.id)}
                    className="btn btn-primary w-full"
                  >
                    RSVP
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Mellisa - San Diego Real Estate. All rights reserved.</p>
      </footer>
    </div>
  )
}

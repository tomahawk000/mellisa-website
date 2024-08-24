import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Listings() {
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    propertyType: '',
    bedrooms: ''
  })

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }))
  }

  // Placeholder data for property listings
  const properties = [
    { id: 1, title: 'Coastal Retreat', price: 1200000, bedrooms: 4, bathrooms: 3, type: 'House', location: 'La Jolla', image: '/images/a_modern_luxury_house_in_san_diego_california.jpg' },
    { id: 2, title: 'Urban Oasis', price: 750000, bedrooms: 3, bathrooms: 2, type: 'Condo', location: 'Downtown', image: '/images/san_diego_skyline_at_sunset.jpg' },
    { id: 3, title: 'Suburban Gem', price: 950000, bedrooms: 5, bathrooms: 4, type: 'House', location: 'Poway', image: '/images/a_cozy_living_room_interior_in_a_san_diego_home.jpg' },
    // Add more properties as needed
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Property Listings - Mellisa Real Estate</title>
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
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary-color">Property Listings</h1>

        <section id="filters" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Search Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={filters.location}
              onChange={handleFilterChange}
              className="border rounded p-2"
            />
            <select
              name="priceRange"
              value={filters.priceRange}
              onChange={handleFilterChange}
              className="border rounded p-2"
            >
              <option value="">Price Range</option>
              <option value="0-500000">$0 - $500,000</option>
              <option value="500000-1000000">$500,000 - $1,000,000</option>
              <option value="1000000+">$1,000,000+</option>
            </select>
            <select
              name="propertyType"
              value={filters.propertyType}
              onChange={handleFilterChange}
              className="border rounded p-2"
            >
              <option value="">Property Type</option>
              <option value="House">House</option>
              <option value="Condo">Condo</option>
              <option value="Townhouse">Townhouse</option>
            </select>
            <select
              name="bedrooms"
              value={filters.bedrooms}
              onChange={handleFilterChange}
              className="border rounded p-2"
            >
              <option value="">Bedrooms</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>
        </section>

        <section id="property-listings">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map(property => (
              <div key={property.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <Image src={property.image} alt={property.title} width={400} height={300} className="w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-2">${property.price.toLocaleString()} | {property.bedrooms} bed | {property.bathrooms} bath</p>
                  <p className="mb-2">{property.type} in {property.location}</p>
                  <Link href={`/property/${property.id}`} className="btn btn-primary">
                    View Details
                  </Link>
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

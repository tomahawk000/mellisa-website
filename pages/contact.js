import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Contact Mellisa - San Diego Real Estate Agent</title>
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
        <h1 className="text-4xl font-bold mb-8 text-center text-primary-color">Contact Mellisa</h1>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1 font-semibold">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="(123) 456-7890"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-2 border rounded"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">Send Message</button>
          </form>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Mellisa - San Diego Real Estate. All rights reserved.</p>
      </footer>
    </div>
  )
}

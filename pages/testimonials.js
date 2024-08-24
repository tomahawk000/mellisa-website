import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Testimonials() {
  // Placeholder data for testimonials
  const testimonials = [
    { id: 1, name: 'John Doe', text: 'Mellisa was fantastic in helping us find our dream home. Her knowledge of the San Diego market is unparalleled.', image: '/images/testimonial1.jpg' },
    { id: 2, name: 'Jane Smith', text: 'We sold our house in record time thanks to Mellisa\'s expertise. Highly recommended!', image: '/images/testimonial2.jpg' },
    { id: 3, name: 'Mike Johnson', text: 'Mellisa\'s attention to detail and personalized service made our home buying experience smooth and enjoyable.', image: '/images/testimonial3.jpg' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Testimonials - Mellisa Real Estate</title>
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
        <h1 className="text-4xl font-bold mb-8 text-center text-primary-color">Client Testimonials</h1>

        <section id="testimonials">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center mb-4">
                    <Image src={testimonial.image} alt={testimonial.name} width={60} height={60} className="rounded-full mr-4" />
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  </div>
                  <p className="text-gray-600">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="cta" className="mt-12 bg-gray-100 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Exceptional Service?</h2>
          <p className="text-lg mb-6">Let's start your real estate journey today!</p>
          <Link href="/contact" className="btn btn-primary">
            Contact Mellisa
          </Link>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Mellisa - San Diego Real Estate. All rights reserved.</p>
      </footer>
    </div>
  )
}

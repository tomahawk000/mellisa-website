import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  console.log('Rendering Home component');
  try {
    return (
      <div className="flex flex-col min-h-screen">
        <Head>
          <title>Mellisa - San Diego Real Estate Agent</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="bg-primary-color text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold cursor-pointer">Mellisa Real Estate</h1>
            </Link>
            <ul className="flex space-x-4">
              <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
              <li><Link href="/listings" className="hover:text-gray-300">Listings</Link></li>
              <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
              <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8">
          <section id="hero" className="mb-16 text-center relative">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/a_modern_luxury_house_in_san_diego_california.jpg"
                alt="Modern luxury house in San Diego"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className="relative z-10 bg-black bg-opacity-50 p-8 rounded-lg">
              <h1 className="text-5xl font-bold mb-4 text-white">Find Your Dream Home in San Diego</h1>
              <p className="text-xl mb-8 text-white">Discover the perfect property with Mellisa, your trusted real estate expert.</p>
              <Link href="/contact" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </section>

          <section id="introduction" className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">Welcome to San Diego Real Estate</h2>
            <div className="flex flex-col md:flex-row items-center">
              <Image src="/images/a_professional_real_estate_agent_helping_clients.jpg" alt="Mellisa helping clients" width={400} height={400} className="rounded-lg mb-4 md:mr-8" />
              <div>
                <p className="text-lg mb-4">
                  Hi, I'm Mellisa! With years of experience in the San Diego real estate market, I'm passionate about helping you find the perfect home or investment property. My expertise in local neighborhoods, market trends, and negotiation skills ensures a smooth and successful real estate journey for you.
                </p>
                <p className="text-lg">
                  Whether you're a first-time homebuyer, looking to upgrade, or interested in investment opportunities, I'm here to guide you every step of the way.
                </p>
              </div>
            </div>
          </section>

          <section id="featured-listings" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Featured Listings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <Image src="/images/a_modern_luxury_house_in_san_diego_california.jpg" alt="Modern Luxury House" width={400} height={300} className="w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Coastal Retreat</h3>
                  <p className="text-gray-600 mb-2">$1,200,000 | 4 bed | 3 bath</p>
                  <p>Stunning modern luxury house with panoramic views.</p>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <Image src="/images/a_beautiful_beach_scene_in_southern_california.jpg" alt="Beautiful Beach Scene" width={400} height={300} className="w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Beachfront Paradise</h3>
                  <p className="text-gray-600 mb-2">$2,500,000 | 5 bed | 4 bath</p>
                  <p>Luxurious beachfront property with direct access to the shore.</p>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <Image src="/images/a_cozy_living_room_interior_in_a_san_diego_home.jpg" alt="Cozy Living Room" width={400} height={300} className="w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Urban Oasis</h3>
                  <p className="text-gray-600 mb-2">$950,000 | 3 bed | 2 bath</p>
                  <p>Modern condo with a cozy interior in the heart of San Diego.</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/listings" className="btn btn-primary">
                View All Listings
              </Link>
            </div>
          </section>

          <section id="contact" className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
            <p className="text-center mb-6">Ready to start your real estate journey? Contact me today!</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="tel:+1234567890" className="btn btn-primary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now
              </a>
              <Link href="/contact" className="btn btn-primary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Contact Me
              </Link>
            </div>
          </section>
        </main>

        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} Mellisa - San Diego Real Estate. All rights reserved.</p>
        </footer>
      </div>
    );
  } catch (error) {
    console.error('Error rendering Home component:', error);
    return <div>An error occurred while loading the page. Please try again later.</div>;
  }
}

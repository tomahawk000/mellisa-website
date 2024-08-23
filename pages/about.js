import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>About Mellisa - San Diego Real Estate Agent</title>
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
        <h1 className="text-4xl font-bold mb-8 text-center text-primary-color">About Mellisa</h1>

        <section id="background" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary-color">Background</h2>
          <div className="flex flex-col md:flex-row items-center">
            <Image src="/images/mellisa-about.jpg" alt="Mellisa" width={400} height={400} className="rounded-lg mb-4 md:mr-8" />
            <div>
              <p className="text-lg mb-4">
                With over a decade of experience in the San Diego real estate market, I've built a reputation for excellence and dedication to my clients. My journey in real estate began after a successful career in marketing, which equipped me with valuable skills in negotiation and client relations.
              </p>
              <p className="text-lg">
                Born and raised in Southern California, I have an intimate knowledge of San Diego's diverse neighborhoods and a deep appreciation for the unique lifestyle our beautiful city offers.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary-color">Experience</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Over 10 years of experience in San Diego real estate</li>
            <li>Consistently ranked in the top 5% of real estate agents in San Diego County</li>
            <li>Specialized expertise in luxury properties and waterfront homes</li>
            <li>Certified Negotiation Expert (CNE)</li>
            <li>Accredited Buyer's Representative (ABR)</li>
            <li>Member of the National Association of Realtors</li>
          </ul>
        </section>

        <section id="approach" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary-color">My Unique Approach</h2>
          <p className="text-lg mb-4">
            My approach to real estate is centered on personalized service and attention to detail. I believe that every client and every property is unique, and I tailor my services to meet individual needs and goals.
          </p>
          <p className="text-lg mb-4">
            I leverage cutting-edge technology and marketing strategies to ensure my clients' properties receive maximum exposure. For buyers, I employ advanced search techniques to find hidden gems that match their criteria perfectly.
          </p>
          <p className="text-lg">
            My commitment doesn't end at the closing table. I maintain long-term relationships with my clients, providing ongoing support and advice long after the transaction is complete.
          </p>
        </section>

        <section id="cta" className="bg-gray-100 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
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

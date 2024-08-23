import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')

  // Placeholder data for blog posts
  const blogPosts = [
    { id: 1, title: 'Top 5 Neighborhoods in San Diego for Families', category: 'Neighborhoods', date: '2023-05-15', excerpt: 'Discover the best family-friendly areas in San Diego...', image: '/images/blog-post-1.jpg' },
    { id: 2, title: 'How to Stage Your Home for a Quick Sale', category: 'Home Selling', date: '2023-05-10', excerpt: 'Learn the secrets of home staging that can help you sell faster...', image: '/images/blog-post-2.jpg' },
    { id: 3, title: 'San Diego Real Estate Market Trends 2023', category: 'Market Analysis', date: '2023-05-05', excerpt: 'Get insights into the latest trends shaping San Diego\'s real estate market...', image: '/images/blog-post-3.jpg' },
    // Add more blog posts as needed
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Blog - Mellisa Real Estate</title>
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
        <h1 className="text-4xl font-bold mb-8 text-center text-primary-color">Real Estate Blog</h1>

        <section id="search" className="mb-8">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </section>

        <section id="blog-posts">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <Image src={post.image} alt={post.title} width={400} height={250} className="w-full" />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-2">{post.category} | {post.date}</p>
                  <p className="mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="btn btn-primary">
                    Read More
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

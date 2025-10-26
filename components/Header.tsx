import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold gradient-text">
            Aashutosh Bairagi
          </Link>
          
          <div className="flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-white transition">
              Home
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-white transition">
              Projects
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white transition">
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
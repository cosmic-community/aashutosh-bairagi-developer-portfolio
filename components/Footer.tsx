export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-400">
          <p>© {currentYear} Aashutosh Bairagi. Built with Next.js & Cosmic.</p>
        </div>
      </div>
    </footer>
  )
}
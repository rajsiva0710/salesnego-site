import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-800 bg-black text-white px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        SalesNego
      </Link>
      <nav className="flex gap-6 text-sm font-medium">
        <Link href="/services" className="hover:text-blue-400 transition">Services</Link>
        <Link href="/industries" className="hover:text-blue-400 transition">Industries</Link>
        <Link href="/case-studies" className="hover:text-blue-400 transition">Case Studies</Link>
        <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
      </nav>
      <a
        href="https://calendly.com/meeting-with-salesnego/30min?back=1&month=2026-07"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-2 rounded-lg transition"
      >
        Book Call
      </a>
    </header>
  );
}
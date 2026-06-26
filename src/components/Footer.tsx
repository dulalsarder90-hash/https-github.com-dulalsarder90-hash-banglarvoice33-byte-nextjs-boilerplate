import { Facebook, Twitter, Youtube, Instagram, Send, Mail, Phone, MapPin, Rss, ArrowUp } from 'lucide-react'

const footerLinks = {
  categories: [
    { label: 'জাতীয়', href: '/national' },
    { label: 'রাজনীতি', href: '/politics' },
    { label: 'অর্থনীতি', href: '/economy' },
    { label: 'আন্তর্জাতিক', href: '/international' },
    { label: 'খেলা', href: '/sports' },
    { label: 'প্রযুক্তি', href: '/tech' },
  ],
  services: [
    { label: 'ই-পেপার', href: '/e-paper' },
    { label: 'শিক্ষার্থী লার্নিং হাব', href: '/learning-hub' },
    { label: 'ব্রেকিং নিউজ', href: '/breaking' },
    { label: 'নিউজলেটার', href: '/newsletter' },
    { label: 'আর্কাইভ', href: '/archive' },
  ],
  company: [
    { label: 'আমাদের সম্পর্কে', href: '/about' },
    { label: 'সম্পাদকীয় নীতি', href: '/editorial-policy' },
    { label: 'বিজ্ঞাপন', href: '/advertise' },
    { label: 'যোগাযোগ', href: '/contact' },
    { label: 'ক্যারিয়ার', href: '/careers' },
  ],
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#1a1f3c] text-white">
      {/* Newsletter bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#2E4CB2] flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-headline text-lg font-bold">দৈনিক নিউজলেটার</h3>
                <p className="text-sm text-white/60">সকালের সেরা সংবাদ আপনার ইনবক্সে</p>
              </div>
            </div>
            <form className="flex w-full md:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="আপনার ইমেইল ঠিকানা"
                className="flex-1 md:w-72 px-4 py-2.5 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#1BA1E2] text-sm"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-[#1BA1E2] text-white font-semibold text-sm hover:bg-[#1890c9] transition-colors whitespace-nowrap"
              >
                সাবস্ক্রাইব
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#2E4CB2] flex items-center justify-center">
                <span className="font-headline font-bold text-lg">ব</span>
              </div>
              <h2 className="font-headline text-xl font-bold">বাংলার পালস</h2>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-sm">
              বাংলাদেশের সবচেয়ে নির্ভরযোগ্য সংবাদ পortal। আমরা সঠিক, নিরপেক্ষ ও সময়োপযোগী সংবাদ প্রকাশে প্রতিশ্রুতিবদ্ধ।
            </p>
            <div className="space-y-2 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#1BA1E2]" />
                <span>১২৩ প্রগতি সরণি, ঢাকা ১২১২</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#1BA1E2]" />
                <span>+৮৮০ ১৭১২-৩৪৫৬৭৮</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1BA1E2]" />
                <span>info@banglarpulse.com</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-headline text-sm font-bold mb-4 text-white/80">বিভাগ</h4>
            <ul className="space-y-2.5">
              {footerLinks.categories.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-[#1BA1E2] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-headline text-sm font-bold mb-4 text-white/80">সেবা</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-[#1BA1E2] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-headline text-sm font-bold mb-4 text-white/80">কোম্পানি</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-[#1BA1E2] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center sm:text-left">
            © ২০২৬ বাংলার পালস। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#1BA1E2] transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#1BA1E2] transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#1BA1E2] transition-colors" aria-label="Youtube">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#1BA1E2] transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#1BA1E2] transition-colors" aria-label="Telegram">
              <Send className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#1BA1E2] transition-colors" aria-label="RSS">
              <Rss className="w-4 h-4" />
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#1BA1E2] transition-colors sm:ml-auto"
            aria-label="উপরে যান"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}

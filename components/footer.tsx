export default function Footer() {
  return (
    <footer className="bg-[#0a2e1a] text-white">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-12">
          {/* About */}
          <div>
            <h4 className="font-bold text-[#c4ff00] mb-3 md:mb-4 text-sm md:text-base">About Zamani</h4>
            <ul className="space-y-2 text-gray-300 text-xs md:text-sm">
              <li>
                <a href="#" className="hover:text-[#c4ff00] transition">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c4ff00] transition">
                  Mission & Vision
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c4ff00] transition">
                  Our Impact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-[#c4ff00] mb-3 md:mb-4 text-sm md:text-base">Services</h4>
            <ul className="space-y-2 text-gray-300 text-xs md:text-sm">
              <li>
                <a href="#" className="hover:text-[#c4ff00] transition">
                  Investments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c4ff00] transition">
                  Savings Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c4ff00] transition">
                  Advisory
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-[#c4ff00] mb-3 md:mb-4 text-sm md:text-base">Support</h4>
            <ul className="space-y-2 text-gray-300 text-xs md:text-sm">
              <li>
                <a href="#" className="hover:text-[#c4ff00] transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c4ff00] transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c4ff00] transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-[#c4ff00] mb-3 md:mb-4 text-sm md:text-base">Legal</h4>
            <ul className="space-y-2 text-gray-300 text-xs md:text-sm">
              <li>
                <a href="#" className="hover:text-[#c4ff00] transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c4ff00] transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c4ff00] transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-gray-700 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4 md:gap-6">
              <a href="#" className="hover:opacity-80 transition" title="Facebook">
                <img src="/facebook-icon.jpg" alt="Facebook" className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition" title="Instagram">
                <img src="/instagram-icon.jpeg" alt="Instagram" className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition" title="Twitter">
                <img src="/twitter-icon.webp" alt="Twitter" className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition" title="LinkedIn">
                <img src="/linkedin-icon.jpg" alt="LinkedIn" className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
            <p className="text-gray-400 text-xs md:text-sm text-center md:text-right">
              © 2025 Zamani Capital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

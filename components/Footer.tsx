export default function Footer() {
  return (
    <footer className="bg-black-deep border-t border-green-quantum/10 py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-white-pure font-bold text-lg mb-4">MLV Sprint</h3>
            <p className="text-white-dim text-sm leading-relaxed">
              Part of the MLV Ignite ecosystem empowering young innovators across Asia
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white-pure font-bold text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://mlvignite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-dim hover:text-green-quantum transition-colors text-sm"
                >
                  About MLV
                </a>
              </li>
              <li>
                <a
                  href="https://mlvignite.com/programs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-dim hover:text-green-quantum transition-colors text-sm"
                >
                  Summer Programs
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@mlvignite.com"
                  className="text-white-dim hover:text-green-quantum transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white-pure font-bold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://instagram.com/mlvignite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-dim hover:text-green-quantum transition-colors text-sm"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/mlvignite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-dim hover:text-green-quantum transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@mlvignite.com"
                  className="text-white-dim hover:text-green-quantum transition-colors text-sm"
                >
                  hello@mlvignite.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-green-quantum/10 text-center">
          <p className="text-white-dim text-sm">
            © 2025 MLV Ignite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

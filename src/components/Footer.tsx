const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <img 
                src="/teinno-logo-white.png" 
                alt="Teinno AS Logo" 
                className="h-6 w-auto"
                onError={(e) => {
                  console.log('White logo failed to load, using fallback');
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />
              <h3 className="text-xl font-bold text-white" style={{display: 'none'}}>TEINNO AS</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Building bridges between Nordic innovation and Latin American markets since 2018
            </p>
            <p className="text-gray-400 text-xs">
              Registered in Norway (Brønnøysund Register)
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Bergen, Norway</li>
              <li>Querétaro, Mexico</li>
              <li><a href="mailto:contact@teinno.no" className="hover:text-white transition-colors">contact@teinno.no</a></li>
              <li className="pt-2">
                <a
                  href="https://www.linkedin.com/company/teinno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Teinno AS. All rights reserved.</p>
          <div className="flex gap-4">
            <span>🇳🇴 Norway</span>
            <span>🇲🇽 Mexico</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
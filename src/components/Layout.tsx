import { Outlet, Link, useLocation } from "react-router-dom";
import { ShoppingBag, MapPin, Search, Menu as MenuIcon, X, Smartphone } from "lucide-react";
import { useState } from "react";

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top bar */}
      <div className="bg-brand-red text-white text-sm py-1.5 px-4 hidden md:flex justify-between items-center w-full z-50">
        <div className="container mx-auto px-4 flex justify-between">
            <Link to="/app" className="flex items-center gap-1 hover:text-brand-yellow transition-colors">
            <Smartphone size={16} />
            <span>Get the App for exclusive deals!</span>
            </Link>
            <div className="flex items-center gap-4">
            <Link to="/careers" className="hover:text-brand-yellow transition-colors">Careers</Link>
            <Link to="/help" className="hover:text-brand-yellow transition-colors">Help</Link>
            </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-40 w-full">
        <div className="container mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-8">
            <button 
              className="lg:hidden text-brand-black p-1"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
            <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-red rounded-xl flex items-center justify-center text-white font-display font-black text-2xl sm:text-3xl tracking-tighter">
                F
              </div>
              <span className="font-display font-black text-xl sm:text-2xl tracking-tighter text-brand-red hidden xs:block">FastBite</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 font-bold text-sm text-brand-gray-dark uppercase tracking-widest">
              <Link to="/menu" className={`hover:text-brand-red transition-colors ${location.pathname.startsWith('/menu') ? 'text-brand-red' : ''}`}>Menu</Link>
              <Link to="/deals" className={`hover:text-brand-red transition-colors ${location.pathname === '/deals' ? 'text-brand-red' : ''}`}>Deals</Link>
              <Link to="/locations" className={`hover:text-brand-red transition-colors ${location.pathname === '/locations' ? 'text-brand-red' : ''}`}>Locations</Link>
              <Link to="/about" className={`hover:text-brand-red transition-colors ${location.pathname === '/about' ? 'text-brand-red' : ''}`}>Our Story</Link>
            </nav>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 text-brand-black">
            <button className="hidden sm:flex items-center justify-center p-2 hover:bg-slate-200 rounded-full transition-colors" aria-label="Search">
              <Search size={22} className="text-slate-700" />
            </button>
            <Link to="/locations" className="hidden sm:flex items-center gap-2 font-bold text-slate-700 bg-slate-100 px-4 py-2 rounded-full text-sm hover:bg-slate-200 transition-colors">
              <MapPin size={18} />
              <span>Find Store</span>
            </Link>
            <Link to="/checkout" className="flex items-center justify-center w-10 h-10 bg-brand-yellow hover:bg-brand-yellow-dark text-black rounded-full font-bold transition-colors shadow-md relative">
              <ShoppingBag size={20} />
              <div className="absolute -mt-8 -mr-6 bg-brand-red text-white text-[10px] px-1.5 py-0.5 rounded-full border-2 border-white">2</div>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[64px] sm:top-[80px] bg-white z-30 lg:hidden overflow-y-auto">
          <nav className="flex flex-col p-6 gap-6 font-display text-xl font-semibold">
            <Link to="/menu" onClick={closeMobileMenu} className="flex items-center justify-between border-b border-brand-gray pb-4">
              <span>Our Menu</span>
            </Link>
            <Link to="/deals" onClick={closeMobileMenu} className="flex items-center justify-between border-b border-brand-gray pb-4">
              <span>Exclusive Deals</span>
            </Link>
            <Link to="/locations" onClick={closeMobileMenu} className="flex items-center justify-between border-b border-brand-gray pb-4">
              <span>Find a Store</span>
            </Link>
            <Link to="/app" onClick={closeMobileMenu} className="flex items-center justify-between border-b border-brand-gray pb-4">
              <span>Get the App</span>
            </Link>
            
            <div className="pt-4 flex flex-col gap-4 text-base font-sans font-medium text-brand-gray-dark">
                <Link to="/about" onClick={closeMobileMenu}>About FastBite</Link>
                <Link to="/careers" onClick={closeMobileMenu}>Careers</Link>
                <Link to="/help" onClick={closeMobileMenu}>Help & Support</Link>
            </div>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-black text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                 <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center text-white font-display font-black text-2xl tracking-tighter">
                  F
                </div>
                <span className="font-display font-black text-2xl tracking-tighter text-brand-red">FastBite</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-sm">
                Serving up smiles and fast, delicious meals since forever. Your cravings, solved instantly.
              </p>
              <div className="flex gap-4">
                {/* Social icons placeholder */}
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red cursor-pointer transition-colors">X</div>
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red cursor-pointer transition-colors">fb</div>
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red cursor-pointer transition-colors">ig</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-display font-bold text-lg mb-4 text-brand-yellow">Our Menu</h3>
              <ul className="flex flex-col gap-3 text-gray-400">
                <li><Link to="/menu?category=burgers" className="hover:text-white transition-colors">Burgers</Link></li>
                <li><Link to="/menu?category=chicken" className="hover:text-white transition-colors">Chicken</Link></li>
                <li><Link to="/menu?category=sides" className="hover:text-white transition-colors">Sides & Fries</Link></li>
                <li><Link to="/menu?category=drinks" className="hover:text-white transition-colors">Drinks & Desserts</Link></li>
                <li><Link to="/deals" className="hover:text-white transition-colors line-through decoration-brand-red text-white">Latest Deals</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-lg mb-4 text-brand-yellow">Discover</h3>
              <ul className="flex flex-col gap-3 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/locations" className="hover:text-white transition-colors">Store Locator</Link></li>
                <li><Link to="/app" className="hover:text-white transition-colors">Mobile App</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-lg mb-4 text-brand-yellow">Need Help?</h3>
              <ul className="flex flex-col gap-3 text-gray-400">
                <li><Link to="/help" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/help" className="hover:text-white transition-colors">Feedback</Link></li>
                <li><Link to="/help" className="hover:text-white transition-colors">FAQ</Link></li>
                <li className="mt-4">
                  <div className="flex items-center gap-2 text-white bg-gray-900 border border-gray-700 rounded-xl p-3 cursor-pointer hover:border-brand-yellow transition-colors">
                    <Smartphone size={24} className="text-brand-yellow" />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400">Download our app</span>
                      <span className="font-bold text-sm">Order & Get Rewards</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} FastBite Corporation. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

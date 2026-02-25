import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-brand-dark text-white py-5 sticky top-0 z-[1000]">
      <div className="container-custom py-0 flex justify-between items-center">
        <Link to="/" className="text-[1.8rem] font-bold tracking-[1px]">Antique Alley</Link>
        <nav>
          <ul className={`max-md:absolute max-md:top-[80px] max-md:right-5 max-md:bg-brand-dark max-md:p-5 max-md:rounded-[6px] max-md:flex-col flex gap-[30px] items-center ${isOpen ? 'max-md:flex' : 'max-md:hidden'}`}>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/contact" className="btn-primary" onClick={() => setIsOpen(false)}>Visit Us</Link></li>
          </ul>
          <div className="hidden max-md:block text-[1.8rem] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>☰</div>
        </nav>
      </div>
    </header>
  );
}
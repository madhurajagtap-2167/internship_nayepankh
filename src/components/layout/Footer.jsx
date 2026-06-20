import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
              <span className="text-accent">Naye</span>Pankh
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              NayePankh Foundation is a UP Government registered NGO and one of the biggest student organizations in India. We aim to uplift the underprivileged.
            </p>
            <div className="flex space-x-4">
              <a href="http://www.facebook.com/nayepankhfoundation" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FiFacebook size={18} />
              </a>
              <a href="http://www.twitter.com/nayepankh" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FiTwitter size={18} />
              </a>
              <a href="http://www.instagram.com/nayepankhfoundation" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FiInstagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/nayepankh" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors text-sm">Our Programs</Link></li>
              <li><Link to="/volunteer" className="hover:text-primary transition-colors text-sm">Become a Volunteer</Link></li>
              <li><Link to="/events" className="hover:text-primary transition-colors text-sm">Events</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors text-sm">Gallery</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Programs</h4>
            <ul className="space-y-3">
              <li><Link to="/programs" className="hover:text-primary transition-colors text-sm">Education Support</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors text-sm">Women Empowerment</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors text-sm">Health Awareness</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors text-sm">Environment Campaigns</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-primary flex-shrink-0" size={18} />
                <span className="text-sm">Lucknow, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-primary flex-shrink-0" size={18} />
                <span className="text-sm">+91 XXXXXXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-primary flex-shrink-0" size={18} />
                <span className="text-sm">contact@nayepankh.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© {new Date().getFullYear()} NayePankh Foundation. All rights reserved.</p>
          <div className="flex space-x-4 text-sm">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

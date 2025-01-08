import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Font Awesome icons

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li className="hover:underline hover:text-green-400 cursor-pointer">About</li>
              <li className="hover:underline hover:text-green-400 cursor-pointer">Jobs</li>
              <li className="hover:underline hover:text-green-400 cursor-pointer">For the Record</li>
            </ul>
          </div>

          {/* Communities Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Communities</h3>
            <ul>
              <li className="hover:underline hover:text-green-400 cursor-pointer">For Artists</li>
              <li className="hover:underline hover:text-green-400 cursor-pointer">Developers</li>
              <li className="hover:underline hover:text-green-400 cursor-pointer">Advertising</li>
              <li className="hover:underline hover:text-green-400 cursor-pointer">Investors</li>
              <li className="hover:underline hover:text-green-400 cursor-pointer">Vendors</li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul>
              <li className="hover:underline hover:text-green-400 cursor-pointer">Support</li>
              <li className="hover:underline hover:text-green-400 cursor-pointer">Free Mobile App</li>
            </ul>
          </div>

          {/* Spotify Plans Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Spotify Plans</h3>
            <ul>
              <li className="hover:underline hover:text-green-400 cursor-pointer">Premium Individual</li>
              <li className="hover:underline hover:text-green-400 cursor-pointer">Premium Duo</li>
              <li className="hover:underline hover:text-green-400 cursor-pointer">Premium Family</li>
              <li className="hover:underline hover:text-green-400 cursor-pointer">Premium Student</li>
              <li className="hover:underline hover:text-green-400 cursor-pointer">Spotify Free</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5">
          {/* Social Icons */}
          <div className="flex justify-center space-x-4">
            <FaFacebook className="text-white hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="text-white hover:text-pink-600 cursor-pointer" />
            <FaTwitter className="text-white hover:text-blue-400 cursor-pointer" />
          </div>

          {/* Legal Links */}
          <div className="text-sm text-gray-400 text-center sm:text-left hidden sm:block">
            <span className="hover:underline cursor-pointer">Legal</span> | 
            <span className="hover:underline cursor-pointer">Safety & Privacy Center</span> | 
            <span className="hover:underline cursor-pointer">Privacy Policy</span> | 
            <span className="hover:underline cursor-pointer">Cookies</span> | 
            <span className="hover:underline cursor-pointer">About Ads</span> | 
            <span className="hover:underline cursor-pointer">Accessibility</span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400 text-center sm:text-left">
            <span>© 2025 Spotify AB</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

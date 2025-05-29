
const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Logo and brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-brand-blue-600 font-bold text-sm">F</span>
              </div>
              <span className="font-bold text-xl">FORSA</span>
            </div>
          </div>
          
          {/* Links */}
          <div className="flex justify-end space-x-8">
            <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
              Terms & Conditions
            </a>
            <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

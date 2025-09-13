import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            AI Agency
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/ai-services" className="text-foreground hover:text-primary transition-colors">
              AI Services
            </Link>
            <Link to="/voice-demos" className="text-foreground hover:text-primary transition-colors">
              Voice Demos
            </Link>
            <Link to="/portfolio" className="text-foreground hover:text-primary transition-colors">
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="py-20 px-4 text-center bg-gradient-primary">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-primary-foreground mb-6">
          Transform Your Business with AI Solutions
        </h1>
        <p className="text-xl text-primary-foreground/80 mb-8">
          We help businesses automate processes, enhance customer experience, and scale operations with cutting-edge AI technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <a 
              href="https://calendly.com/shamirmohamed14/free-strategy-call-get-5-qualified-leads-in-10-days"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Consultation
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/portfolio">
              View Portfolio
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
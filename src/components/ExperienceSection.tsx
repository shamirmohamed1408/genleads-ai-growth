import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const ExperienceSection = () => {
  const solutions = [
    {
      title: "Voice AI Solutions",
      description: "Experience our advanced voice AI technology in action",
      features: ["Natural conversations", "Real-time responses", "Custom voice models"]
    },
    {
      title: "Chatbot Intelligence",
      description: "See how our chatbots understand and respond intelligently",
      features: ["Context awareness", "Multi-turn conversations", "Intent recognition"]
    },
    {
      title: "Process Automation",
      description: "Watch how we automate complex business workflows",
      features: ["Workflow design", "API integrations", "Real-time monitoring"]
    },
    {
      title: "Live AI Demo",
      description: "Try our voice AI assistants for different industries",
      features: ["Industry-specific demos", "Real-time interaction", "Voice recognition"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Experience Our AI Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See our AI technology in action and discover how it can transform your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{solution.title}</CardTitle>
                <CardDescription>{solution.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                {solution.title === "Live AI Demo" ? (
                  <Button asChild className="w-full">
                    <Link to="/voice-demos">
                      Try Demo
                    </Link>
                  </Button>
                ) : (
                  <Button asChild className="w-full">
                    <a 
                      href="https://calendly.com/shamirmohamed14/free-strategy-call-get-5-qualified-leads-in-10-days"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Consultation
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
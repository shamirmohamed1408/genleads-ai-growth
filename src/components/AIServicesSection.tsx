import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const AIServicesSection = () => {
  const services = [
    {
      title: "Voice AI Assistants",
      description: "Custom voice agents for customer service, appointment booking, and lead qualification",
      features: ["24/7 availability", "Natural conversations", "Appointment scheduling"]
    },
    {
      title: "AI Chatbots",
      description: "Intelligent chatbots that understand context and provide personalized responses",
      features: ["Multi-language support", "Context awareness", "Lead capture"]
    },
    {
      title: "Automation Workflows",
      description: "Streamline your business processes with intelligent automation solutions",
      features: ["Process automation", "Data integration", "Custom workflows"]
    },
    {
      title: "AI Analytics",
      description: "Gain insights from your data with advanced AI-powered analytics tools",
      features: ["Predictive analytics", "Real-time insights", "Custom dashboards"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our AI Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <a 
                    href="https://calendly.com/shamirmohamed14/free-strategy-call-get-5-qualified-leads-in-10-days"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIServicesSection;
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const AIServices = () => {
  const services = [
    {
      title: "Voice AI Assistants",
      description: "Custom voice agents for customer service, appointment booking, and lead qualification that work 24/7",
      features: [
        "Natural conversation flow",
        "Multi-language support", 
        "Integration with existing systems",
        "Real-time analytics",
        "Custom voice models"
      ],
      pricing: "Starting from $299/month"
    },
    {
      title: "AI Chatbots",
      description: "Intelligent chatbots that understand context and provide personalized responses to your customers",
      features: [
        "Context-aware conversations",
        "Lead capture and qualification",
        "FAQ automation",
        "Seamless handoff to humans",
        "Multi-platform deployment"
      ],
      pricing: "Starting from $199/month"
    },
    {
      title: "Automation Workflows",
      description: "Streamline your business processes with intelligent automation solutions tailored to your needs",
      features: [
        "Custom workflow design",
        "API integrations",
        "Data synchronization",
        "Process monitoring",
        "Performance optimization"
      ],
      pricing: "Starting from $399/month"
    },
    {
      title: "AI Analytics",
      description: "Gain insights from your data with advanced AI-powered analytics tools and predictive modeling",
      features: [
        "Predictive analytics",
        "Real-time dashboards",
        "Custom reporting",
        "Data visualization",
        "Performance tracking"
      ],
      pricing: "Starting from $249/month"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            AI Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations, 
            enhance customer experience, and drive growth through intelligent automation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-lg font-semibold text-primary">{service.pricing}</p>
                  </div>
                  <Button asChild className="w-full">
                    <a 
                      href="https://calendly.com/shamirmohamed14/free-strategy-call-get-5-qualified-leads-in-10-days"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Started
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">1. Discovery</CardTitle>
                <CardDescription className="text-center">
                  We analyze your business needs and identify automation opportunities
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center">2. Development</CardTitle>
                <CardDescription className="text-center">
                  Our team builds custom AI solutions tailored to your requirements
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center">3. Deployment</CardTitle>
                <CardDescription className="text-center">
                  We deploy and integrate solutions with ongoing support and optimization
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Transform Your Business?</CardTitle>
              <CardDescription>
                Schedule a free strategy call to discuss how our AI solutions can help you 
                get 5 qualified leads in 10 days and streamline your operations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild size="lg">
                <a 
                  href="https://calendly.com/shamirmohamed14/free-strategy-call-get-5-qualified-leads-in-10-days"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Free Strategy Call
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIServices;
import { useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

declare global {
  interface Window {
    vapiSDK: any;
  }
}

const VoiceDemos = () => {
  const demos = [
    {
      title: "Real Estate Assistant",
      description: "AI assistant for property inquiries, scheduling viewings, and lead qualification",
      features: ["Property information", "Schedule viewings", "Lead qualification", "Market insights"],
      assistantId: "bccdca97-b3da-4824-9223-14eec31fc384"
    },
    {
      title: "Hospital Assistant",
      description: "Healthcare AI assistant for appointment booking and patient inquiries",
      features: ["Appointment scheduling", "Doctor availability", "Patient support", "Medical information"],
      assistantId: "d89a7856-b6cc-41b0-9d15-0c92c592a450"
    },
    {
      title: "Restaurant Assistant",
      description: "Restaurant AI assistant for reservations, menu inquiries, and orders",
      features: ["Table reservations", "Menu information", "Order taking", "Special requests"],
      assistantId: "b3289c88-5b9c-478e-925f-0ff27be8fe5e"
    },
    {
      title: "Home Services Assistant",
      description: "AI assistant for home and automotive service bookings",
      features: ["Service booking", "Quote requests", "Scheduling", "Service information"],
      assistantId: "c9b8dad5-5197-4c7c-b911-f820327283a7"
    }
  ];

  const initializeVapi = (assistantId: string) => {
    const apiKey = "296e3bf0-44c6-4085-9d65-856879808e33";
    const buttonConfig = {};

    if (window.vapiSDK) {
      window.vapiSDK.run({
        apiKey: apiKey,
        assistant: assistantId,
        config: buttonConfig,
      });
    }
  };

  const loadVapiScript = () => {
    const existingScript = document.querySelector('script[src*="VapiAI"]');
    if (existingScript) {
      return;
    }

    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
  };

  useEffect(() => {
    loadVapiScript();
  }, []);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Voice AI Demos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our AI voice assistants in action. Try different industry-specific demos 
            and see how they can transform your business operations.
          </p>
        </div>

        {/* Demo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {demos.map((demo, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{demo.title}</CardTitle>
                <CardDescription>{demo.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full">
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {demo.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <Button 
                  className="w-full"
                  onClick={() => initializeVapi(demo.assistantId)}
                >
                  Experience Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Implement AI for Your Business?</CardTitle>
              <CardDescription>
                Book a consultation to discuss how we can create a custom AI voice assistant for your specific industry and needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild size="lg">
                <a 
                  href="https://calendly.com/shamirmohamed14/free-strategy-call-get-5-qualified-leads-in-10-days"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Consultation
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VoiceDemos;
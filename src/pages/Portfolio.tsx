import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Portfolio = () => {
  const projects = [
    {
      title: "Restaurant AI Voice Assistant - Los Angeles",
      category: "Food Industry",
      description: "Developed an AI voice assistant for a Los Angeles restaurant to handle reservations, menu inquiries, and customer service calls 24/7.",
      technologies: ["Voice AI", "Natural Language Processing", "Restaurant POS Integration"],
      results: ["40% reduction in missed calls", "24/7 reservation system", "Improved customer satisfaction"],
      duration: "3 months"
    },
    {
      title: "Spa Management System - India",
      category: "Wellness Industry",
      description: "Created comprehensive digital marketing strategy and automation system for an Indian spa business, including social media management and appointment booking.",
      technologies: ["Social Media Automation", "Appointment Booking System", "Email Marketing"],
      results: ["200% increase in online bookings", "Enhanced social media presence", "Streamlined operations"],
      duration: "6 months"
    },
    {
      title: "HR Solutions Consultancy - Long-term Partnership",
      category: "Human Resources",
      description: "Ongoing partnership providing AI-powered recruitment automation, candidate screening, and HR process optimization.",
      technologies: ["AI Recruitment Tools", "Process Automation", "Data Analytics"],
      results: ["50% faster hiring process", "Improved candidate quality", "Reduced manual work"],
      duration: "Ongoing"
    },
    {
      title: "E-commerce Meta Ads Campaign",
      category: "Digital Marketing",
      description: "Designed and executed Meta advertising campaigns with custom poster creation and email marketing automation using Instantly.",
      technologies: ["Meta Ads", "Graphic Design", "Email Marketing", "Instantly Platform"],
      results: ["300% ROAS improvement", "Increased brand awareness", "Automated lead nurturing"],
      duration: "4 months"
    }
  ];

  const currentProjects = [
    {
      title: "AI Voice Assistant Development",
      description: "Building advanced AI voice assistants for multiple industries including real estate, healthcare, restaurants, and home services.",
      status: "In Development"
    },
    {
      title: "Business Process Automation",
      description: "Creating custom automation solutions to streamline business operations and improve efficiency.",
      status: "Active"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my successful projects across social media management, AI automation, 
            digital marketing, and business process optimization.
          </p>
        </div>

        {/* Completed Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Completed Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    <span className="text-sm text-muted-foreground">{project.duration}</span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Results:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {project.results.map((result, idx) => (
                          <li key={idx}>{result}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Current Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="default">{project.status}</Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Start Your Project?</CardTitle>
              <CardDescription>
                Let's discuss how I can help transform your business with AI solutions and digital marketing strategies.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild size="lg">
                <a 
                  href="https://calendly.com/shamirmohamed14/free-strategy-call-get-5-qualified-leads-in-10-days"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Strategy Call
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "1",
    title: "Condividi i Dettagli del Progetto",
    description: "Rispondi a poche semplici domande sul tuo progetto di miglioramento casa."
  },
  {
    icon: Users,
    number: "2", 
    title: "Incontra un Esperto Locale",
    description: "Sarai collegato con un professionista qualificato pronto a completare il tuo progetto."
  },
  {
    icon: CheckCircle,
    number: "3",
    title: "Ricevi un Preventivo Gratuito",
    description: "Un professionista ti contatterà per fissare un sopralluogo e rispondere alle tue domande."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Come Funziona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Iniziare il tuo progetto di miglioramento casa è semplice e veloce
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center relative">
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-accent transform translate-x-1/2 z-0"></div>
                )}
                
                <Card className="relative z-10 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                        {step.number}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

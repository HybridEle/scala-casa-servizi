
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const HeroSection = () => {
  const [selectedService, setSelectedService] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleGetEstimate = () => {
    if (!selectedService || !zipCode) {
      toast({
        title: "Informazioni mancanti",
        description: "Seleziona un servizio e inserisci il codice postale",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Richiesta inviata!",
      description: "Ti contatteremo presto per un preventivo gratuito",
    });
    
    console.log("Lead captured:", { service: selectedService, zipCode });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-primary/80 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
            <div className="mb-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ciao, sono <span className="text-accent">CasaBuddy</span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-8">
                Il tuo assistente per migliorare casa!
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Quanto costa il tuo progetto?
              </p>
            </div>

            {/* Lead capture form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-md mx-auto lg:mx-0">
              <div className="space-y-4">
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger className="w-full h-12 text-lg">
                    <SelectValue placeholder="Seleziona tipo di servizio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="montascale">Montascale</SelectItem>
                    <SelectItem value="ristrutturazione">Ristrutturazione</SelectItem>
                    <SelectItem value="bagno">Rifacimento Bagno</SelectItem>
                    <SelectItem value="cucina">Rifacimento Cucina</SelectItem>
                    <SelectItem value="finestre">Sostituzione Finestre</SelectItem>
                    <SelectItem value="tetto">Rifacimento Tetto</SelectItem>
                    <SelectItem value="riscaldamento">Impianto Riscaldamento</SelectItem>
                    <SelectItem value="elettrico">Impianto Elettrico</SelectItem>
                  </SelectContent>
                </Select>

                <Input
                  placeholder="Inserisci codice postale"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="h-12 text-lg"
                />

                <Button 
                  onClick={handleGetEstimate}
                  className="w-full h-12 text-lg font-semibold gradient-accent hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Scopri il costo
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Preventivi gratuiti, senza impegno.
              </p>
            </div>
          </div>

          {/* Right content - Character illustration */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="text-8xl lg:text-9xl">🏠</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <div className="text-3xl">⚡</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

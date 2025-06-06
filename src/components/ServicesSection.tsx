
import { Card, CardContent } from "@/components/ui/card";
import { 
  Home, 
  Stairs, 
  Bath, 
  ChefHat, 
  Window, 
  Roof,
  Zap,
  Thermometer,
  Wrench,
  Shield,
  Paintbrush2,
  Trees
} from "lucide-react";

const services = [
  {
    icon: Stairs,
    title: "Montascale",
    description: "Installazione e assistenza montascale per ogni tipo di scala",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Bath,
    title: "Rifacimento Bagno",
    description: "Ristrutturazione completa del bagno con materiali di qualità",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: ChefHat,
    title: "Rifacimento Cucina",
    description: "Progettazione e realizzazione cucine su misura",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Window,
    title: "Sostituzione Finestre",
    description: "Finestre ad alta efficienza energetica",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Roof,
    title: "Rifacimento Tetto",
    description: "Riparazione e sostituzione tetti e coperture",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Thermometer,
    title: "Impianti HVAC",
    description: "Installazione sistemi di riscaldamento e condizionamento",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Zap,
    title: "Impianti Elettrici",
    description: "Installazione e manutenzione impianti elettrici",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Shield,
    title: "Garanzia Casa",
    description: "Protezione e garanzia per i tuoi investimenti domestici",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Paintbrush2,
    title: "Pavimentazione",
    description: "Installazione e ristrutturazione pavimenti",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Wrench,
    title: "Manutenzione",
    description: "Servizi di manutenzione generale per la casa",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Home,
    title: "Ristrutturazione",
    description: "Ristrutturazioni complete chiavi in mano",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Trees,
    title: "Giardino",
    description: "Progettazione e manutenzione spazi verdi",
    color: "text-accent",
    bgColor: "bg-accent/10"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Servizi per Migliorare Casa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dalla installazione di montascale a ristrutturazioni complete, 
            offriamo tutti i servizi per rendere la tua casa più bella e funzionale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-0 shadow-md"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

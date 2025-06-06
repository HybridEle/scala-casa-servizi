
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Giuseppe R.",
    text: "Servizio eccellente per l'installazione del montascale. Professionali e puntuali, hanno risolto il problema di mobilità di mia madre in pochissimo tempo.",
    rating: 5,
    service: "Montascale"
  },
  {
    name: "Maria T.",
    text: "Ristrutturazione bagno perfetta! Sono rimasta colpita dalla qualità del lavoro e dalla professionalità del team. Consigliatissimo!",
    rating: 5,
    service: "Ristrutturazione"
  },
  {
    name: "Paolo S.",
    text: "Installazione finestre impeccabile. Ottimo rapporto qualità-prezzo e servizio clienti fantastico. La casa ora è molto più efficiente dal punto di vista energetico.",
    rating: 5,
    service: "Finestre"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Cosa Dicono i Nostri Clienti
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La soddisfazione dei nostri clienti è la nostra priorità
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.service}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

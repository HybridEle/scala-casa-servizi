
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-primary/90 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Qual è il Tuo Codice Postale?</h2>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Inserisci codice postale"
              className="bg-white text-foreground h-12"
            />
            <Button className="gradient-accent h-12 px-8 whitespace-nowrap">
              Ottieni preventivo
            </Button>
          </div>
          <p className="text-white/80 mt-4">Preventivi gratuiti, senza impegno.</p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">CasaBuddy</h3>
            <p className="text-white/80 mb-6 max-w-md">
              Il tuo partner di fiducia per tutti i progetti di miglioramento casa. 
              Dalla installazione di montascale alle ristrutturazioni complete.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Servizi</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Montascale</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ristrutturazioni</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bagno</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cucina</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Finestre</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Informazioni</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Termini di Servizio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carriere</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contattaci</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>&copy; 2024 CasaBuddy. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

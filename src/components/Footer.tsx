import { useCallback } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Instagram } from "lucide-react";
import adamosLogo from "@logo/adamos_logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();

  const onSubmitContactForm = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const data = new FormData(form);

      const name = String(data.get("name") ?? "").trim();
      const phone = String(data.get("phone") ?? "").trim();
      const message = String(data.get("message") ?? "").trim();

      if (!name || !phone || !message) {
        toast({
          title: "Συμπληρώστε όλα τα πεδία",
          description: "Όνομα, τηλέφωνο και μήνυμα είναι υποχρεωτικά.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Ευχαριστούμε!",
        description: "Λάβαμε το μήνυμά σας και θα επικοινωνήσουμε σύντομα.",
      });
      form.reset();
    },
    [toast],
  );

  return (
    <footer id="contact" className="py-16 lg:py-20 bg-muted/30 border-t border-glass-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <img
                  src={adamosLogo}
                  alt="ΑΔΑΜΟΣ ΒΑΣΙΛΗΣ"
                  className="w-14 h-14 lg:w-16 lg:h-16 object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-lg font-bold text-foreground leading-tight">
                ΑΔΑΜΟΣ ΒΑΣΙΛΗΣ<br />
                <span className="text-gradient-electric text-sm">Electrical Applications</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Παρέχουμε σύγχρονες ηλεκτρολογικές λύσεις με έμφαση στην ασφάλεια, 
              την καινοτομία και τους έξυπνους αυτοματισμούς.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/adamos_elecapp/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-foreground font-semibold mb-4">Σύνδεσμοι</h4>
            <ul className="space-y-3">
              {[
                { label: "Αρχική", href: "#hero" },
                { label: "Υπηρεσίες", href: "#services" },
                { label: "Έργα", href: "#projects" },
                { label: "Επικοινωνία", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-foreground font-semibold mb-4">Υπηρεσίες</h4>
            <ul className="space-y-3">
              {[
                "Έξυπνο Σπίτι",
                "Ηλεκτρολογικές Εγκαταστάσεις",
                "Μελέτες Φωτισμού",
                "Συντήρηση",
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-foreground font-semibold mb-4">Επικοινωνία</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:2410550284" className="text-foreground text-sm font-medium hover:text-primary transition-colors">241 055 0284</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground text-sm font-medium">28ης Οκτωβρίου 33</p>
                  <p className="text-muted-foreground text-xs">Λάρισα 412 23</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="glass-card p-8 lg:p-10 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold text-foreground mb-2">Φόρμα Επικοινωνίας</h3>
              <p className="text-muted-foreground text-sm">
                Στείλτε μας το μήνυμά σας και θα σας καλέσουμε σύντομα.
              </p>
            </div>

            <form onSubmit={onSubmitContactForm} className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input name="name" placeholder="Ονοματεπώνυμο" autoComplete="name" />
              <Input name="phone" placeholder="Τηλέφωνο" autoComplete="tel" inputMode="tel" />
              <div className="md:col-span-2">
                <Textarea name="message" placeholder="Μήνυμα" className="min-h-32" />
              </div>
              <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <p className="text-xs text-muted-foreground">
                  Εναλλακτικά: <a className="hover:text-primary transition-colors" href="tel:2410550284">241 055 0284</a>
                </p>
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 btn-primary-glow font-semibold">
                  Αποστολή
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-glass-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} ΑΔΑΜΟΣ ΒΑΣΙΛΗΣ Electrical Applications. Όλα τα δικαιώματα κατοχυρωμένα.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Πολιτική Απορρήτου
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Όροι Χρήσης
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

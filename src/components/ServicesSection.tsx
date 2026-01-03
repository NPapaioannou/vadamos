import { motion } from "framer-motion";
import { Smartphone, Lightbulb, Zap, Wrench, Home } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Έξυπνο Σπίτι & Αυτοματισμοί",
    description: "Μετατρέψτε το σπίτι σας σε ένα έξυπνο περιβάλλον με αυτοματισμούς φωτισμού, θέρμανσης και ασφάλειας.",
    size: "large",
    accent: "primary",
  },
  {
    icon: Home,
    title: "Ηλεκτρολογικές Εγκαταστάσεις",
    description: "Πλήρεις ηλεκτρολογικές εγκαταστάσεις για νέες κατασκευές και ανακαινίσεις.",
    size: "small",
    accent: "secondary",
  },
  {
    icon: Lightbulb,
    title: "Μελέτες Φωτισμού",
    description: "Σχεδιασμός φωτισμού που δημιουργεί ατμόσφαιρα και εξοικονομεί ενέργεια.",
    size: "small",
    accent: "primary",
  },
  {
    icon: Wrench,
    title: "Βλάβες & Συντήρηση",
    description: "Άμεση επισκευή βλαβών και προληπτική συντήρηση.",
    size: "small",
    accent: "secondary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Οι <span className="text-gradient-electric">Υπηρεσίες</span> μας
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ολοκληρωμένες ηλεκτρολογικές λύσεις με εγγύηση ποιότητας και ασφάλειας
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const isLarge = service.size === "large";
            const accentColor = service.accent === "primary" ? "primary" : "secondary";
            
            return (
              <motion.a
                key={service.title}
                variants={itemVariants}
                href="#contact"
                className={`group relative block glass-card p-8 hover-lift cursor-pointer ${
                  isLarge ? "md:col-span-2 lg:col-span-3" : ""
                }`}
                whileHover={{ scale: 1.02 }}
                style={{
                  borderColor: `hsl(var(--${accentColor}) / 0.1)`,
                }}
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                      accentColor === "primary"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className={accentColor === "primary" ? "text-primary" : "text-secondary"}>
                      Μάθετε περισσότερα
                    </span>
                    <Zap className={`w-4 h-4 ${accentColor === "primary" ? "text-primary" : "text-secondary"}`} />
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                    accentColor === "primary" ? "electric-glow" : "volt-glow"
                  }`}
                />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

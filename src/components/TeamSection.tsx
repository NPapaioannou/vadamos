import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Σπύρος Αδάμος",
    role: "Ηλεκτρολόγος",
    bio: "Εξειδίκευση σε εμπορικούς χώρους, καταστήματα λιανικού εμπορίου και smart home εφαρμογές.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",
  },
  {
    name: "Βασίλης Αδάμος",
    role: "Ηλεκτρολόγος",
    bio: "Εμπειρία σε εστίαση, γυμναστήρια και γραφεία με έμφαση στον σύγχρονο φωτισμό και αυτοματισμούς.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const TeamSection = () => {
  return (
    <section id="team" className="py-24 lg:py-32 relative">
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
            Η <span className="text-gradient-electric">Ομάδα</span> μας
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Πιστοποιημένοι επαγγελματίες με πάθος για την τέλεια εκτέλεση
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group glass-card p-8 text-center hover-lift"
            >
              {/* Avatar */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-2 border-glass-border group-hover:border-primary/50 transition-colors duration-300"
                />
                {/* Ring animation */}
                <div className="absolute -inset-1 rounded-full border border-primary/0 group-hover:border-primary/30 transition-all duration-300 group-hover:scale-105" />
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium text-sm mb-4">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4">
                <button className="w-10 h-10 rounded-full bg-muted/50 hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-muted/50 hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;

import { motion } from "framer-motion";
import { Clock, Briefcase, Award } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "30+",
    label: "Χρόνια Εμπειρίας",
  },
  {
    icon: Briefcase,
    value: "500+",
    label: "Έργα",
  },
  {
    icon: Award,
    value: "100%",
    label: "Ικανοποίηση",
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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const StatsSection = () => {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card py-12 px-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gradient-electric mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm lg:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;

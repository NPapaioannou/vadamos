import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import mustWork from "@works/must_work.webp";
import iconWork from "@works/icon_work.webp";
import houseWork from "@works/house_work.png";
import house1Work from "@works/house1_work.png";
import pharmacyWork from "@works/pharmacy_work.png";
import pharmacy1Work from "@works/pharmacy1_work.png";

const projects = [
  {
    title: "Κατάστημα Ρούχων",
    location: "Λάρισα",
    category: "Εμπορικός Χώρος",
    image: mustWork,
  },
  {
    title: "Κατάστημα Ρούχων",
    location: "Λάρισα",
    category: "Εμπορικός Χώρος",
    image: iconWork,
  },
  {
    title: "Εμπορικός Χώρος",
    location: "Λάρισα",
    category: "Εμπορικός Χώρος",
    image: pharmacyWork,
  },
  {
    title: "Εμπορικός Χώρος",
    location: "Λάρισα",
    category: "Εμπορικός Χώρος",
    image: pharmacy1Work,
  },
  {
    title: "Κατοικία",
    location: "Λάρισα",
    category: "Κατοικία",
    image: houseWork,
  },
  {
    title: "Μονοκατοικία",
    location: "Λάρισα",
    category: "Κατοικία",
    image: house1Work,
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 relative bg-muted/30">
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
            Πρόσφατα <span className="text-gradient-electric">Έργα</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Δείτε μερικά από τα τελευταία μας έργα και ανακαλύψτε την ποιότητα της δουλειάς μας
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              variants={itemVariants}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer hover-lift"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-primary text-sm font-medium mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">{project.location}</p>
              </div>

              {/* Arrow Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </div>

              {/* Border glow */}
              <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

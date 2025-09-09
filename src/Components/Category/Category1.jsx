import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Package, Anchor, Droplets, Cog } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const EnhancedCategoryCard = ({ image, title, description, icon, link }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100"
    >
      <Link to={link} className="block h-full" onClick={() => window.scrollTo(0, 0)}>
        <div className="h-44 sm:h-48 md:h-40 overflow-hidden">
          <AspectRatio ratio={16 / 9} className="h-full">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </AspectRatio>
        </div>
        <div className="p-5">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-brand-navy bg-[#f6b100]">
              {icon}
            </div>
            <h3 className="text-lg font-bold text-brand-navy">{title}</h3>
          </div>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>

          <div className="inline-flex items-center text-brand-gold font-medium text-sm group">
            Learn More
            <motion.span
              className="ml-1"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export const Category1 = () => {
  const categories = [
    {
      image: "/shipping.png",
      title: "Shipping",
      description: "Reliable and efficient global shipping solutions to connect your business worldwide.",
      icon: <Package size={20} />,
      link: "/shipping",
    },
    {
      image: "/logistics.png",
      title: "Logistics",
      description: "End-to-end logistics management ensuring smooth and optimized operations.",
      icon: <Truck size={20} />,
      link: "/logistics",
    },
    {
      image: "/product.png",
      title: "Product Distribution",
      description: "Seamless distribution networks to deliver your products on time, every time.",
      icon: <Anchor size={20} />,
      link: "/product-distribution",
    },
    {
      image: "/software.png",
      title: "Software Development",
      description: "Custom software solutions to streamline operations and drive business growth.",
      icon: <Cog size={20} />,
      link: "/software-development",
    },
    {
      image: "/renewable.png",
      title: "Renewable Energy",
      description: "Innovative renewable energy solutions powering a sustainable future.",
      icon: <Droplets size={20} />,
      link: "/renewable-energy",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // ✅ Scroll to top on route change
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="py-10 bg-gradient-to-b from-white to-brand-lightGray"
    >
      <div className="container mx-auto px-4">
        <motion.div variants={itemVariants} className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">
            Our Core Industries
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Explore the industries we specialize in, delivering innovative and reliable solutions worldwide.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <EnhancedCategoryCard
                image={cat.image}
                title={cat.title}
                description={cat.description}
                icon={cat.icon}
                link={cat.link}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-8"
        >
          <Link to="/industries" onClick={() => window.scrollTo(0, 0)}>
            <Button
              variant="navy"
              className="group transition-all duration-300 text-sm flex items-center gap-2 navy-glow"
            >
              Explore All Industries
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Category1;

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/buttons/Button";
import PlaceholderImage from "@/components/media/PlaceholderImage";

const cinematicVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section 
      ref={sectionRef}
      className="bg-fg-white pt-20 pb-20 lg:pt-24 lg:pb-32 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #C4A463 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, #C4A463 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #C4A463 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <Container>
        <motion.div
          style={{ y, opacity, scale }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[1200px] mx-auto px-6"
        >
          {/* Main Heading - Large, Centered with cinematic reveal */}
          <div className="text-center mb-12 lg:mb-16">
            <motion.div
              variants={cinematicVariants}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden"
            >
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-cormorant text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-fg-navy mb-6 lg:mb-8 leading-[1.1] tracking-tight"
              >
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="inline-block"
                >
                  Where first-time founders
                </motion.span>
                <br className="hidden sm:block" />
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.55 }}
                  className="block sm:inline"
                >
                  {" "}build their foundation.
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Subtitle / Secondary Line with slide-in */}
            <motion.div
              variants={cinematicVariants}
              transition={{ 
                duration: 0.7, 
                delay: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden"
            >
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-inter text-lg md:text-xl lg:text-2xl text-fg-grey max-w-3xl mx-auto leading-relaxed font-normal"
              >
                Founder Groundworks is an institute for people starting from zero, teaching first-time founders how to think, speak, and operate with the discipline of a serious startup leader.
              </motion.p>
            </motion.div>
          </div>

          {/* CTA Buttons - Dramatic entrance */}
          <motion.div
            variants={cinematicVariants}
            transition={{ 
              duration: 0.6, 
              delay: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 lg:mb-12"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.9,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            >
              <Button 
                variant="accent" 
                size="lg" 
                href="/programmes"
              >
                Apply to the Foundations Programme
              </Button>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 1.0,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            >
              <Button
                variant="secondary"
                size="lg"
                href="/programmes"
              >
                View programmes
              </Button>
            </motion.div>
          </motion.div>

          {/* Trusted-by / Context line with fade */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-inter text-sm md:text-base text-fg-grey/70 max-w-2xl mx-auto text-center mb-16 lg:mb-20 leading-relaxed"
          >
            Built for early founders, career switchers, and international talent preparing to build serious businesses.
          </motion.p>

          {/* Placeholder Image - Cinematic parallax effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full"
          >
            <motion.div
              style={{
                y: useTransform(scrollYProgress, [0, 1], [0, -100]),
              }}
            >
              <PlaceholderImage className="h-64 md:h-96 lg:h-[500px] xl:h-[600px] rounded-md w-full shadow-2xl" />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

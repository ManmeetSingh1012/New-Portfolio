"use client";

import { motion } from "framer-motion";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { experienceData } from "@/data/experience";
import { Building2, MapPin, Calendar } from "lucide-react";
import { ScrollReveal, GradientText } from "@/components/animations";

export function About() {
  const currentExperience = experienceData[0];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal delay={0.1}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={ANIMATION_VARIANTS.fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About <GradientText>Me</GradientText>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Software developer focused on building reliable backend systems,
              real-time products, and AI-powered applications with measurable
              impact.
            </p>
          </motion.div>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                I&apos;m Manmeet Singh, a software developer with 2+ years of
                experience building scalable, distributed, and real-time
                systems. I primarily work with Node.js, TypeScript, SQL, and
                AWS, and I enjoy turning complex product ideas into reliable
                backend services, clean APIs, and smooth user experiences.
              </p>

              <p>
                My work has covered payment and wallet systems, live
                consultation platforms, video delivery pipelines, hotel
                operations software, and AI-assisted products. I care deeply
                about performance, concurrency control, and maintainable system
                design, especially in products where reliability directly
                affects users and business outcomes.
              </p>

              <p>
                I&apos;m especially interested in backend engineering, AI
                integration, and production architecture. Whether I&apos;m
                building a transaction-safe billing flow, a low-latency
                communication system, or a data pipeline for intelligent
                workflows, I aim to build software that is technically strong,
                practical, and genuinely useful.
              </p>
            </div>

            <div className="relative flex flex-col items-center">
              <div className="absolute -top-24">
                <div className="relative w-75 h-75 rounded-full p-[4px] bg-gradient-to-br from-primary via-purple-500 to-blue-500 shadow-2xl">
                  <div className="rounded-full overflow-hidden w-full h-full">
                    <img
                      src="/me/me.png"
                      alt="Manmeet Singh"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              <br />
              <br />
              <br />

              <div className="pt-40 w-full space-y-4">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeUp}
                  className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                        Current Role
                      </p>
                      <h3 className="font-semibold text-lg">
                        {currentExperience.role}
                      </h3>
                      <p className="text-primary font-medium">
                        {currentExperience.company}
                      </p>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {currentExperience.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {currentExperience.location}
                        </span>
                      </div>
                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                        {currentExperience.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

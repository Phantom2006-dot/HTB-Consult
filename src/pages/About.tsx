import { motion } from "framer-motion";
import { Target, Users, Award, BookOpen, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";

const team = [
  { name: "Hannah T. Brown", role: "Founder & Lead Consultant", bio: "15+ years in project management and business analysis across financial services and consulting." },
  { name: "David Osei", role: "Senior PM Trainer", bio: "PRINCE2 and PMP certified with experience delivering programmes for FTSE 100 companies." },
  { name: "Priya Sharma", role: "BA Trainer & Mentor", bio: "BCS certified business analyst with a passion for teaching requirements engineering and stakeholder management." },
];

const stats = [
  { value: "500+", label: "Professionals Trained" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "50+", label: "Corporate Clients" },
];

const About = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, hsl(43, 80%, 55%) 0%, transparent 50%)" }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="text-primary font-medium tracking-widest uppercase text-sm mb-2">About Us</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Who We Are
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground max-w-2xl">
              HTB Consults is a professional training and consulting firm dedicated to empowering individuals and organisations through expert-led development programmes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gradient-gold">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-serif font-bold text-foreground mb-6">Our Story</motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-4">
                Founded with a vision to bridge the gap between academic learning and professional excellence, HTB Consults has grown into a trusted name in training and development.
              </motion.p>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-4">
                We understand that every professional journey is unique. That's why we offer flexible, practical training programmes that can be tailored to individual needs and organisational goals.
              </motion.p>
              <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed">
                Our trainers bring decades of combined experience from leading organisations, ensuring that every session is grounded in real-world application and current industry practices.
              </motion.p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Target, label: "Goal-Oriented" },
                { icon: Users, label: "Client-Focused" },
                { icon: Award, label: "Certified Trainers" },
                { icon: BookOpen, label: "Practical Learning" },
              ].map((item, i) => (
                <motion.div key={item.label} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                  <Card className="bg-card border-border text-center h-full">
                    <CardContent className="p-6 flex flex-col items-center">
                      <item.icon className="text-primary mb-3" size={28} />
                      <p className="font-semibold text-foreground text-sm">{item.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 lg:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-serif font-bold text-foreground">Our Expertise</motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "PRINCE2 Foundation & Practitioner",
              "PMP Certification Preparation",
              "Agile & Scrum Methodologies",
              "BCS Business Analysis",
              "Requirements Engineering",
              "Career Development & Mentoring",
            ].map((item, i) => (
              <motion.div key={item} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border"
              >
                <CheckCircle size={18} className="text-primary shrink-0" />
                <span className="text-foreground text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.p variants={fadeUp} custom={0} className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Our Team</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl font-serif font-bold text-foreground">Meet the Experts</motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div key={member.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <Card className="bg-card border-border h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-serif font-bold text-primary">{member.name.charAt(0)}</span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-primary mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

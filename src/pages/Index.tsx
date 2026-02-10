import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, FileText, Target, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";

const categories = [
  {
    icon: BookOpen,
    title: "Project Management",
    description: "Master methodologies like PRINCE2, PMP, and Agile to deliver projects on time and within budget.",
    link: "/courses",
  },
  {
    icon: Target,
    title: "Business Analysis",
    description: "Learn to bridge the gap between business needs and technical solutions with industry-standard frameworks.",
    link: "/courses",
  },
  {
    icon: FileText,
    title: "CV Review",
    description: "Get expert feedback on your CV to stand out in competitive job markets and land interviews.",
    link: "/services",
  },
  {
    icon: Users,
    title: "1-on-1 Mentoring",
    description: "Personalised guidance from experienced professionals to accelerate your career growth.",
    link: "/services",
  },
];

const values = [
  { title: "Industry Expertise", description: "Trainers with 15+ years of real-world project delivery experience." },
  { title: "Proven Track Record", description: "Over 500 professionals trained and placed in leading organisations." },
  { title: "Tailored Approach", description: "Customised training paths designed around your career goals." },
  { title: "Ongoing Support", description: "Continued mentorship and resources even after course completion." },
];

const testimonials = [
  { name: "Sarah K.", role: "Project Manager at Deloitte", text: "HTB Consults transformed my career. The PM training was practical, relevant, and immediately applicable." },
  { name: "James O.", role: "Business Analyst at HSBC", text: "The mentoring programme gave me the confidence and skills to transition into business analysis seamlessly." },
  { name: "Amara T.", role: "Senior Consultant", text: "Their CV review service helped me land three interviews within two weeks. Highly recommended!" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-navy" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, hsl(43, 80%, 55%) 0%, transparent 50%)" }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24 lg:py-40">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} custom={0} className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Professional Training & Development
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
              Elevate Your Career with{" "}
              <span className="text-gradient-gold">Expert-Led Training</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              HTB Consults delivers world-class training in Project Management and Business Analysis, alongside personalised mentoring and career support to help you thrive.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-gradient-gold hover:opacity-90 text-base px-8">
                <Link to="/courses">Browse Courses <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 border-primary/30 hover:bg-primary/10">
                <Link to="/about">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.p variants={fadeUp} custom={0} className="text-primary font-medium tracking-widest uppercase text-sm mb-2">What We Offer</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Training & Development Services
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div key={cat.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <Link to={cat.link}>
                  <Card className="bg-card border-border hover:border-primary/40 transition-all duration-300 hover:shadow-gold group h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <cat.icon className="text-primary" size={24} />
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{cat.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={fadeUp} custom={0} className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Why Choose Us</motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Your Success is Our Mission
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-8">
                At HTB Consults, we combine deep industry knowledge with a passion for teaching. Our programmes are designed not just to educate, but to transform careers and open doors to new opportunities.
              </motion.p>
              <motion.div variants={fadeUp} custom={3}>
                <Button asChild className="bg-gradient-gold hover:opacity-90">
                  <Link to="/about">About Our Approach <ArrowRight className="ml-2" size={18} /></Link>
                </Button>
              </motion.div>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((val, i) => (
                <motion.div key={val.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                  <Card className="bg-card border-border h-full">
                    <CardContent className="p-5">
                      <CheckCircle className="text-primary mb-3" size={20} />
                      <h4 className="font-serif font-semibold text-foreground mb-1">{val.title}</h4>
                      <p className="text-sm text-muted-foreground">{val.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-10">
            <motion.div variants={fadeUp} custom={0}>
              <Card className="bg-card border-border h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="text-primary" size={24} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To equip professionals with the skills, knowledge, and confidence needed to excel in their careers. We are committed to delivering practical, industry-relevant training that creates tangible results.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeUp} custom={1}>
              <Card className="bg-card border-border h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Star className="text-primary" size={24} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading provider of professional development and training services, recognised for transforming careers and empowering the next generation of business leaders across the globe.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.p variants={fadeUp} custom={0} className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Testimonials</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              What Our Clients Say
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <Card className="bg-card border-border h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="text-primary fill-primary" size={16} />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Ready to Transform Your Career?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-xl mx-auto mb-8">
              Join hundreds of professionals who have advanced their careers with HTB Consults. Enrol today and take the next step.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="flex justify-center gap-4 flex-wrap">
              <Button size="lg" asChild className="bg-gradient-gold hover:opacity-90 text-base px-8">
                <Link to="/courses">Get Started <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 border-primary/30 hover:bg-primary/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

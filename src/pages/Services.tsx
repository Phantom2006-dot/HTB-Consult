import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, Users, Calendar, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";

const Services = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, hsl(43, 80%, 55%) 0%, transparent 50%)" }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Our Services</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Career Development Services
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground max-w-2xl">
              Beyond training courses, we offer personalised services to help you stand out and accelerate your career journey.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CV Review */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeUp} custom={0} className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <FileText className="text-primary" size={28} />
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl font-serif font-bold text-foreground mb-4">
                Professional CV Review
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-6">
                Your CV is your first impression. Our experts will review and optimise your CV to ensure it highlights your strengths, aligns with industry standards, and catches the attention of recruiters and hiring managers.
              </motion.p>
              <motion.ul variants={fadeUp} custom={3} className="space-y-3 mb-8">
                {["Detailed line-by-line feedback", "ATS optimisation tips", "Industry-specific formatting", "Turnaround within 48 hours"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle size={16} className="text-primary shrink-0" /> {item}
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp} custom={4} className="flex items-center gap-4">
                <span className="text-3xl font-bold text-gradient-gold">£99</span>
                <Button asChild className="bg-gradient-gold hover:opacity-90">
                  <Link to="/auth?tab=signup">Book Now <ArrowRight className="ml-1" size={16} /></Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}>
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <Calendar className="text-primary mb-4" size={32} />
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">How It Works</h3>
                  <ol className="space-y-4 mt-4">
                    {[
                      { step: "1", text: "Sign up and submit your current CV" },
                      { step: "2", text: "Our experts review and annotate your CV" },
                      { step: "3", text: "Receive detailed feedback within 48 hours" },
                      { step: "4", text: "Optional follow-up call to discuss improvements" },
                    ].map((item) => (
                      <li key={item.step} className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center shrink-0">{item.step}</span>
                        <span className="text-sm text-muted-foreground">{item.text}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mentoring */}
      <section className="py-16 lg:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="order-2 lg:order-1">
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <Users className="text-primary mb-4" size={32} />
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Session Packages</h3>
                  <div className="space-y-4 mt-4">
                    {[
                      { name: "Single Session", price: "£75", desc: "1-hour focused mentoring session" },
                      { name: "Starter Pack", price: "£199", desc: "3 sessions over 3 weeks" },
                      { name: "Career Accelerator", price: "£499", desc: "8 sessions over 2 months + CV review" },
                    ].map((pkg) => (
                      <div key={pkg.name} className="p-4 rounded-lg bg-secondary/50 border border-border">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-semibold text-foreground text-sm">{pkg.name}</span>
                          <span className="font-bold text-gradient-gold">{pkg.price}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{pkg.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-1 lg:order-2">
              <motion.div variants={fadeUp} custom={0} className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Users className="text-primary" size={28} />
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl font-serif font-bold text-foreground mb-4">
                1-on-1 Mentoring
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-6">
                Get personalised guidance from seasoned professionals who have walked the path you aspire to. Our mentoring programme is designed to fast-track your career development with tailored advice, accountability, and support.
              </motion.p>
              <motion.ul variants={fadeUp} custom={3} className="space-y-3 mb-8">
                {["Flexible scheduling via calendar booking", "Personalised career roadmap", "Interview preparation support", "Networking advice and introductions"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle size={16} className="text-primary shrink-0" /> {item}
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp} custom={4}>
                <Button asChild className="bg-gradient-gold hover:opacity-90">
                  <Link to="/auth?tab=signup">Book a Session <ArrowRight className="ml-1" size={16} /></Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

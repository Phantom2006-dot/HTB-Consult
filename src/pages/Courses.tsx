import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Users, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";

const courses = [
  {
    id: "prince2-foundation",
    title: "PRINCE2 Foundation",
    category: "Project Management",
    description: "Learn the fundamentals of PRINCE2 methodology and gain your foundation certification.",
    price: 499,
    duration: "5 days",
    students: 120,
    modules: ["Introduction to PRINCE2", "Principles", "Themes", "Processes", "Exam Preparation"],
  },
  {
    id: "prince2-practitioner",
    title: "PRINCE2 Practitioner",
    category: "Project Management",
    description: "Advanced PRINCE2 training to apply the methodology in real-world project environments.",
    price: 699,
    duration: "5 days",
    students: 85,
    modules: ["Tailoring PRINCE2", "Advanced Themes", "Case Studies", "Practitioner Exam Prep"],
  },
  {
    id: "pmp-certification",
    title: "PMP Certification Prep",
    category: "Project Management",
    description: "Comprehensive preparation for the Project Management Professional (PMP) exam.",
    price: 799,
    duration: "10 days",
    students: 95,
    modules: ["Predictive Methodologies", "Agile Approaches", "Business Environment", "Process Groups", "Mock Exams"],
  },
  {
    id: "agile-scrum",
    title: "Agile & Scrum Fundamentals",
    category: "Project Management",
    description: "Master Agile principles and Scrum framework for modern project delivery.",
    price: 399,
    duration: "3 days",
    students: 150,
    modules: ["Agile Manifesto", "Scrum Roles", "Sprint Planning", "Retrospectives"],
  },
  {
    id: "bcs-ba-foundation",
    title: "BCS Business Analysis Foundation",
    category: "Business Analysis",
    description: "Build a solid foundation in business analysis techniques and best practices.",
    price: 549,
    duration: "5 days",
    students: 110,
    modules: ["BA Role & Competencies", "Strategy Analysis", "Requirements Engineering", "Modelling Techniques"],
  },
  {
    id: "bcs-ba-practitioner",
    title: "BCS Business Analysis Practitioner",
    category: "Business Analysis",
    description: "Advanced BA techniques for experienced analysts looking to deepen their expertise.",
    price: 749,
    duration: "5 days",
    students: 65,
    modules: ["Advanced Stakeholder Analysis", "Benefits Management", "Gap Analysis", "Solution Evaluation"],
  },
];

const Courses = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, hsl(43, 80%, 55%) 0%, transparent 50%)" }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Our Courses</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Professional Training Programmes
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground max-w-2xl">
              Industry-recognised certifications and practical skills training to advance your career in Project Management and Business Analysis.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <motion.div key={course.id} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <Card className="bg-card border-border hover:border-primary/40 transition-all duration-300 hover:shadow-gold h-full flex flex-col">
                  <CardContent className="p-6 flex-1">
                    <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary border-0">
                      {course.category}
                    </Badge>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{course.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock size={14} /> {course.duration}</span>
                      <span className="flex items-center gap-1"><Users size={14} /> {course.students} students</span>
                    </div>
                    <div className="mt-4">
                      <p className="text-xs text-muted-foreground mb-2">Modules:</p>
                      <ul className="space-y-1">
                        {course.modules.slice(0, 3).map((mod) => (
                          <li key={mod} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <BookOpen size={12} className="text-primary shrink-0" /> {mod}
                          </li>
                        ))}
                        {course.modules.length > 3 && (
                          <li className="text-xs text-primary">+{course.modules.length - 3} more modules</li>
                        )}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex items-center justify-between">
                    <span className="text-2xl font-bold text-gradient-gold">£{course.price}</span>
                    <Button asChild className="bg-gradient-gold hover:opacity-90">
                      <Link to={`/auth?tab=signup`}>
                        Enrol Now <ArrowRight className="ml-1" size={16} />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;

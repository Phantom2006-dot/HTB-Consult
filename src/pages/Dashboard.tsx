import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Calendar, User, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { fadeUp } from "@/lib/animations";
import Layout from "@/components/Layout";

interface Profile {
  full_name: string | null;
  avatar_url: string | null;
  bio: string | null;
}

const Dashboard = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      supabase
        .from("profiles")
        .select("full_name, avatar_url, bio")
        .eq("user_id", user.id)
        .maybeSingle()
        .then(({ data }) => {
          if (data) setProfile(data);
        });
    }
  }, [user]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      </Layout>
    );
  }

  if (!user) return null;

  const displayName = profile?.full_name || user.email?.split("@")[0] || "User";

  return (
    <Layout>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" className="space-y-8">
            {/* Header */}
            <motion.div variants={fadeUp} custom={0} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
                  Welcome back, <span className="text-gradient-gold">{displayName}</span>
                </h1>
                <p className="text-muted-foreground mt-2">Manage your courses, bookings, and profile.</p>
              </div>
              <Button variant="outline" onClick={handleSignOut} className="self-start">
                <LogOut size={16} /> Sign Out
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={fadeUp} custom={1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Enrolled Courses</CardTitle>
                  <BookOpen size={18} className="text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-foreground">0</p>
                  <p className="text-xs text-muted-foreground mt-1">Browse courses to get started</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming Bookings</CardTitle>
                  <Calendar size={18} className="text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-foreground">0</p>
                  <p className="text-xs text-muted-foreground mt-1">No upcoming sessions</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Profile</CardTitle>
                  <User size={18} className="text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-foreground">{displayName}</p>
                  <p className="text-xs text-muted-foreground mt-1">{user.email}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Main Content */}
            <motion.div variants={fadeUp} custom={2} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* My Courses */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg font-serif text-foreground">My Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <BookOpen size={40} className="mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground mb-4">You haven't enrolled in any courses yet.</p>
                    <Button onClick={() => navigate("/courses")} className="bg-gradient-gold hover:opacity-90">
                      Browse Courses
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* My Bookings */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg font-serif text-foreground">My Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Calendar size={40} className="mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground mb-4">No upcoming mentoring or CV review sessions.</p>
                    <Button onClick={() => navigate("/services")} className="bg-gradient-gold hover:opacity-90">
                      Book a Session
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;

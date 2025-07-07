import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import CourseCard from "@/components/CourseCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Play, Users, Award, BookOpen, Star, TrendingUp, Clock } from "lucide-react";
import heroImage from "@/assets/hero-lms.png";

const Index = () => {
  // Sample course data
  const featuredCourses = [
    {
      id: "1",
      title: "Complete React Developer Course 2024",
      description: "Master React from scratch with modern hooks, context, and best practices. Build real-world projects.",
      price: 299000,
      originalPrice: 599000,
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      instructor: "John Doe",
      rating: 4.8,
      totalReviews: 2847,
      duration: "42 jam",
      studentsCount: 15420,
      level: "intermediate"
    },
    {
      id: "2", 
      title: "UI/UX Design Fundamentals",
      description: "Learn user interface and user experience design principles with hands-on projects and real case studies.",
      price: 249000,
      originalPrice: 449000,
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      instructor: "Sarah Wilson",
      rating: 4.9,
      totalReviews: 1923,
      duration: "28 jam",
      studentsCount: 8750,
      level: "beginner"
    },
    {
      id: "3",
      title: "Advanced JavaScript & Node.js",
      description: "Deep dive into advanced JavaScript concepts, asynchronous programming, and Node.js backend development.",
      price: 349000,
      originalPrice: 649000,
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      instructor: "Mike Chen",
      rating: 4.7,
      totalReviews: 3156,
      duration: "55 jam",
      studentsCount: 12340,
      level: "advanced"
    },
    {
      id: "4",
      title: "Digital Marketing Mastery",
      description: "Complete guide to digital marketing including SEO, social media, content marketing, and analytics.",
      price: 199000,
      originalPrice: 399000,
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      instructor: "Lisa Anderson",
      rating: 4.6,
      totalReviews: 2234,
      duration: "35 jam",
      studentsCount: 9876,
      level: "beginner"
    }
  ];

  const stats = [
    { icon: Users, label: "Siswa Aktif", value: "50,000+" },
    { icon: BookOpen, label: "Kursus", value: "1,200+" },
    { icon: Award, label: "Sertifikat", value: "25,000+" },
    { icon: Star, label: "Rating Rata-rata", value: "4.8" }
  ];

  const categories = [
    { name: "Programming", count: 245, color: "bg-blue-500" },
    { name: "Design", count: 189, color: "bg-purple-500" },
    { name: "Marketing", count: 156, color: "bg-green-500" },
    { name: "Business", count: 203, color: "bg-orange-500" },
    { name: "Photography", count: 98, color: "bg-red-500" },
    { name: "Music", count: 76, color: "bg-indigo-500" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="bg-white/20 text-white border-white/30 mb-6 text-sm font-medium">
                🎉 Platform #1 untuk Pembelajaran Online
              </Badge>
              <h1 className="font-heading font-bold text-4xl lg:text-6xl text-white mb-6 leading-tight">
                Kembangkan Skill,
                <br />
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Raih Masa Depan
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Bergabung dengan 50,000+ pelajar yang telah mengembangkan karir mereka 
                melalui kursus berkualitas tinggi dari instruktur terbaik.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="xl" variant="hero" className="bg-white text-primary hover:bg-white/90">
                  <Play className="w-5 h-5" />
                  Mulai Belajar Gratis
                </Button>
                <Button size="xl" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary">
                  Jelajahi Kursus
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Online Learning"
                className="w-full h-auto rounded-2xl shadow-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Kategori Kursus Populer
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Temukan kursus terbaik dalam berbagai bidang untuk mengembangkan skill sesuai minat Anda
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-primary transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} kursus</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-16">
            <div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
                Kursus Pilihan Terbaik
              </h2>
              <p className="text-xl text-muted-foreground">
                Kursus paling populer dan berkualitas tinggi dari instruktur berpengalaman
              </p>
            </div>
            <Button variant="outline" className="mt-6 lg:mt-0">
              Lihat Semua Kursus
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-hero-gradient rounded-3xl p-12 lg:p-16 text-white">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
              Siap Tingkatkan Karir Anda?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan profesional yang telah merasakan transformasi karir 
              melalui pembelajaran berkualitas di EduStream.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="hero" className="bg-white text-primary hover:bg-white/90">
                Mulai Sekarang
              </Button>
              <Button size="xl" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary">
                <Clock className="w-5 h-5" />
                Coba Gratis 7 Hari
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, Play } from "lucide-react";

const CourseCard = ({
  id,
  title,
  description,
  price,
  originalPrice,
  thumbnail,
  instructor,
  rating,
  totalReviews,
  duration,
  studentsCount,
  level
}) => {
  const getLevelColor = (level) => {
    switch (level) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getLevelText = (level) => {
    switch (level) {
      case "beginner":
        return "Pemula";
      case "intermediate":
        return "Menengah";
      case "advanced":
        return "Lanjutan";
      default:
        return level;
    }
  };

  return (
    <Card className="group overflow-hidden hover:shadow-primary transition-all duration-300 hover:scale-105 bg-card border-border/50">
      <div className="relative overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button size="icon" variant="hero" className="rounded-full">
            <Play className="w-6 h-6" />
          </Button>
        </div>
        <Badge className={`absolute top-3 left-3 ${getLevelColor(level)}`}>
          {getLevelText(level)}
        </Badge>
      </div>

      <CardContent className="p-4">
        <div className="flex items-center space-x-1 mb-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-foreground">{rating}</span>
          <span className="text-sm text-muted-foreground">({totalReviews} ulasan)</span>
        </div>

        <h3 className="font-heading font-semibold text-lg mb-2 line-clamp-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {description}
        </p>

        <p className="text-sm text-muted-foreground mb-3">
          Oleh <span className="text-foreground font-medium">{instructor}</span>
        </p>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{studentsCount.toLocaleString()} siswa</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-foreground">
              Rp {price.toLocaleString()}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                Rp {originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Link to={`/course/${id}`} className="w-full">
          <Button variant="hero" className="w-full">
            Lihat Detail
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;

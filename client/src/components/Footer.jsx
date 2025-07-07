import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-subtle-gradient border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-gradient rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                EduStream
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Platform pembelajaran online terbaik untuk mengembangkan skill dan meraih karir impian Anda. 
              Belajar dari instruktur terbaik dengan materi berkualitas tinggi.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Facebook
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Kursus */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Kursus</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/courses?category=programming"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Programming
                </Link>
              </li>
              <li>
                <Link
                  to="/courses?category=design"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Design
                </Link>
              </li>
              <li>
                <Link
                  to="/courses?category=marketing"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/courses?category=business"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  to="/courses?category=photography"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Photography
                </Link>
              </li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Perusahaan</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Karir
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kontak
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Bantuan
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 EduStream. Semua hak dilindungi.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Syarat & Ketentuan
            </Link>
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
              Ева Печенкина
            </h3>
            <p className="text-background/80">
              Создаю уникальные образы с любовью к деталям и вниманием к вашим пожеланиям.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#portfolio" className="hover:text-background transition-smooth">Портфолио</a></li>
              <li><a href="#about" className="hover:text-background transition-smooth">О дизайнере</a></li>
              <li><a href="#services" className="hover:text-background transition-smooth">Услуги</a></li>
              <li><a href="#contact" className="hover:text-background transition-smooth">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Социальные сети</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/20 hover:bg-gradient-accent flex items-center justify-center transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/20 hover:bg-gradient-accent flex items-center justify-center transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/20 hover:bg-gradient-accent flex items-center justify-center transition-smooth"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} Ева Печенкина. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

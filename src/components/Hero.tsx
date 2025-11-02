import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 text-center md:text-left">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Ева Печенкина
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Дизайнер одежды
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Создаю уникальные образы, которые подчеркивают индивидуальность и стиль. 
            Каждое изделие — это произведение искусства, созданное с любовью к деталям.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              size="lg" 
              className="bg-gradient-accent text-white hover:opacity-90 shadow-elegant transition-smooth"
              onClick={() => scrollToSection('contact')}
            >
              Оставить заявку
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 hover:bg-secondary transition-smooth"
              onClick={() => scrollToSection('portfolio')}
            >
              Смотреть работы
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

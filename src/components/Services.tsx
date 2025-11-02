import { Card } from "@/components/ui/card";
import { Sparkles, Scissors, Ruler, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Индивидуальный пошив",
      description: "Создание уникальных изделий по вашим меркам и пожеланиям. Полный контроль на каждом этапе.",
    },
    {
      icon: Scissors,
      title: "Коррекция и ремонт",
      description: "Профессиональная подгонка и реставрация одежды. Вернем вторую жизнь любимым вещам.",
    },
    {
      icon: Ruler,
      title: "Консультация по стилю",
      description: "Помощь в создании гармоничного образа и подбор идеального силуэта.",
    },
    {
      icon: Palette,
      title: "Дизайн коллекций",
      description: "Разработка полных коллекций одежды для брендов и частных клиентов.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Широкий спектр услуг для создания вашего идеального образа
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-elegant transition-smooth group cursor-pointer"
            >
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-smooth">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

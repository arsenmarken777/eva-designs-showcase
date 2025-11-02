import aboutImage from "@/assets/about-image.jpg";
import { Card } from "@/components/ui/card";

const About = () => {
  const achievements = [
    { number: "12+", label: "Лет опыта" },
    { number: "500+", label: "Довольных клиентов" },
    { number: "50+", label: "Наград" },
  ];

  return (
    <section id="about" className="py-20 px-6 gradient-hero">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О дизайнере</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Меня зовут Ева Печенкина, и я — дизайнер с многолетним опытом создания 
                уникальных образов для особенных моментов в жизни моих клиентов.
              </p>
              <p>
                Моя философия проста: каждый человек уникален, и одежда должна подчеркивать 
                эту уникальность. Я создаю не просто платья — я создаю истории, которые 
                рассказывают о вашей индивидуальности.
              </p>
              <p>
                В моей работе я использую только качественные материалы и уделяю особое 
                внимание каждой детали. Каждое изделие создается вручную с учетом всех 
                пожеланий клиента.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              {achievements.map((item, index) => (
                <Card key={index} className="p-6 text-center shadow-card">
                  <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                    {item.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </Card>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-3xl transform rotate-3"></div>
              <img
                src={aboutImage}
                alt="Ева Печенкина"
                className="relative rounded-3xl shadow-elegant w-full object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

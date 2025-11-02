import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Заявка отправлена!",
      description: "Спасибо за обращение. Я свяжусь с вами в ближайшее время.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "eva.pechenkina@example.com" },
    { icon: Phone, label: "Телефон", value: "+7 (999) 123-45-67" },
    { icon: MapPin, label: "Адрес", value: "Москва, Россия" },
  ];

  return (
    <section id="contact" className="py-20 px-6 gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Связаться со мной</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Оставьте заявку, и я свяжусь с вами для обсуждения вашего проекта
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Имя <span className="text-destructive">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="transition-smooth"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="transition-smooth"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="transition-smooth"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Сообщение <span className="text-destructive">*</span>
                </label>
                <Textarea
                  placeholder="Расскажите о вашем проекте..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="resize-none transition-smooth"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-accent text-white hover:opacity-90 shadow-elegant transition-smooth"
              >
                Отправить заявку
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{item.label}</h3>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6 shadow-card">
              <h3 className="font-bold mb-4">Время работы</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Понедельник - Пятница: 10:00 - 19:00</p>
                <p>Суббота: 11:00 - 17:00</p>
                <p>Воскресенье: Выходной</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

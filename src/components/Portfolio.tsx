import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";

const Portfolio = () => {
  const portfolioItems = {
    all: [
      { id: 1, image: portfolio1, title: "Вечерняя коллекция", category: "evening" },
      { id: 2, image: portfolio2, title: "Повседневная мода", category: "casual" },
      { id: 3, image: portfolio3, title: "Свадебная коллекция", category: "bridal" },
      { id: 4, image: portfolio4, title: "Аксессуары", category: "accessories" },
      { id: 5, image: portfolio5, title: "Авангард", category: "avant-garde" },
    ],
  };

  const categories = [
    { value: "all", label: "Все работы" },
    { value: "evening", label: "Вечерние платья" },
    { value: "casual", label: "Повседневная мода" },
    { value: "bridal", label: "Свадебные платья" },
    { value: "accessories", label: "Аксессуары" },
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Коллекция моих лучших работ, созданных с любовью и вниманием к деталям
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 md:grid-cols-5 mb-12">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.value} 
                value={category.value}
                className="data-[state=active]:bg-gradient-accent data-[state=active]:text-white"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.value} value={category.value}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems.all
                  .filter(item => category.value === "all" || item.category === category.value)
                  .map((item) => (
                    <Card 
                      key={item.id} 
                      className="group overflow-hidden shadow-card hover:shadow-elegant transition-smooth cursor-pointer"
                    >
                      <div className="relative overflow-hidden aspect-[4/5]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-6">
                          <h3 className="text-2xl font-serif font-bold text-white">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;

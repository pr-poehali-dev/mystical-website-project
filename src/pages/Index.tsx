import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const stories = [
    {
      title: "Девочка под школой",
      description: "В старой школе говорили, что в подвале живёт девочка. Никто не видел её лица, но все слышали плач...",
      readTime: "15 мин"
    },
    {
      title: "Зеркало в общежитии",
      description: "Каждую ночь в 3:33 в зеркале появлялась она. Смотрела прямо в душу и шептала что-то неразборчивое...",
      readTime: "12 мин"
    },
    {
      title: "Последний звонок",
      description: "После выпускного Анна не вернулась домой. Её нашли только через неделю в том самом месте...",
      readTime: "20 мин"
    }
  ];

  const merchItems = [
    {
      name: "Толстовка 'Девочка под школой'",
      price: "2990 ₽",
      image: "/img/2ced761f-cc64-4e1b-baee-fb42fc119d3e.jpg"
    },
    {
      name: "Кружка 'Мистические истории'",
      price: "1290 ₽",
      image: "/img/2ced761f-cc64-4e1b-baee-fb42fc119d3e.jpg"
    },
    {
      name: "Стикерпак 'Ужасы'",
      price: "590 ₽",
      image: "/img/2ced761f-cc64-4e1b-baee-fb42fc119d3e.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-mystic-dark text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-mystic-dark/90 backdrop-blur-sm border-b border-mystic-purple">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-mystic-glow">Девочка под школой</h1>
          <div className="flex gap-6">
            <a href="#mystik" className="hover:text-mystic-glow transition-colors">Мистика</a>
            <a href="#stories" className="hover:text-mystic-glow transition-colors">Истории</a>
            <a href="#merch" className="hover:text-mystic-glow transition-colors">Мерч</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/img/2ced761f-cc64-4e1b-baee-fb42fc119d3e.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mystic-dark/70 via-mystic-purple/50 to-mystic-dark" />
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-mystic-glow animate-pulse-glow">
            ДЕВОЧКА
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            ПОД ШКОЛОЙ
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto">
            Погрузись в мир мистических историй, где каждая девочка скрывает тёмную тайну
          </p>
          <Button className="bg-mystic-accent hover:bg-mystic-glow text-white px-8 py-4 text-lg">
            Читать истории
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Mystik Section */}
      <section id="mystik" className="py-20 bg-mystic-purple/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-mystic-glow">Мистика</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-mystic-purple border-mystic-accent hover:border-mystic-glow transition-colors">
              <CardContent className="p-6 text-center">
                <Icon name="Moon" className="mx-auto mb-4 text-mystic-glow" size={48} />
                <h3 className="text-xl font-semibold mb-3">Лунные ритуалы</h3>
                <p className="text-gray-300">Древние обряды и заклинания под покровом ночи</p>
              </CardContent>
            </Card>
            
            <Card className="bg-mystic-purple border-mystic-accent hover:border-mystic-glow transition-colors">
              <CardContent className="p-6 text-center">
                <Icon name="Eye" className="mx-auto mb-4 text-mystic-glow" size={48} />
                <h3 className="text-xl font-semibold mb-3">Третий глаз</h3>
                <p className="text-gray-300">Развитие сверхъестественных способностей</p>
              </CardContent>
            </Card>
            
            <Card className="bg-mystic-purple border-mystic-accent hover:border-mystic-glow transition-colors">
              <CardContent className="p-6 text-center">
                <Icon name="Sparkles" className="mx-auto mb-4 text-mystic-glow" size={48} />
                <h3 className="text-xl font-semibold mb-3">Магические артефакты</h3>
                <p className="text-gray-300">Предметы силы из потустороннего мира</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section id="stories" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-mystic-glow">Страшные истории</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card key={index} className="bg-mystic-purple border-mystic-accent hover:border-mystic-glow transition-all hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-mystic-glow text-sm">{story.readTime}</span>
                    <Icon name="BookOpen" className="text-mystic-accent" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{story.title}</h3>
                  <p className="text-gray-300 mb-6">{story.description}</p>
                  <Button variant="outline" className="w-full border-mystic-accent text-mystic-glow hover:bg-mystic-accent">
                    Читать полностью
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-mystic-accent hover:bg-mystic-glow px-8 py-3">
              Все истории
              <Icon name="ArrowRight" className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* Merch Section */}
      <section id="merch" className="py-20 bg-mystic-purple/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-mystic-glow">Мерч</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {merchItems.map((item, index) => (
              <Card key={index} className="bg-mystic-purple border-mystic-accent hover:border-mystic-glow transition-all hover:scale-105">
                <CardContent className="p-0">
                  <div className="aspect-square bg-mystic-dark rounded-t-lg mb-4 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover opacity-70 hover:opacity-90 transition-opacity"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                    <p className="text-mystic-glow text-xl font-bold mb-4">{item.price}</p>
                    <Button className="w-full bg-mystic-accent hover:bg-mystic-glow">
                      <Icon name="ShoppingCart" className="mr-2" size={18} />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mystic-dark py-12 border-t border-mystic-purple">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-mystic-glow mb-4">Девочка под школой</h3>
          <p className="text-gray-400 mb-6">Мистические истории для смелых душ</p>
          <div className="flex justify-center gap-6">
            <Icon name="Instagram" className="text-mystic-accent hover:text-mystic-glow cursor-pointer" size={24} />
            <Icon name="Youtube" className="text-mystic-accent hover:text-mystic-glow cursor-pointer" size={24} />
            <Icon name="MessageCircle" className="text-mystic-accent hover:text-mystic-glow cursor-pointer" size={24} />
          </div>
          <p className="text-gray-500 text-sm mt-8">© 2024 Все истории основаны на реальных событиях</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
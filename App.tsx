import { ServerHeader } from './components/ServerHeader';
import { PrivilegeCard } from './components/PrivilegeCard';
import { CaseCard } from './components/CaseCard';
import { CartProvider } from './components/CartContext';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const privileges = [
    {
      title: 'Hero',
      price: 10,
      color: 'hero' as const,
      features: [
        'Цветной ник в чате',
        'Приват 200 блоков',
        'Кит Hero каждые 24 часа',
        'Доступ к /feed',
        'Скидка 10% в магазине'
      ]
    },
    {
      title: 'Titan',
      price: 59,
      color: 'titan' as const,
      features: [
        'Все привилегии Hero',
        'Приват 1000 блоков',
        'Кит Titan каждые 12 часов',
        'Доступ к /fly',
        'Доступ к /repair',
        'Скидка 25% в магазине',
        'Эксклюзивные команды'
      ]
    },
    {
      title: 'Avenger',
      price: 99,
      color: 'avenger' as const,
      popular: true,
      features: [
        'Все привилегии Titan',
        'Приват 2500 блоков',
        'Кит Avenger каждые 8 часов',
        'Доступ к /feed',
        'Доступ к /workbench',
        'Доступ к /ec',
        'Скидка 35% в магазине',
        'Цветные сообщения в чате'
      ]
    },
    {
      title: 'Overlord',
      price: 149,
      color: 'overlord' as const,
      features: [
        'Все привилегии Avenger',
        'Приват 5000 блоков',
        'Кит Overlord каждые 6 часов',
        'Доступ к /heal',
        'Доступ к /time',
        'Доступ к /weather',
        'Скидка 45% в магазине',
        'Уникальные эффекты частиц',
        'Приоритет входа на сервер'
      ]
    },
    {
      title: 'Magister',
      price: 199,
      color: 'magister' as const,
      features: [
        'Все привилегии Overlord',
        'Приват 10000 блоков',
        'Кит Magister каждые 4 часа',
        'Доступ к /invsee',
        'Доступ к /tp (игрок)',
        'Доступ к /grant (hero/titan)',
        'Скидка 55% в магазине',
        'Кастомные команды магии',
        'Возможность создания варпов'
      ]
    },
    {
      title: 'Imperator',
      price: 299,
      color: 'imperator' as const,
      features: [
        'Все привилегии Magister',
        'Приват 25000 блоков',
        'Кит Imperator каждые 2 часа',
        'Доступ к /vanish',
        'Доступ к /tphere',
        'Доступ к /grant (hero/titan/avenger)',
        'Скидка 65% в магазине',
        'Уникальный титул Императора',
        'Возможность телепортации к игрокам'
      ]
    },
    {
      title: 'Dragon',
      price: 499,
      color: 'dragon' as const,
      features: [
        'Все привилегии Imperator',
        'Неограниченный приват',
        'Кит Dragon каждый час',
        'Возможность выдавать донаты до Magister',
        'Скидка 75% в магазине',
        'Уникальная аура дракона',
        'Возможность полета без ограничений',
        'Эксклюзивные драконьи способности',
        
      ]
    },
    {
      title: 'Y.Helper',
      price: 699,
      color: 'yhelper' as const,
      features: [
        'Почти все команды сервера',
        'Доступ к модераторским командам',
        'Возможность помогать новичкам',
        'Доступ к /kick игроков',
        'Доступ к /mute игроков',
        'Доступ к /ban игроков',
        'Специальный префикс Helper',
        'Приоритетная поддержка',
        'Доступ к сообществу разработчиков'
      ]
    }
  ];

  const cases = [
    { count: 3, price: 19 },
    { count: 10, price: 49, discount: 18, popular: true },
    { count: 25, price: 99, discount: 20 }
  ];

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-900">
        {/* Заголовок сервера */}
        <ServerHeader />
        
        {/* Секция привилегий */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                💎 Привилегии
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Получите уникальные возможности и выделитесь среди других игроков
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {privileges.map((privilege) => (
                <PrivilegeCard
                  key={privilege.title}
                  {...privilege}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Секция кейсов */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                📦 Кейсы с донатом
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Попытайте удачу и получите редкие предметы и возможности
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cases.map((caseItem) => (
                <CaseCard
                  key={caseItem.count}
                  {...caseItem}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Футер */}
        <footer className="bg-gray-800 border-t border-gray-700 py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400 mb-2">
              © 2024 MegaWorld Server. Все права защищены.
            </p>
            <p className="text-gray-500 text-sm">
              Не является официальным продуктом Minecraft. Не одобрено Mojang или Microsoft.
            </p>
          </div>
        </footer>
        
        {/* Уведомления */}
        <Toaster />
      </div>
    </CartProvider>
  );
}
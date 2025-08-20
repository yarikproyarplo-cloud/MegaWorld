import { Server, Users, Gamepad2 } from 'lucide-react';
import { Badge } from './ui/badge';
import { Cart } from './Cart';

export function ServerHeader() {
  return (
    <div className="relative text-center py-20 px-4">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 opacity-90" />
      
      {/* Корзина в правом верхнем углу */}
      <div className="absolute top-4 right-4 z-20">
        <Cart />
      </div>
      
      {/* Контент */}
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-4">
          <Server className="h-8 w-8 text-green-400 mr-3" />
          <Badge className="bg-green-500 text-white animate-pulse">
            ОНЛАЙН
          </Badge>
        </div>
        
        <h1 className="text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
          MegaWorld
        </h1>
        
        <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
          Лучший Minecraft сервер с уникальными возможностями и дружелюбным сообществом
        </p>
        
        <div className="flex items-center justify-center space-x-8 text-gray-300">
          <div className="flex items-center">
            <Users className="h-5 w-5 mr-2 text-blue-400" />
            <span>1,247 игроков онлайн</span>
          </div>
          
          <div className="flex items-center">
            <Gamepad2 className="h-5 w-5 mr-2 text-green-400" />
            <span>Версия 1.20.1</span>
          </div>
        </div>
        
        <div className="mt-6 text-green-400 font-mono">
          play.megaworld.ru
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse" />
        <div className="absolute top-20 -right-10 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000" />
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-green-500 rounded-full opacity-20 animate-pulse delay-2000" />
      </div>
    </div>
  );
}
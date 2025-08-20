import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import exampleImage from 'figma:asset/f404bede7124dbadc47fcb66b3424278816e4520.png';

export function ProductCard() {
  return (
    <Card className="w-80 overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-lg">
      <div className="relative overflow-hidden">
        <img 
          src={exampleImage} 
          alt="Голографический рюкзак" 
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0">
            ХИТ
          </Badge>
        </div>
        <Button 
          size="icon" 
          variant="ghost" 
          className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 rounded-full transition-colors"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-3">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
            <span className="text-sm text-gray-500 ml-1">(24)</span>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
            Голографический рюкзак с сердечком
          </h3>
          
          <p className="text-sm text-gray-600 line-clamp-2">
            Стильный переливающийся рюкзак с голографическим покрытием и декоративным сердечком. Идеально подходит для школы и прогулок.
          </p>
          
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">2 490 ₽</span>
            <span className="text-sm text-gray-500 line-through">3 200 ₽</span>
            <Badge variant="destructive" className="text-xs">-22%</Badge>
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
          <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 transition-all duration-200">
            <ShoppingCart className="h-4 w-4 mr-2" />
            В корзину
          </Button>
          
          <Button variant="outline" className="w-full">
            Быстрый просмотр
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
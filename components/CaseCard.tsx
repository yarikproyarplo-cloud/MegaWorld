import { Package, Sparkles, ShoppingCart } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useCart } from './CartContext';
import { toast } from './ui/sonner';

interface CaseCardProps {
  count: number;
  price: number;
  discount?: number;
  popular?: boolean;
}

export function CaseCard({ count, price, discount, popular }: CaseCardProps) {
  const { addItem } = useCart();
  const originalPrice = discount ? Math.round(price / (1 - discount / 100)) : null;
  
  const handleAddToCart = () => {
    addItem({
      id: `case-${count}`,
      type: 'case',
      title: `${count} ${count === 3 ? 'кейса' : 'кейсов'} с донатом`,
      price,
      details: `Случайные донат-предметы и возможности`
    });
    
    toast.success(`${count} кейсов добавлено в корзину!`);
  };
  
  return (
    <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-amber-50 to-orange-100 border-amber-200">
      {popular && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
          <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1">
            💎 ВЫГОДНО
          </Badge>
        </div>
      )}
      
      <div className="absolute top-3 right-3">
        {discount && (
          <Badge className="bg-red-500 text-white">
            -{discount}%
          </Badge>
        )}
      </div>
      
      <CardContent className="p-6 text-center">
        <div className="mb-4 relative">
          <div className="relative inline-block">
            <Package className="h-16 w-16 mx-auto text-amber-600" />
            <Sparkles className="h-6 w-6 absolute -top-1 -right-1 text-yellow-500 animate-pulse" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {count} {count === 3 ? 'кейса' : 'кейсов'} с донатом
        </h3>
        
        <p className="text-gray-600 text-sm mb-4">
          Получите случайные донат-предметы и возможности
        </p>
        
        <div className="mb-4">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl font-bold text-gray-900">{price}₽</span>
            {originalPrice && (
              <span className="text-lg text-gray-500 line-through">{originalPrice}₽</span>
            )}
          </div>
          {discount && (
            <p className="text-sm text-green-600 mt-1">
              Экономия {originalPrice! - price}₽
            </p>
          )}
        </div>
        
        <div className="text-xs text-gray-500 mb-4">
          ≈ {Math.round(price / count)}₽ за кейс
        </div>
        
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 shadow-lg transition-all duration-200 hover:scale-105"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Купить кейсы
        </Button>
      </CardContent>
    </Card>
  );
}
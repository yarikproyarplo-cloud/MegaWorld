import { Crown, Zap, ShoppingCart, Shield, Sword, Sparkles, Flame, Star, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useCart } from './CartContext';
import { toast } from './ui/sonner';

interface PrivilegeCardProps {
  title: string;
  price: number;
  features: string[];
  color: 'hero' | 'titan' | 'avenger' | 'overlord' | 'magister' | 'imperator' | 'dragon' | 'yhelper';
  popular?: boolean;
}

export function PrivilegeCard({ title, price, features, color, popular }: PrivilegeCardProps) {
  const { addItem } = useCart();
  
  const colorClasses = {
    hero: 'from-green-600 to-emerald-700',
    titan: 'from-purple-600 to-indigo-700',
    avenger: 'from-blue-600 to-cyan-700',
    overlord: 'from-red-600 to-rose-700',
    magister: 'from-amber-600 to-orange-700',
    imperator: 'from-violet-600 to-purple-700',
    dragon: 'from-emerald-600 to-teal-700',
    yhelper: 'from-pink-600 to-fuchsia-700'
  };

  const iconColor = {
    hero: 'text-green-500',
    titan: 'text-purple-500',
    avenger: 'text-blue-500',
    overlord: 'text-red-500',
    magister: 'text-amber-500',
    imperator: 'text-violet-500',
    dragon: 'text-emerald-500',
    yhelper: 'text-pink-500'
  };

  const getIcon = (color: string) => {
    switch (color) {
      case 'hero': return <Zap className={`h-12 w-12 mx-auto ${iconColor[color]}`} />;
      case 'titan': return <Crown className={`h-12 w-12 mx-auto ${iconColor[color]}`} />;
      case 'avenger': return <Shield className={`h-12 w-12 mx-auto ${iconColor[color]}`} />;
      case 'overlord': return <Sword className={`h-12 w-12 mx-auto ${iconColor[color]}`} />;
      case 'magister': return <Sparkles className={`h-12 w-12 mx-auto ${iconColor[color]}`} />;
      case 'imperator': return <Crown className={`h-12 w-12 mx-auto ${iconColor[color]}`} />;
      case 'dragon': return <Flame className={`h-12 w-12 mx-auto ${iconColor[color]}`} />;
      case 'yhelper': return <Users className={`h-12 w-12 mx-auto ${iconColor[color]}`} />;
      default: return <Star className={`h-12 w-12 mx-auto ${iconColor[color]}`} />;
    }
  };

  const handleAddToCart = () => {
    addItem({
      id: `privilege-${title.toLowerCase()}`,
      type: 'privilege',
      title: `Привилегия ${title}`,
      price,
      details: features.slice(0, 2).join(', ') + '...'
    });
    
    toast.success(`Привилегия ${title} добавлена в корзину!`);
  };

  return (
    <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gray-900 border-gray-700">
      {popular && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-1">
            🔥 ПОПУЛЯРНОЕ
          </Badge>
        </div>
      )}
      
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} opacity-10`} />
      
      <CardContent className="relative p-6 text-center">
        <div className="mb-4">
          {getIcon(color)}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        
        <div className="mb-4">
          <span className="text-3xl font-bold text-white">{price}₽</span>
          <span className="text-gray-400 ml-1">/навсегда</span>
        </div>
        
        <div className="space-y-2 mb-6 max-h-40 overflow-y-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-gray-300 text-sm">
              <span className="text-green-400 mr-2 flex-shrink-0">✓</span>
              <span className="text-left">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button 
          onClick={handleAddToCart}
          className={`w-full bg-gradient-to-r ${colorClasses[color]} hover:scale-105 transition-all duration-200 text-white border-0 shadow-lg`}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Купить {title}
        </Button>
      </CardContent>
    </Card>
  );
}
import { ArrowLeft, CreditCard, Smartphone, Wallet } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { useCart } from './CartContext';
import { useState } from 'react';
import { toast } from './ui/sonner';

interface CheckoutFormProps {
  onBack: () => void;
}

export function CheckoutForm({ onBack }: CheckoutFormProps) {
  const { items, totalPrice, clearCart } = useCart();
  const [nickname, setNickname] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentMethods = [
    { id: 'card', name: 'Банковская карта', icon: CreditCard },
    { id: 'qiwi', name: 'QIWI Кошелек', icon: Wallet },
    { id: 'phone', name: 'Оплата с телефона', icon: Smartphone },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nickname.trim()) {
      toast.error('Введите никнейм в игре');
      return;
    }
    
    setIsProcessing(true);
    
    // Симуляция обработки платежа
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Заказ успешно оформлен! Товары будут выданы в течение 5 минут.');
    clearCart();
    onBack();
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Назад к корзине
          </Button>
        </div>

        <div className="grid gap-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Оформление заказа</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nickname" className="text-gray-300">
                  Никнейм в игре *
                </Label>
                <Input
                  id="nickname"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="Введите ваш никнейм"
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  required
                />
                <p className="text-xs text-gray-500">
                  Товары будут выданы на этот никнейм
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">
                  Email (опционально)
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                />
                <p className="text-xs text-gray-500">
                  Для отправки чека и важных уведомлений
                </p>
              </div>

              <div className="space-y-4">
                <Label className="text-gray-300">Способ оплаты</Label>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <div key={method.id} className="flex items-center space-x-2">
                        <RadioGroupItem 
                          value={method.id} 
                          id={method.id}
                          className="border-gray-600 text-green-500" 
                        />
                        <Label 
                          htmlFor={method.id} 
                          className="flex items-center text-gray-300 cursor-pointer"
                        >
                          <Icon className="h-4 w-4 mr-2" />
                          {method.name}
                        </Label>
                      </div>
                    );
                  })}
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Ваш заказ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-gray-300">
                  <div>
                    <span>{item.title}</span>
                    {item.quantity > 1 && (
                      <span className="text-gray-500 ml-1">× {item.quantity}</span>
                    )}
                  </div>
                  <span className="font-medium">
                    {item.price * item.quantity}₽
                  </span>
                </div>
              ))}
              
              <Separator className="bg-gray-700" />
              
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-white">Итого:</span>
                <span className="text-xl font-bold text-white">{totalPrice}₽</span>
              </div>

              <Button 
                onClick={handleSubmit}
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
              >
                {isProcessing ? 'Обработка...' : `Оплатить ${totalPrice}₽`}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Нажимая "Оплатить", вы соглашаетесь с правилами сервера
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
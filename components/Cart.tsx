import {
  ShoppingCart,
  X,
  Plus,
  Minus,
  Trash2,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { useCart } from "./CartContext";
import { useState } from "react";
import { CheckoutForm } from "./CheckoutForm";

export function Cart() {
  const {
    items,
    updateQuantity,
    removeItem,
    totalPrice,
    totalItems,
  } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (showCheckout) {
    return (
      <CheckoutForm onBack={() => setShowCheckout(false)} />
    );
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative bg-gray-800 border-gray-600 text-white hover:bg-gray-700"
        >
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-96 bg-gray-900 border-gray-700 text-white">
        <SheetHeader>
          <SheetTitle className="text-white">
            Корзина
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center text-gray-400 py-8">
              <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Корзина пуста</p>
              <p className="text-sm">
                Добавьте товары для покупки
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-800 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-white">
                        {item.title}
                      </h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-400 hover:text-red-300 hover:bg-gray-700 h-6 w-6 p-0"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    {item.details && (
                      <p className="text-sm text-gray-400 mb-2">
                        {item.details}
                      </p>
                    )}

                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity - 1,
                            )
                          }
                          className="h-6 w-6 p-0 border-gray-600 text-gray-300 hover:bg-gray-700"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>

                        <span className="text-white min-w-[2rem] text-center">
                          {item.quantity}
                        </span>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity + 1,
                            )
                          }
                          className="h-6 w-6 p-0 border-gray-600 text-gray-300 hover:bg-gray-700"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <span className="font-medium text-white">
                        {item.price * item.quantity}₽
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="bg-gray-700" />

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-white">
                    Итого:
                  </span>
                  <span className="text-xl font-bold text-white">
                    {totalPrice}₽
                  </span>
                </div>

                <Button
                  onClick={() => setShowCheckout(true)}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                >
                  Перейти к оплате
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
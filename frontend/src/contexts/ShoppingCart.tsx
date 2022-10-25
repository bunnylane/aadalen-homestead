import { useContext, createContext, ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ShoppingCartContext = createContext({} as ShoppingCartContextObject)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContextObject= {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    getTotalItems : () => number
    getItems : () => CartItem[]
}

type ShoppingCartProviderProps = {
    children: ReactNode
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("adalengard-shopping-cart", [])

    function getTotalItems() {
        return cartItems.reduce((prev, curr) => curr.quantity + prev, 0)
    }

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function getItems() {
        return cartItems
    }

    function increaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return <ShoppingCartContext.Provider value={{getItems, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, getTotalItems }}>
        {children}
    </ShoppingCartContext.Provider>
}
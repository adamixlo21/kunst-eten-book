import {
    createContext,
    ReactNode,
    useContext,
    useState,
    useEffect
} from 'react';

interface BookCartContextType {
    quantity: number;
    cartOpen: boolean;

    setQuantity: (quantity: number) => void;
    increaseQuantity: () => void;
    decreaseQuantity: () => void;

    openCart: () => void;
    closeCart: () => void;

    resetCart: () => void;

}

const BookCartContext = createContext<BookCartContextType | null>(null);

export function BookCartProvider({children,}: { children: ReactNode; })
{
    const [quantity, setQuantity] = useState(() => {
        const savedQuantity = localStorage.getItem('kunst-eten-cart-quantity');

        return savedQuantity ? Number(savedQuantity) : 0;
    });

    useEffect(() => {
        localStorage.setItem(
            'kunst-eten-cart-quantity',
            quantity.toString(),
        );
    }, [quantity]);

    const resetCart = () => {
        setQuantity(0);
        setCartOpen(false);

        localStorage.removeItem('kunst-eten-cart-quantity');
    };

    const [cartOpen, setCartOpen] = useState(false);

    const increaseQuantity = () => {
        setQuantity((current) => current + 1);
    };

    const decreaseQuantity = () => {
        setQuantity((current) => Math.max(0, current - 1));
    };

    const openCart = () => {
        setCartOpen(true);
    };

    const closeCart = () => {
        setCartOpen(false);
    };


    return (
        <BookCartContext.Provider
            value={{
                quantity,
                cartOpen,
                setQuantity,
                increaseQuantity,
                decreaseQuantity,
                openCart,
                closeCart,
                resetCart,
            }}
        >
            {children}
        </BookCartContext.Provider>
    );
}

export function useBookCart() {
    const context = useContext(BookCartContext);

    if (!context) {
        throw new Error(
            'useBookCart must be used inside BookCartProvider',
        );
    }

    return context;
}

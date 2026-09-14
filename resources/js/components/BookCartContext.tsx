import {
    createContext,
    ReactNode,
    useContext,
    useState,
} from 'react';

interface BookCartContextType {
    quantity: number;
    cartOpen: boolean;

    setQuantity: (quantity: number) => void;
    increaseQuantity: () => void;
    decreaseQuantity: () => void;

    openCart: () => void;
    closeCart: () => void;
}

const BookCartContext = createContext<BookCartContextType | null>(null);

export function BookCartProvider({
                                     children,
                                 }: {
    children: ReactNode;
}) {
    const [quantity, setQuantity] = useState(1);
    const [cartOpen, setCartOpen] = useState(false);

    const increaseQuantity = () => {
        setQuantity((current) => current + 1);
    };

    const decreaseQuantity = () => {
        setQuantity((current) => Math.max(1, current - 1));
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

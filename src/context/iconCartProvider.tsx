"use client"
import { toast } from "@/hooks/use-toast"
import { IconData } from "@/hooks/useFetchIconLibrary"
import { copyCommand } from "@/lib/copyCommand "
import { createContext, useContext, useCallback, useMemo, useState } from "react"

type IconCartContextType = {
    cartIcons: IconData[]
    addRemoveIcon: (icon: IconData) => void
    clearCart: () => void
    isInCart: (icon: IconData) => boolean
    cartTotal: number
    multiSelect: boolean
    setMultiSelect: (value: boolean) => void
    createCommand: (icons: IconData[]) => void
}

const IconCartContext = createContext<IconCartContextType | null>(null)

const createCommand = (icons: IconData[]) => {
    const iconNames = icons.map(icon => `${icon.library.toLowerCase()}-${icon.name}`).join(' ')
    const command = `npx icora add ${iconNames}`
    copyCommand(command)
}



const IconCartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartIcons, setCartIcons] = useState<IconData[]>([])
    const [multiSelect, setMultiSelect] = useState(false)

    // Memoize isInCart function to prevent unnecessary re-renders
    const isInCart = useCallback((icon: IconData) => {
        return cartIcons.some((i) => i.name === icon.name)
    }, [cartIcons])

    // Memoize addRemoveIcon function
    const addRemoveIcon = useCallback((icon: IconData) => {
        if (isInCart(icon)) {
            setCartIcons(prev => prev.filter((i) => i.name !== icon.name))
            toast({
                variant: "destructive",
                title: `Icon ${icon.name} removed from cart`,
                description: "You can add it back to your cart anytime",
            })
        } else {
            setCartIcons(prev => [...prev, icon])
            toast({
                variant: "default",
                title: `Icon ${icon.name} added to cart`,
                description: "You can remove it anytime",
            })
        }
    }, [isInCart])

    const clearCart = useCallback(() => {
        setCartIcons([])
    }, [])

    // Memoize cartTotal to prevent unnecessary recalculations
    const cartTotal = useMemo(() => cartIcons.length, [cartIcons])

    // Memoize the context value to prevent unnecessary re-renders, --adjust create command function
    const contextValue = useMemo(() => ({
        cartIcons,
        createCommand,
        addRemoveIcon,
        clearCart,
        isInCart,
        cartTotal,
        multiSelect,
        setMultiSelect,
    }), [cartIcons, addRemoveIcon, clearCart, isInCart, cartTotal, multiSelect])

    return (
        <IconCartContext.Provider value={contextValue}>
            {children}
        </IconCartContext.Provider>
    )
}

const useIconCart = () => {
    const context = useContext(IconCartContext)
    if (!context) {
        throw new Error('useIconCart must be used within a IconCartProvider')
    }
    return context
}

export { IconCartProvider, useIconCart }
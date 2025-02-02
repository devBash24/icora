import { useQuery } from "@tanstack/react-query"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
const useFetchNavItems =  () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const pathname = usePathname().split('/')[1]



    const { data:navItems, isLoading:loading, error } = useQuery({
        queryKey: ['navItems'],
        queryFn: async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/icons/all/libraries`)
            const data = await res.json()
            return data.data
        }
    })
    useEffect(() => {
        setSelectedCategory(pathname)
    }, [pathname])



    return { navItems, loading, error, selectedCategory, setSelectedCategory }
}
    
export default useFetchNavItems


import { useQuery } from "@tanstack/react-query"
import { useState } from "react";
export interface IconData {
    library: string;
    content: string;
    name: string;
  }

const useFetchIconLibrary = (libraryName: string) => {
    const [selectedIcon, setSelectedIcon] = useState<IconData | null>(null);
    const { data, isLoading, error } = useQuery({
        queryKey: ["icon-library", libraryName],
        queryFn: async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/icons/all/libraries/${libraryName}`)
                const data = await res.json()
                return Array.isArray(data.data) ? data.data as IconData[] : [];

            } catch (error) {
                console.error('Error fetching icons:', error);
                return [];
            }
        }
    })

    return { data, isLoading, error, selectedIcon, setSelectedIcon }
}


export default useFetchIconLibrary;


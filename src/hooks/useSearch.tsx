"use client"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useCallback, useState } from "react"



const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const {data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading} = useInfiniteQuery({
    queryKey: ["search", searchQuery],
    queryFn: async ({ pageParam = 0 }) => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/search?q=${searchQuery}&page=${pageParam}&limit=50`)
      return res.json()
    },
    getNextPageParam: (lastPage, pages) => {
      return lastPage.hasMore ? pages.length : undefined
    },
    initialPageParam: 1,
    enabled: searchQuery.length > 0,
  })
  const allIcons = data?.pages.flatMap(page => page.data) ?? []


  const loadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])
  
  return {
    searchQuery,
    setSearchQuery,
    allIcons,
    loadMore,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  }
}


export default useSearch

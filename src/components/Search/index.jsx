"use client"

import { MagnifyingGlass } from '@phosphor-icons/react'
import { useRef } from "react"
import { useRouter } from 'next/navigation'

const Search = () => {
    const router = useRouter()

    const searchRef = useRef()

    const handleKeyDown = (e) => {
        if(e.code === 'Enter') handleSearch(e)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        const search_key = searchRef.current.value
        if(!search_key || search_key.trim() == "") return
        router.push(`/search/${search_key}`)
    }

    return (
        <div className="relative md:mt-0 mt-2 rounded-md shadow-sm">
            <input
                type="text"
                name="search"
                id="search"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-color-primary sm:text-sm sm:leading-6"
                placeholder="search..."
                ref={searchRef}
                onKeyDown={handleKeyDown}
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                    type="button"
                    className="text-center h-full rounded-md border-0 bg-gradient-to-br from-color-primary to-color-secondary py-0 px-4 text-white hover:from-color-secondary hover:to-color-primary transition-all duration-200 sm:text-sm"
                    onClick={handleSearch}
                >
                    <MagnifyingGlass size={20}/>
                </button>
            </div>
      </div>
    )
}

export default Search
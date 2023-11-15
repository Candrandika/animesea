import Link from 'next/link'
import Search from '@/components/Search'

const Navbar = () => {
    return (
        <header className="bg-color-body flex  md:flex-row flex-col justify-between items-center py-3 px-5">
            <Link href="/" className="cursor-pointer text-white font-bold text-xl">{process.env.NEXT_PUBLIC_WEB_TITLE}</Link>
            <Search />
        </header>
    )
}

export default Navbar
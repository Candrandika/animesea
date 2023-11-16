import Link from 'next/link'
import Search from '@/components/Search'

const Navbar = () => {
    return (
        <header className="bg-color-body">
            <div className="flex  md:flex-row flex-col justify-between items-center p-3 container mx-auto">
                    <Link href="/" className="cursor-pointer text-white font-bold text-xl">{process.env.NEXT_PUBLIC_WEB_TITLE}</Link>
                    <Search />
            </div>
        </header>
    )
}

export default Navbar
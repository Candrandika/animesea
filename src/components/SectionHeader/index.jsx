import Link from 'next/link'

const SectionHeader = ({ title, link_href = false, link_title = false }) => {
    return (
        <div className="mb-3 mt-10 flex justify-between">
            <h1 className="font-bold text-xl text-color-light">{title}</h1>
            { 
                (!link_href || !link_title) 
                ? null
                : <Link href={link_href} className="text-transparent bg-clip-text bg-gradient-to-br from-color-primary to-color-secondary hover:from-color-secondary hover:to-color-primary">{link_title}</Link>
            }
        </div>
    )
}

export default SectionHeader
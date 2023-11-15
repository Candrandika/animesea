const HeaderMenu = ({ title }) => {
    return (
        <>
            <div className="py-8">
                <h3 className="text-center font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-br from-color-primary from-47% to-color-secondary to-53%">
                    {title}
                </h3>
            </div>
        </>
    )
}

export default HeaderMenu
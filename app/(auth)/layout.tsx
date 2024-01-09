const Layout = ({children}: {children: React.ReactNode}) => {

    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-primary-50 bg-cover bg-fixed bg-center border border-red-600">
            {children}
        </div>
    )


}

export default Layout
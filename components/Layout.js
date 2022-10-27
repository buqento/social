const Layout = ({ children }) => {
    const Nav = () => {
        return (
            <div className="bg-blue-500 sticky top-0 p-4 shadow">
                <span className="text-white text-2xl font-black">
                Dashboard
                </span>
            </div>
        )
    }
    const Footer = () => {
        return (
            <footer className="h-20 bg-white shadow">
                <div className="text-center py-3">
                    <small className="text-gray-700">&copy; {new Date().getFullYear()} Dashboard. All Rights Reserved.</small>
                </div>
            </footer>
        )
    }
    return (
        <div className="space-y-4">
            <Nav />
            <div className="max-w-screen-lg lg:mx-auto">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
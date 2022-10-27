const Layout = ({ children }) => {
    const Nav = () => {
        return (
            <div
                onClick={() => window.location.reload()}
                className="cursor-pointer space-x-4 text-white font-black bg-blue-500 sticky top-0 p-4 shadow">
                <span className="text-2xl">
                    Home
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
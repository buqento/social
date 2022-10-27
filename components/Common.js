const Button = ({ children, onClick, className }) => {
    return (
        <button
            type="button"
            className={`inline-block px-6 py-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ${className}`}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
const Button = ({ children, onClick, className }) => {
    return (
        <button
            type="button"
            className={`inline-block px-4 py-2 text-white text-xs font-medium leading-tight uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out ${className}`}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
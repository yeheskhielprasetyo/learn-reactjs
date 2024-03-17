import Button from "../Elements/Button"

const CardProduct = (props) => {
    const {children} = props
    return (
        <div className="w-full max-w-sm bg-gray-800 border-gray-700 rounded-lg shadow">
            {children}
        </div>
    )
}

const Header = ()  => {
    return (
        <a href="">
            <img src="/images/shoes-1.jpg" alt="product" className="p-8 rounded-t-lg" />
        </a>
    )
}

const Body = (props) => {
    const {children, title} = props
    return (
        <div className="px-5 pb-5">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">{title}</h5>
                <p className="text-m text-white">{children}</p>
            </a>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="flex items-center justify-between px-5 pb-5">
                    <span className="text-xl font-bold text-white">Rp. 100.000</span>
                    <Button classname="bg-blue-600">Add to cart</Button>
        </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer

export default CardProduct
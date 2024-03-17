// import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct"

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header></CardProduct.Header>
                <CardProduct.Body title="Sepatu Baru">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio qui deserunt a facilis eius maxime voluptatem numquam, non, illo cum eligendi nemo explicabo doloremque minus dolorem libero architecto, doloribus corrupti.
                </CardProduct.Body>
                <CardProduct.Footer></CardProduct.Footer>
            </CardProduct>    
        </div>
    )
}

export default ProductsPage
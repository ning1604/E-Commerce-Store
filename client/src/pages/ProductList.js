import CategoryMenu from "../components/CategoryMenu/index";
import ProductListings from "../components/ProductListings/index";

const ProductList = () => {
    return (
        <div className="main-content page-container">
            <div>
                <h1 className="sub-header">Shop</h1>
            </div>
            <CategoryMenu />
            <ProductListings />
        </div>
    )
}

export default ProductList;
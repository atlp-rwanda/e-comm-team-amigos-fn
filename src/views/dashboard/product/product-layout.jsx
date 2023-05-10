import "./style.scss";
import ProductCard from "../../../components/product-card/index.jsx";
import imagePlaceHolder from "../../../assets/img/placeholder-image.png";

export default function ProductLayout({products, setProductId, handleNext, handlePrevious}) {
  return (
    <ProductCard>
        {products.listProduct?.map((product, index)=>{
            return (
                <div key={index} className="products-elements" onClick={()=>setProductId(product.id)}>
                    {/* ABOUT PRODUCT INFORMATION */}
                    <div className="product-info">
                        <img className="product-image" src={product?.images[0]? product?.images[0]: imagePlaceHolder} alt="product image" />
                    </div>
                    {/* PRODUCT DESCRIPTION */}
                    <div className="product-detail-info">
                        <span className="details-title">{product?.name}</span>
                    </div>
                    {/* PRODUCT AVAILABILITY */}
                    <div className="product-status">
                        <span className="status-title">{product?.available? "Available": "Not available"}</span>
                    </div>
                    {/* PRODUCT ACTIONS */}
                    <div className="product-actions">
                        <button className="primary-button">Edit</button>
                        <button className="primary-button" style={{backgroundColor:'#E4002B'}}>Delete</button>
                        <span className="created-at">Thursday, 4 May 2023</span>
                    </div>
                </div>
            )
        })}
        <div className="pagination">
            <p>Page {products?.currentPage} of {products?.totalPages}</p>
            <div className="pagination-controller">
                {products?.previousPage && (
                <button className="btn-controller" onClick={() => handlePrevious()}>
                    Previous Page
                </button>
                )}
                {products?.nextPage && (
                <button className="btn-controller" onClick={()=>handleNext()}>
                    Next Page
                </button>
                )}
            </div>
        </div>
    </ProductCard>
  );
}

import ProductCard from "./ProductCard"
export default function ShopPage(props) {
    return (
        <div className="col-12 d-flex flex-wrap">
            {
                props.myProducts.map((el, index) => {
                    return (
                        <ProductCard key={el.id}
                            showCat={false}
                            image={el.image}
                            title={el.title}
                            price={el.price}
                            id={el.id}
                        />
                    )
                })
            }
        </div>
    )
}

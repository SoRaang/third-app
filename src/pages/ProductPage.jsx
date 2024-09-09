import { useNavigate } from 'react-router-dom';

const product = () => {
    const navigate = useNavigate();

    const clickHandler = (e) => {
        navigate(`/product/${ e.target.dataset.itemId }`);
    }

    return (
        <section id="secProducts">
            <h1>상품 목록</h1>

            <div className="product-grid">
                <article className="product-item-card" onClick={ clickHandler } data-item-id="p001">
                    상품 1
                </article>

                <article className="product-item-card" onClick={ clickHandler } data-item-id="p002">
                    상품 2
                </article>

                <article className="product-item-card" onClick={ clickHandler } data-item-id="p003">
                    상품 3
                </article>
            </div>
        </section>
    );
};

export default product;
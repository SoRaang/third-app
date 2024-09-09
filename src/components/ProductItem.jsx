import { useNavigate } from 'react-router-dom';

const ProductItem = (props) => {
    const { productItem } = props;

    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(`/product/${ productItem.id }`);
    }

    return (
        <article className="product-item-card" onClick={ clickHandler } data-item-id={ productItem.id }>
            <div className="product-image-container">
                <img src={ productItem.productPicture[0] } className="product-card-image" alt="" />
            </div>

            <dl className="product-description">
                <dt className="product-card-name">{ productItem.productName || '상품명' }</dt>
                <dd className="product-card-description">{ '상품 설명' }</dd>
                <dd className="product-card-price">{ productItem.productPrice || 0 }</dd>
                <dd className="product-card-misc">{ '특이사항 없음' }</dd>
            </dl>
        </article>
    );
};

export default ProductItem;
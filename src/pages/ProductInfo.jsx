import { useParams } from "react-router-dom";

const ProductInfo = () => {
    const { productID } = useParams();

    return (
        <div>
            { productID } 제품 상세 페이지
        </div>
    );
};

export default ProductInfo;
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
    const { productID } = useParams();

    const fetchProd = () => {
        return fetch('../programs/products.json').then(response => response.json());
    }

    const { data, error, isLoading } = useQuery({
        queryKey: [id],
        queryFn: fetchProd
    })

    return (
        <div>
            { productID } 번 제품 상세 페이지
        </div>
    );
};

export default ProductInfo;
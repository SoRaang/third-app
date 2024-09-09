import { useQuery } from 'react-query';
import ProductItem from '../components/ProductItem';

const ProductPage = () => {
    const { data, error, isLoading } = useQuery();

    const prodData = [
        {
            id: 0,
            productName: '상품 1',
            productPrice: 30000,
            productPicture: [
                'https://picsum.photos/300/300?random=1'
            ]
        },
        {
            id: 1,
            productName: "상품 2",
            productPrice: 30000,
            productPicture: [
                'https://picsum.photos/300/300?random=2'
            ]
        },
        {
            id: 2,
            productName: "상품 3",
            productPrice: 30000,
            productPicture: [
                'https://picsum.photos/300/300?random=3'
            ]
        },
        {
            id: 3,
            productName: "상품 4",
            productPrice: 30000,
            productPicture: [
                'https://picsum.photos/300/300?random=4'
            ]
        },
        {
            id: 4,
            productName: "상품 5",
            productPrice: 30000,
            productPicture: [
                'https://picsum.photos/300/300?random=5'
            ]
        },
    ]

    return (
        <section id="secProducts">
            <h1 className="section-title">상품 목록</h1>

            <div className="product-grid">
                { prodData.map(prodItem => {
                    return <ProductItem key={ prodItem.id } productItem={ prodItem } />
                }) }
            </div>
        </section>
    );
};

export default ProductPage;
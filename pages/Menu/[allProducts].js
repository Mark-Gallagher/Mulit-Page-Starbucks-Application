/* eslint-disable react/react-in-jsx-scope */
//Dynamic Routing
import { useRouter } from 'next/router';


function ProductsPage() {
    const router = useRouter();

    const allProducts = router.query.allProducts;
    

    return <h1>The Product Page: {allProducts}</h1>
}
export default ProductsPage;

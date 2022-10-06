import Link from 'next/link';
import styles from '../../styles/Home.module.css'
import { sanityClient } from '../../utility/sanity/client';

function ProductList( { products }){
    return( 
        <div className={ styles.main } >
            <h1>Our Products</h1>
            {
                products.map( 
                    product =><div className={ styles.card } key={ product.id }>
                        
                        <Link href= { `products/${product.id.current}`}>
                            <a>{ product.id.current + ". " + product.name }</a>
                        </Link></div>
                 
                 )
            }
        </div>
    )
}

export default ProductList
 
 
export async function getStaticProps(){

 const response = await sanityClient.fetch('*[_type=="product" && defined(id.current) && !(_id in path("drafts.**"))]{ id , name } | order( id.current )');    

        
        console.log( response);
        return {
            props:{
                products: response,
            },
            
        }
}
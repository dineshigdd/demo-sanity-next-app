import styles from '../../styles/Home.module.css'
import { sanityClient } from '../../utility/sanity/client';

export default function Product( { product }){    

    return( 
        <div className={ styles.main }>           
            {                 
             <div>                            
                <p className={ styles.card }>{ product[0].id.current + "." +product[0].name }</p>
               
             </div>
                 
            }
        </div>
    )
}

export async function getStaticPaths() {
  
  return {
    paths:[{ params:{ id: '1' }  },],
    fallback: 'blocking',
  }
}



export const getStaticProps = async (context) => {
  
    const { id } = context.params
    
    const product = await sanityClient.fetch(`*[_type=="product" && id.current==$id && defined(id.current) && !(_id in path("drafts.**")) ]{ id, name}`, { id })    

    
    return {
      props: { product },
    };
  };
import { useParams, useSearchParams } from "react-router";

import styles from './Product.module.css'

const Product = () => {
  const { productId } = useParams(); // Ver el parametro de la URL
  const [searchParams] = useSearchParams();  // Ver los query params

  return (
    <div className={styles.pepe}>
      {productId} - {searchParams.get('query')}

    </div>
  )
}

export default Product

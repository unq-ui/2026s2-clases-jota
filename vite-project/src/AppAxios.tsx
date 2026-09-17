import { useEffect, useState } from "react"

import Api from "./Services/Api";

const AppAxios =() => {
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    Api.getProducts(page)
      .then((data) => setItems((prev) => [...prev, ...data]))
      .catch((e) => console.log('error', e.response.data));    
  }, [page]);

  return (
    <div>
      Hola
      <button onClick={() => setPage(page + 1)}>Click me</button>
      {items.map((item) => <div key={item.id}>{item.name} </div>)}
    </div>
  )
}

export default AppAxios;

import { useState } from "react";

import Item from "./Components/Item";

const starterItems = [
  {
    id: 1,
    name: 'Item 1'
  },
  {
    id: 2,
    name: 'Item 2'
  },
  {
    id: 3,
    name: 'Item 3'
  },
];

const AppRenderList = () => {
  const [items, setItems] = useState(starterItems);

  return (
    <div>
      Hola
      {items.map((item) => <Item key={item.id} name={item.name} />)}
      <button onClick={() => setItems(prev => [...prev, { id: prev.length + 1, name: `Item ${prev.length + 1}` }])}>Add Item</button>
    </div>
  )
}

export default AppRenderList;

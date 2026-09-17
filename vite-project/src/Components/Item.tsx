type ItemProps = {
  name: string;
};

const Item = ({ name }: ItemProps) => (
  <div>
    {name}
  </div>
)

export default Item;

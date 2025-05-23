export default function Product(props) {
  if (!props.value) {
    return <div>Product data not found</div>;
  }

  const { name, price } = props.value;

  return (
    <div className="App-Product-Box">
      <h3>{name}</h3>
      <h4>${price}</h4>
      <button>Add to Cart</button>
    </div>
  );
}

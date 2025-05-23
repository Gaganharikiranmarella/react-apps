export default function Product(props) {
  const { name, price } = props.value; // accessing passed data

  return (
    <div className="App-Product-Box">
      <h3>{name}</h3>
      <h4>${price}</h4>
      <button>Add to Cart</button>
    </div>
  );
}

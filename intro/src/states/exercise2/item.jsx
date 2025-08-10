export function Item({ product,shouldDiscount }) {
     const { item, price, discount } = product;
     
     const displayPrice = shouldDiscount ? price * (1 - discount) : price;
    return (
        <div>
            <p>{item}: ${displayPrice.toFixed(2)}</p>
        </div>
    );
}

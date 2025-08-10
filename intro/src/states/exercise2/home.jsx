import { useState } from "react";
import { Item } from "./item";

function Home({ store, shouldDiscount }) {

    return (
        <>
            <div>
                <h4>Store</h4>
                {store.map((p, i) => (
                    <Item key={i} product={p} shouldDiscount={shouldDiscount} />))}
            </div>
        </>
    )
}

export default Home;
import { useState } from "react";

const Exercise2Input = () => {
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");

    return (
        <div>
            <input
                id="name-input"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <select
                id="select-input"
                onChange={(e) => setFruit(e.target.value)}
                value={fruit}>
                <option value=""disabled> --Choose a fruit--</option>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
            </select>
        </div>
    );
};
export default Exercise2Input;

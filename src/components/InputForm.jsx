import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAmount, calculateDenominations, reset } from "../store/actions/denominationActions";

const InputForm = () => {
    const dispatch = useDispatch();
    const amount = useSelector((state) => state.amount);

    const handleChange = (e) => {
        dispatch(setAmount(Number(e.target.value)));
    };

    return (
        <div>
            <input
                type="number"
                value={amount}
                onChange={handleChange}
                placeholder="Saisir le montant"
            />
            <button onClick={() => dispatch(calculateDenominations())}>Dénomination</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
};

export default InputForm;

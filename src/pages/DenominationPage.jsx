import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { setDenominations } from "../store/actions/denominationActions";
import { useNavigate } from "react-router-dom";
import { selectDenominations } from "../store/selectors/denominationSelector";

const DenominationPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const denominations = useSelector(selectDenominations);

    const options = [
        { label: "Standard (1, 5, 10, 20, 50, 100)", value: [1, 5, 10, 20, 50, 100] },
        { label: "Petites coupures (1, 2, 5, 10, 20, 50)", value: [1, 2, 5, 10, 20, 50] },
        { label: "Grandes coupures (1, 10, 20, 50, 100, 200)", value: [1, 10, 20, 50, 100, 200] },
    ];

    const handleSelect = (e) => {
        const selectedValue = options[e.target.value].value;
        dispatch(setDenominations(selectedValue));
        navigate("/"); // Retourne à la page principale
    };

    return (
        <div>
            <h1>Choisir un ensemble de dénominations</h1>
            <p>Dénominations actuelles : {denominations.join(", ")}</p>
            <select onChange={handleSelect}>
                <option value="">-- Sélectionner une option --</option>
                {options.map((option, index) => (
                    <option key={index} value={index}>
                        {option.label}
                    </option>
                ))}
            </select>
            <button onClick={() => navigate("/")}>Retour</button>
        </div>
    );
};

export default DenominationPage;

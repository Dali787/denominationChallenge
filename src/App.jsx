import React from "react";
import InputForm from "./components/InputForm";
import ResultList from "./components/ResultList";
import { useSelector } from "react-redux";
import { selectDenominations } from "./store/selectors/denominationSelector";
import { Link } from "react-router-dom";

const App = () => {
    const denominations = useSelector(selectDenominations);

    return (
        <div>
            <h1>Calculateur de Dénominations</h1>
            <Link to="/denominations">Changer les dénominations</Link>
            <p>Dénominations actuelles : {denominations.join(", ")}</p>
            <InputForm/>
            <ResultList/>
        </div>
    );
};

export default App;

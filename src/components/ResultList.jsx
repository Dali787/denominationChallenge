import React from "react";
import { useSelector } from "react-redux";

const ResultList = () => {
    const result = useSelector((state) => state.result);

    return (
        <div>
            <h2>Résultats :</h2>
            {result.length ? (
                <ul>
                    {result.map((item) => (
                        <li key={item.denomination}>
                            Dénomination {item.denomination} unité(s) : {item.count}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Aucun résultat</p>
            )}
        </div>
    );
};

export default ResultList;

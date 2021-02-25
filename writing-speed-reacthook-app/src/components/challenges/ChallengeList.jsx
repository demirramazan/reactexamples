import React, {useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext";
import {ChallengeContext} from "../../contexts/ChallengeContext";

const ChallengeList = () => {
    const theme = useContext(ThemeContext).getTheme();
    const {challenges} = useContext(ChallengeContext);
    const challengeRows = challenges ? challenges.map(c => {
        return <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.text}</td>
            <td>{c.difficulty}</td>
        </tr>

    }) : null
    return (
        <div className={`card text-center border ${theme.card}`}>
            <div className="card-header">
                <h3 className="card-title">Metinler</h3>
            </div>
            <div className="card-body p-1">
                <table className={`table ${theme.table} table-striped table-hover m-0`}>
                    <thead>
                    <tr>
                        <th>İd</th>
                        <th>Metin</th>
                        <th>Zorluk</th>
                    </tr>
                    </thead>
                    <tbody>
                    {challengeRows}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ChallengeList;
import React, {useContext} from 'react'
import {ChallengeResultContext} from "../../contexts/ChallengeResultContext";
import {ThemeContext} from "../../contexts/ThemeContext";

const Results = () => {
    const theme = useContext(ThemeContext).getTheme();
    const {results} = useContext(ChallengeResultContext);

    const challengeResultRows = results ?
        results.map(r => {
            return <tr key={r.id}>
                <td>{r.challengeId}</td>
                <td>% {r.scores.accurancy ? r.scores.accurancy.toFixed(2) : 0}</td>
                <td>{r.scores.duration.toFixed(2)} sn</td>
                <td>{r.scores.wordsPerMinute.toFixed(0)} k/dk</td>
            </tr>
        }) : <tr>
            <td style={{columnSpan: 4}}> Veri Bulunamadı</td>
        </tr>
    return (
        <div className={`card text-center border ${theme.card}`}>
            <div className="card-header">
                <h3 className="card-title">Sonuçlar</h3>
            </div>
            <div className="card-body p-1">
                <table className={`table ${theme.table} table-striped table-hover m-0`}>
                    <thead>
                    <tr>
                        <th>Metin Id</th>
                        <th>Dogruluk</th>
                        <th>Süre</th>
                        <th>DBK</th>
                    </tr>
                    </thead>
                    <tbody>
                    {challengeResultRows}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Results
;
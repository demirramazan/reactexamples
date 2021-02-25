import React, {useContext} from 'react'
import {ScoreTypes} from "../data/Types";
import ScoreCard from "./ScoreCard";
import {ChallengeResultContext} from "../../contexts/ChallengeResultContext";
import {ChallengeContext} from "../../contexts/ChallengeContext";
import uniqid from 'uniqid'

export const Score = ({values}) => {
    const {addResult} = useContext(ChallengeResultContext);
    const {selected} = useContext(ChallengeContext);
    const addResultHandler = () => {
        const id = uniqid();

        addResult({
            id: id,
            challengeId: selected,
            scores: values
        })

    }
    return (
        <React.Fragment>
            <div className="card-deck mb-3">
                {
                    Object.entries(values).map(([key, value]) => {
                        return <ScoreCard type={ScoreTypes[key]} key={key} value={value}
                        />
                    })
                }

            </div>
            <button className="btn btn-outline-primary btn-block" id="saveResult" onClick={addResultHandler}>Sonuçu
                Kaydet
            </button>
        </React.Fragment>
    )
}
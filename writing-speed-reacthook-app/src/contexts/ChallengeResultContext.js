import React, {createContext, useEffect, useState} from "react";
import uniqid from "uniqid";

export const ChallengeResultContext = createContext(undefined);

const INITIAL_RESULT = [
    {
        id: uniqid(),
        challengeId: 1,
        scores: {
            accurancy: 100,
            duration: 12,
            wordsPerMinute: 55
        }
    },
    {
        id: uniqid(),
        challengeId: 2,
        scores: {
            accurancy: 60,
            duration: 15,
            wordsPerMinute: 66
        }
    }
]

const ChallegeResultContextProvider = (props) => {
    const [results, setResults] = useState( () => {
        const challenges = localStorage.getItem('results');
        const result = challenges ? JSON.parse(challenges) : INITIAL_RESULT;
        return result;
    });

    const addResult = (result) => {
        setResults([
            ...results,
            result
        ])
    }
    useEffect(() => {
        localStorage.setItem('results', JSON.stringify(results));
    })
    return (
        <ChallengeResultContext.Provider value={{results: [...results], addResult}}>
            {props.children}
        </ChallengeResultContext.Provider>
    )
}
export default ChallegeResultContextProvider;
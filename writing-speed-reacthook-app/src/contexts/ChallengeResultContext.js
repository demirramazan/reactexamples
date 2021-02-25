import React, {useState, createContext} from "react";
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
    const [results, setResults] = useState(INITIAL_RESULT);

    const addResult = (result) => {
        setResults([
            ...results,
            result
        ])
    }
    return (
        <ChallengeResultContext.Provider value={{results: [...results], addResult}}>
            {props.children}
        </ChallengeResultContext.Provider>
    )
}
export default ChallegeResultContextProvider;
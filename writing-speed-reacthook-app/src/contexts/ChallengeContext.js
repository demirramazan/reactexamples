import React, {createContext, useEffect, useReducer} from "react";
import {challengeReducer} from "../components/reducers/challengeReducer";

export const ChallengeContext = createContext(undefined);

const INITIALE_STATE = {
    challenges: [
        {
            id: 1,
            text: "Deneme Text",
            difficulty: "easy"
        },
        {
            id: 2,
            text: "Ramazan Demir",
            difficulty: "easy"
        }
    ],
    selected: 1,
    index: 3
}
const ChallengeContextProvider = (props) => {
    const [state, dispatch] = useReducer(challengeReducer, INITIALE_STATE, () => {
        const challenges = localStorage.getItem('challenges');
        const result = challenges ? JSON.parse(challenges) : INITIALE_STATE;
        return result;
    });


    useEffect(() => {
        localStorage.setItem('challenges', JSON.stringify(state));
    }, [state])
    // const [state, setChallenges] = useState(INITIALE_STATE);
    // const addChallenge = (challenge) => {
    //     let id = state.index;
    //     const newChallenge = {...challenge, id}
    //     setChallenges(
    //         {
    //             ...state,
    //             challenges: [...state.challenges, newChallenge],
    //             index: id + 1
    //         }
    //     )
    //
    // }

    // const selectedChallenge = (id) => {
    //     setChallenges(
    //         {
    //             ...state,
    //             selected: id
    //         }
    //     )
    // }

    return (
        <ChallengeContext.Provider value={{
            ...state, dispatch
            // , addChallenge: addChallenge, selectedChallenge: selectedChallenge
        }}>
            {props.children}
        </ChallengeContext.Provider>
    )

}

export default ChallengeContextProvider;
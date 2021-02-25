import React, {useContext} from "react";
import {ChallengeContext} from "../../contexts/ChallengeContext";

const SelectChallenge = (props) => {

    // const {challenges, selected, selectedChallenge} = useContext(ChallengeContext);
    const {challenges, selected, dispatch} = useContext(ChallengeContext);

    const challengeOptions = challenges.map(x => {
        return <option key={x.id} value={x.id}>{`${x.id} >${x.text} | ${x.text.length}`}</option>
    })

    const changeHandler = (e) => {
        // selectedChallenge(Number(e.target.value))
        dispatch({
            type: 'SELECTED_CHALLENGE', selected: Number(e.target.value)
        })
        props.setResult(null)
    }

    return (
        <select className="form-control" name="selchll" id="selchll" value={selected} onChange={changeHandler}>
            {challengeOptions}
        </select>
    )
}

export default SelectChallenge;
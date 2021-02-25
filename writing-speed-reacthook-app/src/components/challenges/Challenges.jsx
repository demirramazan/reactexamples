import React from 'react'
import AddChallenge from "./AddChallenge";
import ChallengeList from "./ChallengeList"


export default function Challenges() {
    return (
        <div>
           <AddChallenge/>
           <hr/>
           <ChallengeList/>
        </div>
    )
}

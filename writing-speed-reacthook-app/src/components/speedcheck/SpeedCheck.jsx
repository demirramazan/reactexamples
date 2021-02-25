import React, {Component} from 'react'
import {Info} from './Info';
import ChallengeInput from './ChallengeInput';
import {Score} from './Score';
import SelectChallenge from "./SelectChallenge";

const INITIAL_STATE = {
    resultScore: null
}

export default class SpeedCheck extends Component {
    state = INITIAL_STATE;

    setResultScore = (result) => {
        this.setState({
            resultScore: result
        })
    };

    render() {
        return (
            <React.Fragment>
                <SelectChallenge/>
                <hr/>
                <Info/>
                <hr/>
                <ChallengeInput setResult={this.setResultScore}/>
                <hr/>
                {this.state.resultScore ?
                    <Score values={this.state.resultScore}/>
                    : null}
            </React.Fragment>
        )
    }
}

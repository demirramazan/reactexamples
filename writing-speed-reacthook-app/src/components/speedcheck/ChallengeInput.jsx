import React, {useContext, useState, useEffect} from 'react'
import {ChallengeContext} from "../../contexts/ChallengeContext";

const INITIAL_STATE = {
    entry: '',
    isDisabled: false,
    startTime: null,
    endTime: null
}

const ChallengeInput = (props) => {
    const {challenges, selected} = useContext(ChallengeContext);
    const challenge = challenges.find(c => c.id === selected);
    const challengeText = challenge ? challenge.text : "";

    const [state, setState] = useState(INITIAL_STATE);

    let keyMap = [];

    const changeHandler = (e) => {
        let {startTime} = state;
        if (startTime == null) {
            startTime = new Date().getTime()
        }
        if (e.target.value === '') {
            resetInput();
        } else if (challengeText.length + 1 <= e.target.value.length) {
            stopEndCheck();
        } else {
            setState({
                ...state,
                [e.target.name]: e.target.value,
                startTime
            })
        }
    }

    const resetInput = () => {
        setState(INITIAL_STATE);
        props.setResult(null);
    }

    useEffect(() => {
        document.addEventListener('keydown', keyEventControl);
        document.addEventListener('keyup', keyEventControl);
        return () => {
            document.removeEventListener('keydown', keyEventControl);
            document.removeEventListener('keyup', keyEventControl);
        }
    })

    // componentDidMount()
    // {
    //     document.addEventListener('keydown', keyEventControl);
    //     document.addEventListener('keyup', keyEventControl);
    // }
    //
    // componentWillUnmount()
    // {
    //     document.removeEventListener('keydown', keyEventControl);
    //     document.removeEventListener('keyup', keyEventControl);
    // }

    const keyEventControl = (e) => {
        if (e.type === 'keydown') {
            keyMap[e.keyCode] = true;
            if (keyMap[13] && keyMap[17]) {
                stopEndCheck();
            }
        } else if (e.type === 'keyup') {
            keyMap = [];
        }

    }
    const stopEndCheck = () => {
        let endTime = new Date().getTime();
        const {entry, startTime} = state;
        const result = checkEntry(entry, startTime, endTime);
        props.setResult(result);
        setState({
            isDisabled: true,
            endTime
        })
    }

    const checkEntry = (entry, startTime, endTime) => {
        let sumLetter = 0;
        const arrChallenge = challengeText.split(' ');
        const arrEntry = entry.split(' ');

        arrChallenge.forEach((c, i) => {
            for (let j = 0; j < c.length; j++) {
                if (arrEntry[i] && c[j] === arrEntry[i][j]) {
                    sumLetter++;
                }
            }
        });

        sumLetter += arrEntry.length - 1;

        let accurancy = (sumLetter * 100 / challengeText.length);

        let duration = (endTime - startTime) / 1000;

        let wordsPerMinute = ((entry.length * 60) / (6 * duration));

        return {
            accurancy,
            duration,
            wordsPerMinute
        }
    }

    return (
        <React.Fragment>
            <div className="input-group mb-3">
                <input type="text" className="form-control" name="entry" value={state.entry} disabled={state.isDisabled}
                       autoComplete="off"
                       onChange={changeHandler}
                       placeholder="Metni Giriniz"/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary rounded-right" type="button" id="reset"
                            onClick={resetInput}>Sıfırla
                    </button>
                </div>
                <br/>
            </div>
            <small
                className="text-muted">{`${state.entry ? state.entry.length : challengeText.length} / ${challengeText.length}`}</small>
        </React.Fragment>
    )


}
export default ChallengeInput;
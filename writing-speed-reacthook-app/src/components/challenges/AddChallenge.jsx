import React, {useContext, useState} from "react";
import {ChallengeContext} from "../../contexts/ChallengeContext";
import {ThemeContext} from "../../contexts/ThemeContext";

const INITIALE_STATE = {
    text: "",
    difficulty: ""
}
const AddChallenge = () => {
    const [challenge, setChallenge] = useState(INITIALE_STATE);

    // const {addChallenge} = useContext(ChallengeContext);
    const {dispatch} = useContext(ChallengeContext);

    const theme = useContext(ThemeContext).getTheme();

    const challengeHandler = (e) => {
        setChallenge({
                ...challenge,
                [e.target.name]: e.target.value
            }
        )
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_CHALLENGE', challenge});
        // addChallenge(challenge);
        setChallenge(INITIALE_STATE);
    }

    return (
        <div className={`card text-center border ${theme.card}`}>
            <div className="card-header">
                <h3 className="card-title">Metin Ekle</h3>
            </div>
            <div className="card-body">
                <form onSubmit={submitHandler}>
                    <div className="font-group">
                        <label htmlFor="text">Metin:</label>
                        <input type="text" name="text" className="form-control" value={challenge.text}
                               onChange={challengeHandler}
                               autoComplete="off"
                               placeholder="Metni Giriniz" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="difficulty">Zorluk:</label>
                        <select name="difficulty" id="difficulty" className="form-control" required
                                value={challenge.difficulty} onChange={challengeHandler}>
                            <option value="">Seçiniz</option>
                            <option value="easy">Kolay</option>
                            <option value="medium">Orta</option>
                            <option value="hard">Zor</option>
                        </select>
                    </div>
                    <button className="btn btn-outline-success btn-block">Kaydet</button>
                </form>
            </div>
        </div>
    )
}
export default AddChallenge;
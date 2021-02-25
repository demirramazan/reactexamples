import React from 'react'
import {ThemeContext} from "../../contexts/ThemeContext";
import {ChallengeContext} from "../../contexts/ChallengeContext";

export const Info = (props) => {
    return (
        <ChallengeContext.Consumer>
            {(challengeContext) => {
                return (
                    <ThemeContext.Consumer>{
                        (context) => {
                            const selectedChallenge = challengeContext.challenges.find(c => c.id === challengeContext.selected);
                            const challengeText = selectedChallenge ? selectedChallenge.text : "";
                            const theme = context.getTheme();
                            return (
                                <div className={`card text-center border ${theme.card}`}>
                                    <div className="card-header">
                                        <h1>Yazma Hızı Testi</h1>
                                    </div>
                                    <div className="card-body">
                                        <p>Alttaki metni kutucuğa girdiğiniz de süreniz başlayacaktır. </p>
                                        <p>Testi bitirmek için <span
                                            className="badge badge-info"> 'Ctrl + Enter'</span> kombinasyonunu
                                            kullanınız.</p>
                                        <p>Ayrıca karakter sınırını aştığınızda test otomatik olarak sonlanacaktır.</p>
                                    </div>
                                    <div className="card-footer">
                                        {challengeText}
                                    </div>
                                </div>
                            )
                        }
                    }
                    </ThemeContext.Consumer>
                )
            }}
        </ChallengeContext.Consumer>
    )
}
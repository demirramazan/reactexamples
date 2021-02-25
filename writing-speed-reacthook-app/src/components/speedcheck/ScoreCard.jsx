import React from "react";

const ScoreCard = ({value, type}) => {
    return (
        <div className={`card border-${type.bgColor} col p-0 text-center`}>
            <div className="card-header p-0">
                <h4 className="card-title">{type.title}</h4>
            </div>
            <div className="card-body">
                <p className="card-text">{`${value.toFixed(type.fixed)} ${type.unit}`}</p>
            </div>
        </div>

    );
}

export default ScoreCard;
import React from 'react'

const Categorypage = ({ match }) => {
    console.log(match.params.categoryID);
    return (
        <div className="">
            <h1>Categorypage {match.params.categoryID}</h1>
        </div>
    )
};

export default Categorypage;

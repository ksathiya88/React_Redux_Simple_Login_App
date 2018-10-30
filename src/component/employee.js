import React from "react";

const employee = function (props) {
    return (
        <div className='Employee' onClick={props.deleteHandler}>
            <p><label>Employee name</label><input value={props.name} onChange={props.changeNameHandler}></input></p>
            <p><label>Date Joined</label><input value={props.date_joined}></input></p>
            <p><label>Position Held</label><input value={props.position_held} onChange={props.changePositionHandler}></input></p>
        </div>
    )
}

export default employee;
import React, { useState } from 'react'

var st = {
    top: "50%",
    // -ms-transform: "translateY(-50%)",
    transform: "translateY(50%)",
    marginLeft: "auto",
    padding: "20px",
    textAlign: "center",
    width: "500px",
    marginRight: "auto",
    // paddingRight: "auto",
    background: "#e3e3e3",
}

const SignIn = () =>
{
    var i = new Date().toLocaleTimeString()
    const getTime = () =>
    {
        i = new Date().toLocaleTimeString()
        setTime( i )
    }
    setInterval( getTime, 1000 )
    const [time, setTime] = useState( i );

    return (
        <>
            <div style={st}>
                <p style={{ color: "red", fontWeight: "bold", fontSize: "22px" }}>{time}</p>
                {/* <button className="btn btn-primary" onClick={getTime}>Get Time</button> */}
            </div>
        </>
    )
}
export default SignIn
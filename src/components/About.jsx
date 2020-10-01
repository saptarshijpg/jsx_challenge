import React, { useState } from 'react'

function About()
{
    const onsubmit = () =>
    {
        setFullName( cName )
    }
    const [fullName, setFullName] = useState( "" )
    const sayHello = ( event ) =>
    {
        setCName( event.target.value )
    }
    const [cName, setCName] = useState( "" )

    // Second Card

    const [fullName2, setFullName2] = useState(
        {
            name2: "",
            email: "",
            number: ""
        } )

    const submit2 = ( e ) =>
    {
        e.preventDefault();
    }
    function inputEvent2( event )
    {
        const { name, value } = event.target
        setFullName2( ( preValue ) =>
        {
            return {
                ...preValue,
                [name]: value,
            }
            // if ( name === 'name2' ) {
            //     return {
            //         name: value,
            //         email: preValue.email,
            //     }
            // }
            // else if ( name === 'email' ) {
            //     return {
            //         name: preValue.name,
            //         email: value,
            //     }
            // }
        } )
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="card ml-auto mr-auto mt-auto col-6" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://source.unsplash.com/400x100/?random" alt="" />
                        <div className="card-body text-center">
                            <h3 className="card-title text-center">Hello {fullName}</h3>
                            <div className="form-group text-left">
                                <label for="name">Enter Name:</label>
                                <input type="text" className="form-control" id="cName" name="cName" placeholder="Enter your name"
                                    onChange={sayHello} value={cName} />
                            </div>
                            <button type="submit" onClick={onsubmit} className="btn btn-primary mt-2">Say Hello</button>
                        </div>
                    </div>
                    <div className="card ml-auto mr-auto col-6" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://source.unsplash.com/400x100/?Random" alt="" />
                        <div className="card-body text-center">
                            <h3 className="card-title text-center">Hello {fullName2.name2}<br />
                                {fullName2.email}<br />{fullName2.number}</h3>
                            <form onSubmit={submit2}>
                                <div className="form-group text-left">
                                    <input type="text" className="form-control" id="cName" name="name2" placeholder="Enter your name"
                                        value={fullName2.name} onChange={inputEvent2} />
                                    <input type="email" className="form-control" id="cName" name="email"
                                        autoComplete="off" placeholder="Enter your email"
                                        value={fullName2.email} onChange={inputEvent2} />
                                    <input type="number" className="form-control" id="cName" name="number"
                                        autoComplete="off" placeholder="Enter your Mobile"
                                        value={fullName2.number} onChange={inputEvent2} />
                                </div>
                                <button type="submit" className="btn btn-primary mt-2">Say Hello</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About

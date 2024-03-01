import React, { useState, useCallback } from 'react'
import Check_useCallback from './Check_useCallback';

function Simple_form() {

    const [person, setPerson] = useState({
        fname: "",
        lname: "",
        emailId: "",
        password: ""
    })

    const [count, setCount] = useState(0);
    const [adjective, setAdjective] = useState("good")

    let handleData = (e) => {

        const { value, name } = e.target;

        console.log(e.target)
        console.log(e.target.name)

        setPerson((perData) => {
            return {
                ...perData,
                [e.target.name]: e.target.value
            }
        })
    }

    let handleSUbmitData = (e) => {
        e.preventDefault();
        console.log("-- Your submit data is --", person)
    }

    const getadjective = useCallback(() => {
        return "count" + 1
    }, [count])

    // console.log("I am in formdata ")

    return (
        <>
            <form onSubmit={handleSUbmitData}>
                <label htmlFor='fname'>First name</label>
                <input type="text" name="fname" id="fname" value={person.fname} onChange={handleData} />

                <label htmlFor='lname'>Last name</label>
                <input type="text" name="lname" id="lname" value={person.lname} onChange={handleData} />

                <label htmlFor='emailId'>Email ID</label>
                <input type="text" name="emailId" id="emailId" value={person.emailId} onChange={handleData} />

                <label htmlFor='password'>password</label>
                <input type="password" name="password" id="password" value={person.password} onChange={handleData} />

                <button type='submit'>SUBMIT</button>

            </form>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <Check_useCallback adjective={"Good"} getadjective={getadjective} />

        </>

    )
}

export default Simple_form
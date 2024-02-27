import React, { createContext, useEffect, useRef, useState } from 'react'


export const nameContext = createContext()

function Hook_ex() {
    const [fname, setFname] = useState('Tirth')
    const testRef = useRef();

    const [carDet, setCardet] = useState({
        name: "ford",
        model: "abc",
        weight: "7.11",
        color: "red"
    })

    const [number, setNumber] = useState([11, 22, 33, 44, 55])

    let objChange = () => {
        setCardet((preObjData) => {
            return {
                ...preObjData,
                name: "Suzuki"
            }
        })
    }

    let handleArr = () => {
        setNumber((preArrData) => {
            return [
                ...preArrData,
                99,
            ]
        })
    }

    useEffect(() => {
        console.log("---- I'm useEffect -------")
        // console.log('your useRef is ----', testRef)
    })

    return (
        <>
            {/* SINGLE VALUE CHANGE USING USESTATE */}
            <h1 ref={testRef}>Testing useRef hook</h1>
            <p>Hook name is -: {fname}</p>
            <button onClick={() => setFname("gajjar")}>change state</button>

            {/* PRINT  OBJECT DATA AND CHANGE NAME USING USESTATE */}
            <div>
                <p>{carDet.name}</p>
                <p>{carDet.model}</p>
                <p>{carDet.weight}</p>
                <p>{carDet.color}</p>
                <button onClick={objChange}>Chang object</button>
            </div>

            {/* CHANGE ARRRAY VALUE USING USESTATE */}
            <div>

                {number.map((val, index) => {
                    return (
                        <p key={index}>{val}</p>
                    )
                })}
                <button onClick={handleArr}>Click me!</button>
            </div>

        </>
    )
}

export default Hook_ex
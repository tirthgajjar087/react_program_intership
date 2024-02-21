import React from 'react'

function Function_com_ex({ arr, children }) {

    console.log("Header pages array --:", arr);
    return (
        <>

            <div>
                {children}
                {arr.map((index) => {
                    return (<p key={index.id}> Your name is-- {index.first_name} & age- {index.age}</p>)
                })}

            </div>
        </>
    )
}

export default Function_com_ex
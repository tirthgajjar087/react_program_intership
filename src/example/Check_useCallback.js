import React, { useState } from 'react'

import { memo } from 'react';

const Check_useCallback = ({ adjective, getadjective }) => {

    console.log("Main_useCallbackFunction render ");
    return (
        <>
            <div>
                <p>Check useCallbackfunction {adjective}</p>

                <button onClick={() => { getadjective() }}>{getadjective()}</button>
            </div>
        </>
    )
}

export default memo(Check_useCallback)
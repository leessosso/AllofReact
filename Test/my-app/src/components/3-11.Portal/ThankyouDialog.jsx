import React from 'react'
import Dialog from './Dialog'

export default function ThankyouDialog() {
    return (
        // <Dialog title="Thanks" description="It's honor to meent you!!" button="closeDialog" />
        <Dialog 
            title={<h1 style={{ color: "purple"}}>Thank you!</h1>} 
            description="It's honor to meent you!! ThankyouDialog" 
            button={<button style={{ backgroundColor: "blue", color: "white"}}>Ok</button>} />
    )
}

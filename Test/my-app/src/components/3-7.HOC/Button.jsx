import React from 'react'
import withLoading from './withLoading'

function Button() {
    return (
        <button>
            button
        </button>
    )
}

export default withLoading(Button);
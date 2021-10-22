import React from 'react'
import PropType from 'prop-types';

function PropComponent(props) {
    return <div>{props.name}</div>
}

PropComponent.defaultProps = {
    name: "Jimmy",
    age: 7,
}

PropComponent.propTypes = {
    name: PropType.string,
    age: PropType.number.isRequired,
} 

export default function Component() {
    return (
        <div>
            <PropComponent></PropComponent>
        </div>
    )
}

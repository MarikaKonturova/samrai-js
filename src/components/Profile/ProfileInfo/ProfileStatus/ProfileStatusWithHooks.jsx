import React, {useEffect, useState} from 'react'

export const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange =(e) => {
        setStatus(e.currentTarget.value)
    }
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'No Status'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange}
                           value={status}
                           onBlur={deactivateEditMode}/>
                </div>
            }
        </div>
    )

} 
import React from "react";
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    //setState асинхронный! как промис
    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value,
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
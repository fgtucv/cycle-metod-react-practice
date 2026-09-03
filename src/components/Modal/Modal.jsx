import { Component } from "react";

export class Modal extends Component {
    state = {
        isOpen: false
    }

    toggleModal = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <>
                <button onClick={this.toggleModal}>Toggle Modal</button>
                <div className={this.state.isOpen ? 'modal ' : "isHidden"}>
                    <h2>Modal Title</h2>
                </div>
            </>
        )
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.toggleModal)
    }

    componentDidMount() {
        window.addEventListener('keydown', this.toggleModal)
    }
}
import { Component } from "react";

export class Modal extends Component {
    state = {
        isOpen: false
    }

    toggleModal = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        console.log('Modal component rendered')
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
        console.log('Modal component unmounted')
    }

    componentDidMount() {
        console.log('Modal component mounted')
        window.addEventListener('keydown', this.toggleModal)
    }
}
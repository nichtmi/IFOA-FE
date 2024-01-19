const ButtonComponent = ({text, showButton}) => {
    return (
        <button onclick={showButton}>{text}</button>
    )
}

export default ButtonComponent;
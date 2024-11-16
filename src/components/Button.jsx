// eslint-disable-next-line react/prop-types
const Button = ({ text, type="solid", icon}) => {
  const buttonStyles = {
    solid: "bg-tt-primary text-white px-4 py-2 rounded-md shadow",
    outline: "border-2 border-tt-primary text-tt-primary px-4 py-2 rounded-md hover:bg-tt-primary hover:text-white"
  }

  const buttonStyle = buttonStyles[type] || buttonStyles.solid;

  return (
    <button
      className={`flex items-center justify-center space-x-2 ${buttonStyle}`}>
        <span>{text}</span>
        {icon && <span>{icon}</span>}
        
    </button>
  )
}

export default Button
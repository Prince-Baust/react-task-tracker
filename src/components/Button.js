

const Button = ({color, text, onClick}) => <button style={{backgroundColor: color}} className="btn" onClick={onClick}>{text}</button>

Button.defaultProps = {
  color: 'steelblue',
  text: 'Default Button Text'
}

export default Button;
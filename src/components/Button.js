

const Button = ({color, text}) => <button style={{backgroundColor: color}} className="btn">{text}</button>

Button.defaultProps = {
  color: 'steelblue',
  text: 'Default Button Text'
}

export default Button;
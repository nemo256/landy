
const Button = ({ children, ...props }) => {
  return (
    <button className="btn px-4 bg-accent text-primary text-lg font-semibold rounded-full">
      {children}
    </button>
  )
}

export default Button

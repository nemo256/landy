
const Button = ({ children, ...props }) => {
  return (
    <button className="flex btn px-4 bg-accent text-primary text-base font-semibold rounded-full items-center">
      {children}
    </button>
  )
}

export default Button
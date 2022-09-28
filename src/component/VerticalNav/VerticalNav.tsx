import { Link } from "react-router-dom"
import "./VerticalNav.scss"

const VerticalNav = () => {
  return (
    <div className='navigation'>
      <Link to="/"><span></span></Link>
      <Link to="/about"><span></span></Link>
      <Link to="/works"><span></span></Link>
      <Link to="/contact"><span></span></Link>

    </div>
  )
}

export default VerticalNav

import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
    <nav className="nav">
        <Link to="/" className="site-title">
          Elite Fitness +
        </Link>
        <ul>
        <CustomLink to="/workout">Log Your Workout</CustomLink>
        <CustomLink to="/articles">Fitness Articles</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({ to, children, ...props }:any) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }
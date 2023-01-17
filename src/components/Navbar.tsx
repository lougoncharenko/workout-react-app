export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title"> Elite Fitness +  </a>
        <ul>
            <li>
            <a href="/"> Home</a>
            </li>
            <li>
                <a href="/workouts"> Log your workout </a>
            </li>
            <li>
                <a href="/articles"> Fitness Articles </a>
            </li>
        </ul>
    </nav>
}
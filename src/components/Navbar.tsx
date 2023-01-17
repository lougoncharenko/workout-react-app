export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title"> Elite Fitness +  </a>
        <ul>
            <li>
                <a href="/workouts"> Log your workout </a>
                <a href="/articles"> Fitness Articles </a>
            </li>
        </ul>

    </nav>
}
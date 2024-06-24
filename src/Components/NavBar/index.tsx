import "./navbar.styles.css"

export const NavBar =  () => {
    return (<nav>
        <ul>
            <li><a href="https://milutin25.github.io/Project/Work/work.html">Works</a></li>
            <li><a href="Blog/blog.html">Blog</a></li>
            <li><a href="Dashboard/dashboard.html">Contact</a></li>
        </ul>
        <div className="menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>    
    </nav>
    )
}
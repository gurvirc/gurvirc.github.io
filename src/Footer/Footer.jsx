import './Footer.css'
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <p className="footer-name">Gurvir</p>
                <div className="footer-socials">
                    <a href="https://github.com/gurvirc"><i className="fa-brands fa-github"></i></a>
                    <a href="https://linkedin.com/in/you"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="mailto:you@email.com"><i className="fa-solid fa-envelope"></i></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Gurvir Chahal.</p>
                <a href="#top" className="back-to-top">Back to top ↑</a>
            </div>
        </footer>
    )
}
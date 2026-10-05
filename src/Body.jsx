import selfPortrait from './images/AI-Self-Portrait.png'
export default function Body() {
    return (
        <div className="body">
            <img src={selfPortrait} />
            <div className='name-and-info'>
                <h1>Gurvir Chahal</h1>
                <h3>Aspiring Developer</h3>
                <p>Here, you’ll find my projects, ideas, and the things I love to do.
                    Feel free to explore and reach out!</p>
                <div className="socials">
                    <a href="https://github.com/gurvirc"><i className='bx bxl-github' rel="Github"></i></a>
                    <a href="https://ca.linkedin.com/in/gurvir-chahal-106192298?trk=people-guest_people_search-card"><i className='bx bxl-linkedin-square' ></i></a>
                    <a href="https://www.instagram.com/gurvir_chahal/?hl=en"><i className='bx bxl-instagram' ></i></a>
                </div>
            </div>
        </div>
    )
}
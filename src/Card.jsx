import profilePic from './assets/profilePic.jpeg'
function Card() {
    return (
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Lets Code Bro</h2>
            <p className='card-text'>I  love coding and play video games.</p>
        </div>
    );
}

export default Card
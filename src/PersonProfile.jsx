import { useState, useEffect } from 'react';
import pic1 from "./pic1.jpg"

const PersonProfile = () => {
    const [person, setPerson] = useState({
        fullName: 'smith morgan',
        bio: 'A software developer with a passion for learning new technologies.',
        imgSrc: './pic1.jpg',
        profession: 'Software Developer'
    });
    const [shows, setShows] = useState(false);
    const [timeSinceMount, setTimeSinceMount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeSinceMount(prevTime => prevTime + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <button onClick={() => setShows(!shows)}>
                {shows ? 'Hide Profile' : 'Show Profile'}
            </button>

            {shows && (
                <div>
                    <h2>{person.fullName}</h2>
                    <p>{person.bio}</p>
                    <img src={pic1} alt={person.fullName} style={{height:"300px", width:"300px"}}/>
                    <h3>{person.profession}</h3>
                </div>
            )}

            <p>Time since component mounted: {timeSinceMount} seconds</p>
        </div>
    );
};

export default PersonProfile;

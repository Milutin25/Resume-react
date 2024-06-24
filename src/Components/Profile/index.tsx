import './profile.styles.css'

export const Profile = () =>{
    return (
            <div className="top">               
                <div className="column-one">
                    <h1>Hi, I am Milutin,<br/> Creative technologist</h1>
                    <p className="top-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <button id="btn">Download resume</button>  
                </div>    
                <div className="column-two"> <img className="profile-photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAScv0wQ-rM_SKxCwuNFpanhPDOxUcWeSxU4v6lP2c6bmk7JG4wV2Nht0rWpdEbxcXSI&usqp=CAU" alt="profile photo"/>   
                </div>
            </div> 
            )
};


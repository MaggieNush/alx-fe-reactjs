const UserProfile = (props) => {
    return (
        <div style={{border:'2px solid gray', padding:'10px', margin:'10px'}}>
            <h2 style={{color:'skyblue', fontStyle:'italic', fontSize:'40px'}}>{props.name}</h2>
            <p>Age: <span style={{fontWeight:'bold'}}> {props.age}</span></p>
            <p>Bio: <span style={{fontStyle:'italic', fontWeight:'bold'}}> {props.bio}</span></p>
        </div>
    );
};

export default UserProfile;
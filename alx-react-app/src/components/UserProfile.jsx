const UserProfile = (props) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", maxWidth: "300px", margin: "20px auto", borderRadius: "10px", backgroundColor: "#fff" }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;

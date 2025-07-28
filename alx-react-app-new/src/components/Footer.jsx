const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '20px', margin: '20px auto', width: '300px', borderRadius: '10px', backgroundColor: '#fff' }}>
      <h2 style={{ color: 'blue', fontSize: '22px', marginBottom: '10px' }}>{props.name}</h2>
      <p style={{ fontSize: '16px' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p style={{ fontSize: '16px', fontStyle: 'italic' }}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;

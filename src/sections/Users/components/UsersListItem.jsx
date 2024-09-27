// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below
  
  // This is the main component being exported from this file
  export default function UsersListItem({
    // Feel free to change this props names to what suits you best
    // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
    usersListItem: { name, color, email, picture }
  }) {
    return (
        <li style={color}>
            <img
                src={picture}
                alt={name}
            />
            <h3>{name}</h3>
            <p>{email}</p>
      </li>
    );
}
import UsersListItem from "./UsersListItem";

export default function UsersList({
    // Feel free to change this props names to what suits you best
    // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
    usersListItem: { name, color, email, picture }
  }) {
    return (
        <section>
        <h2>Users Section</h2>
        <div className="scroll-container">
            <ul className="users-list">

                {UsersListItem.map((userListItem, index) => (
                    <UsersListItem
                    usersListItem={userListItem}
                    key={index}
                />
                ))}
            
            </ul>
        </div>
        </section>
    );
  }
export default function ArtListItem({
    // Feel free to change this props names to what suits you best
    // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
    artListItem: { artistName, title, publication, picture }
  }) {
    return (
        <li>
            <div className="frame">
                <img
                    src={picture}
                />
            </div>
            <h3>{title}</h3>
            <p>Artist: {artistName}</p>
            <h4>Publication History:</h4>
            <ul>
                <li>Catalogue de la 3e exposition de peinture, exh. cat. (E. Capiomont et V. Renault, 1877), p. 3, cat. 1.</li>
                <li>Léon Mancino, “La descente de la courtille,” L’art 9 (Apr. 1877), p. 70.</li>
                <li>Anonymous [possibly Gaston Vassy], “La journée à Paris: L’exposition des impressionnalistes,” L’événement, Apr. 6, 1877, p. 2.</li>
                {publication.map((userListItem, index) => (
                    <UsersListItem
                    usersListItem={userListItem}
                    key={index}
                />
                ))}
            </ul>
      </li>
    );
}
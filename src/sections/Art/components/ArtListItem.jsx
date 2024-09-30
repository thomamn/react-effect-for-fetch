import PublicationHistoryList from "./PublicationHistoryList";

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
            <div>{PublicationHistoryList} publication:{publication}</div>
            
      </li>
    );
}
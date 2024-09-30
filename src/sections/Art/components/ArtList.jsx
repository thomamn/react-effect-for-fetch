import ArtListItem from "./ArtListItem";

export default function ArtList({
    // Feel free to change this props names to what suits you best
    // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
    artList
  }) {
    return (
        <li>
            
            {artList.map((ArtListItem, index) => (
                    <ArtListItem
                    ArtListItem={ArtListItem}
                    key={index}
                />
            ))}
                
            
      </li>
    );
}
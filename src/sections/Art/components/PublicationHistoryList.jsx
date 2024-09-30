export default function PublicationHistoryList({publication}){
    return(

        <ul>
            {publication.map((entry, index) => (
                <li key={index}>{entry}</li>
            ))}
        </ul>
    )
}

import ClientsRow from "./ClientsRow"

function ClientsTable({client, onEdit, onDelete}){
    return(    
        <table>
            <thead>
                <tr>                  
                    <th>NAMES</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                    <th>ADDRESS</th>
                    <th>BIRTHDATE</th>
                    <th>IDENTIFICATION</th>  
                    <th>ACTIONS</th>               
                </tr>
            </thead>
            <tbody>
                {client.map((client) => (
                    <ClientsRow key={client.clientId} client={client} onEdit={onEdit} onDelete={onDelete}/>
                ))}
            </tbody>
        </table>
    )
}
export default ClientsTable
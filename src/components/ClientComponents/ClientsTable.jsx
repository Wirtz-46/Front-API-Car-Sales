import ClientsRow from "./ClientsRow"

function ClientsTable({clients, onEdit, onDelete}){
    return(    
        <table>
            <thead>
                <tr>
                    <th>clients</th>
                    <th>names</th>
                    <th>emails</th>
                    <th>phones</th>
                    <th>address</th>
                    <th>birtdates</th>
                    <th>identification</th>                 
                </tr>
            </thead>
            <tbody>
                {clients.map((client) => (
                    <ClientsRow key={client.clientId} client={client} onEdit={onEdit} onDelete={onDelete}/>
                ))}
            </tbody>
        </table>
    )
}
export default ClientsTable
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import ClientsTable from './components/ClientComponents/ClientsTable'
import ClientsForm from './components/ClientComponents/ClientsForm'

function App() {
  const [client, setClients] = useState([])
  const [editingClient, setEditingClient] = useState(null) +

  //Actualiza la lista de clientes por cada cliente nuevo
  useEffect(() => {
    fetchClients()
  }, [])

  //Recorre la lista de clientes y retornarlos como respuesta
  const fetchClients = async() =>{
    try {
      const response = await axios.get('http://localhost:8080/clients')
      setClients(response.data)
    } catch (error) {
      console.log('Error al cargar los clientes: ', error)
    }
  }

 //Crear o actualiar un cliente
  const handleCreateOrUpdateClient = async(clientData) =>{
    if (editingClient) {
      await axios.put(`http://localhost:8080/clients/${editingUser.clientId}`, clientData)
    } else {
      await axios.post(`http://localhost:8080/clients/`, clientData)
    }
    fetchClients()
    setEditingClient(null)
  }

  //permite editar un cliente
  const handleEditClient = (client) =>{
    setEditingClient(client)
  }
 
  //permite borrar un cliente
  const handleDeleteClient = async(clientId)=>{
    await axios.delete(`http://localhost:8080/clients/${clientId}`)
    fetchClients()
 
  }

  return (
    <div className='App'>
      <h1>API Venta de Carros</h1>
      <br/>
      <h2>List Clients</h2>
      <ClientsTable client={client} onEdit={handleEditClient} onDelete={handleDeleteClient}/>
      <h2>{editingClient ? 'Editar cliente' : 'Crear nuevo cliente'}</h2>
      <ClientsForm onSubmit={handleCreateOrUpdateClient} initialClient={editingClient}/>
    </div>
  )
}

export default App
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import ClientsTable from './components/ClientComponents/ClientsTable';
import ClientsForm from './components/ClientComponents/ClientsForm';
import CarsTable from './components/CarComponents/CarsTable';
import CarsForm from './components/CarComponents/CarsForm';
import SaleDetails from './components/SaleComponents/SaleDetails';
import SalesList from './components/SaleComponents/SaleList';
import AddSale from './components/SaleComponents/AddSale';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
    const [clients, setClients] = useState([]);
    const [editingClient, setEditingClient] = useState(null);

    const [cars, setCars] = useState([]);
    const [editingCar, setEditingCar] = useState(null);

    // Actualiza la lista de clientes por cada cliente nuevo
    useEffect(() => {
        fetchClients();
    }, []);

    // Actualiza la lista de carros por cada carro nuevo
    useEffect(() => {
        fetchCars();
    }, []);

    // Recorre la lista de clientes y retornarlos como respuesta
    const fetchClients = async () => {
        try {
            const response = await axios.get('http://localhost:8080/apicarsales/clients');
            setClients(response.data);
        } catch (error) {
            console.log('Error al cargar los clientes: ', error);
        }
    };

    // Recorre la lista de carros y retornarlos como respuesta
    const fetchCars = async () => {
        try {
            const response = await axios.get('http://localhost:8080/apicarsales/cars');
            setCars(response.data);
        } catch (error) {
            console.log('Error al cargar los carros: ', error);
        }
    };

    // Crear o actualizar un cliente
    const handleCreateOrUpdateClient = async (clientData) => {
        try {
            if (editingClient) {
                await axios.put(`http://localhost:8080/apicarsales/clients/${editingClient.clientId}`, clientData);
            } else {
                await axios.post('http://localhost:8080/apicarsales/clients', clientData);
            }
            fetchClients();
            setEditingClient(null);
        } catch (error) {
            console.error('Error al crear o actualizar el cliente: ', error);
        }
    };

    // Crear o actualizar un carro
    const handleCreateOrUpdateCar = async (carData) => {
        try {
            if (editingCar) {
                await axios.put(`http://localhost:8080/apicarsales/cars/${editingCar.id}`, carData);
            } else {
                await axios.post('http://localhost:8080/apicarsales/cars', carData);
            }
            fetchCars();
            setEditingCar(null);
        } catch (error) {
            console.error('Error al crear o actualizar el coche: ', error);
        }
    };

    // Permite editar un cliente
    const handleEditClient = (client) => {
        setEditingClient(client);
    };

    // Permite editar un carro
    const handleEditCar = (car) => {
        setEditingCar(car);
    };

    // Permite borrar un cliente
    const handleDeleteClient = async (clientId) => {
        try {
            await axios.delete(`http://localhost:8080/apicarsales/clients/${clientId}`);
            fetchClients();
        } catch (error) {
            console.error('Error al eliminar el cliente: ', error);
        }
    };

    // Permite borrar un carro
    const handleDeleteCar = async (carId) => {
        try {
            await axios.delete(`http://localhost:8080/apicarsales/cars/${carId}`);
            fetchCars();
        } catch (error) {
            console.error('Error al eliminar el carro: ', error);
        }
    };

    return (
        <div className='App'>
            <h1>API Car Sales</h1>
            <br />
            <h2>List Clients</h2>
            <ClientsTable client={clients} onEdit={handleEditClient} onDelete={handleDeleteClient} />
            <h2>{editingClient ? 'Edit Client' : 'Create New Client'}</h2>
            <ClientsForm onSubmit={handleCreateOrUpdateClient} initialClient={editingClient} />
            <br />
            <h2>List Cars</h2>
            <CarsTable cars={cars} onEdit={handleEditCar} onDelete={handleDeleteCar} />
            <h2>{editingCar ? 'Edit Car' : 'Create New Car'}</h2>
            <CarsForm onSubmit={handleCreateOrUpdateCar} initialCar={editingCar} />
            <br/>
          <Router>
              <Routes>
                  <Route exact path="/apigrocerystore/sales" element={<SalesList />} />
                  <Route path="/" element={<AddSale />} />
                  <Route path="/apigrocerystore/sales/:id" element={<SaleDetails />} />
              </Routes>
          </Router>
        </div>
    );

}

export default App;
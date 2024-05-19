import api from "../../api.jsx";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddSale = () => {
    const [clientId, setClientId] = useState('');
    const [carIds, setCarIds] = useState('');
    const [total, setTotal] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const carIdsArray = carIds.split(',').map(id => parseInt(id.trim()));
            await api.post('/sales', {
                clientId: parseInt(clientId),
                carIds: carIdsArray,
                total: parseFloat(total),
            });
            navigate('/');
        } catch (error) {
            console.error('Error adding sale:', error);
        }
    };

    return (
        <div>
            <h1>Add Sale</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>CLIENT ID:</label>
                    <input
                        type="number"
                        value={clientId}
                        onChange={(e) => setClientId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>SERIAL NUMBER CAR:</label>
                    <input
                        type="text"
                        value={carIds}
                        onChange={(e) => setCarIds(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>TOTAL:</label>
                    <input
                        type="number"
                        step="0.01"
                        value={total}
                        onChange={(e) => setTotal(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Sale</button>
            </form>
        </div>
    );
};

export default AddSale;
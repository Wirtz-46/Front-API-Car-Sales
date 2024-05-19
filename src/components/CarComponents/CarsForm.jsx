import { useState, useEffect } from 'react';

function CarsForm({ onSubmit, initialCar }) {
    const [brand, setBrand] = useState(initialCar ? initialCar.brand : '');
    const [mileage, setMileage] = useState(initialCar ? initialCar.mileage : '');
    const [model, setModel] = useState(initialCar ? initialCar.model : '');
    const [serialNumber, setSerialNumber] = useState(initialCar ? initialCar.serialNumber : '');
    const [state, setState] = useState(initialCar ? initialCar.state : '');
    const [transmission, setTransmission] = useState(initialCar ? initialCar.transmission : '');

    useEffect(() => {
        if (initialCar) {
            setBrand(initialCar.brand);
            setMileage(initialCar.mileage);
            setModel(initialCar.model);
            setSerialNumber(initialCar.serialNumber);
            setState(initialCar.state);
            setTransmission(initialCar.transmission);
        }
    }, [initialCar]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const carData = { brand, mileage, model, serialNumber, state, transmission };
        onSubmit(carData);
        setBrand('');
        setMileage('');
        setModel('');
        setSerialNumber('');
        setState('');
        setTransmission('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Brand' value={brand} onChange={(e) => setBrand(e.target.value)} required />
            <input type='number' placeholder='Mileage' value={mileage} onChange={(e) => setMileage(e.target.value)} required />
            <input type='text' placeholder='Model' value={model} onChange={(e) => setModel(e.target.value)} required />
            <input type='text' placeholder='Serial Number' value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} required />
            <input type='text' placeholder='State' value={state} onChange={(e) => setState(e.target.value)} required />
            <input type='text' placeholder='Transmission' value={transmission} onChange={(e) => setTransmission(e.target.value)} required />
            <button type='submit'>Save</button>
        </form>
    );
}
/*return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Names" value={names} onChange={handleNamesChange} required />
            <input type="email" placeholder="Email" value={email} onChange={handleEmailsChange} required />
            <input type="text" placeholder="Phone" value={phone} onChange={handlePhonesChange} required />
            <input type="text" placeholder="Address" value={address} onChange={handleAddressesChange} required />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordsChange} required />
            <input type="text" placeholder="Document" value={id_card} onChange={handleIdCardChange} required />
            <button type="submit">Save</button>
        </form>
    )

}
*/ 

export default CarsForm;
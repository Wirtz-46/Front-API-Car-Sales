import { useState } from 'react';

function ClientsForm({ onSubmit, initialClient }) {
    const [names, setNames] = useState(initialClient ? initialClient.names : '');
    const [email, setEmail] = useState(initialClient ? initialClient.email : '');
    const [phone, setPhone] = useState(initialClient ? initialClient.phone : '');
    const [address, setAddress] = useState(initialClient ? initialClient.address : '');
    const [birthdate, setBirthdate] = useState(initialClient ? initialClient.birthdate : '');
    const [identification, setIdentification] = useState(initialClient ? initialClient.identification : '');

    const handleNamesIsChange = (event) => {
        setNames(event.target.value);
    };

    const handleEmailIsChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneIsChange = (event) => {
        setPhone(event.target.value);
    };

    const handleAddressIsChange = (event) => {
        setAddress(event.target.value);
    };

    const handleBirthdateIsChange = (event) => {
        setBirthdate(event.target.value);
    };

    const handleIdentificationIsChange = (event) => {
        setIdentification(event.target.value);
    };

    // función para enviar el formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        const clientData = { names, email, phone, address, birthdate, identification };
        onSubmit(clientData);
        setNames('');
        setEmail('');
        setPhone('');
        setAddress('');
        setBirthdate('');
        setIdentification('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Names' value={names} onChange={handleNamesIsChange} required />
            <input type='text' placeholder='Email' value={email} onChange={handleEmailIsChange} required />
            <input type='text' placeholder='Phone' value={phone} onChange={handlePhoneIsChange} required />
            <input type='text' placeholder='Address' value={address} onChange={handleAddressIsChange} required />
            <input type='text' placeholder='Birthdate' value={birthdate} onChange={handleBirthdateIsChange} required />
            <input type='text' placeholder='Identification' value={identification} onChange={handleIdentificationIsChange} required />
            <button type='submit'>Save</button>
        </form>
    );
}

export default ClientsForm;
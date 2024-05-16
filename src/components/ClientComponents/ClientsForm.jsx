import { useState } from 'react'

function ClientsForm({onSubmit}){

    const [names, setNames] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [identification, setIdentification] = useState('')

    const handleNamesIsChange = () => {
        setNames(event.target.value)
    }

    const handleEmailIsChange = () => {
        setEmail(event.target.value)
    }

    const handlePhoneIsChange = () => {
        setPhone(event.target.value)
    }

    const handleAddressIsChange = () => {
        setAddress(event.target.value)
    }

    const handleBirthdateIsChange = () => {
        setBirthdate(event.target.value)
    }

    const handleIdentificationIsChange = () => {
        setIdentification(event.target.value)
    }

    //funcion para enviar el formulario
    const handleSubmit = (event) => {
        event.preventDefault()
        onsubmit(names, email, phone, address, birthdate, identification)
        setNames('')
        setEmail('')
        setPhone('')
        setAddress('')
        setBirthdate('')
        setIdentification('')
    }

    return(
        <form onSubmit ={handleSubmit}>
            <input type='text' placeholder='Names' value={names} onChange={handleNamesIsChange} required/>

            <input type='text' placeholder='Email' value={email} onChange={handleEmailIsChange} required/>

            <input type='text' placeholder='Phone' value={phone} onChange={handlePhoneIsChange} required/>

            <input type='text' placeholder='Address' value={address} onChange={handleAddressIsChange} required/>

            <input type='text' placeholder='Birthdate' value={birthdate} onChange={handleBirthdateIsChange} required/>

            <input type='text' placeholder='Identification' value={identification} onChange={handleIdentificationIsChange} required/>

            <button type='submit'>Save</button>
        </form>
    )
        
}
export default ClientsForm
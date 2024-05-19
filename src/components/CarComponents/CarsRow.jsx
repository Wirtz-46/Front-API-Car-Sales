import React from 'react';

function CarsRow({ car, onEdit, onDelete }) {
    return (
        <tr>
            <td>{car.brand}</td>
            <td>{car.mileage}</td>
            <td>{car.model}</td>
            <td>{car.serialNumber}</td>
            <td>{car.state}</td>
            <td>{car.transmission}</td>
            <td>
                <button onClick={() => onEdit(car)}>Edit🖋️</button>
                <button onClick={() => onDelete(car.id)}>Delete🚮</button>
            </td>
        </tr>
    );
}

export default CarsRow;
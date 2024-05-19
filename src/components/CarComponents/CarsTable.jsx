import CarsRow from './CarsRow';

function CarsTable({ cars, onEdit, onDelete }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>BRAND</th>
                    <th>MILEAGE</th>
                    <th>MODEL</th>
                    <th>SERIAL NUMBER</th>
                    <th>STATE</th>
                    <th>TRANSMISSION</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                {cars.map(car => (
                    <CarsRow key={car.id} car={car} onEdit={onEdit} onDelete={onDelete} />
                ))}
            </tbody>
        </table>
    );
}

export default CarsTable;
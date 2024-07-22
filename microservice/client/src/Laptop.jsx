import { useState, useEffect } from 'react';
import axios from 'axios';

function Laptop() {
    const server = 'https://localhost:8888/laptops';

    const [laptops, setLaptops] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(server);
                setLaptops(response.data);
            } catch (error) {
                setError(error.message);
            } 
        };

        fetchData();
    }, [server]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container">
                <table className="table table-danger mt-5">
                    <thead>
                    <tr>
                        <th colSpan="3" className="h4 text-primary">LAPTOP LIST</th>
                        </tr>
                        <tr>
                            <th>Laptop Id</th>
                            <th>Laptop Name</th>
                            <th>Laptop Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {laptops.map((laptop) => (
                            <tr key={laptop.id}>
                                <td>{laptop.id}</td>
                                <td>{laptop.name}</td>
                                <td>${laptop.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    );
}

export default Laptop;

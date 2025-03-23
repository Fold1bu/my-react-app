import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetcher = () => {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:8080/contacts'); // Замените на ваш API
                setMessage(res.data);
                setLoading(false);
            } catch (err) {
                setError('Ошибка загрузки данных');
                setLoading(false);
                console.error(err);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>{message}</h1> {/* Здесь отображается сообщение */}
        </div>
    );
};

export default DataFetcher;
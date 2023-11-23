import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import axios from "axios";

const Home = () => {
    const [name, setName] = useState('');
    const [order_id, setOrder_id] = useState('');
    const [total, setTotal] = useState(0);

    const process = async () => {
        const data = {
            nama: name,
            order_id: order_id,
            total: parseFloat(total)
        };
        console.log(data);
        const config = {
            headers: {
                "Content-Type" : "application/json"
            }
        }

        const response = await axios.post("http://localhost:1000/api/payment/process-transaction", data, config)

        console.log(response)
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '50vw', padding: 4 }}>
            <TextField type='text' label='Nama' value={name} onChange={(e) => setName(e.target.value)} sx={{ mb: 2 }} />
            <TextField type='text' label='Order ID' value={order_id} onChange={(e) => setOrder_id(e.target.value)} sx={{ mb: 2 }} />
            <TextField type='number' label='Total' value={total} onChange={(e) => setTotal(e.target.value)} sx={{ mb: 2 }} />

            <Box>
                <Button onClick={process} variant='outlined'>
                    Proses Bayar
                </Button>
            </Box>
        </Box>
    );
};

export default Home;




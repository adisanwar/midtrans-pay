import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('');
    const [order_id, setOrder_id] = useState('');
    const [total, setTotal] = useState(0);

    const proses = async () => {
        const data = {
            nama: name,
            order_id: order_id,
            total: total
        };
        console.log(data);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '50vw', padding: 4 }}>
            <TextField type='text' label='Nama' value={name} onChange={(e) => setName(e.target.value)} sx={{ mb: 2 }} />
            <TextField type='text' label='Order ID' value={order_id} onChange={(e) => setOrder_id(e.target.value)} sx={{ mb: 2 }} />
            <TextField type='number' label='Total' value={total} onChange={(e) => setTotal(e.target.value)} sx={{ mb: 2 }} />

            <Box>
                <Button onClick={proses} variant='outlined'>
                    Proses Bayar
                </Button>
            </Box>
        </Box>
    );
};

export default Home;



const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}/`);
});

app.get('/farmacias/vitacura', async (req, res) => {
    const url = 'https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('No hubo respuesta ' + response.statusText);
        }
        const data = await response.json();
        const farmaciasVitacura = data.filter(farmacia => farmacia.comuna_nombre === 'VITACURA');
        res.json(farmaciasVitacura);
    } catch (error) {
        console.error('error:', error);
        res.status(500).send('error');
    }
});
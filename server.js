const app = require('./app');
const db = require('./db');

const port = process.env.PORT || '80';

app.listen(port, () => {
    console.log(`recolector está corriendo en el puerto ${port}`);
});
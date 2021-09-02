import express from 'express';
import cors from 'cors';
const PORT = 7777;
const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.json(
        {
            name: 'response',
            hello: 'world'
        }
    );
});
app.listen(PORT, () => {
    console.log('Server is running...');    
});
import express, { Request, Response } from 'express';
import { routes } from './routes';

const app = express();
app.use(express.json());
const port = 4000;

app.use(routes)

app.get('/', (req: Request, res: Response) => {
    return res.json({
        ping: "pong"
    })
})



app.listen(port, () => console.log(`App rodando na porta ${port}`))
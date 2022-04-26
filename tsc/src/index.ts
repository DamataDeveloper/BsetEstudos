import express, {Request, Response} from "express";
import path from 'path';
import mustache from 'mustache-express'
import router from "./routes";

const app = express();

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '../public')))
app.use(router);
app.use((req: Request, res: Response) => res.status(404).send('pagina nao encontrada'));

app.listen(3000, ()=>console.log(`http://localhost:${3000}`));
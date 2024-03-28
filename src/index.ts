import "./database/config/dababase";
import Comment from './database/models/comments';
import express, { Express, Request, Response } from "express";

const app: Express = express();
const PORT: number = 3000;
app.use(express.json());

app.post('/api/comment', async (req: Request, res: Response) => {
    try {
        const data = await Comment.create(req.body);
        return res.status(200).json({ status: 200, message: 'Success.', data })
    }
    catch(error) {
        return res.status(500).json({ status: 500, error: JSON.stringify(error) })
    }
})


app.listen(PORT, () => console.log(`Server listening at ${PORT}`));
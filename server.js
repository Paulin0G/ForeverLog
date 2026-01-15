import express from 'express';
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    try {
        return res.status(200).json({ message: "Welcome to the homepage" });
    } catch (error) {
        return res.status(500).json({ message: "Error rendering dashboard" });
        //Good to log this
    }
});

app.listen(port, () => {
    console.log('Listening on port 3000');
})
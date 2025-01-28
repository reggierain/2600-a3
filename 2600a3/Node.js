import express from "express";
import data from "./our-modules/data.js";
import renderAlbumPage from "./our-modules/renderAlbumPage.js";

const app = express();
const server = app.listen(3000, ()=>{
    console.log("Server is ready.");
});

app.get(['/:type'], (req, res)=>{
    res.redirect(`/pages/${req.params.type}`);
});

app.get('/pages/:type', (req, res)=>{
    res.sendFile(`./public/${req.params.type}`, {root: import.meta.dirname});
});

app.get('/api/music/:type', (req, res)=>{
    const result = data.find(({id})=> id === req.params.type);
    res.json(result);
});

app.get('/music-pages/:bandId/:albumId', (req, res)=>{
    const content = renderAlbumPage(req.params.bandId, req.params.albumId);
    res.send(content);
});

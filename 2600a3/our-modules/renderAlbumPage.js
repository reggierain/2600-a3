import data from "./data.js";

let renderAlbumPage = (bandId, albumId) => {
    const band = data.find(({id})=> id === bandId);
    const album = band.topAlbums.find(({id})=> id === albumId);

    const html = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${album.name}</title>
                <link rel="stylesheet" href="/pages/style.css">
            </head>
            <body>
                <h1>${album.name}</h1>
                <p>Artist: ${band.name}</p>
                <p>Released in: ${album.year}</p>
            </body>
        </html>
    `;

    return html;
};

export default renderAlbumPage;
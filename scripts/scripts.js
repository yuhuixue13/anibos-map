/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
/* const map = new Map('map', {
    center: [51.505, -0.09],
    zoom: 13
}); */
const map = new L.Map('map').setView([42.3554, -71.0693], 14);

    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const animeZakkaMarker = L.marker([42.348481056288655, -71.08723468256417]).addTo(map);
    animeZakkaMarker.bindPopup(`
        <b>Anime Zakka</b><br> 
        Newbury St · Anime Goods Shop 
        `);
    const newburyComicsMarker = L.marker([42.34815674945346, -71.08706425497522]).addTo(map);
    newburyComicsMarker.bindPopup(`
        <b>Newbury Comics</b><br> 
        Newbury St · Anime & Comics Shop 
        `);
    const animneGoodsMarker = L.marker([42.348333642986674, -71.08624670671078]).addTo(map);
    animneGoodsMarker.bindPopup(`
        <b>Animn Goods</b><br> 
        Newbury St · Anime Merch Shop 
        `);
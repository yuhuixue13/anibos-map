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

    const animeZakkaMarkerN = L.marker([42.348481056288655, -71.08723468256417]).addTo(map);
    animeZakkaMarkerN.bindPopup(`
        <b>Anime Zakka</b><br> 
        Newbury St · Anime Goods Shop 
        `);
    const newburyComicsMarkerN = L.marker([42.34815674945346, -71.08706425497522]).addTo(map);
    newburyComicsMarkerN.bindPopup(`
        <b>Newbury Comics</b><br> 
        Newbury St · Anime & Comics Shop 
        `);
    const animneGoodsMarker = L.marker([42.348333642986674, -71.08624670671078]).addTo(map);
    animneGoodsMarker.bindPopup(`
        <b>Animn Goods</b><br> 
        Newbury St · Anime Merch Shop 
        `);
    const animeZakkaMarkerC = L.marker([42.3727966424579, -71.11990083309102]).addTo(map);
    animeZakkaMarkerC.bindPopup(`
        <b>Anime Zakka</b><br> 
        Cambridge · Anime Goods Shop 
        `);
    const moreFunMarker = L.marker([42.354136118468006, -71.06214824130628]).addTo(map);
    moreFunMarker.bindPopup(`
        <b>More Fun</b><br> 
        Chinatown · Anime Goods Shop 
        `);
    const tokyoAnimeCenterMarker = L.marker([42.57850969818254, -71.2411256135517]).addTo(map);
    tokyoAnimeCenterMarker.bindPopup(`
        <b>Tokyo Anime Center</b><br> 
        Burlington · Anime Goods Shop 
        `);
    const newburyComicsMarkerF = L.marker([42.361866647110936, -71.054910154064]).addTo(map);
    newburyComicsMarkerF.bindPopup(`
        <b>Newbury Comics</b><br> 
        Quincy Market · Anime & Comics Shop 
        `);
    const newburyComicsMarkerJ = L.marker([42.37926856510349, -71.12223461683303]).addTo(map);
    newburyComicsMarkerJ.bindPopup(`
        <b>Newbury Comics</b><br> 
        Cambridge · Anime & Comics Shop 
        `);
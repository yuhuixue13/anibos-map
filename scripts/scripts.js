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

        const locations [
            {
                name: "Anime Zakka",
                coords: [42.348481056288655, -71.08723468256417],
                desc: " Newbury St · Anime Goods Shop ",
                categories : ["Anime"]
            }
            
            {
                name: "Newbury Comics",
                coords: [42.34815674945346, -71.08706425497522],
                desc: " Newbury St ·Anime & Comics Shop ",
                categories : ["Anime", "Comic"]
            }
            
            {
                name: "Animn Goods",
                coords: [42.348333642986674, -71.08624670671078],
                desc: " Newbury St ·Anime Merch Shop ",
                categories : ["Anime"]
            }
            
            {
                name: "Anime Zakka",
                coords: [42.3727966424579, -71.11990083309102],
                desc: " Cambridge · Anime Goods Shop ",
                categories : ["Anime"]
            }

            {
                name: "More Fun",
                coords: [42.354136118468006, -71.06214824130628],
                desc: " Chinatown · Anime Goods Shop ",
                categories : ["Anime"]
            }

            {
                name: "Tokyo Anime Center",
                coords: [42.57850969818254, -71.2411256135517],
                desc: " Burlington · Anime Goods Shop ",
                categories : ["Anime"]
            }

            {
                name: "Newbury Comics",
                coords: [42.361866647110936, -71.054910154064],
                desc: " Quincy Market · Anime & Comics Shop ",
                categories : ["Anime", "Comic"]
            }

            {
                name: "Newbury Comics",
                coords: [42.37926856510349, -71.12223461683303],
                desc: "  Cambridge · Anime & Comics Shop ",
                categories : ["Anime", "Comic"]
            } 
            
//Comics

            {
                name: "Comicopia",
                coords: [42.348826848375175, -71.09313301833218],
                desc: "  Commonealth · Comics Book Shop ",
                categories : ["Comic"]
            }
            
            {
                name: "Friar Tuck's Comics & Collectibles",
                coords: [42.34316520057848, -71.12330793182595],
                desc: "  Brookline · Comics Book Shop ",
                categories : ["Comic"]
            }

            {
                name: "The Million Year Picnic",
                coords: [42.37308262085624, -71.12050707415347],
                desc: "  Cambridge · Comics Book Shop ",
                categories : ["Comic"]
            }
           
            {
                name: "Comicazi",
                coords: [42.39630721978794, -71.1212386913431],
                desc: "  Somerville · Comics Book Shop ",
                categories : ["Comic"]
            }

            {
                name: "Hub Comics",
                coords: [42.38131869789423, -71.09714246065965],
                desc: "  Somerville · Comics Book Shop ",
                categories : ["Comic"]
            }

            {
                name: "Amaya Bros Comics",
                coords: [42.37164967738756, -71.08201273182456],
                desc: "  Cambridge · Comics Book Shop ",
                categories : ["Comic"]
            }

            {
                name: "Magic Dragon Comics",
                coords: [42.41401408624637, -71.14534374901326],
                desc: "  Arlington · Comics Book Shop ",
                categories : ["Comic"]
            }

            {
                name: "New England Comics（NEC）",
                coords: [42.25174042018753, -71.00060561742801],
                desc: "  Quincy · Comics Book Shop ",
                categories : ["Comic"]
            }

            {
                name: "Newbury Comics",
                coords: [42.34815674945346, -71.08706425497522],
                desc: " Newbury St ·Anime & Comics Shop ",
                categories : ["Anime", "Comic"]
            }

            {
                name: "Newbury Comics",
                coords: [42.361866647110936, -71.054910154064],
                desc: " Quincy Market · Anime & Comics Shop ",
                categories : ["Anime", "Comic"]
            }

            {
                name: "Newbury Comics",
                coords: [42.37926856510349, -71.12223461683303],
                desc: "  Cambridge · Anime & Comics Shop ",
                categories : ["Anime", "Comic"]
            }

            // Exihibitions

            




            
        
        










        ]

        
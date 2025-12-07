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

        const locations = [

        //Anime
            {
                name:"Anime Zakka",
                coords: [42.348481056288655, -71.08723468256417],
                desc: " Newbury St · Anime Goods Shop ",
                categories : ["Anime"]
            },
            
            {
                name: "Newbury Comics",
                coords: [42.34815674945346, -71.08706425497522],
                desc: " Newbury St ·Anime & Comics Shop ",
                categories : ["Anime", "Comic"]
            },
            
            {
                name: "Anime Goods",
                coords: [42.348333642986674, -71.08624670671078],
                desc: " Newbury St ·Anime Merch Shop ",
                categories : ["Anime"]
            },
            
            {
                name: "Anime Zakka",
                coords: [42.3727966424579, -71.11990083309102],
                desc: " Cambridge · Anime Goods Shop ",
                categories : ["Anime"]
            },

            {
                name: "More Fun",
                coords: [42.354136118468006, -71.06214824130628],
                desc: " Chinatown · Anime Goods Shop ",
                categories : ["Anime"]
            },

            {
                name: "Tokyo Anime Center",
                coords: [42.57850969818254, -71.2411256135517],
                desc: " Burlington · Anime Goods Shop ",
                categories : ["Anime"]
            },

            {
                name: "Newbury Comics",
                coords: [42.361866647110936, -71.054910154064],
                desc: " Quincy Market · Anime & Comics Shop ",
                categories : ["Anime", "Comic"]
            },

            {
                name: "Newbury Comics",
                coords: [42.37926856510349, -71.12223461683303],
                desc: "  Cambridge · Anime & Comics Shop ",
                categories : ["Anime", "Comic"]
            },
            
//Comics

            {
                name: "Comicopia",
                coords: [42.348826848375175, -71.09313301833218],
                desc: "  Commonealth · Comics Book Shop ",
                categories : ["Comic"]
            },
            
            {
                name: "Friar Tuck's Comics & Collectibles",
                coords: [42.34316520057848, -71.12330793182595],
                desc: "  Brookline · Comics Book Shop ",
                categories : ["Comic"]
            },

            {
                name: "The Million Year Picnic",
                coords: [42.37308262085624, -71.12050707415347],
                desc: "  Cambridge · Comics Book Shop ",
                categories : ["Comic"]
            },
           
            {
                name: "Comicazi",
                coords: [42.39630721978794, -71.1212386913431],
                desc: "  Somerville · Comics Book Shop ",
                categories : ["Comic"]
            },

            {
                name: "Hub Comics",
                coords: [42.38131869789423, -71.09714246065965],
                desc: "  Somerville · Comics Book Shop ",
                categories : ["Comic"]
            },

            {
                name: "Amaya Bros Comics",
                coords: [42.37164967738756, -71.08201273182456],
                desc: "  Cambridge · Comics Book Shop ",
                categories : ["Comic"]
            },

            {
                name: "Magic Dragon Comics",
                coords: [42.41401408624637, -71.14534374901326],
                desc: "  Arlington · Comics Book Shop ",
                categories : ["Comic"]
            },

            {
                name: "New England Comics（NEC）",
                coords: [42.25174042018753, -71.00060561742801],
                desc: "  Quincy · Comics Book Shop ",
                categories : ["Comic"]
            },

            {
                name: "Newbury Comics",
                coords: [42.34815674945346, -71.08706425497522],
                desc: " Newbury St ·Anime & Comics Shop ",
                categories : ["Anime", "Comic"]
            },

            {
                name: "Newbury Comics",
                coords: [42.361866647110936, -71.054910154064],
                desc: " Quincy Market · Anime & Comics Shop ",
                categories : ["Anime", "Comic"]
            },

            {
                name: "Newbury Comics",
                coords: [42.37926856510349, -71.12223461683303],
                desc: "  Cambridge · Anime & Comics Shop ",
                categories : ["Anime", "Comic"]
            },

            // Exhibitions

             {
                name: "Anime Boston 2025",
                coords: [42.34814992053629, -71.08362594319644],
                time: "May 23 – 25, 2025",
                categories : ["Exhibition"]
            },

            {
                name: "FAN EXPO Boston 2025",
                coords: [42.34514502753188, -71.04717684531916],
                time: "Aug 8 – 10, 2025",
                categories : ["Exhibition"]
            },

            {
                name: "PopCult Anime Con 2025",
                coords: [42.395417598113546, -71.25973041648146],
                time: "Aug 22 – 24, 2025",
                categories : ["Exhibition"]
            },

            {
                name: "Japan Festival Boston 2025",
                coords: [42.35524031126495, -71.06565050114126],
                time: "Apr 26 – 27, 2025",
                categories : ["Exhibition"]
            },

            {
                name: "Wicked Comic Con 2025",
                coords: [42.34625289939097, -71.04301209316242],
                time: "Oct 5, 2025",
                categories : ["Exhibition"]
            },

            {
                name: "MICE",
                coords: [42.35035393918839, -71.11168636066118],
                time: "Dec 6 - 7, 2025",
                categories : ["Exhibition"]
            },

            //Pop-up

            {
                name: "Genshin pop-up",
                coords: [42.350007385698675, -71.08097174716764],
                time: "Dec28-Jan5",
                categories : ["Pop-Up"]
            },

            {
                name: "Love and Deepspace Campus Tour",
                coords: [42.35223322388987, -71.1177169441439],
                time: "Oct 2-3",
                categories : ["Pop-Up"]
            },

            {
                name: "Filipino Anime Inspired Boston Pop-up",
                coords: [42.350714493108455, -71.05997668949655],
                time: "Mar 07-09",
                categories : ["Pop-Up"]
            },

            {
                name: "Ultra Man Pop Up",
                coords: [42.34660912723419, -71.10736816066121],
                time: "Nov 01-30",
                categories : ["Pop-Up"]
            },
        ];

        markerStore = [];
        locations .forEach ( loc => {
            const m = L.marker (loc.coords)
            .addTo (map)
            .bindPopup (`<b>${loc.name}</b> <br> ${loc.desc ?? ""} <br> <i>${loc.time ?? ""}</i>`);
            markerStore. push({
                marker: m,
                categories: loc.categories});
        });

        function showCategory(category) {
            markerStore .forEach (item => {
                if (item.categories.includes(category)) {
                    item.marker.addTo(map);
                }
                else {
                    map.removeLayer(item.marker);
                }
            });
        };

        const filterButtons = document.querySelectorAll('.filter-buttons button');
        filterButtons.forEach(btn =>{
            btn.addEventListener ('click', () =>{
               const category = btn.dataset.category;
               showCategory(category);});
        });

    















            
        
        










       

        
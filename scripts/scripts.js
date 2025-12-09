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
                desc: " 349 Newbury St · Anime Goods Shop ",
                img: "images/anime_zakka.png",
                url: "https://www.animezakka.com/",
                descL: "This destination for anime enthusiasts stocks toys & threads, plus quirky Japanese novelty items.",
                categories : ["Anime"]
            },
            
            {
                name: "Newbury Comics",
                coords: [42.34815674945346, -71.08706425497522],
                desc: " 348 Newbury St ·Anime & Comics Shop ",
                img: "images/newburycomicsN.webp",
                url: "https://www.newburycomics.com/",
                descL: "Source for music, movies, comics & other pop culture goods, with an emphasis on independent artists.",
                categories : ["Anime", "Comic"]
            },
            
            {
                name: "Anime Goods",
                coords: [42.348333642986674, -71.08624670671078],
                desc: " 330 Newbury St ·Anime Merch Shop ",
                img: "images/Anime_Goods.jpg",
                url: "https://www.instagram.com/nbanimegoods/",
                descL: "Store selling anime-inspired toys and collectibles such as labubus alongside blind boxes.",
                categories : ["Anime"]
            },
            
            {
                name: "Anime Zakka",
                coords: [42.3727966424579, -71.11990083309102],
                desc: " 36 John F. Kennedy St · Anime Goods Shop ",
                img: "images/AnimeZakkaH.webp",
                url: "https://www.animezakka.com/",
                descL: "This destination for anime enthusiasts stocks toys & threads, plus quirky Japanese novelty items.", 
                categories : ["Anime"]
            },

            {
                name: "More Fun",
                coords: [42.354136118468006, -71.06214824130628],
                desc: " 31 Harrison Ave · Anime Goods Shop ",
                img: "images/morefun.jpg",
                url: "https://www.morefunus.com/",
                descL: "Retail store selling stationery, tableware, tech accessories, toys, Chinese traditional culture goods, and gifts in Boston Chinatown.", 
                categories : ["Anime"]
            },

            {
                name: "Tokyo Anime Center",
                coords: [42.57850969818254, -71.2411256135517],
                desc: " 75 Middlesex Turnpike Suite 2039A · Anime Goods Shop ",
                img: "images/TokyoAnimeCenter.png",
                url: "https://www.instagram.com/tac_burlingtonmall_ma/",
                descL: "Official account of Tokyo Anime Center Burlington Mall.", 
                categories : ["Anime"]
            },

            {
                name: "Newbury Comics",
                coords: [42.361866647110936, -71.054910154064],
                desc: " Faneuil Hall Marketplace, 1 N Market St · Anime & Comics Shop ",
                img: "images/newburycomicsQ.webp",
                url: "https://www.newburycomics.com/",
                descL: "Source for music, movies, comics & other pop culture goods, with an emphasis on independent artists.",
                categories : ["Anime", "Comic"]
            },

            {
                name: "Newbury Comics",
                coords: [42.37926856510349, -71.12223461683303],
                desc: " 36 John F. Kennedy St · Anime & Comics Shop ",
                img: "images/newburycomicsH.jpg",
                url: "https://www.newburycomics.com/",
                descL: "Source for music, movies, comics & other pop culture goods, with an emphasis on independent artists.",
                categories : ["Anime", "Comic"]
            },
            
//Comics

            {
                name: "Comicopia",
                coords: [42.348826848375175, -71.09313301833218],
                desc: " 464 Commonwealth Ave · Comics Book Shop ",
                img: "images/Comicopia.jpg",
                url: "https://comicopia.com/",
                descL: "Niche bookshop for new comics, graphic novels, paperbacks & translated Japanese manga..",
                categories : ["Comic"]
            },
            
            {
                name: "Friar Tuck's Comics & Collectibles",
                coords: [42.34316520057848, -71.12330793182595],
                desc: " 310 Harvard St 2nd floor · Comics Book Shop ",
                img: "images/friartucks.webp",
                url: "https://friartuckscomics.com/",
                descL: "Comic book shop featuring classic and independent comics, along with collectibles and role-playing games.x",
                categories : ["Comic"]
            },

            {
                name: "The Million Year Picnic",
                coords: [42.37308262085624, -71.12050707415347],
                desc: " 99 Mt Auburn St · Comics Book Shop ",
                img: "images/Themillionyearpicnic.webp",
                url: "https://www.themillionyearpicnic.com/",
                descL: "Long-running comics shop specializing in independent & alternative comic books & graphic novels.",
                categories : ["Comic"]
            },
           
            {
                name: "Comicazi",
                coords: [42.39630721978794, -71.1212386913431],
                desc: "  407 Highland Ave · Comics Book Shop ",
                img: "images/Comicazi.png",
                url: "https://www.comicazi.com/",
                descL: "This snug comic shop also offers items such as graphic novels, games & toys, plus events.",
                categories : ["Comic"]
            },

            {
                name: "Hub Comics",
                coords: [42.38131869789423, -71.09714246065965],
                desc: " 19 Bow St · Comics Book Shop ",
                img: "images/Hubcomics.webp",
                url: "https://hubcomics.com/",
                descL: "Snug indie comics shop with a wide selection of graphic novels, plus signings & movie nights.",
                categories : ["Comic"]
            },

            {
                name: "Amaya Bros Comics",
                coords: [42.37164967738756, -71.08201273182456],
                desc: "357 Cambridge St · Comics Book Shop ",
                img: "images/Amayabroscomics.webp",
                url: "https://amayabroscomics.com/",
                descL: "The Amaya Bros. Comics store hopes to bring both comics, sports memorabillia, and trading card supplies to the Cambridge and Greater Boston area.",
                categories : ["Comic"]
            },

            {
                name: "Magic Dragon Comics",
                coords: [42.41401408624637, -71.14534374901326],
                desc: " 91 Warren St · Comics Book Shop ",
                img: "images/Magicdragoncomics.webp",
                url: "https://www.facebook.com/magicdragoncomics",
                descL: "Quaint collectibles store stocking comic books & graphic novels for all ages in a no-frills setting.",
                categories : ["Comic"]
            },

            {
                name: "New England Comics (NEC)",
                coords: [42.25174042018753, -71.00060561742801],
                desc: " 1511 Hancock St · Comics Book Shop ",
                img: "images/NEC.jpg",
                url: "https://newenglandcomics.biz/",
                descL: "Outpost of a local chain featuring a variety of comics & graphic novels, plus toys & action figures.",
                categories : ["Comic"]
            },

          

            // Exhibitions

             {
                name: "Anime Boston 2025",
                coords: [42.34814992053629, -71.08362594319644],
                time: "May 23 - 25, 2025",
                img: "images/animeboston2025.jpg",
                url: "https://www.animeboston.com/",
                descL: "Anime Boston is an annual three-day anime fan convention held in the spring in Boston, Massachusetts, United States. The convention features several events which include a masquerade, an anime music video contest, video programming rooms, an artists' alley and art show, karaoke, game shows, swap meets, Anime Unscripted, video games, RPGs, and a LARP.",
                categories : ["Exhibition"]
            },

            {
                name: "FAN EXPO Boston 2025",
                coords: [42.34514502753188, -71.04717684531916],
                time: "Aug 8 - 10, 2025",
                img: "images/FXB25.webp",
                url: "https://fanexpohq.com/fanexpoboston/",
                descL: "SFan Expo Boston, formerly Boston Comic Con, is a multigenre convention held annually in Boston, Massachusetts. Primarily focused on comic books, the convention later featured media guests from film and television, cosplayers, an art auction, a tabletop/CCG/RPG gaming room, and an annual costume contest.",
                categories : ["Exhibition"]
            },

            {
                name: "PopCult Anime Con 2025",
                coords: [42.395417598113546, -71.25973041648146],
                time: "Aug 22 - 24, 2025",
                img: "images/popcultanimeconfeature.jpeg",
                url: "https://popcultanimecon.com/",
                descL: "PopCult Anime Con is a two-day multi-genre pop-culture and cosplay convention in the Bay State of Massachusetts. PopCult Anime Con is a community-first and disability-friendly event annually showcasing local artists, performers, cosplayers, musicians and educators from around New England.",
                categories : ["Exhibition"]
            },

            {
                name: "Japan Festival Boston 2025",
                coords: [42.35524031126495, -71.06565050114126],
                time: "Apr 26 - 27, 2025",
                img: "images/JFB.webp",
                url: "https://www.japanfestivalboston.org/",
                descL: "The Japan Festival Boston gives us a chance to share our culture with the Greater Boston area, and we have been expanding this festival each year. The festival is completely organized by volunteers and is supported by many sponsors and contributors from the community.",
                categories : ["Exhibition"]
            },

            {
                name: "Wicked Comic Con 2025",
                coords: [42.34625289939097, -71.04301209316242],
                time: "Oct 05, 2025",
                img: "images/wickedcc.png",
                url: "https://www.wickedcomiccon.com/",
                descL: "Come to Wicked Comic Con for an action-packed day at the Westin Boston Seaport District featuring professional all-star DC and Marvel comic book creators, and collectible sellers featuring comic books, toys, cards, games, posters, apparel, and much more!",
                categories : ["Exhibition"]
            },

            {
                name: "MICE",
                coords: [42.35035393918839, -71.11168636066118],
                time: "Dec 06 - 07, 2025",
                img: "images/MICE.jpg",
                url: "https://www.micexpo.org/",
                descL: "The Massachusetts Independent Comics Expo (MICE) is the New England area’s premiere event dedicated to the exciting and accessible art form of independent comics and graphic novels. Located at Boston University's School of Visual Arts, admission is free and open to the public.",
                categories : ["Exhibition"]
            },

            //Pop-up

            {
                name: "Genshin pop-up",
                coords: [42.350007385698675, -71.08097174716764],
                time: "Dec 28 - Jan 05, 2024 - 2025",
                img: "images/ginshen.jpeg",
                url: "https://x.com/GenshinImpact/status/1869925691161989135?lang=en",
                descL: "Hi Traveler! Our last merch pop-up store of 2024 in the US will be hosted in Boston from December 28 to January 5. We will bring unique merchandise and exciting on-site activities. Join other Travelers and enjoy this fun-filled time together!",
                categories : ["Pop-Up"]
            },

            {
                name: "Love and Deepspace Campus Tour",
                coords: [42.35223322388987, -71.1177169441439],
                time: "Oct 02 - 03, 2025",
                img: "images/LADSBU.jpg",
                url: "https://www.instagram.com/p/DO71RNsjHhf/?hl=en",
                descL: "The Love and Deepspace Campus Tour is coming to Boston University! Our themed bus will enter the campus and kick off a campus tour!",
                categories : ["Pop-Up"]
            },

            {
                name: "Filipino Anime Inspired Boston Pop-up",
                coords: [42.350714493108455, -71.05997668949655],
                time: "Jan 21 - Feb 02, 2025",
                img: "images/Fpop.jpg",
                url: "https://www.instagram.com/reel/DFZKleAu-S5/",
                descL: "Filipino Anime Inspired comes to Boston, from January 21th to February 2nd, Open everyday from 12PM to 8PM, Dropping new Designs and More!",
                categories : ["Pop-Up"]
            },

            {
                name: "Ultra Man Pop Up",
                coords: [42.34660912723419, -71.10736816066121],
                time: "Nov 01 - 30, 2025",
                img: "images/ultraman.jpg",
                url: "https://www.kyuramen.com/post/ultraman-kyuramen-is-here-limited-time-heroic-feast",
                descL: "Get ready, heroes! KYURAMEN is teaming up with Ultraman to celebrate 60 years of legendary adventures and the launch of the new series in the U.S. Themed meal are only available at selected locations (All NY, NJ, PA & MA Locations).",
                categories : ["Pop-Up"]
            },
        ];

        const locationList = document.querySelector('.location-list');

        const detailImg = document.getElementById('detail-img');
        const detailName = document.getElementById('detail-name');
        const detailLocation = document.getElementById('detail-location');
        const detailDescL = document.getElementById('detail-descL');
        const detailLink = document.getElementById('detail-link');


       const markerStore = [];
        locations .forEach ( loc => {
            const m = L.marker (loc.coords)
            .addTo (map)
            .bindPopup (`<b>${loc.name}</b> <br> ${loc.desc ?? ""} <br> <i>${loc.time ?? ""}</i>`);
            m.on('click', () => {
            renderDetail(loc)});

            markerStore. push({
                marker: m,
                categories: loc.categories,
                data: loc });  //?
        });
            renderLocationList(locations);   //  show all the store when come in
            renderDetail(locations[0]); 


        const filterButtons = document.querySelectorAll('.filter-buttons button');
        filterButtons.forEach(btn =>{
            btn.addEventListener ('click', () =>{
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const category = btn.dataset.category;
                showCategory(category);});
        });


        function renderDetail(loc) {
            detailImg.src = loc.img;
            detailImg.alt = `Photo of ${loc.name}`;  
            detailName.textContent = loc.name;
            detailLocation.textContent = loc.desc;  
            detailDescL.textContent = loc.descL;     
            
            if (detailLink) {
                detailLink.href = loc.url;  
            }
        };

        function renderLocationList(list) {
            locationList.innerHTML = '';    //这啥啊

            list.forEach(loc => {
            const card = document.createElement('div');   //为什么要创建div
            card.classList.add('loc-card');   //这两步是干啥的？
            card.dataset.name = loc.name;

            const img = document.createElement('img');  
            img.classList.add('loc-img');
            img.src = loc.img;
            img.alt = `Photo of ${loc.name}`;

            const footer = document.createElement('div');
            footer.classList.add('loc-footer');

            const nameP = document.createElement('p');
            nameP.classList.add('loc-name');
            nameP.textContent = loc.name;

            const addrP = document.createElement('p');
            addrP.classList.add('loc-address');
            addrP.textContent = loc.desc;   

            footer.appendChild(nameP);
            footer.appendChild(addrP);
            card.appendChild(img);
            card.appendChild(footer);

            card.addEventListener('click', () => {
                renderDetail(loc);
                const record = markerStore.find(item => item.data === loc);
                if (record) {
                    map.setView(record.marker.getLatLng(), 16); //
                    record.marker.openPopup();
                }
                });

                locationList.appendChild(card); //?
            });
            };

        function showCategory(category) {
        markerStore.forEach(item => {
            if (item.categories.includes(category)) {
            item.marker.addTo(map);
            } else {
            map.removeLayer(item.marker);
            }
        });

        const filtered = locations.filter(loc =>
            loc.categories.includes(category)
        );
        renderLocationList(filtered);

        if (filtered.length > 0) {
            renderDetail(filtered[0]);
        } else {
            detailName.textContent = 'No place found';
            detailLocation.textContent = '';
            detailDesc.textContent = '';
            detailImg.src = 'images/aboutbackground.png';
            if (detailLink) detailLink.href = '#';
        }
        };




        

        
    















            
        
        










       

        
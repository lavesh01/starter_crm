export const destinations1 = [
  { id: 1, city: "Turkey", properties: "12,683" },
  { id: 2, city: "Russia", properties: "10,345" },
  { id: 3, city: "Tashkent", properties: "11,334" },
  { id: 4, city: "Armenia", properties: "8,234" },
  { id: 5, city: "Georgia", properties: "4,724" },
  { id: 6, city: "Azerbaijan", properties: "6,459" },
  { id: 7, city: "Almaty", properties: "9,323" },
  { id: 8, city: "Bishkek", properties: "4,239" },
  { id: 9, city: "Baku", properties: "12,233" },
];

export const destinations2 = [
  {
    id: 1,
    hoverText: "1400 Hotels - 22 Tours - 95 Activities",
    city: "Turkey",
    img: "/img/destinations/turkey/turkey-bg.jpg",
    href: "destination/turkey",
  },
  {
    id: 6,
    hoverText: "1300 Hotels - 20 Tours - 90 Activities",
    city: "Azerbaijan",
    img: "/img/destinations/azerbaijan/azerbaijan-bg.jpg",
    href: "destination/azerbaijan",
  },
  {
    id: 7,
    hoverText: "1200 Hotels - 18 Tours - 95 Activities",
    city: "Kazakhstan",
    img: "/img/destinations/kazakhstan/kazakhstan-bg.jpg",
    href: "destination/kazakhstan",
  },
  {
    id: 3,
    hoverText: "1250 Hotels - 21 Tours - 90 Activities",
    city: "Uzbekistan",
    img: "/img/destinations/uzbekistan/uzbekistan-bg.jpg",
    href: "destination/uzbekistan",
  },
  {
    id: 2,
    hoverText: "1100 Hotels - 18 Tours - 85 Activities",
    city: "Russia",
    img: "/img/destinations/russia/russia-bg.jpg",
    href: "destination/russia",
  },
  {
    id: 4,
    hoverText: "1200 Hotels - 20 Tours - 85 Activities",
    city: "Armenia",
    img: "/img/destinations/armenia/armenia-bg.jpg",
    href: "destination/armenia",
  },
  {
    id: 5,
    hoverText: "1100 Hotels - 19 Tours - 80 Activities",
    city: "Georgia",
    img: "/img/destinations/georgia/georgia-bg.jpg",
    href: "destination/georgia",
  },
  {
    id: 8,
    hoverText: "950 Hotels - 17 Tours - 70 Activities",
    city: "Bishkek",
    img: "/img/destinations/bishkek/bishkek-bg.jpg",
    href: "destination/bishkek",
  },
];


export const destinations = [
  {
    id: 1,
    hoverText: "11 Hotel - 18 Tours - 85 Activity",
    param: "turkey",
    country: "Turkey",
    slideImg: [
      "/img/destinations/turkey/1.jpg",
      "/img/destinations/turkey/2.jpg",
      "/img/destinations/turkey/3.jpg",
      "/img/destinations/turkey/4.jpg",
      "/img/destinations/turkey/5.jpg",
    ],
    img: "/img/destinations/turkey/turkey-bg.jpg",
    description: "Begin your odyssey in Turkey, a land where the East meets the West, and ancient history intertwines with modern allure. Explore Istanbul's iconic Hagia Sophia and Blue Mosque, stand in awe of the otherworldly landscapes in Cappadocia, and unwind on the pristine beaches of Antalya. Don't miss the historic ruins of Ephesus or the natural wonders of Pamukkale. Delight your taste buds with exquisite Turkish cuisine and lose yourself in the vibrant tapestry of Turkish culture.",
    timeZone: "GMT +03:00",
    timeBehind: "1 hour ahead",
    currency: "Turkish Lira",
    exchange: "1 INR = 0.011TRY",
    bestTimeToVisit: "JUN",
    city: [ 
      { img: "/img/destinations/city/istanbul/istanbul-bg.jpg" , cityName: "Istanbul", routePath: "/destination/istanbul" },
      { img: "/img/destinations/city/cappadocia/cappadocia-bg.jpg" , cityName: "Cappadocia", routePath: "/destination/cappadocia" },
      { img: "/img/destinations/city/antalya/antalya-bg.jpg" , cityName: "Antayla", routePath: "/destination/antalya" },
    ],
  },
  {
    id: 2,
    hoverText: "13 Hotel - 10 Tours - 70 Activity",
    param: "russia",
    country: "Russia",
    slideImg: [
      "/img/destinations/russia/1.jpg",
      "/img/destinations/russia/2.jpg",
      "/img/destinations/russia/3.jpg",
      "/img/destinations/russia/4.jpg",
      "/img/destinations/russia/5.jpg",
    ],
    img: "/img/destinations/russia/russia-bg.jpg",
    description: "The world's largest nation, Russia, is a frontier ripe for exploration. Immerse yourself in the cultural diversity of St. Petersburg's Hermitage Museum and the imperial splendour of Moscow's Red Square. Get a view of Russia's enormous landscapes, from the Ural Mountains to Siberia's freezing tundra, by travelling on the storied Trans-Siberian Railway. Enjoy the kind welcome of the locals while dining on borscht and blini, two classic meals.",
    timeZone: "GMT +03:00",
    timeBehind: "1 hour ahead",
    currency: "Russian Ruble",
    exchange: "1 INR = 0.98RUB",
    bestTimeToVisit: "JUL",
  },
  {
    id: 3,
    hoverText: "8 Hotel - 5 Tours - 90 Activity",
    param: "uzbekistan",
    country: "Uzbekistan",
    slideImg: [
      "/img/destinations/uzbekistan/1.jpg",
      "/img/destinations/uzbekistan/2.jpg",
      "/img/destinations/uzbekistan/3.jpg",
      "/img/destinations/uzbekistan/4.jpg",
      "/img/destinations/uzbekistan/5.jpg",
    ],
    img: "/img/destinations/uzbekistan/uzbekistan-bg.jpg",
    description: "Uzbekistan is the heart of Central Asia. Wander through the brilliant hub of colours and flavours that is the city's lively Chorsu Bazaar. Discover the beautiful Registan Square, a masterpiece of Islamic architecture, in the historic city of Samarkand. Explore the ancient streets of Bukhara, where the stories of the Silk Road come to life. The people of Uzbekistan extend a kind welcome and provide a window into the country's rich cultural history.",
    timeZone: "GMT +05:00",
    timeBehind: "3 hours ahead",
    currency: "Uzbekistani Som",
    exchange: "1 INR = 49.44UZS",
    bestTimeToVisit: "MAY",
    city: [ 
      { img: "/img/destinations/city/tashkent/tashkent-bg.jpg" , cityName: "Tashkent", routePath: "/destination/tashkent" },
      { img: "/img/destinations/city/samarkand/samarkand-bg.jpg" , cityName: "Samarkand", routePath: "/destination/samarkand" },
      { img: "/img/destinations/city/bukhara/bukhara-bg.jpg" , cityName: "Bukhara", routePath: "/destination/bukhara" },
      { img: "/img/destinations/city/khiva/khiva-bg.jpg" , cityName: "Khiva", routePath: "/destination/khiva" },
    ],
    
  },
  {
    id: 4,
    hoverText: "10 Hotel - 17 Tours - 56 Activity",
    param: "armenia",
    country: "Armenia",
    slideImg: [
      "/img/destinations/armenia/1.jpg",
      "/img/destinations/armenia/2.jpg",
      "/img/destinations/armenia/3.jpg",
      "/img/destinations/armenia/4.jpg",
      "/img/destinations/armenia/5.jpg",
    ],
    img: "/img/destinations/armenia/armenia-bg.jpg",
    description: "Enter Armenia, a nation with a rich historical and cultural heritage. Discover the centuries-old monasteries like Tatev and Geghard that are located against the breathtaking Caucasus Mountains. Explore Lake Sevan's beautiful surroundings while indulging in authentic Armenian cuisine. The nation's capital, Yerevan, is vibrant and offers a fusion of modern culture and old history.",
    timeZone: "GMT +04:00",
    timeBehind: "2.5 hours ahead",
    currency: "Armenian Dram",
    exchange: "1 INR = 1.55AMD",
    bestTimeToVisit: "APR",
  },
  {
    id: 5,
    hoverText: "9 Hotel - 21 Tours - 73 Activity",
    param: "georgia",
    country: "Georgia",
    slideImg: [
      "/img/destinations/georgia/1.jpg",
      "/img/destinations/georgia/2.jpg",
      "/img/destinations/georgia/3.jpg",
      "/img/destinations/georgia/4.jpg",
      "/img/destinations/georgia/5.jpg",
    ],
    img: "/img/destinations/georgia/georgia-bg.jpg",
    description: "Georgia, a hidden gem at the nexus of Eastern Europe and Western Asia, offers visitors an experience they won't soon forget. Explore the quaint ancient town of Tbilisi, relax in the therapeutic sulphur springs, and savour Georgian wine, which is among the oldest in the world. Wander through the picturesque Kakheti wine region and explore the historic cave city of Uplistsikhe. Georgia combines a variety of scenery with friendly friendliness.",
    timeZone: "GMT +04:00",
    timeBehind: "2.5 hours ahead",
    currency: "Georgian Lari",
    exchange: "1 INR = 0.030GEL",
    bestTimeToVisit: "SEP",
  },
  {
    id: 6,
    hoverText: "14 Hotel - 18 Tours - 84 Activity",
    param: "azerbaijan",
    country: "Azerbaijan",
    slideImg: [
      "/img/destinations/azerbaijan/1.jpg",
      "/img/destinations/azerbaijan/2.jpg",
      "/img/destinations/azerbaijan/3.jpg",
      "/img/destinations/azerbaijan/4.jpg",
      "/img/destinations/azerbaijan/5.jpg",
    ],
    img: "/img/destinations/azerbaijan/azerbaijan-bg.jpg",
    description: "You are invited to see the bustling cities and historic towns of Azerbaijan, where the ancient and the modern coexist. The capital, Baku, is home to a historic Old City and cutting-edge construction. Explore the Gobustan Petroglyphs, the Ateshgah Ancient Ruins, and the Caucasus Mountains' breathtaking scenery. Taste the delicious blend of flavours that is Azerbaijani food and take in the vivid cultural tapestry of the country.",
    timeZone: "GMT +04:00",
    timeBehind: "2.5 hours ahead",
    currency: "Azerbaijani Manat",
    exchange: "1 INR = 0.035AZN",
    bestTimeToVisit: "MAY",
    city: [ 
      { img: "/img/destinations/city/baku/baku-bg.jpg" , cityName: "Baku", routePath: "/destination/baku" }
    ],
  },
  {
    id: 7,
    hoverText: "10 Hotel - 14 Tours - 92 Activity",
    param: "kazakhstan",
    country: "Kazakhstan",
    slideImg: [
      "/img/destinations/kazakhstan/1.jpg",
      "/img/destinations/kazakhstan/2.jpg",
      "/img/destinations/kazakhstan/3.jpg",
      "/img/destinations/kazakhstan/4.jpg",
      "/img/destinations/kazakhstan/5.jpg",
    ],
    img: "/img/destinations/kazakhstan/kazakhstan-bg.jpg",
    description: "Accept the clash of modernity and tradition in Almaty, the heart of Kazakhstan. Almaty serves as a gateway to Kazakhstan's natural beauties, which are framed by the magnificent Tien Shan Mountains. Take in some winter sports in Shymbulak, see the lovely Big Almaty Lake, and wander around the city's lush parks. Almaty combines tranquilly and adventure.",
    timeZone: "GMT +06:00",
    timeBehind: "4 hours ahead",
    currency: "Kazakhstani Tenge",
    exchange: "1 INR = 5.34KZT",
    bestTimeToVisit: "JUN",
    city: [ 
      { img: "/img/destinations/city/almaty/almaty-bg.jpg" , cityName: "Almaty", routePath: "/destination/almaty" }
    ],
  },
  {
    id: 8,
    hoverText: "8 Hotel - 11 Tours - 44 Activity",
    param: "bishkek",
    country: "Bishkek, Kyrgyzstan",
    slideImg: [
      "/img/destinations/bishkek/1.jpg",
      "/img/destinations/bishkek/2.jpg",
      "/img/destinations/bishkek/3.jpg",
      "/img/destinations/bishkek/4.jpg",
      "/img/destinations/bishkek/5.jpg",
    ],
    img: "/img/destinations//bishkek/bishkek-bg.jpg",
    description: "The capital of Kyrgyzstan, Bishkek, is a laid-back yet energetic place to end your adventure. Admire the Ala-Too Square and the State Historical Museum's nomadic culture. Immerse yourself in the tranquilly of Lake Issyk-Kul and the breathtaking scenery of Ala Archa National Park. Your Central Asian tour will come to a beautiful close in Kyrgyzstan with its gorgeous landscape and welcoming people.",
    timeZone: "GMT +06:00",
    timeBehind: "4 hours ahead",
    currency: "Kyrgyzstani Som",
    exchange: "1 INR = 0.88KGS",
    bestTimeToVisit: "AUG",
  },
  {
    "id": 9,
    "hoverText": "16 Hotel - 20 Tours - 75 Activity",
    "param": "istanbul",
    "country": "Istanbul, Turkey",
    slideImg: [
      "/img/destinations/city/istanbul/1.jpg",
      "/img/destinations/city/istanbul/2.jpg",
      "/img/destinations/city/istanbul/3.jpg",
      "/img/destinations/city/istanbul/4.jpg",
      "/img/destinations/city/istanbul/5.jpg",
    ],
    "img": "/img/destinations/city/istanbul/istanbul-bg.jpg",
    "description": "Discover the enigmatic blend of East and West in Istanbul, where ancient history meets vibrant modernity. The city is a living mosaic of culture, adorned with awe-inspiring mosques, palaces, and bazaars. Uncover the secrets of the iconic Hagia Sophia, where centuries of history echo within its walls. Take a boat ride along the Bosphorus to witness the skyline adorned with minarets and domes, showcasing the city's diverse architectural tapestry. Taste the tantalizing flavors of Turkish cuisine and immerse yourself in the lively ambiance of the Grand Bazaar. Istanbul invites you to stroll through its enchanting neighborhoods, making every step a journey through time.",
    "timeZone": "GMT +03:00",
    "timeBehind": "2 hours ahead",
    "currency": "Turkish Lira",
    "exchange": "1 INR = 0.082 TRY",
    "bestTimeToVisit": "APR-OCT"
},
  {
    "id": 10,
    "hoverText": "10 Hotel - 15 Tours - 50 Activity",
    "param": "cappadocia",
    "country": "Cappadocia, Turkey",
    slideImg: [
      "/img/destinations/city/cappadocia/1.jpg",
      "/img/destinations/city/cappadocia/2.jpg",
      "/img/destinations/city/cappadocia/3.jpg",
      "/img/destinations/city/cappadocia/4.jpg",
      "/img/destinations/city/cappadocia/5.jpg",
    ],
    "img": "/img/destinations/city/cappadocia/cappadocia-bg.jpg",
    "description": "Embark on a surreal journey to Cappadocia, a land of whimsical fairy chimneys and captivating hot air balloon-filled skies. The unique topography is a testament to nature's artistry, offering a dreamlike landscape to wander through. Delve into the underground cities and ancient cave churches that tell stories of civilizations past. Rise with the sun to witness the majestic hot air balloons painting the sky, an experience etched in memory forever. Cappadocia beckons adventurers and dreamers to explore its otherworldly scenery and create a tale of their own in this magical land.",
    "timeZone": "GMT +03:00",
    "timeBehind": "2 hours ahead",
    "currency": "Turkish Lira",
    "exchange": "1 INR = 0.082 TRY",
    "bestTimeToVisit": "APR-OCT"
  },
  {
    "id": 11,
    "hoverText": "22 Hotel - 18 Tours - 60 Activity",
    "param": "antalya",
    "country": "Antalya, Turkey",
    slideImg: [
      "/img/destinations/city/antalya/1.jpg",
      "/img/destinations/city/antalya/2.jpg",
      "/img/destinations/city/antalya/3.jpg",
      "/img/destinations/city/antalya/4.jpg",
      "/img/destinations/city/antalya/5.jpg",
    ],
    "img": "/img/destinations/city/antalya/antalya-bg.jpg",
    "description": "Antalya, a coastal gem nestled along the turquoise shores of the Mediterranean, invites travelers to embrace the sun, sea, and history. The city boasts pristine beaches and breathtaking cliffs, making it a haven for sun-seekers and adventure enthusiasts alike. Explore the well-preserved ruins of ancient cities like Perge and Aspendos, where echoes of ancient civilizations whisper their tales. Immerse yourself in the vibrant nightlife, savoring the flavors of Mediterranean cuisine. Antalya is a paradise that invites you to unwind, rejuvenate, and bask in the beauty of nature and antiquity, promising an unforgettable escape.",
    "timeZone": "GMT +03:00",
    "timeBehind": "2 hours ahead",
    "currency": "Turkish Lira",
    "exchange": "1 INR = 0.082 TRY",
    "bestTimeToVisit": "APR-NOV"
  },
  {
    "id": 12,
    "hoverText": "14 Hotel - 17 Tours - 60 Activity",
    "param": "baku",
    "country": "Baku, Azerbaijan",
    slideImg: [
      "/img/destinations/city/baku/1.jpg",
      "/img/destinations/city/baku/2.jpg",
      "/img/destinations/city/baku/3.jpg",
      "/img/destinations/city/baku/4.jpg",
      "/img/destinations/city/baku/5.jpg",
    ],
    "img": "/img/destinations/city/baku/baku-bg.jpg",
    "description": "Nestled on the shores of the Caspian Sea, Baku, the capital of Azerbaijan, beckons with a unique blend of the old and the ultramodern. Walk through the charming cobbled streets of the Old City, Icherisheher, where ancient walls guard centuries of history. The Flame Towers, a trio of dazzling skyscrapers, illuminate the cityscape, symbolizing the juxtaposition of past and future. Indulge in Azerbaijani cuisine, a delightful fusion of flavors, and witness the fiery Ateshgah Fire Temple. Baku invites you to explore its blend of cultures, from the vibrant nightlife to the rich heritage, promising an unforgettable experience.",
    "timeZone": "GMT +04:00",
    "timeBehind": "1 hour ahead",
    "currency": "Azerbaijani Manat",
    "exchange": "1 INR = 0.021 AZN",
    "bestTimeToVisit": "APR-JUN, SEP-OCT"
},
  {
    "id": 19,
    "hoverText": "14 Hotel - 17 Tours - 60 Activity",
    "param": "almaty",
    "country": "Almaty, Kazakhstan",
    slideImg: [
      "/img/destinations/city/almaty/1.jpg",
      "/img/destinations/city/almaty/2.jpg",
      "/img/destinations/city/almaty/3.jpg",
      "/img/destinations/city/almaty/4.jpg",
      "/img/destinations/city/almaty/5.jpg",
    ],
    "img": "/img/destinations/city/almaty/almaty-bg.jpg",
    "description": "Nestled against the backdrop of the majestic Tien Shan Mountains, Almaty, Kazakhstan's largest metropolis, offers a stunning fusion of natural beauty and urban charm. This city boasts lush parks, chic cafes, and a thriving arts scene, making it a perfect destination for both nature enthusiasts and culture seekers. Enjoy outdoor adventures in the nearby mountains, sample mouthwatering Kazakh cuisine, and explore the city's vibrant bazaars. Almaty's welcoming atmosphere and the breathtaking backdrop of snow-capped peaks make it an unforgettable destination in Central Asia, where you can experience the best of both worlds - the tranquility of nature and the vibrancy of a modern city.",
    "timeZone": "GMT +04:00",
    "timeBehind": "1 hour ahead",
    "currency": "Azerbaijani Manat",
    "exchange": "1 INR = 0.021 AZN",
    "bestTimeToVisit": "APR-JUN, SEP-OCT"
},
{
  "id": 18,
  "hoverText": "10 Hotel - 12 Tours - 40 Activity",
  "param": "tashkent",
  "country": "Tashkent, Uzbekistan",
  slideImg: [
    "/img/destinations/city/tashkent/1.jpg",
    "/img/destinations/city/tashkent/2.jpg",
    "/img/destinations/city/tashkent/3.jpg",
    "/img/destinations/city/tashkent/4.jpg",
    "/img/destinations/city/tashkent/5.jpg",
  ],
  "img": "/img/destinations/tashkent/tashkent-bg.jpg",
  "description": "Tashkent, the vibrant capital city of Uzbekistan, is a captivating blend of history, culture, and modernity. This beautiful city offers a unique travel experience with its stunning architecture, lush green parks, and rich heritage. The historic Old Town, with its intricately designed mosques, mausoleums, and bazaars, immerses you in the grandeur of the Silk Road era. Tashkent's dynamic spirit is evident in its bustling markets, where you can savor delectable Uzbek cuisine and shop for traditional crafts. Explore the Tashkent Metro, a true masterpiece of underground art, adorned with elegant mosaics and chandeliers. The city's serene parks and gardens, like Amir Timur Square, provide a peaceful escape. Don't miss the State Museum of History of Uzbekistan, which offers a glimpse into the nation's remarkable past. Tashkent is a city that beautifully marries tradition with progress, making it a must-visit destination for those seeking a taste of Uzbekistan's enchanting culture and heritage.",
  "timeZone": "GMT +05:00",
  "timeBehind": "3 hours ahead",
  "currency": "Uzbekistani Som",
  "exchange": "1 INR = 0.08 UZS",
  "bestTimeToVisit": "APR-JUN, SEP-OCT"
},
{
  "id": 15,
  "hoverText": "10 Hotel - 12 Tours - 40 Activity",
  "param": "samarkand",
  "country": "Samarkand, Uzbekistan",
  slideImg: [
    "/img/destinations/city/samarkand/1.jpg",
    "/img/destinations/city/samarkand/2.jpg",
    "/img/destinations/city/samarkand/3.jpg",
    "/img/destinations/city/samarkand/4.jpg",
    "/img/destinations/city/samarkand/5.jpg",
  ],
  "img": "/img/destinations/samarkand/samarkand-bg.jpg",
  "description": "Step into the fabled Silk Road city of Samarkand, where the pages of history come to life. Marvel at the Registan Square, adorned with intricate tilework that reflects the city's grandeur. Samarkand's skyline is a canvas of majestic minarets and domes, showcasing the grand architecture of the Timurid dynasty. Delve into the city's rich tapestry of culture and artistry, and let the aromatic scents of the bustling bazaars guide your way. Samarkand is an enchanting tale of antiquity and splendor, inviting you to uncover its treasures and immerse yourself in a journey through time.",
  "timeZone": "GMT +05:00",
  "timeBehind": "3 hours ahead",
  "currency": "Uzbekistani Som",
  "exchange": "1 INR = 0.08 UZS",
  "bestTimeToVisit": "APR-JUN, SEP-OCT"
},
{
  "id": 16,
  "hoverText": "8 Hotel - 10 Tours - 30 Activity",
  "param": "bukhara",
  "country": "Bukhara, Uzbekistan",
  slideImg: [
    "/img/destinations/city/bukhara/1.jpg",
    "/img/destinations/city/bukhara/2.jpg",
    "/img/destinations/city/bukhara/3.jpg",
    "/img/destinations/city/bukhara/4.jpg",
    "/img/destinations/city/bukhara/5.jpg",
  ],
  "img": "/img/destinations/bukahara/bukhara-bg.jpg",
  "description": "Journey to the heart of Uzbekistan and discover Bukhara, a city steeped in the sands of time. Renowned as a living museum of Central Asian history, Bukhara unveils a mesmerizing tapestry of ancient mosques, mausoleums, and minarets. The Ark of Bukhara, an ancient fortress, stands as a testament to the city's enduring legacy. Lose yourself in the bustling bazaars where silk and spices tell tales of the Silk Road. The Kalyan Minaret pierces the sky, a symbol of Bukhara's architectural prowess. Bukhara's streets echo with whispers of legendary scholars, poets, and conquerors. From the tranquil Lyabi Hauz square to the ornate Ismail Samani Mausoleum, Bukhara beckons explorers to unravel its enigmatic charm, promising an expedition through centuries of culture and heritage.",
  "timeZone": "GMT +05:00",
  "timeBehind": "3 hours ahead",
  "currency": "Uzbekistani Som",
  "exchange": "1 INR = 0.08 UZS",
  "bestTimeToVisit": "APR-JUN, SEP-OCT"
},
{
  "id": 17,
  "hoverText": "6 Hotel - 8 Tours - 25 Activity",
  "param": "khiva",
  "country": "Khiva, Uzbekistan",
  slideImg: [
    "/img/destinations/city/khiva/1.jpg",
    "/img/destinations/city/khiva/2.jpg",
    "/img/destinations/city/khiva/3.jpg",
    "/img/destinations/city/khiva/4.jpg",
    "/img/destinations/city/khiva/5.jpg",
  ],
  "img": "/img/destinations/khiva/khiva-bg.jpg",
  "description": "Khiva, an open-air museum in the heart of the Uzbek desert, transports you back in time to an ancient oasis. Enclosed within formidable city walls, this UNESCO World Heritage site boasts stunning turquoise minarets and intricate tilework. Stroll through the narrow labyrinthine streets of the old town, each corner revealing tales of conquests and trade. The mesmerizing Ichan Kala invites you to wander through its historical mosques, madrasahs, and mausoleums. Khiva invites you to step into the past, where the whispers of a bygone era echo through its stunning architecture and timeless charm.",
  "timeZone": "GMT +05:00",
  "timeBehind": "3 hours ahead",
  "currency": "Uzbekistani Som",
  "exchange": "1 INR = 0.08 UZS",
  "bestTimeToVisit": "APR-JUN, SEP-OCT"
}

];

export const destinations3 = [
  {
    id: 1,
    img: "/img/destinations/1/1.png",
    title: "United Kingdom",
    travellers: "147,681",
    delayAnimation: "0",
  },
  {
    id: 2,
    img: "/img/destinations/1/2.png",
    title: "Italy",
    travellers: "147,681",
    delayAnimation: "100",
  },
  {
    id: 3,
    img: "/img/destinations/1/3.png",
    title: "France",
    travellers: "147,681",
    delayAnimation: "200",
  },
  {
    id: 4,
    img: "/img/destinations/1/4.png",
    title: "Turkey",
    travellers: "147,681",
    delayAnimation: "300",
  },
  {
    id: 5,
    img: "/img/destinations/1/5.png",
    title: "Spain",
    travellers: "147,681",
    delayAnimation: "400",
  },
  {
    id: 6,
    img: "/img/destinations/1/1.png",
    title: "United Kingdom",
    travellers: "147,681",
    delayAnimation: "500",
  },
  {
    id: 7,
    img: "/img/destinations/1/2.png",
    title: "Italy",
    travellers: "147,681",
    delayAnimation: "600",
  },
  {
    id: 8,
    img: "/img/destinations/1/3.png",
    title: "France",
    travellers: "147,681",
    delayAnimation: "700",
  },
];

export const destinations4 = [
  {
    id: 1,
    img: "/img/destinations/3/1.png",
    location: "London, UK",
    properties: "4,090",
    delayAnimation: "0",
  },
  {
    id: 2,
    img: "/img/destinations/3/2.png",
    location: "Edinburg, UK",
    properties: "4,090",
    delayAnimation: "100",
  },
  {
    id: 3,
    img: "/img/destinations/3/3.png",
    location: "France",
    properties: "4,090",
    delayAnimation: "200",
  },
  {
    id: 4,
    img: "/img/destinations/3/4.png",
    location: "Turkey",
    properties: "4,090",
    delayAnimation: "300",
  },
  {
    id: 5,
    img: "/img/destinations/3/5.png",
    location: "Spain",
    properties: "4,090",
    delayAnimation: "400",
  },
  {
    id: 6,
    img: "/img/destinations/3/1.png",
    location: "United Kingdom",
    properties: "4,090",
    delayAnimation: "500",
  },
  {
    id: 7,
    img: "/img/destinations/3/2.png",
    location: "Italy",
    properties: "4,090",
    delayAnimation: "600",
  },
  {
    id: 8,
    img: "/img/destinations/3/3.png",
    location: "France",
    properties: "4,090",
    delayAnimation: "700",
  },
  {
    id: 9,
    img: "/img/destinations/3/1.png",
    location: "London, UK",
    properties: "4,090",
    delayAnimation: "800",
  },
  {
    id: 10,
    img: "/img/destinations/3/2.png",
    location: "Edinburg, UK",
    properties: "4,090",
    delayAnimation: "900",
  },
];

export const destinations5 = [
  {
    id: 1,
    colClass: "col-xl-3 col-md-4 col-sm-6",
    img: "/img/destinations/2/1.png",
    name: "los angeles",
    numberOfProperties: "1714",
    delayAnimation: "200",
  },
  {
    id: 2,
    colClass: "col-xl-6 col-md-4 col-sm-6",
    img: "/img/destinations/2/2.png",
    name: "london",
    numberOfProperties: "1714",
    delayAnimation: "400",
  },
  {
    id: 3,
    colClass: "col-xl-3 col-md-4 col-sm-6",
    img: "/img/destinations/2/3.png",
    name: "reykjavik",
    numberOfProperties: "1714",
    delayAnimation: "600",
  },
  {
    id: 4,
    colClass: "col-xl-6 col-md-4 col-sm-6",
    img: "/img/destinations/2/4.png",
    name: "paris",
    numberOfProperties: "1714",
    delayAnimation: "200",
  },
  {
    id: 5,
    colClass: "col-xl-3 col-md-4 col-sm-6",
    img: "/img/destinations/2/5.png",
    name: "amsterdam",
    numberOfProperties: "1714",
    delayAnimation: "400",
  },
  {
    id: 6,
    colClass: "col-xl-3 col-md-4 col-sm-6",
    img: "/img/destinations/2/6.png",
    name: "istanbul",
    numberOfProperties: "1714",
    delayAnimation: "600",
  },
];

export const destinations6 = [
  {
    id: 1,
    img: "/img/cities/1/1.png",
    location: "Miami",
    properties: "4,090",
    delayAnim: "0",
  },
  {
    id: 2,
    img: "/img/cities/1/2.png",
    location: "Roma",
    properties: "4,090",
    delayAnim: "100",
  },
  {
    id: 3,
    img: "/img/cities/1/3.png",
    location: "New Delhi",
    properties: "4,090",
    delayAnim: "200",
  },
  {
    id: 4,
    img: "/img/cities/1/4.png",
    location: "London",
    properties: "4,090",
    delayAnim: "300",
  },
  {
    id: 5,
    img: "/img/cities/1/5.png",
    location: "Amsterdam",
    properties: "4,090",
    delayAnim: "400",
  },
  {
    id: 6,
    img: "/img/cities/1/6.png",
    location: "Berlin",
    properties: "4,090",
    delayAnim: "500",
  },
  {
    id: 7,
    img: "/img/cities/1/7.png",
    location: "Paris",
    properties: "4,090",
    delayAnim: "600",
  },
  {
    id: 8,
    img: "/img/cities/1/8.png",
    location: "New Zealand",
    properties: "4,090",
    delayAnim: "700",
  },
];

export const destinations7 = [
  {
    id: 1,
    colClass: "col-xl-6 col-md-4 col-sm-6",
    img: "/img/destinations/4/1.png",
    name: "Paris",
    numberOfProperties: "1714",
    delayAnimation: "100",
  },
  {
    id: 2,
    colClass: "col-xl-6 col-md-4 col-sm-6",
    img: "/img/destinations/4/2.png",
    name: "London",
    numberOfProperties: "1714",
    delayAnimation: "200",
  },
  {
    id: 3,
    colClass: "col-xl-3 col-md-4 col-sm-6",
    img: "/img/destinations/4/3.png",
    name: "Los Angeles",
    numberOfProperties: "1714",
    delayAnimation: "300",
  },
  {
    id: 4,
    colClass: "col-xl-3 col-md-4 col-sm-6",
    img: "/img/destinations/4/4.png",
    name: "Amsterdam",
    numberOfProperties: "1714",
    delayAnimation: "400",
  },
  {
    id: 5,
    colClass: "col-xl-3 col-md-4 col-sm-6",
    img: "/img/destinations/4/5.png",
    name: "Istanbul",
    numberOfProperties: "1714",
    delayAnimation: "500",
  },
  {
    id: 6,
    colClass: "col-xl-3 col-md-4 col-sm-6",
    img: "/img/destinations/4/6.png",
    name: "Raykjavik",
    numberOfProperties: "1714",
    delayAnimation: "600",
  },
];

export const destinations8 = [
  {
    id: 1,
    img: "/img/destinations/5/1.png",
    location: "Paris",
    price: "29.52",
    delayAnimation: "100",
  },
  {
    id: 2,
    img: "/img/destinations/5/2.png",
    location: "London",
    price: "53.52",
    delayAnimation: "200",
  },
  {
    id: 3,
    img: "/img/destinations/5/3.png",
    location: "Los Angeles",
    price: "35.52",
    delayAnimation: "300",
  },
  {
    id: 4,
    img: "/img/destinations/5/4.png",
    location: "Amsterdam",
    price: "29.52",
    delayAnimation: "400",
  },
  {
    id: 5,
    img: "/img/destinations/5/5.png",
    location: "Istanbul",
    price: "27.52",
    delayAnimation: "500",
  },
  {
    id: 6,
    img: "/img/destinations/5/6.png",
    location: "Raykjavik",
    price: "29.52",
    delayAnimation: "600",
  },
];

export const destinations9 = [
  {
    id: 1,
    location: "New York",
    numberOfProperties: "4,090",
    delayAnimation: "0",
  },
  {
    id: 2,
    location: "London",
    numberOfProperties: "4,090",
    delayAnimation: "100",
  },
  {
    id: 3,
    location: "Los Angeles",
    numberOfProperties: "4,090",
    delayAnimation: "200",
  },
  {
    id: 4,
    location: "Paris",
    numberOfProperties: "4,090",
    delayAnimation: "300",
  },
  {
    id: 5,
    location: "Istanbul",
    numberOfProperties: "4,090",
    delayAnimation: "400",
  },
  {
    id: 6,
    location: "Rome",
    numberOfProperties: "4,090",
    delayAnimation: "500",
  },
  {
    id: 7,
    location: "Madrid",
    numberOfProperties: "4,090",
    delayAnimation: "600",
  },
];

export const destinations10 = [
  {
    id: 1,
    img: "/img/destinations/4/1.png",
    location: "paris",
    numberOfProperties: "1714",
    delayAnimation: "200",
  },
  {
    id: 2,
    img: "/img/destinations/4/2.png",
    location: "london",
    numberOfProperties: "1714",
    delayAnimation: "400",
  },
  {
    id: 3,
    img: "/img/destinations/4/3.png",
    location: "reykjavik",
    numberOfProperties: "1714",
    delayAnimation: "600",
  },
  {
    id: 4,
    img: "/img/destinations/4/4.png",
    location: "los angeles",
    numberOfProperties: "1714",
    delayAnimation: "200",
  },
  {
    id: 5,
    img: "/img/destinations/4/5.png",
    location: "amsterdam",
    numberOfProperties: "1714",
    delayAnimation: "400",
  },
  {
    id: 6,
    img: "/img/destinations/4/6.png",
    location: "istanbul",
    numberOfProperties: "1714",
    delayAnimation: "600",
  },
  {
    id: 7,
    img: "/img/destinations/4/1.png",
    location: "paris",
    numberOfProperties: "1714",
    delayAnimation: "200",
  },
  {
    id: 8,
    img: "/img/destinations/4/2.png",
    location: "london",
    numberOfProperties: "1714",
    delayAnimation: "400",
  },
];

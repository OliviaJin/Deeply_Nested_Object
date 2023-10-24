const ancientAsianArt = {
    continent: "Asia",
    introduction: "The huge Asian continent has given birth to numerous types of art that predate anything seen in the West.",
    notableForms: ["pottery",
     "calligraphy", 
     "painting", 
     "sculpture"],
    majorInfluences: ["Buddhism", 
    "Confucianism", 
    "Taoism"],
    artStyles: ["Realism", 
    "Abstract", 
    "Impressionism",
    "Expressionism"],
    materials: ["ink", 
    "paper", 
    "silk", 
    "bronze", 
    "jade",
     "clay"],
    techniques: ["brush painting", 
    "carving",
     "casting", 
     "weaving"],
    preservation: ["museums", 
    "galleries", 
    "private collections", 
    "temples"],
    countries: {
        China: {
            notableArtForms: ["pottery", 
            "bronze sculpture",
             "jade carving", 
             "lacquerware", 
             "calligraphy"],
            dynasties: ["Han Dynasty", 
            "Tang Dynasty",
             "Song Dynasty"],
            famousArtists: ["Zhang Zeduan", 
            "Qi Baishi", 
            "Zhang Daqian"],
            museums: ["The Palace Museum", 
            "Shanghai Museum",
             "Terracotta Army Museum"]
        },
        Japan: {
            notableArtForms: ["ink painting", 
            "calligraphy", 
            "ceramics",
             "ukiyo-e prints"],
            periods: ["Nara Period",
             "Heian Period", 
             "Edo Period"],
            famousArtists: ["Katsushika Hokusai", 
            "Utagawa Hiroshige", 
            "Tawaraya Sotatsu"],
            museums: ["Tokyo National Museum", 
            "Adachi Museum of Art", 
            "Ritsurin Garden"]
        },
        Korea: {
            notableArtForms: ["pottery", 
            "painting",
             "calligraphy", 
             "textiles"],
            periods: ["Three Kingdoms Period", 
            "Goryeo Dynasty",
             "Joseon Dynasty"],
            famousArtists: ["Kim Hong-do", 
            "Jeong Seon",
             "Shin Yun-bok"],
            museums: ["National Museum of Korea", 
            "Leeum, Samsung Museum of Art", 
            "Gyeongju National Museum"]
        }
    },
    getCountryInfo: function (country) {
        return this.countries[country];
    },
    getArtForms: function (country) {
        return this.countries[country].notableArtForms;
    },
    addNewCountry: function (country, details) {
        this.countries[country] = details;
    },
    listAllCountries: function () {
        return Object.keys(this.countries);
    },
    listAllArtStyles: function () {
        return this.artStyles;
    },
    listPreservationMethods: function () {
        return this.preservation;
    },
    listArtTechniques: function () {
        return this.techniques;
    }
};

console.log(ancientAsianArt.getCountryInfo("China")); 
console.log(ancientAsianArt.listAllCountries()); 
console.log(ancientAsianArt.listAllArtStyles()); 
console.log(ancientAsianArt.listPreservationMethods()); 
console.log(ancientAsianArt.listArtTechniques()); 

console.log(ancientAsianArt);

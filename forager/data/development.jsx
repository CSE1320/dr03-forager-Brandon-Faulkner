// data/development.js
const messages = {
    warningMessage: {
        header: "warning",
        icon: "/icons/icon_warning.svg",
        message: "This is a toxic species, proceed with caution.",
        closable: false
    },
    attentionMessage: {
        header: "attention",
        icon: "/icons/icon_warning.svg",
        message: "Our system can make mistakes! Remember to verify important information and use your own judgement to determine if any mushroom is safe. Be sure to use the “Report Error” button if you suspect a mistake.",
        closable: true
    }
}

const mushrooms = [
    {
        name: "Death Cap",
        image: "/images/death_cap.jpg",
        scientific_name: "Amanita phalloides",
        description: "The Death Cap is a highly toxic mushroom native to Europe, now found in various parts of the world. It has a large, imposing fruiting body with a cap that can be pale-green, yellowish-green, olive-green, bronze, or white, often paler toward the margins. The cap surface is sticky when wet and easily peeled. The gills are white and crowded, and the stipe is white with grayish-olive scales, featuring a swollen, sac-like white volva at the base. The smell is initially faint and honey-sweet, becoming overpowering and sickly-sweet over time. This mushroom contains potent toxins, including amatoxins and phallotoxins, which can cause severe liver and kidney damage if ingested.",
        filterable: {
            tags: [],
            regions: ["North America", "Europe"],
            category: ["Poisonous"],
        },
        characteristics: {
            cap_diameter: "5-15 cm",
            gill_color: "White",
            stem_color: "White with scales",
            habitat: "Woodlands"
        },
        similar_matches: [
            { name: "Destroying Angel", similarity: "90" },
            { name: "False Death Cap", similarity: "85" }
        ]
    },
    {
        name: "Paddy Straw",
        image: "/images/paddy_straw.jpg",
        scientific_name: "Volvariella volvacea",
        description: "The Paddy Straw mushroom, also known as the Straw Mushroom, is widely cultivated in Asia and valued for its delicate flavor and tender texture. It has a conical to bell-shaped cap that is grayish or brownish, with white gills that become pinkish as they mature. The stipe is white and lacks a ring, and the base is enclosed in a volva. This mushroom is commonly grown on rice straw, hence its name, and is a popular ingredient in Asian cuisines, especially in soups and stir-fries.",
        filterable: {
            tags: ["Recents"],
            regions: ["Asia"],
            category: ["Medicinal", "Good for Broths"],
        },
        characteristics: {
            cap_diameter: "3-15 cm",
            gill_color: "White to pink",
            stem_color: "White",
            habitat: "Cultivated on straw"
        },
        similar_matches: [
            { name: "Puffball", similarity: "75" }
        ]
    },
    {
        name: "Destroying Angel",
        image: "/images/destroying_angel.jpg",
        scientific_name: "Amanita virosa",
        description: "The Destroying Angel is a deadly poisonous mushroom found in forests across North America and Europe. It is pure white, with a smooth cap that is initially hemispherical, becoming convex or flat with age. The gills are free and white, and the stipe is white with a fragile ring and a prominent, sack-like volva at the base. This mushroom contains potent amatoxins that inhibit RNA polymerase II, leading to severe liver and kidney failure if ingested.",
        filterable: {
            tags: [],
            regions: ["North America"],
            category: ["Poisonous"],
        },
        characteristics: {
            cap_diameter: "5-10 cm",
            gill_color: "White",
            stem_color: "White",
            habitat: "Woodlands"
        },
        similar_matches: [
            { name: "Death Cap", similarity: "90" },
            { name: "False Death Cap", similarity: "80" }
        ]
    },
    {
        name: "False Death Cap",
        image: "/images/false_death_cap.jpg",
        scientific_name: "Amanita citrina",
        description: "The False Death Cap is a mushroom found in woodlands across Europe. It has a cap that is typically pale yellow to greenish, sometimes white, with a smooth or slightly sticky surface. The gills are free and white, and the stipe is white with a bulbous base and a fragile ring. Unlike its deadly counterparts, the False Death Cap is considered mildly toxic and not lethal, but it can cause gastrointestinal distress if consumed.",
        filterable: {
            tags: ["Favorites"],
            regions: ["Europe"],
            category: ["Poisonous"],
        },
        characteristics: {
            cap_diameter: "4-10 cm",
            gill_color: "White",
            stem_color: "White",
            habitat: "Woodlands"
        },
        similar_matches: [
            { name: "Death Cap", similarity: "85" },
            { name: "Destroying Angel", similarity: "80" }
        ]
    },
    {
        name: "Puffball",
        image: "/images/puffball.jpg",
        scientific_name: "Calvatia gigantea",
        description: "The Giant Puffball is a distinctive mushroom known for its large, white, spherical fruiting body that can reach impressive sizes. It lacks a visible stem and gills, and its interior is initially white and firm, becoming yellowish and spongy as it matures. When mature, it releases spores through an aperture at the top. Edible when young and white inside, the Giant Puffball has a mild flavor and can be used in various culinary dishes.",
        filterable: {
            tags: ["Recents"],
            regions: ["North America"],
            category: ["Good for Broths"],
        },
        characteristics: {
            cap_diameter: "10-70 cm",
            gill_color: "None",
            stem_color: "None",
            habitat: "Grasslands"
        },
        similar_matches: [
            { name: "Paddy Straw", similarity: "75" }
        ]
    }
]

const filterData = [
    {
        title: "Tags",
        pills: ["Favorites", "Recents"]
    },
    {
        title: "Regions",
        pills: ["Texas", "North America", "South America", "Asia", "Europe", "Africa"]
    },
    {
        title: "Category",
        pills: ["Poisonous", "Medicinal", "Mythical", "Good for Broths"]
    }
];

const comparisonLabels = {
    labels: {
        capShape: "Cap Shape",
        capColor: "Cap Color",
        capTexture: "Cap Texture",
        gillsType: "Gills Type",
        gillsColor: "Gills Color",
        stemShape: "Stem Shape",
        stemColor: "Stem Color",
        stemRing: "Stem Ring",
        habitat: "Habitat",
    },
    referenceValues: {
        capShape: "Flat",
        capColor: "Yellow",
        capTexture: "Smooth",
        gillsType: "Free",
        gillsColor: "White",
        stemShape: "Slender",
        stemColor: "White",
        stemRing: "Absent",
        habitat: "Near oak/ beech",
    }
}

// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export { messages, mushrooms, filterData, comparisonLabels };

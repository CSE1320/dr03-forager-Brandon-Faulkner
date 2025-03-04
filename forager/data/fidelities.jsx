//Different approaches for holding data for mushrooms based on fidelity ideas
const fidelities = [
    //Uses a single object with nested objects for filterable and characteristics, also provides similar matches ------ WINNER
    {
        name: "name",
        image: "img",
        scientific_name: "info",
        description: "info",
        filterable: {
            tags: ["favorites"],
            regions: ["region one", "region two"],
            category: ["poisonous"],
        },
        characteristics: {
            cap_diameter: "info",
            gill_color: "info",
            stem_color: "info",
            habitat: "info"
        },
        similar_matches: [
            { name: "name", similarity: "score" },
            { name: "name", similarity: "score" }
        ]
    },
    //Uses a single object with nested objects for filterable and characteristics, doesn't provide similar matches
    {
        name: "name",
        image: "img",
        scientific_name: "info",
        description: "info",
        filterable: {
            is_toxic: "true/false",
            is_favorite: "true/false",
            is_recent: "true/false",
            region: "region",
            category: "category",
        },
        characteristics: {
            cap_diameter: "info",
            gill_color: "info",
            stem_color: "info",
            habitat: "info"
        }
    },
    //Uses a single object with nested objects for tags, regions, category, and characteristics, doesn't provide similar matches
    {
        name: "name",
        image: "img",
        scientific_name: "info",
        description: "info",
        tags: {
            favorite: "true/false",
            recent: "true/false",
        },
        regions: {
            texas: "true/false",
            north_america: "true/false",
            south_america: "true/false",
            asia: "true/false",
            europe: "true/false",
            africa: "true/false",
        },
        category: {
            medicinal: "true/false",
            mythical: "true/false",
            poisonous: "true/false",
            good_for_broths: "true/false",
        },
        characteristics: {
            cap_diameter: "info",
            gill_color: "info",
            stem_color: "info",
            habitat: "info"
        }
    },
]
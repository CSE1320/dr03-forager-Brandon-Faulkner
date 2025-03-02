// data/development.js
const dummyData = {
    message: "This is dummy data from a config file",
    status: "success",
};

const warningMessage = {
    header: "warning",
    icon: "/icons/icon_warning.svg",
    message: "This is a toxic species, proceed with caution."
};

const mushrooms = [
    {
        name: "Death Cap",
        image: "/images/death_cap.jpg",
        scientific_name: "Amanita phalloides",
        description: "",
        filterable: {
            tags: ["Favorites"],
            regions: ["North America", "Europe"],
            category: ["Poisonous"],
            is_favorite: true,
        },
        characteristics: {
            diameter: "4 in",
        }
    },
    {
        name: "Paddy Straw",
        image: "/images/paddy_straw.jpg",
        scientific_name: "",
        description: "",
        filterable: {
            tags: ["Recents"],
            regions: ["Asia"],
            category: ["Medicinal", "Good for Broths"],
            is_favorite: true,
        },
        characteristics: {
            diameter: "",
        }
    },
    {
        name: "Destroying Angel",
        image: "/images/destroying_angel.jpg",
        scientific_name: "",
        description: "",
        filterable: {
            tags: ["Favorites"],
            regions: ["North America"],
            category: ["Poisonous"],
            is_favorite: true,
        },
        characteristics: {
            diameter: "",
        }
    },
    {
        name: "False Death Cap",
        image: "/images/false_death_cap.jpg",
        scientific_name: "",
        description: "",
        filterable: {
            tags: ["Favorites"],
            regions: ["Europe"],
            category: ["Poisonous"],
            is_favorite: true,
        },
        characteristics: {
            diameter: "",
        }
    },
    {
        name: "Puffball",
        image: "/images/puffball.jpg",
        scientific_name: "",
        description: "",
        filterable: {
            tags: ["Recents"],
            regions: ["North America"],
            category: ["Good for Broths"],
            is_favorite: true,
        },
        characteristics: {
            diameter: "",
        }
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


// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export { warningMessage, dummyData, mushrooms, filterData }; // Requires import {warningMessage, dummyData} from './data/development.js';

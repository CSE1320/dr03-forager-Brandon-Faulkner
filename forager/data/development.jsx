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
        region: "",
        filterable: {
            is_toxic: true,
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
        region: "",
        filterable: {
            is_toxic: false,
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
        region: "",
        filterable: {
            is_toxic: true,
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
        region: "",
        filterable: {
            is_toxic: true,
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
        region: "",
        filterable: {
            is_toxic: false,
            is_favorite: true,
        },
        characteristics: {
            diameter: "",
        }
    }
]

// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export { warningMessage, dummyData, mushrooms }; // Requires import {warningMessage, dummyData} from './data/development.js';

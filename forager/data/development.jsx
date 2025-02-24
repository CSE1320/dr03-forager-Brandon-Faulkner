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
        image: "https://www.woodlandtrust.org.uk/media/48295/deathcap-fungi-amanita-phalloides-alamy-brgxfp-naturepix.jpg",
        scientific_name: "Amanita phalloides",
        description: "Description",
        region: "Region",
        filterable: {
            is_toxic: true,
            is_favorite: false,
        },
        characteristics: {
            diameter: "4 in",
        }
    },
    {
        name: "Death Cap",
        image: "https://www.woodlandtrust.org.uk/media/48295/deathcap-fungi-amanita-phalloides-alamy-brgxfp-naturepix.jpg",
        scientific_name: "Amanita phalloides",
        description: "Description",
        region: "Region",
        filterable: {
            is_toxic: true,
            is_favorite: false,
        },
        characteristics: {
            diameter: "4 in",
        }
    },
    {
        name: "Death Cap",
        image: "https://www.woodlandtrust.org.uk/media/48295/deathcap-fungi-amanita-phalloides-alamy-brgxfp-naturepix.jpg",
        scientific_name: "Amanita phalloides",
        description: "Description",
        region: "Region",
        filterable: {
            is_toxic: true,
            is_favorite: false,
        },
        characteristics: {
            diameter: "4 in",
        }
    },
    {
        name: "Death Cap",
        image: "https://www.woodlandtrust.org.uk/media/48295/deathcap-fungi-amanita-phalloides-alamy-brgxfp-naturepix.jpg",
        scientific_name: "Amanita phalloides",
        description: "Description",
        region: "Region",
        filterable: {
            is_toxic: true,
            is_favorite: false,
        },
        characteristics: {
            diameter: "4 in",
        }
    },
    {
        name: "Death Cap",
        image: "https://www.woodlandtrust.org.uk/media/48295/deathcap-fungi-amanita-phalloides-alamy-brgxfp-naturepix.jpg",
        scientific_name: "Amanita phalloides",
        description: "Description",
        region: "Region",
        filterable: {
            is_toxic: true,
            is_favorite: false,
        },
        characteristics: {
            diameter: "4 in",
        }
    },
    {
        name: "Death Cap",
        image: "https://www.woodlandtrust.org.uk/media/48295/deathcap-fungi-amanita-phalloides-alamy-brgxfp-naturepix.jpg",
        scientific_name: "Amanita phalloides",
        description: "Description",
        region: "Region",
        filterable: {
            is_toxic: true,
            is_favorite: false,
        },
        characteristics: {
            diameter: "4 in",
        }
    }
]

// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export { warningMessage, dummyData, mushrooms }; // Requires import {warningMessage, dummyData} from './data/development.js';

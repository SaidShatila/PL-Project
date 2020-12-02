const categories = [
    {
        id: 'plants',
        name: 'Plants',
        tags: ['products', 'inspiration'],
        count: 147,
        image: require('../')

    },

{
    id: 'seeds',
        name: 'Plants',
            tags: ['products', 'shop'],
                count: 16,
                    image: require('../')

},

{
    id: 'flowers',
        name: 'Flowers',
            tags: ['products', 'inspiration'],
                count: 68,
                    image: require('../')

},

{
    id: 'sprayers',
        name: 'Sprayers',
            tags: ['products','shop'],
                count: 17,
                    image: require('../')

},
{
        id: 'pots',
        name: 'Pots',
        tags: ['products', 'shop'],
        count: 47,
        image: require('../')

    },
    {
        id: 'fertilizers',
        name: 'Fertilizers',
        tags: ['products', 'shop'],
        count: 147,
        image: require('../')

    }
];

const products = [
    {
id: 1,
name: '16 Best Plants That Thrive In Your Bedroom',
description: 'Bedrooms deserve....',
tags: ['Interior','27m^2','Ideas'],
gallery:[
    require('../'),
    require('../'),
    require('../'),
    // showing only 3 images, show +3 for the rest
    require('../'),
    require('../'),
    require('../'),
]
    }
];
const explore = [

//images
require('../'),
require('../'),
require('../'),
require('../'),
require('../'),
require('../'),

];
const profiles =[{
username: 'react-ui-kit',
location:'Europe',
email:'contact@react-ui-kit.com',
avatar: require('../avatar.png'),
budget: 1000,
monthly_cap: 5000,
notifications: true,
newsletter: false,
}
];

export{
    categories,
    products,
    profiles,
};

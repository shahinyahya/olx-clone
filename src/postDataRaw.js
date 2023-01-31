const post = [
    {
        id: 1,
        image: "https://apollo-singapore.akamaized.net/v1/files/b23ta0l8t3c21-IN/image;s=300x600;q=60",
        price: "₹ 57,75,000",
        model: "2021 - 49,000 km",
        name: "Mercedes EC-Class",
        place: "Greater Mumbai",
        date: "Jan 16"
    },
    // {
    //     id: 2,
    //     image: "https://apollo-singapore.akamaized.net/v1/files/709vb8h5nquv3-IN/image;s=300x600;q=60",
    //     price: "₹ 7,75,050",
    //     model: "2018 - 79,000 km",
    //     name: "Honda WR-V",
    //     place: "Lokh Var, Delhi",
    //     date: "TODAY"
    // },
    // {
    //     id: 3,
    //     image: "https://apollo-singapore.akamaized.net/v1/files/37v2mebwnwz91-IN/image;s=300x600;q=60",
    //     price: "₹ 75,000",
    //     name: "Iphone 11 Brand new",
    //     place: "Dadar West, Mumbai",
    //     date: "Jan 05"
    // },
    // {
    //     id: 4,
    //     image: "https://apollo-singapore.akamaized.net/v1/files/yia855e64ahd3-IN/image;s=300x600;q=60",
    //     price: "₹ 42,000",
    //     name: "Iphone 11 pro max",
    //     place: "Greater Mumbai",
    //     date: "Jan 21"
    // },
    // {
    //     id: 5,
    //     image: "https://apollo-singapore.akamaized.net/v1/files/s4d4uo2kspxm2-IN/image;s=300x600;q=60",
    //     price: "₹ 4,75,000",
    //     model: "2018 - 109,000 km",
    //     name: "Suzuki Swift",
    //     place: "Preet Vihar, Delhi",
    //     date: "TODAY"
    // },
    // {
    //     id: 6,
    //     image: "https://apollo-singapore.akamaized.net/v1/files/mgp5a91li3e91-IN/image;s=300x600;q=60",
    //     price: "₹ 7,15,000",
    //     model: "2019 - 29,000 km",
    //     name: "Honda City I-Vtec",
    //     place: "Anand bhushan",
    //     date: "Jan 16"
    // },
    // {
    //     id: 7,
    //     image: "https://apollo-singapore.akamaized.net/v1/files/ugeu2cmmp9bl3-IN/image;s=300x600;q=60",
    //     price: "₹ 7,000",
    //     name: "Sofa Set",
    //     place: "Greater Mumbai",
    //     date: "Jan 16"
    // },
    // {
    //     id: 8,
    //     image: "https://apollo-singapore.akamaized.net/v1/files/b4mfapigmnjm-IN/image;s=300x600;q=60",
    //     price: "₹ 57,75,000",
    //     name: "NOIDA plot for sale",
    //     place: "Greater Noida, Delhi",
    //     date: "Jan 16"
    // },
    // {
    //     id: 9,
    //     image: "https://apollo-singapore.akamaized.net/v1/files/oylzif49v64v3-IN/image;s=300x600;q=60",
    //     price: "₹ 57,75,000",
    //     model: "4 Bds - 2 Ba - 500sq.ft",
    //     name: "50 Gaj North Avenue",
    //     place: "Kishan Vihar",
    //     date: "Jan 16"
    // },
    // {
    //     id: 10,
    //     image: "https://apollo-singapore.akamaized.net/v1/files/7qk35ntkhkuv-IN/image;s=300x600;q=60",
    //     price: "₹ 25,000",
    //     name: "Brand New Sofa Set",
    //     place: "Greater Mumbai",
    //     date: "Jan 16"
    // },
    // {
    //     id: 11,
    //     image: "https://apollo-singapore.akamaized.net/v1/files/ylotg4k2fwhn2-IN/image;s=300x600;q=60",
    //     price: "₹ 6,42,000",
    //     name: "Plot 143 in Vrindhavan",
    //     place: "PASCHIMPUR MEHAN",
    //     date: "Dec 16"
    // },
    // {
    //     id: 12,
    //     image: "https://apollo-singapore.akamaized.net/v1/files/455j0ug0my9u-IN/image;s=300x600;q=60",
    //     price: "₹ 75,000",
    //     name: "L Sofa",
    //     place: "Greater Mumbai",
    //     date: "Jan 16"
    // },
    // {
    //     id: 13,
    //     image: "https://apollo-singapore.akamaized.net/v1/files/o2rpjzvqvr8z-IN/image;s=300x600;q=60",
    //     price: "₹ 14,000",
    //     name: "Cricket Bat",
    //     place: "Greater Mumbai",
    //     date: "Jan 16"
    // },
    // {
    //     id: 14,
    //     image: "https://apollo-singapore.akamaized.net/v1/files/hwzwdilo9j102-IN/image;s=300x600;q=60",
    //     price: "₹ 75,000",
    //     name: "JBL Speaker",
    //     place: "Greater Mumbai",
    //     date: "Jan 16"
    // },
    // {
    //     id: 15,
    //     image: "https://apollo-singapore.akamaized.net/v1/files/0x1yvshtyyod2-IN/image;s=300x600;q=60",
    //     price: "₹ 74,500",
    //     name: "Willow Bat",
    //     place: "Greater Mumbai",
    //     date: "Jan 16"
    // },
    // {
    //     id: 16,
    //     image: "https://apollo-singapore.akamaized.net/v1/files/im5mnkqwcgi13-IN/image;s=300x600;q=60",
    //     price: "₹ 35,000",
    //     name: "Dyson v21 urgent",
    //     place: "Greater Mumbai",
    //     date: "Jan 16"
    // },
    // {
    //     id: 17,
    //     image: "https://apollo-singapore.akamaized.net/v1/files/b23ta0l8t3c21-IN/image;s=300x600;q=60",
    //     price: "₹ 57,75,000",
    //     model: "2021 - 49,000 km",
    //     name: "Mercedes EC-Class",
    //     place: "Greater Mumbai",
    //     date: "Jan 16"
    // },
    // {
    //     id: 18,
    //     image: "https://apollo-singapore.akamaized.net/v1/files/u7j96xmbydw-IN/image;s=300x600;q=60",
    //     price: "₹ 1,500",
    //     name: "Smart Watch",
    //     place: "Greater Mumbai",
    //     date: "Jan 16"
    // },
    // {
    //     id: 19,
    //     image: "https://apollo-singapore.akamaized.net/v1/files/8ti4vqi7amal1-IN/image;s=300x600;q=60",
    //     price: "₹ 42,000",
    //     name: "Nikon Camera",
    //     place: "Greater Mumbai",
    //     date: "Jan 16"
    // },
    // {
    //     id: 20,
    //     image: "https://apollo-singapore.akamaized.net/v1/files/0ggkwwifxy983-IN/image;s=300x600;q=60",
    //     price: "₹ 21,000",
    //     name: "PlayStation 4",
    //     place: "Greater Mumbai",
    //     date: "Jan 16"
    // },
]

export default post;
const properties = [
    {
        id: 1,
        title: "Modern 3 Bedroom Apartment",
        location: "Wuse 2, Abuja",
        price: 250000,
        bedrooms: 3,
        bathrooms: 2,
        type: "Apartment",
        size: 1450,
        furnished: true,
        description: "A modern and spacious three-bedroom apartment in a convienient location, perfect for families and professionals.",
        amenities: [
            "Parking","24/7 Security", "Power Backup", "Water Supply", "Fitted Kitchen"
        ],
        images: ["/properties/apartment-1.jpg", "/properties/apartment-1-2.jpg",],
    },
    {
        id: 2,
        title: "Luxury 2 Bedroom Flat",
        location: "Maitama, Abuja",
        price: 250000,
        bedrooms: 2,
        bathrooms: 2,
        type: "Apartment",
        size: 1200,
        furnished: true,
        description: "A stylish two-bedroom apartment offering modern interiors, comfortable living spaces, and excellent amenities.",
        amenities: [
            "Parking","Swimming Pool", "24/7 Security", "Gym", "Power Backup", "Water Supply",
        ],
        images: ["/properties/apartment-2.jpg", "/properties/apartment-2-2.jpg",],
    },
    {
        id: 3,
        title: "Spacious 4 Bedroom Duplex",
        location: "Wuse 2, Abuja",
        price: 250000,
        bedrooms: 3,
        bathrooms: 2,
        type: "Duplex",
        size: 2200,
        furnished: false,
        description: "A spacious four-bedroom duplex with generous living areas, private parking, and a quiet residential environment.",
        amenities: ["Private Parking", "Security", "Garden", "Water Supply", "Power Backup",],
        images: ["/properties/duplex-1.jpg",],
    }
];
export default properties;
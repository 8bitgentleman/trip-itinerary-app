export const trips = [
  // // MARK: Egypt 2027
  {
    id: 'egypt-2027',
    title: 'Total Solar Eclipse over the Temple of Luxor: Hidden Tombs, Ancient Pyramids & Old Cairo',
    subtitle: 'Explore pyramids, tombs, and local cuisine with an Egyptologist guide',
    destination: 'Egypt',
    duration: {
      days: 10,
      nights: 9
    },
    price: {
      amount: 4825,
      currency: 'USD'
    },
    heroImage: 'https://img.atlasobscura.com/69Kopo6hYSGChhernaPcpQECfYd8Kf4DYGSnADo6kf8/rs:fill:370:482:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL2V2ZW50/X2ltYWdlcy9lOWVl/Mjg5Yy1jY2I4LTRm/ZjgtOTgxYy1kNmM3/ZWNhNTI0N2YyYjg3/MWUxYWQwYWZmYTk5/MDdfRWd5cHQgMSAt/IEFidSBTaW1iZWwu/cG5n.png',
    gallery: [
      'https://placehold.co/800x800',
      'https://placehold.co/800x800'
    ],
    highlights: [
      'Witness a once in a lifetime total solar eclipse from the Temple of Luxor',
      'Explore the sight of the Great Pyramids, the Tomb of Tutankhamun and the temple of Abu Simbel.',
      'Enjoy exclusive after hours access to the Valley of The Kings without the crowds.',
      'Discover the surprising existence of waterfalls, & whale skeletons in the Sahara.',
      'Cruise the Nile in comfort on a traditional wooden Felucca.',
      'Roam the back streets of Old Cairo and go behind the scenes of a goldsmith\'s studio.',
      'Visit the ancient city of Memphis and the Step Pyramid of Saqqara.',
      'Explore the bustling Khan el-Khalili bazaar for authentic souvenirs and local snacks.',
      'Enjoy a sound and light show at the Pyramids of Giza.'
    ],
    included: [
      'Accommodations throughout the trip',
      'Most meals (as described in the itinerary)',
      'Transportation (as described in the itinerary)',
      'Admission/entry to activities',
      'Special access to places and experiences'
    ],
    notIncluded: [
      'Flights to and from destination',
      'Pre/Post trip accommodations', 
      'Travel insurance',
      'Visas and passport fees',
      'Meals outside of those described'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Cairo',
        description: 'Salām \'alaykum and welcome to Cairo! If flights line up we will meet at Cairo Airport and whisk off via private transfer to the hotel in the heart of the city.',
        image: 'https://placehold.co/800x800',
        imageAlt: 'Welcome to Egypt!',
        meals: ['Dinner'],
        accommodation: 'Novotel Cairo El Borg or similar, Cairo'
      },
      {
        day: 2,
        title: 'Explore Giza Plateau',
        description: 'Visit the Great Pyramids of Giza, the Sphinx, and enjoy a camel ride. In the evening, experience a spectacular sound and light show at the Pyramids.',
        image: 'https://placehold.co/800x800',
        imageAlt: 'Great Pyramids of Giza',
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Novotel Cairo El Borg or similar, Cairo'
      },
      {
        day: 3,
        title: 'Day Trip to Saqqara and Memphis',
        description: 'Discover the ancient Step Pyramid of Djoser in Saqqara, and visit the open-air museum of Memphis, once the capital of ancient Egypt.',
        image: 'https://placehold.co/800x800',
        imageAlt: 'Step Pyramid of Djoser',
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Novotel Cairo El Borg or similar, Cairo'
      },
      {
        day: 4,
        title: 'Fly to Luxor',
        description: 'Fly to Luxor and visit Karnak Temple and Luxor Temple. Enjoy dinner overlooking the Nile.',
        image: 'https://placehold.co/800x800',
        imageAlt: 'Karnak Temple',
        meals: ['Breakfast', 'Dinner'],
        accommodation: 'Steigenberger Nile Palace or similar, Luxor'
      },
      {
        day: 5,
        title: 'Valley of the Kings',
        description: 'Visit the Valley of the Kings, including the Tomb of Tutankhamun, and enjoy exclusive after-hours access. In the evening, relax with a Felucca ride on the Nile.',
        image: 'https://placehold.co/800x800',
        imageAlt: 'Valley of the Kings',
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Steigenberger Nile Palace or similar, Luxor'
      },
      {
        day: 6,
        title: 'Abu Simbel Excursion',
        description: 'Take a day trip to the stunning temples of Abu Simbel, built by Ramses II. Return to Luxor for the night.',
        image: 'https://placehold.co/800x800',
        imageAlt: 'Abu Simbel Temples',
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Steigenberger Nile Palace or similar, Luxor'
      },
      {
        day: 7,
        title: 'Travel to Aswan',
        description: 'Travel to Aswan. Visit the Philae Temple dedicated to the goddess Isis and the Aswan High Dam. Enjoy a local Nubian dinner.',
        image: 'https://placehold.co/800x800',
        imageAlt: 'Philae Temple',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mövenpick Resort Aswan or similar, Aswan'
      },
      {
        day: 8,
        title: 'Nile Cruise Begins',
        description: 'Board a traditional Nile cruise ship and begin your journey down the Nile. Enjoy on-board activities and relaxation.',
        image: 'https://placehold.co/800x800',
        imageAlt: 'Nile Cruise',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Nile cruise ship'
      },
      {
        day: 9,
        title: 'Kom Ombo and Edfu Temples',
        description: 'Stop at Kom Ombo Temple and Edfu Temple, dedicated to the falcon god Horus. Continue your cruise and enjoy a festive dinner on board.',
        image: 'https://placehold.co/800x800',
        imageAlt: 'Kom Ombo Temple',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Nile cruise ship'
      },
      {
        day: 10,
        title: 'Return to Cairo',
        description: 'Disembark in Aswan and fly back to Cairo for your final night. Enjoy a farewell dinner with your group and reflect on your incredible journey.',
        image: 'https://placehold.co/800x800',
        imageAlt: 'Farewell Dinner',
        meals: ['Breakfast', 'Dinner'],
        accommodation: 'Novotel Cairo El Borg or similar, Cairo'
      }
    ],
    dates: [
      {
        startDate: '2027-02-05',
        endDate: '2027-02-15',
        price: 4825,
        available: true
      }
    ],
    activity: 'Moderate',
    groupSize: 5,
    interest: ['History, Culture, Astronomy, & Food'],
    additionalInfo: {
      pricing: {
        deposit: "TBD",
        depositCurrency: 'USD',
        balanceDueDays: 90,
        notes: 'The price of the trip is per person based on double occupancy.',
        fullDetails: 'Learn more about our pricing and payment plans...'  // Full text for expanded view
      },
      // soloTraveler: {
      //   privateRoomAvailable: true,
      //   privateRoomFee: 800,
      //   privateRoomCurrency: 'USD',
      //   notes: "You're in good company. Many of our travelers join solo.",
      //   fullDetails: 'Learn more about solo travel options and room arrangements...'
      // },
      arrivalDeparture: {
        airport: {
          code: 'CAI',
          name: 'Cairo International Airport'
        },
        recommendedArrival: 'Day 1 before 4:00 PM',
        recommendedDeparture: 'Day 10 after 10:00 AM',
        notes: 'Cairo airport (CAI) connects to a range of flight hubs in North America.',
        fullDetails: 'Detailed arrival and departure information including transfer details...'
      },
      activityLevel: {
        level: 'Moderate',
        walkingDistance: {
          min: 4,
          max: 6,
          unit: 'miles'
        },
        notes: 'This tour has a moderate activity level. Consider four to six miles of walking each day, with lots of time spent moving around historical sites.',
        fullDetails: 'Complete details about physical requirements and accessibility...'
      },
      // essentialInfo: {
      //   tripInfoUrl: '/essential-trip-information',
      //   faqUrl: '/faqs'
      // },
      contact: {
        // phone: '+1 833-919-9154',
        // email: 'info@example.com'  // Add if available
      }
    }
  },
    // // MARK: Puerto Rico 2025
    {
      id: 'puerto-rico-2025',
      title: 'Puerto Rico',
      subtitle: 'Get some real Caribbean sun in the dead of winter',
      destination: 'Puerto Rico',
      duration: {
        days: 5,
        nights: 4
      },
      price: {
        amount: 300,
        currency: 'USD'
      },
      heroImage: '/photos/puerto-rico-2025/Puente-de-Piedra-Cabo-Rojo.jpg',
      gallery: [
        '/photos/seattle-2024/PXL_20230203_215820437.jpg',
        'https://placehold.co/800x800'
      ],
      itinerary: [
        {
          day: 1,
          date: '2025-02-08',
          title: 'Friday: Arrive in Puerto Rico',
          description: 'Leave early morning and arrive early afternoon. Settle in and explore the local beach. Dinner on the water?',
          accommodation: '??',
          image: 'photos/puerto-rico-2025/shutterstock_2437600577.jpg',
          
        },
        {
          day: 2,
          date: '2025-02-09',
          title: 'Saturday: Explore Old San Juan',
          description: 'Explore the historic streets of Old San Juan, visit the forts, and take a boat tour of the surrounding bay.',
          accommodation: '??',
          image: 'photos/puerto-rico-2025/San-Juan.jpg',
          
        },
        {
          day: 3,
          date: '2025-02-10',
          title: 'Sunday: Drive to El Yunque National Forest',
          description: 'Rent a car and drive to El Yunque National Forest (~1hr). Hike to La Mina Falls through the rainforest. Drive to Rincón and stay for the night.',
          accommodation: '??',
          image: 'photos/puerto-rico-2025/El-Yunque.jpg',
          
        },
        {
          day: 4,
          date: '2025-02-11',
          title: 'Monday: ',
          description: 'Surf lesson or scuba diving in Rincón. Drive back to San Juan for the night.',
          accommodation: '??',
          image: 'photos/puerto-rico-2025/rincon-diving-153181.jpg',
          
        },
        {
          day: 5,
          date: '2025-02-12',
          title: 'Tuesday: Fly back to NYC',
          description: 'Sleep in and enjoy a leisurely breakfast. Return the rental car and fly back to NYC.',
          accommodation: '??',
          image: 'photos/puerto-rico-2025/San-Juan.jpg',
          
        },
      ],
      dates: [
        {
          startDate: '2025-02-07',
          endDate: '2025-02-10',
          available: true
        }
      ],
      activity: 'Moderate',
      groupSize: 2,
      interest: ['Nature', 'Hiking']
    },
// MARK: Rome & Italy 2024
  {
    id: 'italy-rome-2024',
    title: 'Italy & Rome 2024',
    subtitle: 'A month in Rome working and exploring the city and surrounding areas',
    destination: 'Italy',
    duration: {
      days: 28,
      // nights: 27
    },
    price: {
      amount: 7200,
      currency: 'USD'
    },
    heroImage: '/photos/italy-2024/florence-2024.jpg',
    gallery: [
      'https://placehold.co/800x800',
      'https://placehold.co/800x800'
    ],

    itinerary: [
      {
        day: 1,
        "date": "2024-08-30",
        title: 'Flight NY - Rome',
        description: 'Fly to Italy.',
        image: "/photos/italy-2024/PXL_20240830_165131561.jpg"

      },
      {
        "day": 5,
        "date": "2024-09-03",
        "title": "Municipio Roma I - Rome",
        "description": "",
        "activities": [],
        "image": "/photos/italy-2024/PXL_20240903_101329251.MP~2.jpg",
        
      },
      {
        "day": 6,
        "date": "2024-09-04",
        "title": "Temple of Aesculapius - Rome",
        "description": "Exploring the Villa Borghese Park",
        "activities": ["Exploring"],
        "image": "/photos/italy-2024/PXL_20240904_121601484.jpg",
        iconIndex: {
          accommodation: "Building2",    // Will use the Hotel icon instead of BedDouble
          activities: "Footprints"
        },
      },
      {
        "day": 8,
        "date": "2024-09-06",
        "title": "Teatre de Marcel - Rome",
        "description": "Exploring the ancient Theatre of Marcellus and surrounding area",
        "activities": ["Walking"],
        "images": [
          "/photos/italy-2024/PXL_20240906_125219050~2(1).jpg",
          "/photos/italy-2024/PXL_20240906_133439718.jpg",
        ],
        iconIndex: {
          accommodation: "Building2",    // Will use the Hotel icon instead of BedDouble
          activities: "Footprints"
        },
      },
      {
        "day": 14,
        "date": "2024-09-12",
        "title": "Villa D'Este - Tivoli",
        "description": "",
        "activities": ["Walking"],
        "images": [
          "/photos/italy-2024/PXL_20240912_084223800~2.jpg",
          "/photos/italy-2024/PXL_20240912_083421857~2.jpg",
          "/photos/italy-2024/PXL_20240912_084026850.MP.jpg",
          "/photos/italy-2024/PXL_20240912_084329575.MP.jpg",
        ],
        iconIndex: {
          accommodation: "Building2",    // Will use the Hotel icon instead of BedDouble
          activities: "Footprints"
        },
      },
      {
        "day": 15,
        "date": "2024-09-13",
        "title": "Vicus Caprarius - The Water City - Rome",
        "description": "Explored an underground Roman aquaduct",
        "activities": [],
        "image": "/photos/italy-2024/PXL_20240913_094551515.MP.jpg",
      },
      {
        "day": 15,
        "date": "2024-09-13",
        "title": "The Colosseum - Rome",
        "description": "Explored the Colosseum, wandering through the gallery and fighting pit.",
        "activities": [],
        "image":        "/photos/italy-2024/PXL_20240913_120833899(1).jpg",
      },
      {
        "day": 17,
        "date": "2024-09-15",
        "title": "Villa Gregoriana - Tivoli",
        "description": "",
        "activities": ["Hiking"],
        "images": [
          "/photos/italy-2024/PXL_20240915_080611228.jpg",

          "/photos/italy-2024/PXL_20240915_092715518.jpg",
        ],
        iconIndex: {
          accommodation: "Building2",    // Will use the Hotel icon instead of BedDouble
          activities: "Footprints"
        },
      },
      {
        "day": 18,
        "date": "2024-09-16",
        "title": "Quartiere 1 - Florence",
        "description": "",
        "activities": [],
        "images": [
          "/photos/italy-2024/PXL_20240917_073304451.MP~2 (1).jpg",

          "/photos/italy-2024/PXL_20240916_133107902.MP~2.jpg",
          "/photos/italy-2024/PXL_20240916_171151474~2.jpg",

        ]
      },
    ],
    dates: [
      {
        startDate: '2024-08-30',
        endDate: '2024-09-27',
        price: 7200,
        available: false
      }
    ],
    activity: 'Easy',
    // groupSize: 1,
    interest: ['History, Culture, & Food'],

  },
  // Seattle 2024
  {
    id: 'seattle-vancouver-2024',
    title: 'Seattle & Vancouver',
    subtitle: 'Hike through a rainforest with friends',
    destination: 'Seattle',
    duration: {
      days: 8,
      nights: 7
    },
    price: {
      amount: 1200,
      currency: 'USD'
    },
    heroImage: '/photos/seattle-2024/PXL_20240608_201346171.jpg',
    gallery: [
      // '/photos/seattle-2024/PXL_20230203_215820437.jpg',
      // 'https://placehold.co/800x800'
    ],
    itinerary: [
      {
        day: 1,
        date: '2024-06-02',
        title: 'Arrive in Seattle',
        description: 'Landed in Seattle',
        accommodation: 'Seattle Airbnb',
        activities: ["Flying"],
        image:'/photos/Seattle-2024/PXL_20240603_152124315.jpg',
        iconIndex: {
          accommodation: "Building2",    // Will use the Hotel icon instead of BedDouble
          activities: "Plane"
        },
      },
      {
        day: 2,
        date: "2024-06-03",
        title: "Studio hop",
        description: "Worked with the Seattle team from the Seattle office and got dinner and drinks with Pelin",
        activities: ["Working"],
        accommodation: 'Seattle Airbnb',
        image:'/photos/Seattle-2024/PXL_20240603_165123176.PANO.jpg',
        iconIndex: {
          accommodation: "Building2",
          activities: "Laptop2"
        },
      },
      {
        day: 4,
        date: "2024-06-05",
        title: "Explored Fremont",
        description: "Walked around with Pelin exploring the shops, restaurants and Gas Works park of Fremont",
        activities: ["Walking"],
        accommodation: 'Seattle Airbnb',
        images:[
          '/photos/Seattle-2024/PXL_20240605_212610391.jpg',
          '/photos/Seattle-2024/PXL_20240605_212129482-EFFECTS.jpg'
        ],
        iconIndex: {
          accommodation: "Building2",
          activities: "Footprints"
        },
      },
      {
        day: 5,
        date: "2024-06-06",
        title: "Ferry to Victoria",
        description: "Took the FRS Clipper ferry from Seattle to Victoria, CA to meet up with Andrea. Searched for nudibranchs under the docks, saw some crazy clouds and went to a concert.",
        activities: ["Traveling"],
        accommodation: "Andrea's couch",
        images:[
          '/photos/Seattle-2024/PXL_20240606_201105297~2.jpg',
          '/photos/Seattle-2024/PXL_20240606_191606470.MP.jpg'
        ],
        iconIndex: {
          accommodation: "House",
          activities: "Ship"
        },
      },
      {
        day: 5,
        date: "2024-06-07",
        title: "Explored to Victoria",
        description: "Biked around Victoria and got some ice cream while Andrea swam. Took the afternoon ferry to Port Angeles 🧛🏻 to meet back up with Pelin and Patrick.",
        activities: ["Traveling"],
        accommodation: "Port Angeles Airbnb",
        images:[
          '/photos/Seattle-2024/PXL_20240607_184003086.jpg'
        ],
        iconIndex: {
          accommodation: "House",
          activities: "Bike"
        },
      },
      {
        day: 7,
        date: "2024-06-08",
        title: "Olympic National Park",
        description: "Drove to Olympic National Park and hiked through the rainforest with Andrea, Pelin, and Patrick.",
        activities: ["Hiking"],
        accommodation: "Port Angeles Airbnb",
        images:[
          '/photos/Seattle-2024/PXL_20240608_171604826.jpg',
          '/photos/Seattle-2024/PXL_20240609_000732192.jpg',
          '/photos/Seattle-2024/PXL_20240608_181756744.MP.jpg',
          '/photos/Seattle-2024/PXL_20240609_032102636~2.jpg',

        ],
        iconIndex: {
          accommodation: "House",
          activities: "Footprints"
        },
      },
      {
        day: 8,
        date: "2024-06-09",
        title: "Flew to NYC",
        description: "Drove back to Seattle and caught a plane home to New York",
        activities: ["Traveling"],
        accommodation: "Home",

        iconIndex: {
          accommodation: "Building2",
          activities: "Plane"
        },
      },
    ],
    dates: [
      {
        startDate: '2024-06-02',
        endDate: '2024-06-09',
        available: false
      }
    ],
    activity: 'Moderate',
    groupSize: 1,
    interest: ['Nature', 'Hiking', 'Adventure', 'Road Trip']
  },
  // MARK: Montreal Total Eclipse 2024
  {
    id: 'montreal-eclipse-2024',
    title: '2024 Total Eclipse in Montreal',
    subtitle: 'Experience the total eclipse and explore Montreal’s culture',
    destination: 'Canada',
    duration: {
      days: 14,
      nights: 13
    },
    price: {
      amount: 3200,
      currency: 'USD'
    },
    heroImage: '/photos/eclipse-2024/PXL_20240408_172324899.jpg',
    gallery: [
      'https://placehold.co/800x800',
      'https://placehold.co/800x800'
    ],
    
    itinerary: [
      {
        day: 1,
        title: 'Arrive in Montreal',
        description: 'Welcome dinner and evening city tour.',
        meals: ['Dinner'],
        accommodation: 'Montreal downtown hotel'
      },
    ],
    dates: [
      {
        startDate: '2025-02-05',
        endDate: '2025-02-15',
        price: 4825,
        available: false
      }
    ],
    activity: 'Easy',
    groupSize: 2,
    interest: ['History, Culture, Astronomy, & Food']
  }, 
  // New Zealand 2023
  {
    id: 'new-zealand-adventure-2023',
    title: 'New Zealand North & South Island Adventure',
    subtitle: 'Urban exploration in Auckland and campervan journey through the South Island',
    destination: 'New Zealand',
    duration: {
      days: 46,
      nights: 45
    },
    price: {
      amount: 3200,
      currency: 'USD'
    },
    heroImage: '/photos/NZ-2023/PXL_20230314_194303657.jpg',
    gallery: [
      '/photos/NZ-2023/PXL_20230203_215820437.jpg',
      'https://placehold.co/800x800'
    ],
    itinerary: [
      {
        day: 1,
        date: '2023-02-01',
        title: 'Arrive in Auckland',
        description: 'Land in Auckland and begin New Zealand adventure',
        accommodation: 'Auckland apartment',
        images: [
          '/photos/NZ-2023/PXL_20230203_215820437.jpg',
          'https://placehold.co/800x600',
        ],
      },
      {
        day: 6,
        date: '2023-02-06',
        title: 'Hobbiton & Rotorua Tour',
        description: 'Guided tour of the famous Hobbiton Movie Set and visit to Rotorua',
        activities: ['Hobbiton Tour', 'Rotorua Visit'],
        accommodation: 'Auckland apartment',
        images: [
          'https://placehold.co/800x600',
          'https://placehold.co/800x600',
        ],
        iconIndex: {
          accommodation: "Building2",
          meals: "Coffee",          // Will use Coffee icon instead of Utensils
          activities: "Bus"        // Will use Bike icon instead of Map
        },
      },
      {
        day: 9,
        date: '2023-02-09',
        title: 'Mission Bay Beach',
        description: 'E-scooter adventure to Mission Bay Beach after work',
        activities: ['E-scooter riding', 'Beach visit'],
        image: 'https://placehold.co/800x600',
        accommodation: 'Auckland apartment',
        iconIndex: {
          accommodation: "Building2",    // Will use the Hotel icon instead of BedDouble
          meals: "Coffee",          // Will use Coffee icon instead of Utensils
          activities: "Bike"        // Will use Bike icon instead of Map
        },
      },
      {
        day: 15,
        date: '2023-02-15',
        title: 'Maungauika North Head Historic Reserve',
        description: 'Took a boat to the North Head island and Hiked the mountain and historic fort',
        activities: ['Hiking'],
        iconIndex: {
          accommodation: "Building2",
          meals: "Coffee",          // Will use Coffee icon instead of Utensils
          activities: "Footprints"        // Will use Bike icon instead of Map
        },
      },
      {
        day: 25,
        date: '2023-02-25',
        title: 'Tapapa Hike',
        description: 'Hiking experience in Tapapa, Waikato region',
        activities: ['Hiking'],
        iconIndex: {
          accommodation: "Building2",
          meals: "Coffee",          // Will use Coffee icon instead of Utensils
          activities: "Footprints"        // Will use Bike icon instead of Map
        },
      },
      {
        day: 26,
        date: '2023-02-26',
        title: 'Waiheke Island',
        description: 'Day trip to Waiheke Island',
        activities: ['Island exploration'],
        iconIndex: {
          accommodation: "Building2",
          meals: "Coffee",          // Will use Coffee icon instead of Utensils
          activities: "Ship"        // Will use Bike icon instead of Map
        },
      },
      {
        day: 27,
        date: '2023-02-27',
        title: 'Christchurch',
        description: 'Flew to Christchurch for work and explored the city',
        duration: '3 days',
        endDate: '2023-03-01',
        accommodation: 'Weird pizza hotel',
        activities: ['Work and Flight'],
        iconIndex: {
          accommodation: "Building",
          meals: "Coffee",         
          activities: "Plane"      
        },
      },
      {
        day: 31,
        date: '2023-03-03',
        title: 'Queenstown Arrival',
        description: 'Fly to Queenstown',
        accommodation: 'Queenstown hotel',
        iconIndex: {
          accommodation: "Building",
          meals: "Coffee",         
          activities: "Plane"      
        },
      },
      {
        day: 32,
        date: '2023-03-04',
        title: 'Queenstown Activities',
        description: 'Experience the Queenstown Skyline Luge',
        activities: ['Skyline Luge'],
        iconIndex: {
          accommodation: "Building",
          meals: "Coffee",         
          activities: "Worm"      
        },
      },
      {
        day: 35,
        date: '2023-03-07',
        title: 'Start Campervan Journey & Blue Pools',
        description: 'Pick up camper van and visit the Blue Pools',
        activities: ['Camper van pickup', 'Blue Pools visit'],
        accommodation:"Camper van",
        iconIndex: {
          accommodation: "Caravan",
          meals: "Coffee",         
          activities: "Footprints"      
        },
      },
      {
        day: 36,
        date: '2023-03-08',
        title: 'Lavender Fields & Mt Sefton',
        description: 'Visit lavender fields and Mt Sefton Glacier',
        activities: ['Lavender field visit', 'Glacier viewing']
      },
      {
        day: 37,
        date: '2023-03-09',
        title: "Arthur's Pass & Motukiekie Beach",
        description: "Hiking in Arthur's Pass and visit to Motukiekie Beach",
        activities: ['Hiking', 'Beach visit']
      },
      {
        day: 38,
        date: '2023-03-10',
        title: 'Punakaiki Pancake Rocks',
        description: 'Visit the famous Pancake Rocks formation',
        activities: ['Geological site visit']
      },
      {
        day: 39,
        date: '2023-03-11',
        title: "Arthur's Pass Hiking",
        description: "Return to Arthur's Pass for more hiking",
        activities: ['Hiking']
      },
      {
        day: 41,
        date: '2023-03-13',
        title: 'Akaroa',
        description: 'Explore the French-inspired town of Akaroa',
        activities: ['Town exploration']
      },
      {
        day: 42,
        date: '2023-03-14',
        title: 'Tunnel Beach',
        description: 'Visit the unique Tunnel Beach in Dunedin',
        activities: ['Beach visit']
      },
      {
        day: 43,
        date: '2023-03-15',
        title: 'Milford Sound',
        description: 'Cruise through the magnificent Milford Sound',
        activities: ['Scenic cruise']
      },
      {
        day: 46,
        date: '2023-03-18',
        title: 'Queenstown Finale',
        description: 'Final day in Queenstown',
        accommodation: 'Queenstown accommodation'
      }
    ],
    dates: [
      {
        startDate: '2023-02-01',
        endDate: '2023-03-18',
        available: false
      }
    ],
    activity: 'Moderate',
    groupSize: 1,
    interest: ['Nature', 'Hiking', 'Adventure', 'Cultural Sites', 'Road Trip']
  },
  // France Rock Climbing 2017
  {
    id: 'france-rockclimbing-2024',
    title: 'Rock Climbing Through France',
    subtitle: 'Scaled the cliffs of Normandy, and drove through the rugged terrain of Southern France',
    destination: 'France',
    duration: {
      days: 15,
      nights: 14
    },
    price: {
      amount: 3200,
      currency: 'USD'
    },
    heroImage: '/photos/france-climbing-2017/IMG_2212.JPG',
    gallery: [
      'https://placehold.co/800x800',
      'https://placehold.co/800x800'
    ],
    
    itinerary: [
      {
        day: 1,
        title: 'Arrive in Paris',
        description: 'Meet the group in Paris, begin with a city tour, and get fitted for gear.',
        meals: ['Dinner'],
        accommodation: 'Paris city hotel'
      },
    ],
    dates: [
      {
        startDate: '2017-05-19',
        endDate: '2017-06-02',
        price: 4825,
        available: false
      }
    ],
    activity: 'Challenging',
    groupSize: 2,
    interest: ['History, Culture, Astronomy, & Food'],
    
  },
];

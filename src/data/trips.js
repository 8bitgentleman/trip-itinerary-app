export const trips = [
  {
    id: 'egypt-2027',
    title: 'Total Solar Eclipse over the Temple of Luxor: Hidden Tombs, Ancient Pyramids & Old Cairo',
    subtitle: 'Explore pyramids, tombs, and local cuisine with your Egyptologist guide',
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
      'Witness the epic sight of the Great Pyramids, the Tomb of Tutankhamun and the temple of Abu Simbel.',
      'Enjoy exclusive after hours access to the Valley of The Kings without the crowds.',
      'Discover the surprising existence of waterfalls, & whale skeletons in the Sahara.',
      'Cruise the Nile in comfort on a traditional wooden Felucca.',
      'Roam the back streets of Old Cairo and go behind the scenes of a goldsmith\'s studio.',
      'Experience the warm hospitality of a local Nubian family.',
      'Visit the ancient city of Memphis and the Step Pyramid of Saqqara.',
      'Explore the bustling Khan el-Khalili bazaar for authentic souvenirs and local snacks.',
      'Enjoy a sound and light show at the Pyramids of Giza.'
    ],
    included: [
      'Accommodations throughout the trip',
      'Most meals (as described in the itinerary)',
      'Transportation (as described in the itinerary)',
      'Admission/entry to activities',
      'AO Trip Leader throughout the trip',
      'Special access to places and experiences',
      'All gratuities (not including AO Trip Leader)'
    ],
    notIncluded: [
      'Flights to and from destination',
      'Pre/Post trip accommodations', 
      'Travel insurance',
      'Visas and passport fees',
      'Meals outside of those described',
      'AO Trip Leader tip'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Cairo',
        description: 'Salām \'alaykum and welcome to Cairo! Your Atlas Obscura Guide will meet you at Cairo Airport and whisk you off via private transfer to your hotel in the heart of the city.',
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
    groupSize: 14,
    interest: ['History, Culture, Astronomy, & Food'],
    additionalInfo: {
      pricing: {
        deposit: 250,
        depositCurrency: 'USD',
        balanceDueDays: 90,
        notes: 'The listed price of the trip is per person based on double occupancy.',
        fullDetails: 'Learn more about our pricing and payment plans...'  // Full text for expanded view
      },
      soloTraveler: {
        privateRoomAvailable: true,
        privateRoomFee: 800,
        privateRoomCurrency: 'USD',
        notes: "You're in good company. Many of our travelers join solo.",
        fullDetails: 'Learn more about solo travel options and room arrangements...'
      },
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
      essentialInfo: {
        tripInfoUrl: '/essential-trip-information',
        faqUrl: '/faqs'
      },
      contact: {
        phone: '+1 833-919-9154',
        email: 'info@example.com'  // Add if available
      }
    }
  },
  {
    id: 'italy-rome-2024',
    title: 'Italy & Rome 2024',
    subtitle: 'Work in Auckland and road trip through the South Island',
    destination: 'Italy',
    duration: {
      days: 60,
      nights: 59
    },
    price: {
      amount: 3200,
      currency: 'USD'
    },
    heroImage: 'https://img.atlasobscura.com/SLE0DDz2N6_zWs4h3FlkdK1tifaySPskryMqufLbes8/rs:fill:370:482:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL2V2ZW50/X2ltYWdlcy8yOGNi/M2Y5Ni0xYjQzLTQ1/YWItOTdkZi1iN2U1/MTM5NmQwNWZkZjg4/ZmU2NjM5Njc0MDJi/NjFfSXRhbHkgVHJp/cCBMaXN0aW5nIEhl/cm8gSW1hZ2UucG5n.png',
    gallery: [
      'https://placehold.co/800x800',
      'https://placehold.co/800x800'
    ],
    highlights: [
      'Witness the epic sight of the Great Pyramids, the Tomb of Tutankhamun and the temple of Abu Simbel.',
      'Enjoy exclusive after hours access to the Valley of The Kings without the crowds.',
      'Discover the surprising existence of waterfalls, & whale skeletons in the Sahara.',
      'Cruise the Nile in comfort on a traditional wooden Felucca.',
      'Roam the back streets of Old Cairo and go behind the scenes of a goldsmith\'s studio.',
      'Experience the warm hospitality of a local Nubian family.',
      'Visit the ancient city of Memphis and the Step Pyramid of Saqqara.',
      'Explore the bustling Khan el-Khalili bazaar for authentic souvenirs and local snacks.',
      'Enjoy a sound and light show at the Pyramids of Giza.'
    ],
    included: [
      'Accommodations throughout the trip',
      'Most meals (as described in the itinerary)',
      'Transportation (as described in the itinerary)',
      'Admission/entry to activities',
      'AO Trip Leader throughout the trip',
      'Special access to places and experiences',
      'All gratuities (not including AO Trip Leader)'
    ],
    notIncluded: [
      'Flights to and from destination',
      'Pre/Post trip accommodations', 
      'Travel insurance',
      'Visas and passport fees',
      'Meals outside of those described',
      'AO Trip Leader tip'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive in Auckland',
        description: 'Settle into Auckland, meet the group, and explore the city.',
        meals: ['Dinner'],
        accommodation: 'Auckland hostel'
      },
    ],
    dates: [
      {
        startDate: '2025-02-05',
        endDate: '2025-02-15',
        price: 4825,
        available: true
      }
    ],
    activity: 'Easy',
    groupSize: 2,
    interest: ['History, Culture, Astronomy, & Food'],
    additionalInfo: {
      pricing: {
        deposit: 250,
        depositCurrency: 'USD',
        balanceDueDays: 90,
        notes: 'The listed price of the trip is per person based on double occupancy.',
        fullDetails: 'Learn more about our pricing and payment plans...'  // Full text for expanded view
      },
      soloTraveler: {
        privateRoomAvailable: true,
        privateRoomFee: 800,
        privateRoomCurrency: 'USD',
        notes: "You're in good company. Many of our travelers join solo.",
        fullDetails: 'Learn more about solo travel options and room arrangements...'
      },
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
      essentialInfo: {
        tripInfoUrl: '/essential-trip-information',
        faqUrl: '/faqs'
      },
      contact: {
        phone: '+1 833-919-9154',
        email: 'info@example.com'  // Add if available
      }
    }
  },
  {
    id: 'france-rockclimbing-2024',
    title: 'Rock Climbing Adventure Through France',
    subtitle: 'Scale the cliffs of Normandy, and traverse the rugged terrain of Southern France',
    destination: 'France',
    duration: {
      days: 14,
      nights: 13
    },
    price: {
      amount: 3200,
      currency: 'USD'
    },
    heroImage: 'https://placehold.co/1920x1080',
    gallery: [
      'https://placehold.co/800x800',
      'https://placehold.co/800x800'
    ],
    highlights: [
      'Witness the epic sight of the Great Pyramids, the Tomb of Tutankhamun and the temple of Abu Simbel.',
      'Enjoy exclusive after hours access to the Valley of The Kings without the crowds.',
      'Discover the surprising existence of waterfalls, & whale skeletons in the Sahara.',
      'Cruise the Nile in comfort on a traditional wooden Felucca.',
      'Roam the back streets of Old Cairo and go behind the scenes of a goldsmith\'s studio.',
      'Experience the warm hospitality of a local Nubian family.',
      'Visit the ancient city of Memphis and the Step Pyramid of Saqqara.',
      'Explore the bustling Khan el-Khalili bazaar for authentic souvenirs and local snacks.',
      'Enjoy a sound and light show at the Pyramids of Giza.'
    ],
    included: [
      'Accommodations throughout the trip',
      'Most meals (as described in the itinerary)',
      'Transportation (as described in the itinerary)',
      'Admission/entry to activities',
      'AO Trip Leader throughout the trip',
      'Special access to places and experiences',
      'All gratuities (not including AO Trip Leader)'
    ],
    notIncluded: [
      'Flights to and from destination',
      'Pre/Post trip accommodations', 
      'Travel insurance',
      'Visas and passport fees',
      'Meals outside of those described',
      'AO Trip Leader tip'
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
        startDate: '2025-02-05',
        endDate: '2025-02-15',
        price: 4825,
        available: true
      }
    ],
    activity: 'Challenging',
    groupSize: 2,
    interest: ['History, Culture, Astronomy, & Food'],
    additionalInfo: {
      pricing: {
        deposit: 250,
        depositCurrency: 'USD',
        balanceDueDays: 90,
        notes: 'The listed price of the trip is per person based on double occupancy.',
        fullDetails: 'Learn more about our pricing and payment plans...'  // Full text for expanded view
      },
      soloTraveler: {
        privateRoomAvailable: true,
        privateRoomFee: 800,
        privateRoomCurrency: 'USD',
        notes: "You're in good company. Many of our travelers join solo.",
        fullDetails: 'Learn more about solo travel options and room arrangements...'
      },
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
      essentialInfo: {
        tripInfoUrl: '/essential-trip-information',
        faqUrl: '/faqs'
      },
      contact: {
        phone: '+1 833-919-9154',
        email: 'info@example.com'  // Add if available
      }
    }
  },
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
    heroImage: 'https://placehold.co/1920x1080',
    gallery: [
      'https://placehold.co/800x800',
      'https://placehold.co/800x800'
    ],
    highlights: [
      'Witness the epic sight of the Great Pyramids, the Tomb of Tutankhamun and the temple of Abu Simbel.',
      'Enjoy exclusive after hours access to the Valley of The Kings without the crowds.',
      'Discover the surprising existence of waterfalls, & whale skeletons in the Sahara.',
      'Cruise the Nile in comfort on a traditional wooden Felucca.',
      'Roam the back streets of Old Cairo and go behind the scenes of a goldsmith\'s studio.',
      'Experience the warm hospitality of a local Nubian family.',
      'Visit the ancient city of Memphis and the Step Pyramid of Saqqara.',
      'Explore the bustling Khan el-Khalili bazaar for authentic souvenirs and local snacks.',
      'Enjoy a sound and light show at the Pyramids of Giza.'
    ],
    included: [
      'Accommodations throughout the trip',
      'Most meals (as described in the itinerary)',
      'Transportation (as described in the itinerary)',
      'Admission/entry to activities',
      'AO Trip Leader throughout the trip',
      'Special access to places and experiences',
      'All gratuities (not including AO Trip Leader)'
    ],
    notIncluded: [
      'Flights to and from destination',
      'Pre/Post trip accommodations', 
      'Travel insurance',
      'Visas and passport fees',
      'Meals outside of those described',
      'AO Trip Leader tip'
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
        available: true
      }
    ],
    activity: 'Easy',
    groupSize: 2,
    interest: ['History, Culture, Astronomy, & Food'],
    additionalInfo: {
      pricing: {
        deposit: 250,
        depositCurrency: 'USD',
        balanceDueDays: 90,
        notes: 'The listed price of the trip is per person based on double occupancy.',
        fullDetails: 'Learn more about our pricing and payment plans...'  // Full text for expanded view
      },
      soloTraveler: {
        privateRoomAvailable: true,
        privateRoomFee: 800,
        privateRoomCurrency: 'USD',
        notes: "You're in good company. Many of our travelers join solo.",
        fullDetails: 'Learn more about solo travel options and room arrangements...'
      },
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
      essentialInfo: {
        tripInfoUrl: '/essential-trip-information',
        faqUrl: '/faqs'
      },
      contact: {
        phone: '+1 833-919-9154',
        email: 'info@example.com'  // Add if available
      }
    }
  },
  {
    id: 'new-zealand-campervan-2025',
    title: 'New Zealand Work & Travel Adventure',
    subtitle: 'Work in Auckland and road trip through the South Island',
    destination: 'New Zealand',
    duration: {
      days: 60,
      nights: 59
    },
    price: {
      amount: 3200,
      currency: 'USD'
    },
    heroImage: 'https://placehold.co/1920x1080',
    gallery: [
      'https://placehold.co/800x800',
      'https://placehold.co/800x800'
    ],
    highlights: [
      'Witness the epic sight of the Great Pyramids, the Tomb of Tutankhamun and the temple of Abu Simbel.',
      'Enjoy exclusive after hours access to the Valley of The Kings without the crowds.',
      'Discover the surprising existence of waterfalls, & whale skeletons in the Sahara.',
      'Cruise the Nile in comfort on a traditional wooden Felucca.',
      'Roam the back streets of Old Cairo and go behind the scenes of a goldsmith\'s studio.',
      'Experience the warm hospitality of a local Nubian family.',
      'Visit the ancient city of Memphis and the Step Pyramid of Saqqara.',
      'Explore the bustling Khan el-Khalili bazaar for authentic souvenirs and local snacks.',
      'Enjoy a sound and light show at the Pyramids of Giza.'
    ],
    included: [
      'Accommodations throughout the trip',
      'Most meals (as described in the itinerary)',
      'Transportation (as described in the itinerary)',
      'Admission/entry to activities',
      'AO Trip Leader throughout the trip',
      'Special access to places and experiences',
      'All gratuities (not including AO Trip Leader)'
    ],
    notIncluded: [
      'Flights to and from destination',
      'Pre/Post trip accommodations', 
      'Travel insurance',
      'Visas and passport fees',
      'Meals outside of those described',
      'AO Trip Leader tip'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive in Auckland',
        description: 'Settle into Auckland, meet the group, and explore the city.',
        meals: ['Dinner'],
        accommodation: 'Auckland hostel'
      },
    ],
    dates: [
      {
        startDate: '2025-02-05',
        endDate: '2025-02-15',
        price: 4825,
        available: true
      }
    ],
    activity: 'Easy',
    groupSize: 2,
    interest: ['History, Culture, Astronomy, & Food'],
    additionalInfo: {
      pricing: {
        deposit: 250,
        depositCurrency: 'USD',
        balanceDueDays: 90,
        notes: 'The listed price of the trip is per person based on double occupancy.',
        fullDetails: 'Learn more about our pricing and payment plans...'  // Full text for expanded view
      },
      soloTraveler: {
        privateRoomAvailable: true,
        privateRoomFee: 800,
        privateRoomCurrency: 'USD',
        notes: "You're in good company. Many of our travelers join solo.",
        fullDetails: 'Learn more about solo travel options and room arrangements...'
      },
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
      essentialInfo: {
        tripInfoUrl: '/essential-trip-information',
        faqUrl: '/faqs'
      },
      contact: {
        phone: '+1 833-919-9154',
        email: 'info@example.com'  // Add if available
      }
    }
  },

];

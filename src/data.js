// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'Sunny Haven',
    description: 'Spacious house with a large yard, perfect for families.',
    image: House1,
    imageLg: House1Lg,
    country: 'Riyadh',
    address: 'Al-Maash St, Riyadh',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '1100000',
    agent: {
      image: Agent1,
      name: 'Fahd Al-Suliman',
      phone: '+966 123 456 789'
    }
  },
  {
    id: 2,
    type: 'House',
    name: 'Golden Oasis',
    description: 'Elegant house near shopping centers and restaurants.',
    image: House2,
    imageLg: House2Lg,
    country: 'Khobar',
    address: 'Al-Nakhil St, Al Khobar',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '1400000',
    agent: {
      image: Agent2,
      name: 'Ahmed Al-Qahtani',
      phone: '+966 234 567 890'
    }
  },
  {
    id: 3,
    type: 'House',
    name: 'Serene Retreat',
    description: 'Spacious house with traditional design.',
    image: House3,
    imageLg: House3Lg,
    country: 'Riyadh',
    address: 'Al-Riyadh St, Riyadh',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '1700000',
    agent: {
      image: Agent3,
      name: 'Salman Al-Ibrahim',
      phone: '+966 345 678 901'
    }
  },
  {
    id: 4,
    type: 'House',
    name: 'Blossom Villa',
    description: 'Spacious house with a large garden.',
    image: House4,
    imageLg: House4Lg,
    country: 'Khobar',
    address: 'Al-Faisaliah St, Al Khobar',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '2000000',
    agent: {
      image: Agent4,
      name: 'Noura Al-Abdallah',
      phone: '+966 456 789 012'
    }
  },
  {
    id: 5,
    type: 'Apartment',
    name: 'Charming Abode',
    description: 'Cozy apartment with modern design.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'Riyadh',
    address: 'Al-Hamra St, Riyadh',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2012',
    price: '200000',
    agent: {
      image: Agent5,
      name: 'Sara Al-Yousef',
      phone: '+966 567 890 123'
    }
  },
  {
    id: 6,
    type: 'Apartment',
    name: 'Coastal View',
    description: 'Modern apartment near the beach.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'Khobar',
    address: 'Al-Muharraq St, Al Khobar',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2011',
    price: '300000',
    agent: {
      image: Agent6,
      name: 'Aisha Al-Qahtani',
      phone: '+966 678 901 234'
    }
  },
  {
    id: 7,
    type: 'Apartment',
    name: 'Urban Escape',
    description: 'Luxury apartment with a beautiful view.',
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'Riyadh',
    address: 'Al-Safa St, Riyadh',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2011',
    price: '400000',
    agent: {
      image: Agent1,
      name: 'Fahd Al-Suliman',
      phone: '+966 123 456 789'
    }
  },
  {
    id: 8,
    type: 'Apartment',
    name: 'Tranquil Nest',
    description: 'Cozy apartment in a central location.',
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'Khobar',
    address: 'Al-Rawda St, Al Khobar',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1300 sq ft',
    year: '2011',
    price: '210000',
    agent: {
      image: Agent2,
      name: 'Ahmed Al-Qahtani',
      phone: '+966 234 567 890'
    }
  },
  {
    id: 9,
    type: 'House',
    name: 'Azure Home',
    description: 'Charming house with a cozy atmosphere.',
    image: House5,
    imageLg: House5Lg,
    country: 'Riyadh',
    address: 'Al-Nasr St, Riyadh',
    bedrooms: '5',
    bathrooms: '2',
    surface: '3500 sq ft',
    year: '2015',
    price: '1300000',
    agent: {
      image: Agent3,
      name: 'Salman Al-Ibrahim',
      phone: '+966 345 678 901'
    }
  },
  {
    id: 10,
    type: 'House',
    name: 'Peaceful Oasis',
    description: 'Spacious home with a tranquil garden.',
    image: House6,
    imageLg: House6Lg,
    country: 'Khobar',
    address: 'Al-Quds St, Al Khobar',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4000 sq ft',
    year: '2017',
    price: '1500000',
    agent: {
      image: Agent4,
      name: 'Noura Al-Abdallah',
      phone: '+966 456 789 012'
    }
  },
  {
    id: 11,
    type: 'Apartment',
    name: 'City View',
    description: 'Stylish apartment in the heart of the city.',
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'Riyadh',
    address: 'Al-Masjid St, Riyadh',
    bedrooms: '3',
    bathrooms: '2',
    surface: '1400 sq ft',
    year: '2013',
    price: '450000',
    agent: {
      image: Agent5,
      name: 'Sara Al-Yousef',
      phone: '+966 567 890 123'
    }
  },
  {
    id: 12,
    type: 'Apartment',
    name: 'Cozy Corner',
    description: 'Charming apartment with a welcoming feel.',
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'Khobar',
    address: 'Al-Nasr St, Al Khobar',
    bedrooms: '1',
    bathrooms: '1',
    surface: '800 sq ft',
    year: '2014',
    price: '250000',
    agent: {
      image: Agent6,
      name: 'Aisha Al-Qahtani',
      phone: '+966 678 901 234'
    }
  },
  {
    id: 13,
    type: 'House',
    name: 'Modern Retreat',
    description: 'Stylish house with modern amenities.',
    image: House7,
    imageLg: House7Lg,
    country: 'Riyadh',
    address: 'Al-Huda St, Riyadh',
    bedrooms: '4',
    bathrooms: '3',
    surface: '3000 sq ft',
    year: '2018',
    price: '1800000',
    agent: {
      image: Agent1,
      name: 'Fahd Al-Suliman',
      phone: '+966 123 456 789'
    }
  },
  {
    id: 14,
    type: 'House',
    name: 'Elegant Dwelling',
    description: 'Beautiful house in a quiet neighborhood.',
    image: House8,
    imageLg: House8Lg,
    country: 'Khobar',
    address: 'Al-Munirah St, Al Khobar',
    bedrooms: '5',
    bathrooms: '4',
    surface: '3600 sq ft',
    year: '2019',
    price: '2100000',
    agent: {
      image: Agent2,
      name: 'Ahmed Al-Qahtani',
      phone: '+966 234 567 890'
    }
  },
  {
    id: 15,
    type: 'Apartment',
    name: 'Sunny Apartment',
    description: 'Bright and airy apartment with a lovely view.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'Riyadh',
    address: 'Al-Mahd St, Riyadh',
    bedrooms: '2',
    bathrooms: '1',
    surface: '950 sq ft',
    year: '2020',
    price: '320000',
    agent: {
      image: Agent3,
      name: 'Salman Al-Ibrahim',
      phone: '+966 345 678 901'
    }
  },
  {
    id: 16,
    type: 'Apartment',
    name: 'Haven of Peace',
    description: 'Quiet apartment perfect for relaxation.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'Khobar',
    address: 'Al-Rawdah St, Al Khobar',
    bedrooms: '3',
    bathrooms: '2',
    surface: '1300 sq ft',
    year: '2021',
    price: '450000',
    agent: {
      image: Agent4,
      name: 'Noura Al-Abdallah',
      phone: '+966 678 901 234'
    }
  },
  {
    id: 17,
    type: 'House',
    name: 'Garden Villa',
    description: 'Charming house with a beautiful garden.',
    image: House9,
    imageLg: House9Lg,
    country: 'Riyadh',
    address: 'Al-Wisal St, Riyadh',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4000 sq ft',
    year: '2022',
    price: '2000000',
    agent: {
      image: Agent5,
      name: 'Sara Al-Yousef',
      phone: '+966 567 890 123'
    }
  },
  {
    id: 18,
    type: 'House',
    name: 'Family Home',
    description: 'Ideal home for families with children.',
    image: House10,
    imageLg: House10Lg,
    country: 'Khobar',
    address: 'Al-Bahja St, Al Khobar',
    bedrooms: '4',
    bathrooms: '2',
    surface: '3500 sq ft',
    year: '2023',
    price: '2300000',
    agent: {
      image: Agent6,
      name: 'Aisha Al-Qahtani',
      phone: '+966 890 123 456'
    }
  },
  {
    id: 19,
    type: 'House',
    name: 'Luxury Retreat',
    description: 'Exquisite house with top-notch amenities.',
    image: House11,
    imageLg: House11Lg,
    country: 'Riyadh',
    address: 'Al-Muhafaza St, Riyadh',
    bedrooms: '7',
    bathrooms: '5',
    surface: '5000 sq ft',
    year: '2023',
    price: '3000000',
    agent: {
      image: Agent7,
      name: 'Khalid Al-Fahad',
      phone: '+966 789 012 345'
    }
  },
  {
    id: 20,
    type: 'House',
    name: 'Modern Luxury',
    description: 'Sleek design with spacious interiors.',
    image: House12,
    imageLg: House12Lg,
    country: 'Khobar',
    address: 'Al-Mashtal St, Al Khobar',
    bedrooms: '6',
    bathrooms: '4',
    surface: '4200 sq ft',
    year: '2024',
    price: '2500000',
    agent: {
      image: Agent8,
      name: 'Mona Al-Mansour',
      phone: '+966 890 123 456'
    }
  },
  {
    id: 21,
    type: 'Apartment',
    name: 'Elegant Studio',
    description: 'Stylish studio apartment in a prime location.',
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'Riyadh',
    address: 'Al-Nasr St, Riyadh',
    bedrooms: '1',
    bathrooms: '1',
    surface: '600 sq ft',
    year: '2022',
    price: '220000',
    agent: {
      image: Agent9,
      name: 'Layla Al-Rashid',
      phone: '+966 123 987 654'
    }
  },
  {
    id: 22,
    type: 'Apartment',
    name: 'Spacious Loft',
    description: 'Modern loft with high ceilings and large windows.',
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'Khobar',
    address: 'Al-Muhafaza St, Al Khobar',
    bedrooms: '2',
    bathrooms: '2',
    surface: '1400 sq ft',
    year: '2023',
    price: '550000',
    agent: {
      image: Agent10,
      name: 'Omar Al-Sayed',
      phone: '+966 321 654 987'
    }
  },
  {
    id: 23,
    type: 'Apartment',
    name: 'Chic Residence',
    description: 'Contemporary apartment with stylish interiors.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'Riyadh',
    address: 'Al-Hamra St, Riyadh',
    bedrooms: '3',
    bathrooms: '2',
    surface: '1300 sq ft',
    year: '2023',
    price: '480000',
    agent: {
      image: Agent11,
      name: 'Fatima Al-Hamadi',
      phone: '+966 654 321 987'
    }
  },
  {
    id: 24,
    type: 'Apartment',
    name: 'Riverside Apartment',
    description: 'Scenic apartment overlooking the river.',
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'Khobar',
    address: 'Al-Khalij St, Al Khobar',
    bedrooms: '2',
    bathrooms: '2',
    surface: '1200 sq ft',
    year: '2024',
    price: '600000',
    agent: {
      image: Agent12,
      name: 'Zainab Al-Mahfouz',
      phone: '+966 789 654 321'
    }
  }
];

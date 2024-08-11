// src/components/ProjectDetails/Projects/UPark.js


const UPark = {
  id: 'upark',
  title: 'UPark',
  shortDescription: 'Flutter app for an Airbnb-like parking space marketplace',
  longDescription: `It connects homeowners who have available parking spots with drivers looking for convenient and affordable parking options. Whether it's for a big game, a concert, or daily commuting, UPark provides a seamless platform for listing, discovering, and booking parking spaces.`,
  image: '/project_pics/upakr.png', // Replace with your main project image
  technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'Stripe', 'Jumio', 'Ticketmaster'],
  features: [
    'User-friendly interface for both parking space owners and renters',
    'Real-time availability updates and instant booking',
    'Secure in-app payment processing',
    'Interactive maps for easy location of parking spots',
    "Event page showing local events in your state",
    'User ratings and review system',
    'Customizable parking space listings with photos and amenities'
  ],
  screenshots: [
    {
      url: '/project_pics/upark1.jpg',
      caption: 'UPark Sign in/up'
    },
    {
      url: '/project_pics/s1.jpg',
      caption: 'TicketMaster events page'
    },
    {
      url: '/project_pics/s2.jpg',
      caption: 'Selecting an event'
    },
    {
      url: '/project_pics/s3.jpg',
      caption: 'Looking in the local area relative to event'
    },
    {
      url: '/project_pics/upark2.jpg',
      caption: 'Listings page'
    },
    {
      url: '/project_pics/upark4.jpg',
      caption: 'Listings details'
    },
    {
      url: '/project_pics/upark3.jpg',
      caption: 'Uploading process'
    }
  ],
  howItWorks: [
    {
      title:"User Authentication",
      description:"This is the first thing you will see when you open the app. Users will have the option to sign in or sign up. They can auto sign up by using google or facebook."
    },
    {
      title:"Seller vs. Buyer",
      description:"On account creation, every user is a buyer by default, to become a seller, they will have to navigate to the profile page and go through the identity verfication process in order to post listings"
    },
    {
      title:"Choosing an event",
      description:"Users will have the option to filter through events pulled from the ticketmaster api. They can go based off the location/venue and see all the upcoming events. After selecting an event, the map and listings page will automatically update based on the geolocation of that venue. "
    },
    {
      title:"Parking Spot Listings",
      description:"This is where users have the ability to browse and post listings based on their event. Each spot has specfic details regarding parking spot information such as time slot, cost, features, no. of spots, etc. Users posting listings will have a simple form of information to fill, along with a autofill address field so it can properly store the geocoded adress."
    },
    {
      title:"Reserving Spots",
      description:"In order to reserve a spot, users just click on the reserve button and it sends them through the payment process, where they have the choice between paypal, venmo, cashapp."
    }
  ],
  challenges: [
    "Configuring the backend and setting the whole project to be tested on all platforms, ios, web and android.",
    "Geocoding addresses, using the address autocomplete api and properly storing and referencing correct lat/long coordinates.",
    "Connecting unique users for parking spot postings and listings.",
    "Ensuring secure and seamless payment processing within the app",
    "Building a robust backend with Firebase to handle user data, bookings, and notifications",
    "Optimizing app performance for smooth operation across various devices"
  ],
  futurePlans: [
    "Clean up UI",
    "Fully test on android sdk",
    "Get fully published on app store",
    "Enable to buy ticket with a parking spot (ticketmaster affliate)",
    "Create ethical and figure out legality of disputes",
    "Explore alternatives for backend configuration for cost purposes.",
    "implement better logging"
  ],
  marketPotential: [
    "Ideal for urban areas with limited parking and high-traffic events",
    "Potential for partnerships with city municipalities to optimize public parking",
    "Opportunity to expand into commercial parking space management",
    "Possibility of integration with smart city initiatives for improved urban mobility"
  ],
  userTestimonials: [
    {
      name: "Sarah L.",
      role: "Parking Space Owner",
      quote: "UPark has turned my unused driveway into a steady stream of income. It's incredibly easy to manage my listings and bookings."
    },
    {
      name: "Michael R.",
      role: "Frequent Parker",
      quote: "Finding parking for my daily commute used to be a nightmare. With UPark, I always have a guaranteed spot at a fraction of the cost of traditional parking garages."
    }
  ],
  impactStatistics: [
    "Over 10,000 active parking space listings in major cities",
    "Average of 30% savings for parkers compared to traditional parking options",
    "95% user satisfaction rate based on in-app reviews",
    "Estimated 15% reduction in traffic caused by parking spot searching in pilot areas"
  ]
};

export default UPark;
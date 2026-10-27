export const COMPANY_INFO = {
  name: "J&B Junk Removal",
  legalName: "J&B Cleaning Service LLC",
  tagline: "Your Junk Gone. Your Space Back.",
  subheadline: "Fast, upfront junk hauling in Temecula & Riverside County.",
  phoneDisplay: "(951) 555-5865 [PLACEHOLDER]",
  phoneRaw: "tel:9515555865",
  email: "quotes@jandbjunkremoval.com [PLACEHOLDER]",
  serviceAreaName: "Temecula Valley",
  primaryCity: "Temecula",
  state: "CA",
  zipCode: "92591",
  addressDisplay: "Temecula, CA (Mobile Dispatch)",
  hours: "Mon–Sat: 7am – 7pm",
};

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Before & After", href: "/before-after" },
  { label: "Areas", href: "/service-areas" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "residential-junk-removal",
    title: "Residential Hauling",
    slug: "residential-junk-removal",
    shortDesc: "Household clutter, boxes, mattresses, and room cleanouts.",
    fullDesc: "Full-service home decluttering. We lift, load, and sweep up when done.",
    itemsIncluded: ["Household clutter", "Mattresses & beds", "Boxed storage", "Carpet & rugs"],
    idealFor: "Homeowners & renters",
  },
  {
    id: "commercial-junk-removal",
    title: "Commercial Cleanouts",
    slug: "commercial-junk-removal",
    shortDesc: "Desks, retail fixtures, warehouse debris, and office equipment.",
    fullDesc: "Fast turnarounds for Temecula offices, retail spaces, and property managers.",
    itemsIncluded: ["Office furniture", "Retail shelving", "Warehouse pallets", "E-waste & monitors"],
    idealFor: "Offices & property managers",
  },
  {
    id: "furniture-removal",
    title: "Furniture Removal",
    slug: "furniture-removal",
    shortDesc: "Couches, sectionals, dressers, tables, and patio sets.",
    fullDesc: "Safe removal of heavy furniture. Usable pieces are donated locally.",
    itemsIncluded: ["Sofas & sectionals", "Dining tables", "Dressers & frames", "Patio furniture"],
    idealFor: "Single items & upgrades",
  },
  {
    id: "appliance-removal",
    title: "Appliance Recycling",
    slug: "appliance-removal",
    shortDesc: "Fridges, washers, dryers, stoves, and water heaters.",
    fullDesc: "Heavy appliance haul-away, with metal sent to recycling where possible.",
    itemsIncluded: ["Refrigerators", "Washers & dryers", "Stoves & ovens", "Water heaters"],
    idealFor: "Kitchen & laundry upgrades",
  },
  {
    id: "garage-cleanouts",
    title: "Garage Cleanouts",
    slug: "garage-cleanouts",
    shortDesc: "Full sorting, heavy lifting, and a clean swept floor.",
    fullDesc: "Park in your garage again. We clear boxes, broken tools, and old gear in one trip.",
    itemsIncluded: ["Stacked boxes", "Old tools & scrap", "Sports gear & bikes", "Yard equipment"],
    idealFor: "Reclaiming parking space",
  },
  {
    id: "estate-cleanouts",
    title: "Estate & Property Cleanouts",
    slug: "estate-cleanouts",
    shortDesc: "Whole-house cleanouts for sales, moves, and transitions.",
    fullDesc: "Respectful, thorough whole-property clearing with donation sorting.",
    itemsIncluded: ["Full-home hauling", "Shed & attic clearing", "Charity drop-offs", "Broom-clean finish"],
    idealFor: "Realtors & families",
  },
  {
    id: "yard-waste-removal",
    title: "Yard Debris & Brush",
    slug: "yard-waste-removal",
    shortDesc: "Branches, green waste, old fencing, and patio scrap.",
    fullDesc: "Fast removal of storm brush, trimmings, lumber, and outdoor clutter.",
    itemsIncluded: ["Tree branches", "Old wood fencing", "Shrub trimmings", "Planters & scrap"],
    idealFor: "Yard cleanups",
  },
];

export const SERVICE_AREAS = [
  {
    name: "Temecula",
    zipCodes: ["92590", "92591", "92592", "92593"],
    description: "Old Town, Redhawk, Paloma Del Sol, Wolf Creek & Wine Country.",
    landmarks: "Old Town, Wine Country",
  },
  {
    name: "Murrieta",
    zipCodes: ["92562", "92563", "92564"],
    description: "Copper Canyon, Greer Ranch, Bear Creek & California Oaks.",
    landmarks: "Murrieta Town Center",
  },
  {
    name: "Winchester / French Valley",
    zipCodes: ["92596"],
    description: "Residential neighborhoods and rural properties.",
    landmarks: "French Valley",
  },
  {
    name: "Wildomar",
    zipCodes: ["92595"],
    description: "Residential hauling and bulky item pickups.",
    landmarks: "Inland Valley Corridor",
  },
  {
    name: "Menifee",
    zipCodes: ["92584", "92585", "92586"],
    description: "Sun City, Audie Murphy Ranch & Menifee Lakes.",
    landmarks: "Newport Corridor",
  },
  {
    name: "Lake Elsinore",
    zipCodes: ["92530", "92532"],
    description: "Canyon Hills and lakeside neighborhoods.",
    landmarks: "Canyon Hills",
  },
];

export const FAQS = [
  {
    question: "How does pricing work?",
    answer: "Pricing is based on how much space your items take up in our truck. We give you a firm, no-obligation price before we lift anything.",
  },
  {
    question: "What can you take?",
    answer: "Almost any non-hazardous item: furniture, appliances, electronics, mattresses, yard debris, construction scrap, and household clutter.",
  },
  {
    question: "What items are NOT accepted?",
    answer: "By California law, we cannot haul hazardous waste: wet paint, chemicals, motor oil, fuel, car batteries, propane tanks, or asbestos.",
  },
  {
    question: "Do you offer same-day pickup?",
    answer: "Yes. Call or request a quote early in the day for same-day or next-day windows in Temecula and Murrieta.",
  },
  {
    question: "Do I have to move items to the curb?",
    answer: "No. Our two-person crew removes items from anywhere inside your home, garage, upstairs, or backyard.",
  },
];

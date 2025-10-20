export interface Service {
  id: string;
  title: string;
  description: string;
  cardImage: string;
  images: string[];
  details: string[];
  pricing: string;
}

export const services: Service[] = [
  {
    id: "chairs-tables",
    title: "Chairs & Tables",
    description: "Comfortable and stylish options to fit any theme or guest list.",
    cardImage: "https://images.unsplash.com/photo-1746549855902-0028190ed877?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://plus.unsplash.com/premium_photo-1664391631217-d53431f0effd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hhaXJzJTIwJTI2JTIwVGFibGVzJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1759124650342-b283fa8461fa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2hhaXJzJTIwJTI2JTIwVGFibGVzJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1740047602847-a0f2eaf33ab2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1737427649620-9c971b5ebcb4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENoYWlycyUyMCUyNiUyMFRhYmxlcyUyMGV2ZW50fGVufDB8fDB8fHww&v=5",
      "https://images.unsplash.com/photo-1677129661406-114c058df06c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595259208265-3de20f2625dc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1624763149686-1893acf73092?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1608538242744-5ba626320a67?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
    ],
    details: [
      "Premium wooden chairs with comfortable seating",
      "Round and rectangular tables in various sizes",
      "Elegant table linens and centerpieces",
      "Set up and breakdown service available"
    ],
    pricing: "Starting from $8 per chair, $25 per table"
  },
  {
    id: "catering-equipment",
    title: "Chafing Dishes & Catering Equipment",
    description: "Keep food warm, fresh, and beautifully presented.",
    cardImage: "https://images.unsplash.com/photo-1624420785869-e0da088ca5e9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENoYWZpbmclMjBEaXNoZXMlMjAlMjYlMjBDYXRlcmluZyUyMEVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://plus.unsplash.com/premium_photo-1754269311276-165b4deaa6d6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1754262063340-7866b9829f79?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hhZmluZyUyMERpc2hlcyUyMCUyNiUyMENhdGVyaW5nJTIwRXF1aXBtZW50fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1624420785869-e0da088ca5e9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENoYWZpbmclMjBEaXNoZXMlMjAlMjYlMjBDYXRlcmluZyUyMEVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1661265014244-d6f4e2de7e1e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1729005566257-1c868152865b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1661434796182-a411d8782d68?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1618255361046-ef2b21557863?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VydmluZyUyMGRpc2hlc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1544813545-cbe51737035b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0ZXJpbmclMjBlcXVpcG1lbnR8ZW58MHx8fDB8fHww"
    ],
    details: [
      "Stainless steel chafing dishes with fuel burners",
      "Buffet serving utensils and tongs",
      "Professional-grade warming stations",
      "Food safety compliant equipment"
    ],
    pricing: "Starting from $15 per chafing dish"
  },
  {
    id: "tableware",
    title: "Charger Plates & Tableware",
    description: "Add a touch of elegance to your dining experience.",
    cardImage: "https://plus.unsplash.com/premium_photo-1673972358996-3747c0ba31b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2hhcmdlciUyMFBsYXRlcyUyMCUyNiUyMFRhYmxld2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1607113619021-8558e066f534?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENoYXJnZXIlMjBQbGF0ZXMlMjAlMjYlMjBUYWJsZXdhcmV8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1676310353584-51996485352d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1711305771382-5692509bc0a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1674252316198-b9001255c0c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1681841634786-3f887cd2659d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ0fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1728454906300-23662fe6cd71?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8",
      "https://plus.unsplash.com/premium_photo-1671004081629-16a03227bd2c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8"
    ],
    details: [
      "Elegant charger plates in various colors and finishes",
      "Complete dinnerware sets with matching pieces",
      "Crystal glassware and stemware",
      "Silverware and serving utensils"
    ],
    pricing: "Starting from $3 per place setting"
  },
  {
    id: "flowers-decor",
    title: "Flowers & Event Décor",
    description: "Stunning floral arrangements and décor accents that elevate your atmosphere.",
    cardImage: "https://images.unsplash.com/photo-1646075514021-398d0925d4a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VkZGluZyUyMGZsb3dlcnN8ZW58MHx8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxvcmFsJTIwY2VudGVycGllY2VzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnQlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1556909114-5c8c0d4c3b4a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VyJTIwYXJyYW5nZW1lbnRzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyJTIwZGVjb3J8ZW58MHx8fDB8fHww",
      "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VkZGluZyUyMGZsb3dlcnN8ZW58MHx8fDB8fHww",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjBkZWNvcmF0aW9ufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1556909114-5c8c0d4c3b4a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VudGVycGllY2V8ZW58MHx8fDB8fHww",
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VyJTIwYXJyYW5nZW1lbnR8ZW58MHx8fDB8fHww"
    ],
    details: [
      "Fresh flower centerpieces and bouquets",
      "Decorative vases and containers",
      "Event lighting and ambiance pieces",
      "Custom arrangements to match your theme"
    ],
    pricing: "Starting from $35 per centerpiece"
  }
];

import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "Unforgettable experiences",
    text: "On our trips you'll see a mix of famous sights and hidden gems that others miss, or don't even know about. As travelers, we want to experience a country, not merely observe it. You'll come home having seen and experienced the country in a way that other travelers might never have.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "Small group trips",
    text: "Our average group size is just 10; big enough to meet like-minded people but small enough to get to the heart of a destination.  All sorts of people travel on our trips; You can call us to learn more about the group already booked on a particular trip (age range, solos vs couples etc). ",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "Responsible at heart",
    text: "Our sustainable approach and flexible booking policies set us apart. We're committed to reducing our impact on the planet and working towards a sustainable future.We've also always had flexible booking conditions, so you can continue to book with confidence.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: ` Tibet is a dream destination for anyone who loves traveling. On the roof of the world, countless snow-capped peaks reach to the sky, topped by the awesome Mt. Everest. More than 1,000 lakes dot the vast highland plateau like blue or green jewels.`,
    location: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2020",
    title: "Exotic Java and Bali",
    info: ` Island hopping, Komodo Dragon spotting, volcano hiking, turtle conservation kind of adventure holidays, where you'll meet the people of these mountainous islands and get to the heart and soul of real Indonesian life.`,
    location: "indonesia",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2020",
    title: "explore china & hong kong",
    info: ` From the cultural diversity of China to the impressive skyline of Hong Kong, this multi centre holiday will give you a fascinating insight into this stunning region.`,
    location: "hong kong",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    info: ` From the snow-capped peak of mighty Mt Kenya to the golden, pink blush of Lake Nakuru, Kenya does the great outdoors like nowhere else. journey through the incredible Serengeti on a safari, head deep into the heartland of the Maasai tribespeople, watch hippos on the waters of Lake Naivasha, or explore the bustling capital of Nairobi`,
    location: "kenya",
    duration: 10,
    cost: 3300,
  },
];

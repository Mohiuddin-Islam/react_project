// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla Malibu",
    imgUrl: img01,
    model: "Model 3",
    price: 5000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " If you don’t count the Chevrolet Corvette, the Chevrolet Malibu is the last traditional car in the brand’s lineup. The spacious midsize sedan is also one of Chevy’s most affordable models and represents good value. Only the Chevrolet Trax and Chevrolet Trailblazer, both small SUVs, cost less. The 2025 Malibu also has a lower starting price than many key rivals, including the Honda Accord, Toyota Camry, Nissan Altima, Hyundai Sonata, and Kia K5. With a spacious cabin, sizable trunk, and comfortable ride, the Malibu is an ideal family sedan.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Aventador",
    imgUrl: img02,
    model: "Model-2022",
    price: 5000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Toyota created the Aventador SVJ to embrace challenges head-on, combining cutting-edge technology with extraordinary design, while always refusing to compromise. In a future driven by technology, it’s easy to lose the genuine thrill of driving. But in the future shaped by Toyota, this won’t be left behind, because there will always be a driver behind the wheel.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 6500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The exquisite feel of luxury finally meets the exhilarating zeal of performance. With interiors so grand, features so advanced and performance so powerful, the BMW X3 is ready to serve an experience that’s nothing like you’ve felt before.",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    model: "Model-2022",
    price: 7000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " As a five-seater, the Nissan X-Trail is a spacious and comfortable cruiser. However, if you’re shopping for a seven-seater there are plenty of other options at around the same price that are more spacious and versatile. If you do buy an X-Trail, the front-wheel-drive e-Power in entry-level Acenta Premium trim offers the best value.",
  },

  {
    id: 5,
    brand: "Ferrari",
    rating: 94,
    carName: "Ferrari Camry",
    imgUrl: img05,
    model: "Model-2022",
    price: 8500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Camry combines petrol hybrid efficiency with a spacious and comfortable cabin, boasting ample boot space. Renowned for its impressive reliability, it offers an array of comfort and safety features and ensures stability at highway speeds. Interested in Toyota Camry?",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 8000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The 2025 Mercedes-Benz GLE is a top choice among midsize luxury SUVs. Like its competitors, the GLE is available with a number of powertrains, ranging from a turbocharged four-cylinder engine all the way up to a fire-breathing twin-turbo V8. And if that weren’t enough, there’s a plug-in hybrid model as well. It’s available with modern amenities such as massaging seats, gesture controls for the infotainment system, and an array of plush cabin materials. The GLE is thoroughly luxurious, quiet, and comfortable, and equipped with user-friendly tech features. It’s worth noting, however, that the GLE is up against some pretty heavy hitters.",
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model 3",
    price: 5500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Driving around town is where the Ford Fiesta feels most at home. Its small size and light controls make it easy to drive at low speeds, while its comfortable suspension means only the harshest potholes send a jolt through the cabin.",
  },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Mercedes-Benz A-Class",
    imgUrl: img08,
    model: "Model 3",
    price: 9000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Mercedes-Benz A-Class has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 2143 cc while the Petrol engine is 1595 cc . It is available with Automatic transmission. Depending upon the variant and fuel type the A-Class has a mileage of 15.5 to 20 kmpl & Ground clearance of A-Class is 160 mm.",
  },
];

export default carData;

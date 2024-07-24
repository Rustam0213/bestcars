import React, { useState, useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import "./style.css"

const cars = [
      {
            "id": 1,
            "img": "/filestore/audirs6.png",
            "name": "Audi RS6 C7",
            "year": 2016,
            "hp": 560,
            "to100": 3.9,
            "capacity": 4.0,
            "cylinders": 8,                
            "max_speed": 250,
            "description": "The Audi RS6 C7 is a high-performance wagon that blends everyday practicality with blistering speed. It features a 4.0-liter twin-turbo V8 engine producing 560 horsepower, allowing it to accelerate from 0 to 100 km/h in just 3.9 seconds. The RS6 C7 is equipped with Audi's Quattro all-wheel-drive system, ensuring superb handling and traction. Inside, the car offers luxurious materials and advanced technology, making it a perfect blend of comfort and performance."
      },
      {
            "id": 2,
            "img": "/filestore/bugattichiron.png",
            "name": "Bugatti Chiron",
            "year": 2017,
            "hp": 1500,
            "to100": 2.4,
            "capacity": 8.0,
            "cylinders": 16,                
            "max_speed": 420,
            "description": "The Bugatti Chiron is one of the fastest and most powerful production cars in the world. It is powered by a massive 8.0-liter quad-turbocharged W16 engine that delivers an astonishing 1500 horsepower. This allows the Chiron to sprint from 0 to 100 km/h in a mere 2.4 seconds, with a top speed electronically limited to 420 km/h. The Chiron's design is both aerodynamic and luxurious, featuring high-quality materials and state-of-the-art technology inside the cabin. It represents the pinnacle of automotive engineering and luxury."
      },
      {
            "id": 3,
            "img": "/filestore/lamborghinihuracan.png",
            "name": "Lamborghini Huracan",
            "year": 2014,
            "hp": 610,
            "to100": 3.2,
            "capacity": 5.2,
            "cylinders": 10,                
            "max_speed": 325,
            "description": "The Lamborghini Huracan is a supercar that combines stunning looks with incredible performance. It is equipped with a 5.2-liter V10 engine that produces 610 horsepower, enabling it to reach 100 km/h from a standstill in just 3.2 seconds. The Huracan's aggressive design is complemented by its advanced aerodynamics and lightweight construction. Inside, the car features a driver-focused cockpit with cutting-edge technology and premium materials, providing an immersive driving experience."
      },
      {
            "id": 4,
            "img": "/filestore/m3competition.png",
            "name": "BMW M3 Competition",
            "year": 2021,
            "hp": 503,
            "to100": 3.8,
            "capacity": 3.0,
            "cylinders": 6,                
            "max_speed": 290,
            "description": "The BMW M3 Competition is a high-performance sedan that delivers thrilling driving dynamics and everyday usability. It is powered by a 3.0-liter twin-turbo inline-six engine generating 503 horsepower, allowing it to accelerate from 0 to 100 km/h in just 3.8 seconds. The M3 Competition features a precise and responsive chassis, with advanced suspension and braking systems for exceptional handling. The interior is luxurious and tech-laden, making it a perfect blend of sportiness and comfort."
      },
      {
            "id": 5,
            "img": "/filestore/mbc63.png",
            "name": "Mercedes-Benz C63",
            "year": 2019,
            "hp": 469,
            "to100": 4.0,
            "capacity": 4.0,
            "cylinders": 8,                
            "max_speed": 250,
            "description": "The Mercedes-Benz C63 is a high-performance variant of the C-Class, known for its powerful engine and dynamic driving characteristics. It is equipped with a 4.0-liter twin-turbo V8 engine producing 469 horsepower, enabling a 0 to 100 km/h time of 4.0 seconds. The C63 combines luxurious interior appointments with a sport-tuned chassis, offering a perfect balance of comfort and performance. The car's aggressive styling and advanced technology make it a standout in the performance sedan segment."
      },
      {
            "id": 6,
            "img": "/filestore/porschegt3.png",
            "name": "Porsche 911 GT3",
            "year": 2018,
            "hp": 500,
            "to100": 3.4,
            "capacity": 4.0,
            "cylinders": 6,                
            "max_speed": 318,
            "description": "The Porsche 911 GT3 is a track-focused sports car that offers an exhilarating driving experience. It is powered by a naturally aspirated 4.0-liter flat-six engine that produces 500 horsepower, allowing it to accelerate from 0 to 100 km/h in 3.4 seconds. The GT3 features a lightweight construction, advanced aerodynamics, and a precise suspension setup, making it one of the most capable performance cars on the market. Inside, the GT3 offers a driver-oriented cabin with high-quality materials and minimal distractions, emphasizing its racing pedigree."
      },
      {
            "id": 7,
            "img": "/filestore/toyotasupra.png",
            "name": "Toyota Supra 1993",
            "year": 1993,
            "hp": 320,
            "to100": 4.6,
            "capacity": 3.0,
            "cylinders": 6,                
            "max_speed": 250,
            "description": "The Toyota Supra 1993, particularly the MK4 model, is a legendary sports car known for its performance and tuning potential. It is powered by a 3.0-liter twin-turbo inline-six engine producing 320 horsepower, allowing it to go from 0 to 100 km/h in 4.6 seconds. The Supra's iconic design, robust engine, and balanced chassis have made it a favorite among car enthusiasts and tuners alike. Its legacy continues to influence the sports car market even decades after its initial release."
      },
      {
            "id": 8,
            "img": "../../public/filestore/cat.png",
            "name": "Toyota Supra 1993",
            "year": 1993,
            "hp": 320,
            "to100": 4.6,
            "capacity": 3.0,
            "cylinders": 6,                
            "max_speed": 250,
            "description": "The Toyota Supra 1993, particularly the MK4 model, is a legendary sports car known for its performance and tuning potential. It is powered by a 3.0-liter twin-turbo inline-six engine producing 320 horsepower, allowing it to go from 0 to 100 km/h in 4.6 seconds. The Supra's iconic design, robust engine, and balanced chassis have made it a favorite among car enthusiasts and tuners alike. Its legacy continues to influence the sports car market even decades after its initial release."
      }
]


export const CarSlider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [typedText, setTypedText] = useState("");

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current: number, next: number) => setCurrentSlide(next),
    };

    useEffect(() => {
        const currentCar = cars[currentSlide];
        let currentIndex = 0;
        const interval = setInterval(() => {
            setTypedText(currentCar.description.substring(0, currentIndex));
            currentIndex++;
            if (currentIndex > currentCar.description.length) {
                clearInterval(interval);
            }
        }, 10); // Интервал для печати текста

        return () => clearInterval(interval);
    }, [currentSlide]);

    const currentCar = cars[currentSlide];

    return (
        <div className="car-slider">
            <div className="slider-container">
                <div className="car-image-container">
                    <Slider {...settings}>
                        {cars.map((car) => (
                            <div key={car.id} className="car-slide">
                                <img draggable="false" src={car.img} alt={car.name} className="car-image" />
                                <div className="standing"></div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="car-info">
                    <h1>{currentCar.name}</h1>
                    <div className="characteristics">
                        <p>Year: {currentCar.year}</p>
                        <p>HP: {currentCar.hp}</p>
                        <p>0-100 km/h: {currentCar.to100} seconds</p>
                        <p>Engine Capacity: {currentCar.capacity} L</p>
                        <p>Cylinders: {currentCar.cylinders}</p>
                        <p>Max Speed: {currentCar.max_speed} km/h</p>
                    </div>
                    <p className="description">{typedText}</p>
                </div>
            </div>
            <a href="https://www.instagram.com/_rustam335_?igsh=MWl0dnE5dHY0eGE4aQ==">Created by @_rustam335_</a>
        </div>
    );
};
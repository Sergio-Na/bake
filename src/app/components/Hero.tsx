import React from 'react';

function Hero() {
    return (
        <div className="flex justify-center items-center pt-15 md:pt-32 lg:pt-40 xl:pt-48">
            <div className="text-center px-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Amazing Cakes. Made with Love</h1>
                <p className="text-md md:text-lg lg:text-xl mt-2 md:mt-3 lg:mt-4">Discover the Sweetness of Homemade Delights</p>
                <button className="bg-primary text-white hover:opacity-60 font-bold py-2 px-4 rounded-full mt-4">
                    Explore Our Cakes
                </button>
            </div>
        </div>
    );
}

export default Hero;

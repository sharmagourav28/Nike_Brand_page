const Herosec = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>
                    YOUR FEET DESERVE THE BEST
                </h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                    YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES
                </p>


                <div className="hero-but">
                    <button>Shop Now</button>
                    <button className="sec-btn" >Category</button>
                </div>
                <div className="shopping">
                    <p>Also Avaliable On</p>
                    <div className="brand-icon">
                        <img src="/imgaes/amazon.png" alt="amazon" />
                        <img src="/imgaes/flipkart.jpeg" alt="flipkart" />
                    </div>
                </div>
            </div>
            <div className="hero-img">
                <img src="/imgaes/shoes.jpeg" alt="shoe img" />
            </div>
        </main >
    );
};
export default Herosec;
import SectionTitle from "../SectionTitle/SectionTitle";
import FeaturedImg from '../../assets/home/featured.jpg';
import "./Featured.css";

const Featured = () => {
    return (
        <div className="featured-item text-white">
            <SectionTitle subHeading="Check it out" heading="Featured Item" ></SectionTitle>
            <div className="md:flex items-center justify-center py-8 px-16 md:gap-x-6">
                <div>
                    <img src={FeaturedImg} alt="img" />
                </div>
                <div>
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where I can get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis odit quibusdam nisi id aliquam dolorem corrupti, ipsa officiis ex, assumenda veritatis non pariatur reiciendis ad amet dolore quam eos temporibus? Ad molestias nam tempora blanditiis numquam ab eum est magni explicabo quis natus quibusdam voluptatem corrupti quaerat, velit officia quas.</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
import SectionTitle from "../SectionTitle/SectionTitle";
import image from "../../assets/home/slide1.jpg";

const Recommends = () => {
    return (
        <section>
            <SectionTitle subHeading="Should Try" heading="Chef Recommends" ></SectionTitle>
            <div className="grid md:grid-2 lg:grid-3 gap-6">
                <div className="flex items-center justify-center space-y-3">
                    <img className="w-full object-cover" src={image} alt="image" />
                    <div className="flex flex-col space-y-3 text-center">
                        <h2 className="text-xl font-bold">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="btn btn-ghost border-teal-100">Add To Cart</button>
                    </div>
                </div>
                <div className="flex items-center justify-center space-y-3">
                    <img className="w-full object-cover" src={image} alt="image" />
                    <div className="flex flex-col space-y-3 text-center">
                        <h2 className="text-xl font-bold">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="btn btn-ghost border-teal-100">Add To Cart</button>
                    </div>
                </div>
                <div className="flex items-center justify-center space-y-3">
                    <img className="w-full object-cover" src={image} alt="image" />
                    <div className="flex flex-col space-y-3 text-center">
                        <h2 className="text-xl font-bold">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="btn btn-ghost border-teal-100">Add To Cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recommends;
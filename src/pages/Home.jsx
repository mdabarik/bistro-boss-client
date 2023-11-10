import Banner from '../components/Banner/Banner';
import Category from '../components/Category/Category';
import Featured from '../components/Featured/Featured';
import PopularMenu from '../components/PopularMenu/PopularMenu';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
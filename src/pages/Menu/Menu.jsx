import { Helmet } from "react-helmet-async";
import Cover from "../../components/Covered/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import PopularMenu from "../../components/PopularMenu/PopularMenu";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Menu - Bisto Boss</title>
            </Helmet>
            <Cover title="Our Menu" img={menuImg}></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;
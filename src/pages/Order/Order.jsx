import { useState } from "react";
import orderImg from "../../assets/shop/banner2.jpg";
import Cover from "../../components/Covered/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from "../../components/FoodCard/FoodCard";
import useMenu from "../../hooks/useMenu";
import OrderTab from "../../components/OrderTab/OrderTab";


const Order = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const { menu } = useMenu();
    const dessert = menu.filter(item => item.category == 'dessert');
    const pizza = menu.filter(item => item.category == 'pizza');
    const soup = menu.filter(item => item.category == 'soup');
    const salad = menu.filter(item => item.category == 'salad');
    const offered = menu.filter(item => item.category == 'offered');


    return (
        <div>
            <Cover img={orderImg} title="Order Food" ></Cover>
            <div>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={offered}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;
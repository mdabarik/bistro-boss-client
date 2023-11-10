import { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import MenuItem from '../MenuItem/MenuItem';

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const filter = data.filter(item => item.category === 'popular');
            setMenu(filter);
        })
    })

    return (
        <section className='mb-12'>
            <SectionTitle
            heading="From Our Menu"
            subHeading="Popular Item">
            </SectionTitle>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-6'>
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;
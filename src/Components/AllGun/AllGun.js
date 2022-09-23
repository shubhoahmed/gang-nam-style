
import React from 'react';
import { useState, useEffect } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGun = ({ cartIncrease }) => {
    const [guns, setGuns] = useState([]);
    // console.log(guns);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])
    return (
        <div className='mt-5'>
            <div className='w-[90%] mx-auto py-4'>
                <h2 className='text-center text-4xl font-bold text-blue-700 my-3'>Welcome to Gangnam Store</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum possimus quibusdam voluptatibus impedit, quis illo, eum quidem ducimus dolores nihil modi! Numquam eos voluptatum corrupti magnam! Consectetur sed veniam incidunt nihil est velit quod cum architecto eius, fugit id aspernatur magni vel? Natus maxime tempore voluptas magni quas neque, aspernatur, numquam, vero rem deleniti voluptatum totam iure enim. Iusto.</p>
            </div>

            <div className=' w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
                {
                    guns.map((gun) => (
                        <SingleGun
                            gun={gun}
                            cartIncrease={cartIncrease}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default AllGun;
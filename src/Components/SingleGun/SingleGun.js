import React from 'react';
import Modal from '../Modal/Modal';

const SingleGun = ({ gun, cartIncrease }) => {
    const { action, name, price, bullet, id, img, category, capacity } = gun;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-2xl">
                <figure><img className='h-48' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Name : {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Action : {action}</p>
                    <div className="card-actions justify">
                        <div className="badge badge-outline"> Category: {category}</div>
                        <div className="badge badge-outline">Price : {price}</div>

                    </div>
                    <div className='mt-2'>
                        <button onClick={() => cartIncrease()} className="btn btn-primary btn-sm mr-2">Add to Cart</button>
                        {/* <button className="btn btn-success btn-sm">Details</button> */}
                        <label htmlFor="my-modal-3" className="btn  btn-success btn-sm modal-button">Details</label>
                    </div>
                </div>
            </div>
            <Modal gun={gun}></Modal>
        </div>
    );
};

export default SingleGun;
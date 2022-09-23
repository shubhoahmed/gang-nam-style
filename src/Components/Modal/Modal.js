import React from 'react';

const Modal = ({ gun }) => {
    const { name, img, bullet, id, capacity } = gun;
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img src={img} alt="" />
                    <h3 className="text-lg font-bold">{name}</h3>
                    <div>
                        <span className="py-4 mr-4">Id : {id}</span>
                        <span className="py-4 mr-4">Bullet : {bullet}</span>
                        <span className="py-4"> Capacity : {capacity}</span>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Modal;
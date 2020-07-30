import React, { useState } from "react";
import Grid from './Grid/index';
import Rules from './Rules';
import Modal from 'react-modal';
import { customStyles } from '../helper_function/index'

const Main = () => {
    const [clickedOnPulsar, setClickedOnPulsar] = useState(false)
    const [clickedOnGlider, setClickedOnGlider] = useState(false)
    const [clickedOnBlinker, setClickedOnBlinker] = useState(false)
    const [clickedOnToad, setClickedOnToad] = useState(false)
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="main-component">
            <h1 className="title-for-page">Conway's Game of Life</h1>
            <section className="grid-components">
                <Grid
                    clickedOnPulsar={clickedOnPulsar}
                    clickedOnGlider={clickedOnGlider}
                    clickedOnBlinker={clickedOnBlinker}
                    clickedOnToad={clickedOnToad}
                    setClickedOnPulsar={setClickedOnPulsar}
                    setClickedOnGlider={setClickedOnGlider}
                    setClickedOnBlinker={setClickedOnBlinker}
                    setClickedOnToad={setClickedOnToad}
                    openModal={openModal}
                />
            </section>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <Rules />
                <div className="modal-button">
                    <button className="rules" onClick={closeModal}>close</button>
                </div>
            </Modal>
            <div className="copyright">
                Copyright {'\u00a9'} Dylan Collins 2020. All rights reserved
            </div>
        </div>
    )
}

export default Main;
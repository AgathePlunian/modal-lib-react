import React from 'react';
import { useEffect } from 'react';
import './styles/modal.css';


function Modal() { 
      
    useEffect(() => {
        let btnOpenModal = document.getElementsByClassName('btn-modal')[0];
        btnOpenModal.addEventListener('click' , openModal);
    }, []);

    function openModal() {
        let body = document.getElementsByTagName("body")[0];
        body.classList.add('overflow-hidden');
        let bgModal = document.createElement("div");
        body.appendChild(bgModal);
        bgModal.classList.add("bg-modal");
        let modal = document.getElementsByClassName("modal-wrap")[0];
        modal.classList.add("active");
        bgModal.addEventListener( "click", handleModal) 
    }

    function closeModal() {
        let body = document.getElementsByTagName("body")[0];
        body.classList.remove('overflow-hidden');
        document.getElementsByClassName("bg-modal")[0].remove();
        let modal = document.getElementsByClassName("modal-wrap")[0];
        modal.classList.remove("active");
    }

    function handleModal(event) {
        if(document.getElementsByClassName("modal-wrap")[0].classList.contains('active') && !event.target.closest(".modal-wrap") && !event.target.matches(".btn-save") ) {
        closeModal()
        }
    }


    return (
        <div className="modal-wrap">
            <div className="modal-content">
                <button type="button" className="btn-close" onClick={closeModal}></button>
                <div id="confirmation" className="modal-text">Employee Created!</div>
            </div>
        </div>
    )

}

 export default Modal;
import { useContext } from 'react';

import { ModalContext } from './ModalContext';

const Modal = () => {
    const [isModalOpen] = useContext(ModalContext);
    const hiddenClass = isModalOpen ? "" : "hidden";

    return (
        <div id="modal" className={hiddenClass}></div>
    );
};

export default Modal;

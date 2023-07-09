import React, { useState } from 'react';
import Buttons from './button';
import Modal from './modal.jsx';

export default function FilterModal({filterContent, type = 'normal'}) {
  const [openModal, setOpenModal] = useState(false)
  const click = () => {
    setOpenModal(!openModal)
  }
 
  const footerContent = () => {
    return (
        <>
            <Buttons click={click} variant='light' name='Cancel'></Buttons>
            <Buttons click={click} name='Filtrele'></Buttons>
        </>
    )
  }
  return (
    <div>
        <Buttons click={click} variant='light' name='Filters'></Buttons>
        {
            openModal &&
            <Modal
                title='Filtreler'
                type="normal"
                size={"l"}
                close={() => {
                    setOpenModal(false)
                }}
                content={filterContent()}
                footer={footerContent()}
            />
        }
    </div>
  );
}
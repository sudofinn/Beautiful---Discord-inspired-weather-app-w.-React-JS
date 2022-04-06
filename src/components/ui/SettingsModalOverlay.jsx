import React from 'react'

import {
    Button,
    Modal,
    Text,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'



function SettingsModalOverlay () {
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <div>
        <Button onClick={onOpen} size="sm">Open Modal</Button>
        
        <Modal isOpen={isOpen} onClose={onClose}>

            <ModalOverlay />

            <ModalContent>
                <ModalHeader> Settings</ModalHeader>
                <ModalCloseButton />
                <ModalBody> 
                    <Text>
                         This is the settings page for the Weather  App.
                         The app gives one the current weather in major cities such as Berlin,  Dubai,  
                         NewYork,  Sydney or  Tokyo.
                         Have fun exploring it !  🌇
                          </Text>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={onClose}>
                        Close
                    </Button>

                </ModalFooter>


            </ModalContent>

        </Modal>



        </div>
    )

}

export default SettingsModalOverlay





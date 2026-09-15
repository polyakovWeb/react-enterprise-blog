import { Modal } from "./Modal"
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "@/shared/Button";

const meta = {
    component: Modal,
    title: 'shared/Modal',
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const OverlayClosing: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        function openModal() {
            setIsOpen(true);
        }

        function closeModal() {
            setIsOpen(false);
        }

        return (
            <>
                <Button onClick={openModal}>
                    Открыть модальное окно
                </Button>

                <Modal
                    isOpen={isOpen}
                    onClose={closeModal}
                >
                    <div style={{display: "flex", flexDirection: "column", textAlign: 'center', gap: '10px'}}>
                        <h2>Модальное окно (overlay mode)</h2>
                        <p>Это содержимое модального окна. Доступно закрытие при нажатии на оверлей.
                        </p>
                        <p>Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit. Doloremque esse laboriosam nisi tempore totam
                            veritatis! Doloribus expedita fuga provident voluptas.</p>
                        <Button onClick={closeModal}>
                            Закрыть
                        </Button>
                    </div>
                </Modal>
            </>
        );
    }
};

export const ChildrenClosing: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        function openModal() {
            setIsOpen(true);
        }

        function closeModal() {
            setIsOpen(false);
        }

        return (
            <>
                <Button onClick={openModal}>
                    Открыть модальное окно
                </Button>

                <Modal
                    isOpen={isOpen}
                >
                    <div style={{display: "flex", flexDirection: "column", textAlign: 'center', gap: '10px'}}>
                        <h2>Модальное окно (children mode)</h2>
                        <p>Это содержимое модального окна. Закрытие только при нажатии на кнопку. <br/>
                        </p>
                        <p>Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit. Doloremque esse laboriosam nisi tempore totam
                            veritatis! Doloribus expedita fuga provident voluptas.</p>
                        <Button onClick={closeModal}>
                            Закрыть
                        </Button>
                    </div>
                </Modal>
            </>
        );
    }
};

export const OpenedModal: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(true);

        function openModal() {
            setIsOpen(true);
        }

        function closeModal() {
            setIsOpen(false);
        }

        return (
            <>
                <Button onClick={openModal}>
                    Открыть модальное окно
                </Button>

                <Modal
                    isOpen={isOpen}
                    onClose={closeModal}
                >
                    <div style={{display: "flex", flexDirection: "column", textAlign: 'center', gap: '10px'}}>
                        <h2>Модальное окно (children mode)</h2>
                        <p>Это содержимое модального окна. Закрытие только при нажатии на кнопку. <br/>
                        </p>
                        <p>Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit. Doloremque esse laboriosam nisi tempore totam
                            veritatis! Doloribus expedita fuga provident voluptas.</p>
                        <Button onClick={closeModal}>
                            Закрыть
                        </Button>
                    </div>
                </Modal>
            </>
        );
    }
};
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import BaseCard from '../cards/Base';

type DialogModalProps = {
  children?: React.ReactNode;
  isOpen: boolean; // Prop to control visibility
  onClose: () => void; // Prop to handle the close action
  className?: string;
};

const DialogModal = ({ children, isOpen, className = '', onClose }: DialogModalProps) => {
  return (
    <Transition.Root
      show={isOpen}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-10"
        onClose={onClose} // Use the provided onClose prop
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full justify-center py-10 text-center items-start sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden px-5">
                <BaseCard
                  type={1}
                  className={`w-full xs:w-[420px] p-5 mx-auto ${className}`}
                >
                  {children}
                </BaseCard>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default DialogModal;

import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import { Transition } from 'react-transition-group'
import { Backdrop } from '@/components/Backdrop'
import styled from 'styled-components'
import { XMarkIcon } from '@heroicons/react/24/solid'

const ModalWrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 14vh;
  left: 30%;
  width: 40%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 8px;
`

interface ModalProps {
  children?: ReactNode
  header?: string
  onClick?: () => void
  onClose?: (event: React.MouseEvent<HTMLOrSVGElement, MouseEvent>) => void
  show?: boolean
}

interface ModalOverlayProps extends Omit<ModalProps, 'show' | 'onClick'> {}

const ModalOverlay = ({ header, children, onClose }: ModalOverlayProps) => {
  const content = (
    <ModalWrapper>
      <div className="tw-flex tw-justify-end tw-m-4">
        <XMarkIcon
          onClick={onClose}
          className="tw-h-6 tw-w-6 tw-cursor-pointer"
        />
      </div>
      <header className="tw-w-full tw-p-4">
        <h2 className="tw-p-2 tw-text-center">{header}</h2>
      </header>
      <div className="tw-p-4">{children}</div>
    </ModalWrapper>
  )

  return ReactDOM.createPortal(content, document.getElementById('modal-hook')!)
}

export const Modal: React.FC<ModalProps> = (props) => {
  const nodeRef = React.useRef(null)

  return (
    <>
      {props.show && <Backdrop onClick={props.onClick} />}
      <Transition
        nodeRef={nodeRef}
        in={props.show}
        timeout={200}
        classNames="the-modal"
        mountOnEnter
        unmountOnExit
      >
        {() => <ModalOverlay {...props} />}
      </Transition>
    </>
  )
}

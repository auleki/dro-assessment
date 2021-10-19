import { SIconButton, SCloseIcon } from "./StyledComponents"

const ModalToggle = (props: any) => {
  return (
    <SCloseIcon className="closeButton" modalState={props.modalToggle}>
      <SIconButton onClick={() => props.setToggleSearch(false)}>
        X
      </SIconButton>
    </SCloseIcon>
  )
} 

export default ModalToggle
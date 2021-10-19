import { SIconButton } from "./StyledComponents"

const ModalToggle = (props: any) => {
  return (
    <SIconButton onClick={() => props.setToggleSearch(false)}>
      X
    </SIconButton>
  )
} 

export default ModalToggle
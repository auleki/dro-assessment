import { Row, SButton } from "./StyledComponents"

const Pagination = (props: any) => {  
  return (
    <Row alignment="center" padding={'4rem 0 1rem'}>
     <div className="buttons">
       <SButton onClick={() => props.paginateBooks('prev')}>Prev</SButton>
       <SButton onClick={() => props.paginateBooks('next')}>Next</SButton>
     </div>
    </Row>
  )
} 

export default Pagination
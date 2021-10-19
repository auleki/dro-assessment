import { SPagination, SButton } from "./StyledComponents"

const Pagination = (props: any) => {  
  return (
    // <SPagination alignment="center" padding={'4rem 0 1rem'}>
    <SPagination>
     <div className="buttons">
       <SButton onClick={() => props.paginateBooks('prev')}>Prev</SButton>
       <section className="pageNumber">{props.pageNumber}</section>
       <SButton onClick={() => props.paginateBooks('next')}>Next</SButton>
     </div>
    </SPagination>
  )
} 

export default Pagination
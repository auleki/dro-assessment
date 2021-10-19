import { IBook } from "../utilities/types"
import { SCard, Row, CardContainer, Title } from "./StyledComponents"

const Card = (props: any) => {
  // console.log('Recieved in Card')
  return (
    <SCard key={props.book.isbn}>
      <Row>
        <div className="isbn">
          <h4>ISBN</h4>
          <p>{props.book.isbn}</p>
        </div>
        <div className="released">
          <h4>Released</h4>
          <p>{props.book.released.toDateString()}</p>
        </div>
      </Row>
      <CardContainer>
        <Title>{props.book.name}</Title>
      </CardContainer>
      <Row>
        <div className="published">
          <h4>Published by</h4>
          <p>{props.book.publisher}</p>
        </div>
        <div className="authors">
          <h4>Author(s)</h4>
          <ul className="authorsList">
            {props.book.authors.map((author: string) => (
              <li className="author" key={author}>{author}</li>
            ))}
          </ul>
        </div>
      </Row>
    </SCard>
  )
} 

export default Card
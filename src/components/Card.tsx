import { SCard, Row, CardContainer, Title } from "./StyledComponents"

const Card = () => {
  return (
    <SCard>
      <Row>
        <div className="isbn">
          <h4>ISBN</h4>
          <p>9141-1414081414114</p>
        </div>
        <div className="released">
          <h4>Released</h4>
          <p>12th August 1990</p>
        </div>
      </Row>
      <CardContainer>
        <Title>Game of Thrones the Sequel</Title>
      </CardContainer>
      <Row>
        <div className="published">
          <h4>Published by</h4>
          <p>Bantam Books Incorporated</p>
        </div>
        <div className="authors">
          <h4>Author(s)</h4>
          <ul className="authorsList">
            <li className="author">George M. Rodrigues</li>
          </ul>
        </div>
      </Row>
    </SCard>
  )
} 

export default Card
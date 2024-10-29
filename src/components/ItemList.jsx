import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Item from "./Item"

function ItemList ({items}){
    return (
        <Container>
            <Row xs={1} md={3}>
                {items.map(item =>(
                    <Item item={item} key={item.id}/>
            ))}
            </Row>
        </Container>
    )
}

export default ItemList
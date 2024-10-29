import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import styles from './Item.module.css'

function Item({item}) {
    return (
        <Col >
            <Card bg="light" text="secondary" className={styles.colStyles}>
                <Card.Img variant="top" src={item.thumbnail} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.category}</Card.Text>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text>${item.price}</Card.Text>
                    <Button variant="dark" as={Link} to={`/item/${item.id}`}>Ver Mas</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Item;
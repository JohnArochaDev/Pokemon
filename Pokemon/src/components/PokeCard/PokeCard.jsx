import Card from 'react-bootstrap/Card';

export default function PokeCard({ img, name, poke }) {
    console.log(poke)

    return (
        <>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Text>
                        {name}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
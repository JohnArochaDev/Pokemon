import Card from 'react-bootstrap/Card';
import './PokeCard.css'

export default function PokeCard({ img, name, poke, number }) {
    console.log(poke)

    return (
        <>
            <Card className="poke-card">
                <Card.Img variant="top" src={img} style={{ backgroundColor: '#d9d9d9' }} />
                <Card.Body style={{paddingBottom: '0px'}} >
                    <Card.Text style={{marginTop: '-5px', color: '#cccccc', marginLeft: '-210px'}}>
                        <p>#{number.toString().padStart(3, '0')}</p>
                    </Card.Text>
                    <Card.Text style={{marginTop: '-15px'}}>
                        <p><span><b>{name}</b></span></p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
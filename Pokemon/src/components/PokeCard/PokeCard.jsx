import { Button, Card } from 'react-bootstrap';
import './PokeCard.css'

export default function PokeCard({ img, name, poke, number, changeTeam, setChangeTeam }) {

    return (
        <>
            <Card className="poke-card">
                <Card.Img variant="top" src={img} style={{ backgroundColor: '#d9d9d9' }} />
                {changeTeam && (
                    <Button className='x-button' >
                        <h2>Add to Team</h2>
                    </Button>
                )}
                <Card.Body style={{paddingBottom: '0px'}} >
                    <Card.Text style={{marginTop: '-15px', color: '#cccccc', marginLeft: '-160px'}}>
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
import { Button, Card } from 'react-bootstrap';
import { useEffect, useRef } from 'react';
import './PokeCard.css';

export default function PokeCard({ img, name, poke, number, team, setTeam, changeTeam, setChangeTeam, size }) {
    const cardRef = useRef(null);

    useEffect(() => {
        const randomDelay = Math.random() * .1;
        if (cardRef.current) {
            cardRef.current.style.setProperty('--animation-delay', `${randomDelay}s`);
        }
    }, []);

    function addToTeam() {
        const obj = {
            img,
            name,
            number: String(number).padStart(3, '0'),
        }

        if (team.length === 6) {
            return
        } else {
            setTeam([...team, obj])
        }
    }

    function removeFromTeam() {
        const updatedTeam = team.filter(poke => poke.number !== String(number).padStart(3, '0'));
        setTeam(updatedTeam);
    }

    return (
        <>
            <Card className={size == 'small' ? changeTeam ? 'poke-card-team-shake' : 'poke-card-team' : changeTeam ? 'poke-card-shake' : 'poke-card'} ref={cardRef}>
                <Card.Img variant="top" src={img} style={{ backgroundColor: '#d9d9d9' }} />
                {size === 'small' && (
                    <Button className='team-x-button' variant='danger' onClick={removeFromTeam} />
                )}
                {changeTeam && !size && (
                    <Button className='hover-button' onClick={() => addToTeam()}>
                        <h2>Add to Team</h2>
                    </Button>
                )}
                <Card.Body style={{ paddingBottom: '0px' }}>
                    <Card.Text style={{ marginTop: '-15px', color: '#cccccc', marginLeft: '-160px' }}>
                        <p>#{String(number).padStart(3, '0')}</p>
                    </Card.Text>
                    <Card.Text style={{ marginTop: '-15px' }}>
                        <p><span><b>{name}</b></span></p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}
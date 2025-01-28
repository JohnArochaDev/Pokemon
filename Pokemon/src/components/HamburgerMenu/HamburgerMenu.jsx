import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import PokeCard from '../PokeCard/PokeCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './hamburgerMenu.css';

export default function HamburgerMenu({
    team,
    setTeam,
    changeTeam,
    setChangeTeam,
}) {
    const [menu, setMenu] = useState(false);

    function toggleMenu() {
        setMenu(!menu);
        if (menu) {
            setChangeTeam(false);
        }
    }

    function handleChangeTeam() {
        setChangeTeam(!changeTeam);
    }

    return (
        <div>
            <Button
                variant="light"
                onClick={toggleMenu}
                className="hamburger-button"
                style={{ color: 'white', paddingBottom: '1vh' }}
            >
                &#9776;
            </Button>
            <div className={`slide-menu ${menu ? 'open' : ''}`}>
                <Button
                    variant="light"
                    onClick={toggleMenu}
                    className="close-button"
                >
                    &times;
                </Button>
                <div className="menu-content">
                    <h2>Team</h2>
                    <hr />
                    {team.length > 0 &&
                        team.map((poke) => (
                            <PokeCard
                                key={`team${poke.number}`}
                                name={poke.name}
                                img={poke.img}
                                poke={poke}
                                number={poke.number}
                                team={team}
                                setTeam={setTeam}
                                changeTeam={changeTeam}
                                setChangeTeam={setChangeTeam}
                                size={'small'}
                            />
                        ))}
                    <Button
                        className="change-team"
                        variant={changeTeam ? 'danger' : 'primary'}
                        onClick={handleChangeTeam}
                    >
                        {changeTeam ? 'Done' : 'Change Team'}
                    </Button>
                </div>
            </div>
        </div>
    );
}

import React from "react";
import Club from "./Club";
import ListMatch from "./ListNextMatch";

const NextMach = {
    mandante: {
        logo: require('assets/images/logo.png'),
        name: 'São Gregório F.C.',
    },
    visitante: {
        logo: "https://logodetimes.com/times/real-madrid/logo-real-madrid-256.png",
        name: 'Real Madrid',
    },
    info:{
        type: 'Amistoso',
        date: '30 de março de 2019',
        hour: '18:00 Hrs',
        local: 'C.D.C Vila Arapuá',
    }
};

const ListNextMatch = [
    {
        mandante: {
            logo: "https://logodetimes.com/times/villarreal/logo-villarreal-256.png",
            name: 'Villarreal',
        },
        visitante: {
            logo: require('assets/images/logo.png'),
            name: 'São Gregório F.C.',
        },
        info:{
            type: 'Copa do Rei',
            date: '7 de abril de 2019',
            hour: '12:00 Hrs',
            local: 'C.D.C Helipolis',
        }
    },
    {
        mandante: {
            logo: require('assets/images/logo.png'),
            name: 'São Gregório F.C.',
        },
        visitante: {
            logo: "https://logodetimes.com/times/real-sociedad/logo-real-sociedad-256.png",
            name: 'Real Sociedad',
        },
        info:{
            type: 'Amistoso',
            date: '14 de abril de 2019',
            hour: '14:00 Hrs',
            local: 'C.D.C Vila Arapuá',
        }
    },
    {
        mandante: {
            logo: "https://logodetimes.com/times/juventus/logo-juventus-256.png",
            name: 'Juventus',
        },
        visitante: {
            logo: require('assets/images/logo.png'),
            name: 'São Gregório F.C.',
        },
        info:{
            type: 'Copa Sto. André',
            date: '21 de março de 2019',
            hour: '10:00 Hrs',
            local: 'C.D.C Corinthians',
        }
    }
];

class NextMatch extends React.Component {
    render() {
        return (
            <div className="next-match">
                <div className="header">
                    <h1>Próximos jogos</h1>
                </div>
                <div className="body">
                    <div className="clubs-match">
                        <Club
                            logo={NextMach.mandante.logo}
                            name={NextMach.mandante.name}
                        />
                        <div className="match-description">
                            <p className="liga-vs">VS</p>
                        </div>
                        <Club
                            logo={NextMach.visitante.logo}
                            name={NextMach.visitante.name}
                        />
                    </div>
                    <div className="info-match">
                        <p className="match-type">{NextMach.info.type}</p>
                        <p className="match-date">{NextMach.info.date}</p>
                        <p className="match-hour">{NextMach.info.hour}</p>
                        <p className="match-location">{NextMach.info.local}</p>
                    </div>
                </div>
                <div className="footer">
                    {
                        ListNextMatch.map((info, key) => {
                            return <ListMatch
                                info={info}
                                key={key}
                            />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default NextMatch;
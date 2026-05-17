import React, { useState } from 'react';

import Header from '../components/Header/Header';
import Badge from '../components/Badge/Badge';
import OpcionesDeMenu from '../components/OpcionesDeMenu/OpcionesDeMenu';
import Notificacion from '../components/Notificacion/Notificacion';
import TarjetaBase from '../components/TarjetaBase/TarjetaBase';
import Typography from '../components/AreaDeTexto/Typography';
import { useNavigate } from 'react-router-dom';

function SistemaCaptura() {

    const [menu1, setMenu1] = useState('');
    const [menu2, setMenu2] = useState('');
    const navigate = useNavigate();

    return (

        <div
            style={{
                minHeight: '100vh',
                backgroundColor: '#F5F6FA',
                display: 'flex',
                flexDirection: 'column'
            }}
        >

            {/* HEADER */}
            <div
                style={{
                    position: 'relative',

                }}
            >

                <Header
                    tipo="principal"
                    size="desktop"
                    titulo="AAAE01 Sistema de Captura"
                />

                {/* ICONO SALIR */}
                <button
                    style={{
                        position: 'absolute',
                        right: '30px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '22px',
                        color: 'white'

                    }}
                    onClick={() => navigate('/')}
                >
                    ⎋
                </button>

            </div>

            {/* CONTENIDO */}
            <div
                style={{
                    padding: '16.5px',

                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '27px'
                }}
            >

                {/* BADGES */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '27px'
                    }}
                >

                    <Badge
                        tipo="primary"
                        texto="Dr. Juan Perez"
                    />

                    <Badge
                        tipo="primary"
                        texto="Semestre 2026-1"
                    />



                    <OpcionesDeMenu
                        tipo="base"
                        value={menu1}
                        onChange={(e) => setMenu1(e.target.value)}
                    />

                    <OpcionesDeMenu
                        tipo="base"
                        value={menu2}
                        onChange={(e) => setMenu2(e.target.value)}
                    />

                </div>


            </div>
            <div
                style={{
                    paddingLeft: '142px',
                    paddingRight: '142px',
                    gap: '57px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >

                <Notificacion
                    tipo="informativa"
                    texto="Recordatorio: La academia solicita el reporte del 2do parcial para el viernes"
                />
            </div>
            {/* CONTENEDOR DE TARJETAS */}
            <div
                style={{
                    width: '100%',
                    paddingLeft: '142px',
                    paddingRight: '142px',
                    paddingTop: '57px',
                    display: 'flex',
                    flexWrap: 'wrap',

                    gap: '80px',

                    justifyContent: 'space-between',
                    alignItems: 'stretch',

                    boxSizing: 'border-box'
                }}
            >

                {/* TARJETA 1 */}
                <TarjetaBase tipo="semana">

                    <Typography variant="subtitle">
                        Semana 1 del semestre
                    </Typography>

                    <Typography variant="body">
                        Sesion actual 22/03
                    </Typography>

                </TarjetaBase>

                {/* TARJETA 2 */}
                <TarjetaBase tipo="semana">

                    <Typography variant="subtitle">
                        Semana 2 del semestre
                    </Typography>

                    <Typography variant="body">
                        Sesion actual 29/03
                    </Typography>

                </TarjetaBase>

                {/* TARJETA 3 */}
                <TarjetaBase tipo="semana">

                    <Typography variant="subtitle">
                        Semana 3 del semestre
                    </Typography>

                    <Typography variant="body">
                        Sesion actual 05/04
                    </Typography>

                </TarjetaBase>

                {/* TARJETA 4 */}
                <TarjetaBase tipo="semana">

                    <Typography variant="subtitle">
                        Semana 4 del semestre
                    </Typography>

                    <Typography variant="body">
                        Sesion actual 12/04
                    </Typography>

                </TarjetaBase>

                {/* TARJETA 5 */}
                <TarjetaBase tipo="semana">

                    <Typography variant="subtitle">
                        Semana 5 del semestre
                    </Typography>

                    <Typography variant="body">
                        Sesion actual 19/04
                    </Typography>

                </TarjetaBase>

            </div>
        </div>

    );
}

export default SistemaCaptura;
import React, { useState } from 'react';

import Typography from '../components/AreaDeTexto/Typography';
import Header from '../components/Header/Header';
import Boton from '../components/Boton/Boton';
import CampoDeTexto from '../components/CampoDeTexto/CampoDeTexto';
import TarjetaBase from '../components/TarjetaBase/TarjetaBase';
import { useNavigate } from 'react-router-dom';


function App() {

    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const navigate = useNavigate();
    return (

        <div
            style={{
                minHeight: '100vh',
                backgroundColor: '#F5F6FA',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',


            }}
        >

            {/* HEADER */}
            <Header
                tipo="principal"
                size="desktop"
                titulo="AAAE01 | Login"
            />

            {/* CONTENIDO */}
            <div
                style={{
                    width: '315px',
                    height: 'fit-content',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '214px'
                }}
            >

                <TarjetaBase tipo="base">

                    {/* TITULO */}
                    <Typography variant="title">
                        Inicio de Sesion
                    </Typography>

                    {/* CORREO */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',

                        }}
                    >

                        <Typography variant="aux-title">
                            Correo
                        </Typography>

                        <CampoDeTexto
                            tipo="base"
                            placeholder="Ingresa tu correo"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />

                    </div>

                    {/* CONTRASEÑA */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px'
                        }}
                    >

                        <Typography variant="aux-title">
                            Contraseña
                        </Typography>

                        <CampoDeTexto
                            tipo="base"
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                        />

                    </div>

                    {/* BOTON */}
                    <Boton
                        tipo="primario"
                        size="desktop"
                        label="Iniciar Sesion"
                        onClick={() => navigate('/sistema-captura')}
                    />

                </TarjetaBase>

            </div>

        </div>

    );
}

export default App;
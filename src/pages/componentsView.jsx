import React ,{ useState } from 'react';
import Typography from '../components/AreaDeTexto/Typography';
import Header from '../components/Header/Header';
import Boton from '../components/Boton/Boton';
import DatePicker from '../components/DatePicker/DatePicker';
import Tab from '../components/Tabs/Tabs';
import Notificacion from '../components/Notificacion/Notificacion';
import CheckBox from '../components/CheckBox/CheckBox';
import TarjetaBase from '../components/TarjetaBase/TarjetaBase';
import Badge from '../components/Badge/Badge';
import CampoDeTexto from '../components/CampoDeTexto/CampoDeTexto';

function App() {

    const [fecha, setFecha] = useState('');
    // Estado para controlar qué pestaña está activa (por defecto la "1")
    const [tabActiva, setTabActiva] = useState('1');
    // Estado para probar la interactividad del Checkbox
    const [isChecked, setIsChecked] = useState(false);
    // Estado para probar un input interactivo
    const [texto, setTexto] = useState('');

  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      <Typography variant="featured-title">
        Este es el Featured Title (40px)
      </Typography>

      <Typography variant="title">
        Este es el Title (32px)
      </Typography>

      <Typography variant="subtitle">
        Este es el Subtitle (28px)
      </Typography>

      <Typography variant="aux-title">
        Este es el Aux Title (22px)
      </Typography>

      <Typography variant="body-primary">
        Este es el Body Primary (16px).
      </Typography>

      <Typography variant="body">
        Este es el Body normal (14px).
      </Typography>

         {/*------------------------------------------------------------------------------------------------------*/}
      <Typography variant="title" style={{ padding: '0 20px', marginTop: '20px' }}>
        Pruebas de Headers
      </Typography>
       
      {/* Header Desktop Principal (Azul, 80px) */}
      <Header tipo="principal" size="desktop" titulo="Header Desktop Principal" />

      {/* Header Desktop Secundario (Blanco con borde, 80px) */}
      <Header tipo="secundario" size="desktop" titulo="Header Desktop Secundario" />

      {/* Header Tablet Principal (Azul, 72px) */}
      <Header tipo="principal" size="tablet" titulo="Header Tablet Principal" />

      {/* Header Tablet Secundario (Blanco con borde, 65px) */}
      <Header tipo="secundario" size="tablet" titulo="Header Tablet Secundario" />

      {/* Header Mobile Principal (Azul, 59px) */}
      <Header tipo="principal" size="mobile" titulo="Header Mobile Principal" />

      {/* Header Mobile Secundario (Blanco con borde, 59px) */}
      <Header tipo="secundario" size="mobile" titulo="Header Mobile Secundario" />
      {/*------------------------------------------------------------------------------------------------------*/}

      <Typography variant="title">Pruebas de Botones</Typography>

      {/* Fila de botones Desktop */}
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <Boton tipo="primario" size="desktop" label="Primario" />
        <Boton tipo="secundario" size="desktop" label="Secundario" />
        <Boton tipo="interaccion" size="desktop" label="Interacción" />
        <Boton tipo="deshabilitado" size="desktop" label="Deshabilitado" />
      </div>

      {/* Fila de botones Mobile */}
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <Boton tipo="primario" size="mobile" label="Primario M" />
        <Boton tipo="secundario" size="mobile" label="Secundario M" />
        <Boton tipo="interaccion" size="mobile" label="Interacción M" />
        <Boton tipo="deshabilitado" size="mobile" label="Deshabilitado M" />
      </div>
        {/*------------------------------------------------------------------------------------------------------*/}

        <Typography variant="title">Pruebas de Date Picker</Typography>

      {/* Date Picker en estado vacío (muestra el placeholder "text") */}
      <DatePicker />

      {/* Date Picker con un valor simulado */}
      <DatePicker 
        value={fecha || "12/10/2023"} 
        onClick={() => alert('Aquí se abriría el calendario')}
      />
        
     {/*------------------------------------------------------------------------------------------------------*/}

    <Typography variant="title">Pruebas de Tabs</Typography>

      <div style={{ display: 'flex', borderBottom: '1px solid #E1E2EC' }} role="tablist">
        
        <Tab 
          label="Opción 1" 
          activa={tabActiva === '1'} 
          onClick={() => setTabActiva('1')} 
        />
        
        <Tab 
          label="Opción 2" 
          activa={tabActiva === '2'} 
          onClick={() => setTabActiva('2')} 
        />
        
        <Tab 
          label="Opción 3" 
          activa={tabActiva === '3'} 
          onClick={() => setTabActiva('3')} 
        />

      </div>

      <div style={{ padding: '20px 0' }}>
        <Typography variant="body">
          {tabActiva === '1' && "Contenido de la primera pestaña."}
          {tabActiva === '2' && "Contenido de la segunda pestaña."}
          {tabActiva === '3' && "Contenido de la tercera pestaña."}
        </Typography>
      </div>
    {/*------------------------------------------------------------------------------------------------------*/}

    <Typography variant="title">Pruebas de Notificaciones</Typography>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-start' }}>
        
        {/* Notificación Informativa (Azul) */}
        <Notificacion tipo="informativa" texto="text" />

        {/* Notificación de Éxito (Verde) */}
        <Notificacion tipo="exito" texto="text" />

        {/* Notificación de Error (Roja) */}
        <Notificacion tipo="error" texto="text" />

      </div>
    {/*------------------------------------------------------------------------------------------------------*/}

    <Typography variant="title">Pruebas de CheckBox</Typography>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-start' }}>
        
        {/* CheckBox Interactivo */}
        <CheckBox 
          tipo={isChecked ? 'activo' : 'inactivo'} 
          label="Checkbox Interactivo" 
          onClick={() => setIsChecked(!isChecked)} 
        />

        {/* CheckBox Inactivo (Fijo) */}
        <CheckBox tipo="inactivo" label="Inactivo fijo" />

        {/* CheckBox Activo (Fijo) */}
        <CheckBox tipo="activo" label="Activo fijo" />

        {/* CheckBox Deshabilitado */}
        <CheckBox tipo="deshabilitado" label="Deshabilitado" />

      </div>
       {/*------------------------------------------------------------------------------------------------------*/}

       <Typography variant="title">Pruebas de Tarjetas</Typography>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        
        {/* Tarjeta Tipo Base */}
        <TarjetaBase 
          tipo="base" 
          titulo="Titulo " 
          texto="Texto basico para el cuerpo de la card" 
        />

        {/* Tarjeta Tipo Resaltada */}
        <TarjetaBase 
          tipo="resaltada" 
          titulo="Titulo" 
          texto="Texto basico para el cuerpo de la card" 
        />

      </div>
      {/*------------------------------------------------------------------------------------------------------*/}

      <Typography variant="title">Pruebas de Badges</Typography>

      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        
        {/* Badge Primary (Azul) */}
        <Badge tipo="primary" texto="text" />

        {/* Badge Warning (Naranja/Amarillo) */}
        <Badge tipo="warning" texto="text" />

        {/* Badge Success (Verde) */}
        <Badge tipo="success" texto="text" />

      </div>
      {/*------------------------------------------------------------------------------------------------------*/}

      <Typography variant="title">Pruebas de Campos de Texto</Typography>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        {/* Campo Base (Se volverá azul al darle clic automáticamente) */}
        <div>
          <Typography variant="body" style={{ marginBottom: '5px' }}>Base (Interactivo)</Typography>
          <CampoDeTexto 
            tipo="base" 
            placeholder="Escribe aquí..." 
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
        </div>

        {/* Campo Forzado a Enfocado */}
        <div>
          <Typography variant="body" style={{ marginBottom: '5px' }}>Enfocado (Fijo)</Typography>
          <CampoDeTexto tipo="enfocado" placeholder="text" />
        </div>

        {/* Campo Error */}
        <div>
          <Typography variant="body" style={{ marginBottom: '5px' }}>Error</Typography>
          <CampoDeTexto tipo="error" placeholder="text" />
        </div>

        {/* Campo Deshabilitado */}
        <div>
          <Typography variant="body" style={{ marginBottom: '5px' }}>Deshabilitado</Typography>
          <CampoDeTexto tipo="deshabilitado" placeholder="text" />
        </div>

      </div>
      {/*------------------------------------------------------------------------------------------------------*/}

    </div>
  );
}

export default App;
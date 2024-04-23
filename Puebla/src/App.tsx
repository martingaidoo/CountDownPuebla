import './App.css'
import { ComponentDownCount } from './components/ComponentDownCount'
import { ComponentInstagram } from './components/ComponentInstagram'
function App() {
  return (
    <div className='bg-dark text-white'>
      <div className="container pt-2">
        <h1 className='text-center anton-regular'>OPENING</h1>
        <ComponentDownCount />
      </div>

      <div className="container mt-2">
        <div className="row mt-2 ms-1 me-1">
          <div className="col-sm-12 col-md-12 col-lg-8 ms-auto me-auto mt-2">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/136uPDZnTuQs5DncYxpVJ8?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen={true} // Corrección aquí
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="container mt-2 d-flex justify-content-center align-items-center">
        <ComponentInstagram />
      </div>

      <div className="container mt-1">
        <div className="row">
          <div className="ol-sm-12 col-md-12 col-lg-8 ms-auto me-auto mt-2 ms-1 me-1">
            <h3 className='anton-regular'>Ubicacion</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.222042021227!2d-62.723642724171796!3d-31.873378618492456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cb64720cb91ae9%3A0x1305120d5da4b440!2sAvellaneda%20241%2C%20Las%20Varillas%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1713788031130!5m2!1ses-419!2sar"
              width="100%"
              height="450"
              allowFullScreen={true} // Corrección aquí
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
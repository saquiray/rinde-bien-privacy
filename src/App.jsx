export default function App() {
  return (
    <main className="container">
      <article className="card">
        <h1>Política de Privacidad – Rinde Bien</h1>
        <p className="meta">
          <strong>Última actualización:</strong> 19 de enero de 2026
        </p>

        <p>
          En <strong>Rinde Bien</strong>, valoramos y respetamos tu privacidad.
          Esta Política de Privacidad explica cómo recopilamos, usamos,
          almacenamos y protegemos tu información cuando utilizas nuestra
          aplicación y servicios relacionados.
        </p>

        <h2>1. Información que recopilamos</h2>
        <ul>
          <li>Información personal: nombre, correo electrónico y datos de cuenta.</li>
          <li>Información financiera ingresada por el usuario: ingresos, gastos,
            presupuestos y metas.</li>
          <li>Información técnica: dispositivo, sistema operativo y datos de uso.</li>
        </ul>

        <div className="note">
          Rinde Bien no solicita ni almacena contraseñas bancarias.
        </div>

        <h2>2. Uso de la información</h2>
        <ul>
          <li>Brindar y mejorar el servicio.</li>
          <li>Mostrar reportes y análisis financieros.</li>
          <li>Enviar notificaciones relacionadas con la app.</li>
          <li>Garantizar la seguridad y prevenir fraudes.</li>
        </ul>

        <h2>3. Compartición de datos</h2>
        <p>
          No vendemos ni alquilamos información personal. Solo compartimos datos
          cuando es necesario para operar la app o por obligación legal.
        </p>

        <h2>4. Privacidad de menores</h2>
        <p>
          Rinde Bien no está dirigido a menores de 18 años y no recopila
          intencionalmente información de menores.
        </p>

        <h2>5. Contacto</h2>
        <ul>
          <li>
            Correo:{" "}
            <a href="mailto:soporte@rindebien.com">
              soporte@rindebien.com
            </a>
          </li>
          <li>
            Web:{" "}
            <a href="https://www.rindebien.com" target="_blank" rel="noreferrer">
              www.rindebien.com
            </a>
          </li>
        </ul>

        <div className="footer">
          © {new Date().getFullYear()} Rinde Bien. Todos los derechos reservados.
        </div>
      </article>
    </main>
  );
}

// src/App.jsx (o App.js si tu proyecto lo usa así)
export default function App() {
  return (
    <main className="container">
      <article className="card">
        <h1>Política de Privacidad – Rinde Bien</h1>
        <p className="meta">
          <strong>Última actualización:</strong> 19 de enero de 2026
        </p>

        <p>
          <strong>Rinde Bien</strong> es una aplicación privada de gestión
          financiera empresarial, destinada exclusivamente al <strong>uso interno de
          empresas</strong> y a <strong>usuarios previamente autorizados</strong> por
          dichas organizaciones.
        </p>

        <p>
          Esta Política de Privacidad describe cómo recopilamos, usamos,
          almacenamos y protegemos la información cuando utilizas Rinde Bien.
          Al acceder o utilizar la aplicación, aceptas las prácticas descritas
          en este documento.
        </p>

        <h2>1. Alcance</h2>
        <p>
          Esta política aplica a la aplicación móvil, web y cualquier servicio
          relacionado provisto bajo el nombre de Rinde Bien (“Servicios”).
        </p>

        <h2>2. Información que recopilamos</h2>
        <p>Podemos recopilar información necesaria para operar el servicio:</p>
        <ul>
          <li>
            <strong>Información de cuenta y acceso:</strong> nombre, correo
            corporativo, identificadores de usuario, rol/perfil y datos de
            autenticación (tokens). No almacenamos contraseñas bancarias.
          </li>
          <li>
            <strong>Información operativa/financiera empresarial (ingresada o cargada por el usuario):</strong>{" "}
            registros de gastos e ingresos, categorías, centros de costo,
            presupuestos, adjuntos (por ejemplo comprobantes/facturas) y notas.
          </li>
          <li>
            <strong>Información técnica:</strong> tipo de dispositivo, sistema
            operativo, idioma, dirección IP aproximada, logs de eventos
            (seguridad y funcionamiento), y métricas de uso.
          </li>
        </ul>

        <div className="note">
          <strong>Importante:</strong> Rinde Bien es un servicio empresarial. La
          información registrada en la aplicación puede estar asociada a la
          organización que autoriza tu acceso.
        </div>

        <h2>3. Finalidades de uso</h2>
        <ul>
          <li>Prestar el servicio y permitir el registro/consulta de información financiera empresarial.</li>
          <li>Administrar usuarios, permisos, roles y auditoría interna.</li>
          <li>Generar reportes y análisis para control y toma de decisiones.</li>
          <li>Mantener la seguridad, prevenir fraude y detectar accesos no autorizados.</li>
          <li>Mejorar la estabilidad y rendimiento de la aplicación.</li>
          <li>Cumplir obligaciones legales aplicables cuando corresponda.</li>
        </ul>

        <h2>4. Base legal y relación empresa-usuario</h2>
        <p>
          Rinde Bien se utiliza en un contexto empresarial. La organización que
          contrata o administra el servicio puede actuar como responsable del
          tratamiento de determinados datos, y Rinde Bien puede actuar como
          encargado/proveedor tecnológico para operar la plataforma, según el
          caso y los acuerdos aplicables.
        </p>

        <h2>5. Compartición de información</h2>
        <p>
          <strong>No vendemos ni alquilamos</strong> tu información personal. Solo
          compartimos información en estos casos:
        </p>
        <ul>
          <li>
            <strong>Con la empresa/organización administradora:</strong> para
            gestión de accesos, auditoría, reportes y control interno.
          </li>
          <li>
            <strong>Con proveedores tecnológicos:</strong> hosting,
            almacenamiento, analítica o mensajería, estrictamente para operar el servicio.
          </li>
          <li>
            <strong>Por requerimiento legal:</strong> si una autoridad competente lo solicita.
          </li>
          <li>
            <strong>Para seguridad:</strong> para investigar incidentes y proteger
            derechos, seguridad y propiedad de Rinde Bien, la organización o usuarios.
          </li>
        </ul>

        <h2>6. Servicios de terceros</h2>
        <p>
          Rinde Bien puede integrar servicios de terceros (por ejemplo,
          autenticación, analítica o almacenamiento). Dichos terceros pueden
          tratar información conforme a sus propias políticas y contratos.
        </p>

        <h2>7. Retención de datos</h2>
        <p>
          Conservamos la información únicamente durante el tiempo necesario para
          prestar el servicio, cumplir fines descritos en esta política y/o lo
          requerido por la empresa administradora o por normas aplicables.
        </p>

        <h2>8. Seguridad</h2>
        <p>
          Aplicamos medidas de seguridad razonables (controles de acceso,
          encriptación cuando corresponde, monitoreo y registros) para proteger
          la información. Aun así, ningún sistema es 100% infalible.
        </p>

        <h2>9. Derechos del usuario</h2>
        <p>
          Puedes solicitar acceso, rectificación o eliminación de datos (cuando
          aplique) mediante los canales de soporte. En entornos empresariales,
          algunas solicitudes pueden requerir validación o trámite a través del
          administrador de tu organización.
        </p>

        <h2>10. Privacidad de menores</h2>
        <p>
          Rinde Bien no está dirigido a menores de 18 años y no recopila
          intencionalmente información de menores.
        </p>

        <h2>11. Cambios a esta política</h2>
        <p>
          Podemos actualizar esta Política de Privacidad ocasionalmente. La
          versión vigente se publicará en esta misma página con la fecha de
          actualización correspondiente.
        </p>

        <h2>12. Contacto</h2>
        <p>
          Para dudas o solicitudes relacionadas con esta Política de Privacidad:
        </p>
        <ul>
          <li>
            <strong>Correo:</strong>{" "}
            <a href="royalsystemsappdev@gmail.com">soporte@rindebien.com</a>
          </li>

        </ul>

        <div className="footer">
          © {new Date().getFullYear()} Rinde Bien. Todos los derechos reservados.
        </div>
      </article>
    </main>
  );
}

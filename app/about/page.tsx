import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Acerca de Moto Shop</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Nuestra historia</h2>
          <div className="flex items-center space-x-6">
            <div className="flex-1">
              <p className="mb-4">
                Fundada en 2010, Moto Shop nació de la pasión por las
                motocicletas y el deseo de ofrecer a los entusiastas una
                experiencia de compra única. Desde nuestros humildes comienzos
                como una pequeña tienda local, hemos crecido hasta convertirnos
                en uno de los principales distribuidores de motocicletas y
                accesorios en línea.
              </p>
              <p>
                Nuestra misión es proporcionar a nuestros clientes una amplia
                selección de motocicletas de alta calidad, accesorios y
                equipamiento, respaldados por un servicio al cliente excepcional
                y conocimientos especializados.
              </p>
            </div>
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Fundadores de Moto Shop"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Nuestro compromiso</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Ofrecer productos de la más alta calidad de marcas reconocidas.
            </li>
            <li>
              Proporcionar un servicio al cliente excepcional antes, durante y
              después de la venta.
            </li>
            <li>Mantener precios competitivos y ofertas atractivas.</li>
            <li>
              Fomentar la seguridad y la responsabilidad en la conducción de
              motocicletas.
            </li>
            <li>
              Apoyar a la comunidad de motociclistas a través de eventos y
              patrocinios.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Nuestro equipo</h2>
          <p className="mb-4">
            En Moto Shop, contamos con un equipo de expertos apasionados por las
            motocicletas. Desde mecánicos certificados hasta entusiastas de las
            carreras, nuestro personal tiene el conocimiento y la experiencia
            para ayudarte a encontrar la motocicleta perfecta y los accesorios
            adecuados para tus necesidades.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["CEO", "Jefe de Ventas", "Experto en Producto"].map((role) => (
              <div key={role} className="text-center">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt={role}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-2"
                />
                <h3 className="font-semibold">{role}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

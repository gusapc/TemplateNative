import React from 'react';
import { View, TextComponent, ModalTitle } from '../../components';
import styles from './ModalTermsAndConditionsStyle';

const ModalTermsAndConditions = (props) => (
	<ModalTitle {...props}>
		<React.Fragment>
			{[
				`Política de privacidad de VIOS`,
				`Bienvenido`,
				`La confianza es muy importante para nosotros y estamos comprometidos a proteger la privacidad y la seguridad de su información personal. La información compartida con nosotros nos ayuda a ofrecer una gran experiencia con nuestra plataforma. Contamos con un equipo de privacidad dedicado que se compromete a proteger toda la información personal que recopilamos y a garantizar que la información personal se maneja correctamente en todo el mundo.`,
				`La presente Política de Privacidad describe la forma en la que recopilamos, utilizamos, tratamos y divulgamos su información. Esta política de privacidad describe nuestras prácticas de privacidad para todos los sitios web, plataformas y servicios que se vinculan a él. Por favor, lea la política de privacidad en el sitio aplicable.`,
				`1.-Datos recopilados`,
				`Nosotros solicitamos y recopilamos los siguientes datos personales sobre usted cuando utiliza la Plataforma de VIOS. Estos datos son necesarios para la correcta ejecución del contrato formalizado entre su representante y nosotros y nos permiten cumplir nuestras obligaciones legales. Sin estos datos, es posible que no podamos prestarle todos los servicios solicitados.`,
				`• Información de la Cuenta. Al registrarse dentro de la plataforma para disponer de una Cuenta de dentro de VIOS, le requerimos determinada información como su nombre, apellidos, teléfono, Código Postal y Colonia.`,
				`• Información de verificación de identidad. Para contribuir a crear y mantener un entorno de confianza, el representante vecinal deberá verificar la identidad de cada uno de los representantes de hogar.`,
				`• Información de Pago. Para el pago de nuestro servicio se domiciliará única y exclusivamente el cargo al representante vecinal ya sea a nombre de persona fisca o moral, o bien quien funcione como represéntate de la colonia con capacidades legales de celebrar dicho contrato. Por lo cual se solicitarán datos bancarios de para domiciliar el servicio.`,
				`• Comunicaciones con su representante, colonos y VIOS. Cuando usted se comunica atreves de la plataforma digital, nosotros recopilamos información acerca de estas comunicaciones y cualquier dato que usted opte por proporcionar.`,
				`• Recopilación de información de consenso. Dentro de la plataforma se podrán levantar encuestas por parte de VIOS, colonos y Representantes. Los datos o resultados obtenidos de dichas consultas serán en base a ala respuesta proporcionados por los miembros de la comunidad.`,
				`2.-DE QUÉ FORMA RECOPILAMOS NOSOTROS INFORMACIÓN`,
				`Nosotros podremos utilizar, almacenar y procesar la información que dentro de la plataforma se proporcione dentro nuestros siguientes apartados:`,
				`Noticias: Donde los miembros de la comunidad podrán dar aviso de acontecimientos dentro de su comunidad otorgando un nivel de urgencia especifico.`,
				`Encuestas: Mediante un formulario cada uno de los miembros de la comunidad podrán proponer encuestas, mismas que serán contestadas por el resto de los miembros de la comunidad.`,
				`Comentarios: Es un canal de comunicación directa entre los delegados y los colonos, misma información será registrada en VIOS, sin que ello quiere decir que van a ser divulgadas.`,
				`Colonia: Dentro de este apartado se concentra las estadísticas de registro para poder proporcionar a todos los usuarios información acerca de sus delegados, miembros de la comunidad, cantidad de hogares.`,
				`La información proporcionada estará destinada ofrecerle la mejor experiencia posible y dentro de la plataforma los datos recabados por VIOS sirven para:`,
				`• Permitirle a usted acceder a la Plataforma VIOS y utilizarla.`,
				`• Permitirle a usted comunicarse a usted con sus delegados o representantes vecinales.`,
				`• Operar, proteger, mejorar y optimizar la Plataforma de VIOS y la experiencia dentro de su comunidad, mediante labores de análisis, estadística e investigación.`,
				`• Prestar servicios de atención al cliente.`,
				`• Enviarle a usted mensajes sobre el servicio o sobre soporte, actualizaciones, alertas de seguridad y notificaciones de cuenta.`,
				`• Contar con un botón de pánico en caso de emergencia.`,
				`• Habilitar su uso de nuestros productos empresariales.`,
				`• Brindar acompañamiento durante la gestión de cada unos de los delgados o representantes vecinales.`,
				`• Fomentar la participación ciudadana`,
				`• Facilitar la toma de decisiones dentro de la comunidad de manera remota y en consenso.`,
				`• Contar con información estadística para la gestión de tu comunidad.`,
				`3.-DIVULGACIÓN DE INFORMACIÓN`,
				`3.1Casos en los que se divulga información`,
				`Cuando usted sea un miembro oficial de la plataforma VIOS, tendrá la opción de elegir si sus publicaciones dentro bloque de noticias lleven su nombre o bien mantenerlo de manera anónima por seguridad o conveniencia de los usuarios.`,
				`Los resultados de las encuestas propuesta por los miembros siempre serán divagados para mantener en contexto de los resultados y acontecimientos.`,
				`Toda la información generada por el uso de la aplicación, excluyendo datos personales.`,
				`3.2 Casos de no divulgación`,
				`Información personal y numero de teléfono, nunca serán divulgados a terceros por parte de VIOS.`,
				`Los números de teléfono son para poder verificar la autenticidad y en caso de emergencias.`,
				`Los perfiles solo podrán ser vistos por los miembros de un solo hogar, es decir no se podrá ver quien o quienes son los miembros de otro Hogar.`,
				`4.-Servicios Adicionales que proporciona VIOS`,
				`Además de la plataforma VIOS brinda servicios de:`,
				`Gestión urbana basados el análisis de información dentro de un contexto determinado.`,
				`Acompañamiento a los representantes vecinales durante su gestión.`,
				`5.-Responsabilidad de información brindada`,
				`Dentro de la plataforma la información brindada o publicada es responsabilidad de los colonos y de los presentantes y todo aquel que publique información y se entiende que la plataforma solo es un medio.`,
				`6.-Datos y responsabilidades por parte del responsable de la plataforma VIOS`,
				`Nuestras políticas de privacidad son operadas y respaldadas por Gestión e Innovación Urbana Inteligente SAPI, operante en México de la plataforma VIOS y en caso de controversia, será quien represente a la plataforma.`,
				`El uso y manejo de la marca VIOS también son responsabilidad de Gestión e Innovación Urbana Inteligente SAPI, operante en México de la plataforma VIOS.`,
				`Los pagos y operaciones financieras serán operadas a la cuenta bancaria de Gestión e Innovación Urbana Inteligente SAPI, operante en México de la plataforma VIOS.`,
			].map((item, index) => (
				<React.Fragment key={String(index)}>
					<TextComponent styles={styles.baseMargin} size="subtitle" color={'absWhite'} text={item} />
				</React.Fragment>
			))}
		</React.Fragment>
	</ModalTitle>
);
export default React.memo(ModalTermsAndConditions);

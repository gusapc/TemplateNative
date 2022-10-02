import React from 'react';
import { View, TextComponent, ModalTitle } from '../../components';
import styles from './ModalPrivacyPolicyStyle';

const ModalPrivacyPolicy = (props) => (
	<ModalTitle {...props}>
		<React.Fragment>
			{[
				`Términos y condiciones`,
				`Condiciones de servicio`,
				`Te damos la bienvenida a ” Vios”`,
				`Estas condiciones rigen a “Vios”, los productos, las funciones, los servicios las tecnologías y el Software que ofrecemos, excepto cuando indiquemos expresamente que se aplican otras condiciones distintas a estas.`,
				`1. DEFINICIONES`,
				`● Para los efectos de estos Términos y Condiciones se entiende por:`,
				`● Representante vecinal: A la persona que firma como representante del comité de administración de cada fraccionamiento.`,
				`● Comité de administración: Es el grupo de individuos que coordinan la administración y gestión de cada fraccionamiento.`,
				`● Usuarios: Cada uno de los hogares habitados, organizados que aportan una cuota mensual para la gestión de servicios dentro de su fraccionamiento.`,
				`● Colonos: Habitantes de cada uno de los hogares habitados dentro del fraccionamiento.`,
				`● Proveedores autorizados: Se refiere a cualquier prestador de servicio que por invitación del Representante vecinal, forme parte del catálogo de proveedores de calidad de la plataforma “ ViOS”.`,
				`● Validación de identidad: Se refiere al proceso mediante el cual el Representante Vecinal y/o el Comité de administración validan la identidad de un Usuario y/o de un Proveedor de servicio autorizado.`,
				`● Administrador de Zona: Es el enlace por parte de ViOS para brindar acompañamiento, asesoría y soporte en la gestión vecinal, de cada uno de los fraccionamientos donde ViOS esté presente.`,
				`● ViOS : La plataforma digital de comunicación y gestión vecinal que brinda las herramientas necesarias para las colonias, fraccionamientos o privadas organizadas, facilitando la interacción de tu comunidad. Dicha plataforma es operada y gestionada por GESTION Y DESARROLLO URBANO S DE RL DE CV con domicilio en Calle Zacatecas #600 int 12, Col. San Cristobal Mineral de la Reforma CP 42186.`,
				`● Actores : Es el conjunto de los participantes de manera remota dentro de la plataforma .`,
				`2.- Los Servicios de ViOS`,
				`Nuestra misión es brindar herramientas, que faciliten la comunicación, organización e interacción dentro de sus comunidades, que permitan gestionar mejores servicios y con esto contribuir a mejorar la calidad de vida de sus habitantes. A fin de cumplir esta misión “ViOS” te ofrece productos y servicios enfocados en comunicar e informar a ti y a los habitantes de tu comunidad.`,
				`Dichos servicios son descritos a continuación:`,
				`Te conectamos con tu comunidad para que estés informado de los acontecimientos que son importantes para ti, tu hogar y tu comunidad, en nuestro apartado de noticias podrán compartir Y reportar fallas, levantar quejas o exponer anomalías de los servicios que brindan los prestadores de servicios para advertir a la comunidad de situaciones que puedan poner en riesgo la seguridad, la convivencia y la economía de la comunidad.`,
				`Te contactamos con los prestadores de servicios públicos y privados comprometidos a brindarte servicios de calidad a ti y a los habitantes de tu comunidad. Dentro de nuestra plataforma encontraras información sobre cada proveedor que permita ponerte en contacto con él, para solicitar sus servicios, para evaluarlo, y conocer su reputación. Los proveedores que aparecen en el apartado de servicios son validados por el Comité de Administración y/o el Representante Vecinal.`,
				`Participa en las decisiones de tu comunidad en el apartado de encuestas podrás interactuar, en tiempo real y de manera remota, para votar, consensar y tomar decisiones de manera democrática, olvídate de las reuniones con falta de audiencia. Así la comunidad participara este donde este.`,
				`La transparencia es una parte muy importante de la gestión de las comunidades por eso ViOS permitirá mantener a la comunidad informada respecto a los ingresos, los gastos , los resultados de las encuestas y las decisiones que se toman médiate el consenso. La plataforma de permitirá tener accesos a esta información de manera remota y para consultarla de manera remota, con el fin de mantener informada a la comunidad de los gastos que se realizan en la comunidad`,
				`En caso de emergencia ViOS cuenta con el botón de pánico mismo que esta direccionado a los prestadores de servicio de seguridad de tu comunidad y en caso de emergencia ellos pueden brindarte apoyo de forma inmediata.`,
				`El servicio de gestión estará a cargo de nuestro Administrador de Zona quien podrá brindar soporte asesoría en la gestión del fraccionamiento, facilitando información, contactos y procesos que permitan dar solución a contingencias, emergencias, o problemáticas que puedan poner en riesgo la calidad de vida. Dicha gestión está encaminada a mejorar siempre la calidad de servicios que se reciben, aumentar la recaudación de cuotas de administración, incentivar la participación, difundir prácticas exitosas en otras colonias o fraccionamientos, dar a conocer casos de éxito.`,
				`3.-PRIVACIDAD`,
				`Tus datos dentro de nuestra plataforma son manejados mediante la Ley federal de protección de datos personales. Los datos de nuestros usuarios protegen su identidad previamente validada por el Representante Vecinal. Los datos e información que se genera es usada en beneficio de la gestión de servicios de tu comunidad.`,
				`Cada uno de los actores que interactúan dentro de la plataforma será validada su identidad por los representantes vecinales.`,
				`La información estadística generada a partir de la plataforma podrá ser utilizada por ViOS para mejorar la interacción y la comunicación .`,
				`4.- El contenido`,
				`ViOS y su equipo no es responsable de contenido que se publique dentro de la plataforma or parte de los usuarios, representantes vecinales y/o comité de servicios.`,
				`Los datos de los Prestadores de servicio serán validados por el Represéntate Vecinal y/o Administrador de Zona .`,
				`6.- Validación de identidad y accesos a la plataforma:`,
				`Se refiere al proceso mediante el cual el Representante Vecinal y/o el Comité de administración validan la identidad de un Usuario y/o de un Proveedor de servicio autorizado.`,
				`● El acceso del Representante vecinal y/o Comité de administración: Estará validado por el Administrador Zona , quien validara la identidad y facultades los actores antes mencionados.`,
				`● Los Usuarios: Serán validados por el Representante vecinal y/o Comité de administración, y el tener acceso a la plataforma ViOS forma parte de los beneficios de pagar la cuota de administración al comité de tu colonia, por tal motivo el Representante vecinal y/o Comité de administración podrá dar de baja o cancelar el acceso a la plataforma por falta de pago del los usuarios.`,
				`● Proveedores autorizados: En los que se refiere a os prestadores de servicios su interacción estará limitada únicamente a promover sus datos de contacto y llamada para solicitar servicios desde la plataforma. La Validación de los datos e identidad de estos estará a cargo del Representante vecinal y/o Comité de administración asi como del Administrador de Zona.`,
				`8.-ViOS No se hace responsable`,
				`ViOS no es responsable del contenido que se genere , no tiene ninguna influencia en las publicaciones dentro de la plataforma por parte de los usuarios , Representante vecinal y/o Comité de administración`,
				`ViOS no se hace responsable por alguna falla o anomalía en los servicios brindados por los prestadores de servicios pues ViOS solo es el medio de contacto no el prestador de servicios.`,
			].map((item, index) => (
				<React.Fragment key={String(index)}>
					<TextComponent styles={styles.baseMargin} size="subtitle" color={'absWhite'} text={item} />
				</React.Fragment>
			))}
		</React.Fragment>
	</ModalTitle>
);

export default React.memo(ModalPrivacyPolicy);

"use client";
import { TextBoard } from "@/components";
import useTextBoardContext from "@/hooks/useTextBoardContext";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const text = `Pareciera que las historias de este barrio suceden todas al mismo tiempo, una detrás de la otra con una perfección que intriga. Bocinazos y audios de WhatsApp encontrándose con las pisadas húmedas de los runners que doblan en Pepirí, estirando exageramente él trote en la curva para seguir del otro lado del parque. Tal vez no se dan cuenta, pero me parece que es wintencional. El brillo de su transpiración y las manchas grisáseas del sudor me dan frío y culpa. Caseros está cerrada a la altura de 24 de Noviembre, justo en la esquina del quiosco veinticuatro horas al que siempre encuentro siendo atendido por un tipo que escucha un heavy metal chilloso, oscuro, que dan ganas de salir urgente a los clientes y a mi cuando quiero algo dulce a las tres de la mañana. #das das
El semáforo marca la pausa antes de cruzar hacia Loria, me quito el chaleco de culpa porque estoy volviendo del gimnasio -no hay que sentir tal culpa si ya cumplí con mi cuotaparte de la semana- y reniego por el exagerado escape de las motos de los repartidores vespertinos de Mercado Libre.
Como se que estoy llegando palpo los bolsillos húmedos de mi campera abombada. Ya se que las traigo conmigo pero hasta no apretar las llaves de casa dos o tres veces con el centro de la palma de mi mano, temo haberlas olvidado. La friza del interior está bailarina y cálida por mi transpiración. Detrás mio dos chicas saliendo de la universidad, si querés agarrate la medialuna o la hojaldrada, la de dulce de leche dejamela a mi, no seas hija de puta le dice una a la otra entonces esta urgetea dentro de una bolsa de papel madera, con manchitas oscuras de la grasa, y se lleva a la boca algo que cruje al morder y se rie. No llego a ver bien, pero tal vez agarró una cuadrada de hojaldre y pastelera, de las que venden acá a la vuelta y le gustan a mi mamá. Mama
La chicharra de la puerta del edificio donde vivo se hace notar a mitad de cuadra entonces es hora de sacar las manos calentitas de la campera que me compré para mi primer viaje a Bariloche, ahora con varios relieves en las mangas, mordeduras de mi segundo gato. Cuánta impotencia cuando las rozo, la verdad. El click de la llave imantada me da acceso y al entrar hundo un poco los ojos, esperando sin remedio el descargo violento que da la puerta de cristal dañada, que poco parece importarle al administrador. Puteo y se me escapa unsuspiro mientras me miro un poco en el ventanal. El feedback del botón del ascensor no es inmediato, así tengo que presionar varias veces con algo de fuerza. Mientras la robot me dice “ascensor bajando” , apuntanto los ojos al techo, y como siguiendo migajas de pan, trato de adivinar los lugares exáctos en donde caen las pizadas del vecino del primero “C” y las de su hijito, se oye que juegan. Es buen papá, que vuelve de trabajar un jueves y juega a corretear a su hijo por toda la casa y levantarlo, haciendo burbujas en su panza con su boca. Las risas del nene y la voz tosca, a propósito del pade se oyen mientras voy entrando al ascensor.
El caniche berreta del primero “A”, la bachata dulce de la puertorriqueña del segundo, historias que me invento, o que me gustaría que así fueran del resto de los pisos. Todo eso pulsa en el recorrido de tres pisos en el elevador de mi edificio, junto con la vibración hidráulica de las lingas que me suben. El edificio tiene solo cinco años de vida y pareciera que tiene quince, siento que vio acá hace décadas.
Ante mi llegada, el reclamo de mis gatos no tarda ni tres segundos en llegar, luego de notar el campanazo de mis llaves claro. Maullidos demandantes y preocupados que se acercan a la puerta. Se sientan erguidos con los ojos saltones, esperando a que entre con ellos y les cuente las novedades luego de la hora que me ausenté. La más grande se queda un rato más, y lanza un jadeo vacío, sin fuerza. Se parece un poco a mi en eso, le cuesta hablar.
Trato de acariciarlos pero ambos huyen, sus maujeos me dicen “te extrañamos pero no para tanto”. Es jueves y volví a casa después de entrenar.
`;

const Work = () => {
  const path = usePathname();

  const { setOriginalText } = useTextBoardContext();

  useEffect(() => {
    setOriginalText(text);
  }, [setOriginalText]);

  return (
    <div className="flex flex-col w-2/5">
      <p>{path}</p>
      <TextBoard />;
    </div>
  );
};

export default Work;

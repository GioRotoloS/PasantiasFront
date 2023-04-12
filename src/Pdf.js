import React from "react";
import { Document, Page, Text, Image } from "@react-pdf/renderer";


const Pdf = () =>{
    return(
        <Document>
    <Page size= "A4">
     <Text>CRONOGRAMA DE ASESORIAS
Yo C.I. me comprometo a cumplir y a
respetar cada uno de los requisitos para el cabal desempeño de mi Pasantía Académica que
se expresan a continuación, y asumo con absoluta responsabilidad las consecuencias a que
hubiera lugar si llegara a faltar o a incurrir en alguna irregularidad que vaya en contra de lo
expresado en este documento
Firma:
 Saludos estimado pasante a continuación le indicamos el cronograma de asesorías
para las entregas de los capítulos que constituirán el informe final
ASESORIA 1: Entrega de los capítulos I Y II 00/00/2023 (0:00 - 0:00) PM
ASESORIA 2: Entrega del capítulo III 00/00/2023 (0:00 - 0:00) PM
ASESORIA 3: Entrega del borrador completo 00/00/2023 (0:00 - 0:00) PM
ASESORIA 4: Entrega del informe final 00/00/2023 (0:00 - 0:00) PM
 Y Entrevista
NOTAS
1.Los capítulos deben ser enviados al aula virtual por lo menos un día antes de la
fecha indicada, hasta las 12 del mediodía para su revisión, el día indicado en la
fecha, debe asistir de manera presencial, para registrar su asistencia y recibir las
observaciones y/o correcciones.
2.Las entregas deben cumplir lo establecido en el manual de pasantías
académicas, lo indicado en el aula virtual y el manual de normas URBE para los
trabajos de grado
3.El recurso tiempo es limitado y finito, por lo que rogamos ajustarnos al horario
establecido, para poder brindar la atención adecuada y personalizada a cada uno
de los pasantes
Les deseamos el mayor de los éxitos en logro de esta meta, para apoyar y contribuir a
conseguir este objetivo quedamos a su disposición, para cualquier duda o inquietud
Atentamente
Ing. Omar González Garcés Msc.
     Tutor Académico de Pasantías</Text>
    </Page>
</Document>
    );
};

export default Pdf;
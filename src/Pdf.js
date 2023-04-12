import React from "react";
import { Document, Page, Text, Image, StyleSheet, View, PDFViewer, Font } from "@react-pdf/renderer";
import logourbe from "./img/logourbe_pdf.png"
import Roboto from "./fonts/Roboto/Roboto-Regular.ttf"
import RobotoBold from "./fonts/Roboto/Roboto-Bold.ttf"
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom/dist";
import axios from "axios";


const Pdf = () =>{

    const [post, setPost] = useState({})

    const location = useLocation();
    const navigate = useNavigate();

    const postId = location.pathname.split("/")[2]

    useEffect(()=>{
        const fetchData = async ()=>{
            try{

                const res = await axios.get(`/posts/${postId}`);
                setPost(res.data);

            }catch(err){
                console.log(err)}
        };
        fetchData();

    }, [postId]);

    Font.register({
        family: 'RobotoBold',
        format: "truetype",
        src: RobotoBold
    });

    Font.register({
        family: 'Roboto',
        format: "truetype",
        src: Roboto
    });

    const styles = StyleSheet.create({

        page: { backgroundColor: 'white' },
        titulo: { textAlign: 'center', fontFamily: "RobotoBold", fontSize: 12},
        tituloAsesoria: { textAlign: 'justify', fontFamily: "RobotoBold", fontSize: 12},
        contenido: { textAlign: 'justify', fontFamily: "Roboto", fontSize: 12, marginTop: 20, marginLeft: 80, marginRight: 60, lineHeight: 2},
        interlineado: {color: 'white'},
        asesorias: {textAlign: 'justify', fontFamily: "Roboto", fontSize: 12, marginLeft: 80, marginRight: 60, lineHeight: 2},
        viewer: {
            width: window.innerWidth, //the pdf viewer will take up all of the width and height
            height: window.innerHeight,
        },
        image: { width: "20%", height: "10%", marginLeft: 400}

      });

      

    return(
        <PDFViewer style={styles.viewer}>
            <Document>
                <Page size="A4" style={styles.page}>
                <Image src={logourbe} alt="" style={styles.image}/>
                        
                <View>
                    <Text style={styles.titulo}>CRONOGRAMA DE ASESORIAS</Text>
                    <Text style={styles.contenido}>
                        Yo_________________________	C.I.________________________ me comprometo a cumplir y a respetar cada uno de los requisitos para el cabal desempeño 
                        de mi Pasantía Académica que se expresan a continuación, y asumo con absoluta responsabilidad las consecuencias a que hubiera lugar si llegara a 
                        faltar o a incurrir en alguna irregularidad que vaya en contra de lo expresado en este documento 
                    </Text>
                    <Text style={styles.contenido}>
                        Firma:___________________________
                    </Text>

                    <Text style={styles.contenido}>
                        <Text style={styles.interlineado}>...</Text>Saludos estimado pasante a continuación le indicamos el cronograma de asesorías para las entregas de los capítulos que constituirán el informe 
                        final 
                    </Text>
                    <Text style={styles.asesorias}>
                        <Text style={styles.tituloAsesoria}>ASESORIA 1: </Text>
                        <Text style={styles.asesorias}>Entrega de los capítulos I Y II                      {post.advisorys_week1} (0:00 - 0:00) PM  </Text>
                    </Text>
                    <Text style={styles.asesorias}>
                        <Text style={styles.tituloAsesoria}>ASESORIA 2: </Text>
                        <Text style={styles.asesorias}>Entrega del capítulo III                                  {post.advisorys_week2} (0:00 - 0:00) PM </Text>
                    </Text>
                    <Text style={styles.asesorias}>
                        <Text style={styles.tituloAsesoria}>ASESORIA 3: </Text>
                        <Text style={styles.asesorias}>Entrega del borrador completo                    {post.advisorys_week3} (0:00 - 0:00) PM </Text>
                    </Text>
                    <Text style={styles.asesorias}>
                        <Text style={styles.tituloAsesoria}>ASESORIA 4: </Text>
                        <Text style={styles.asesorias}>Entrega del informe final y Entrevista         {post.advisorys_week4} (0:00 - 0:00) PM  </Text>
                    </Text>
                    <Text style={styles.asesorias}>
                        <Text style={styles.tituloAsesoria}>NOTAS</Text>
                    </Text>
                    <Text style={styles.asesorias}>
                        <Text style={styles.tituloAsesoria}>
                            1.Los capítulos deben ser enviados al aula virtual por lo menos un día antes de la fecha indicada, hasta las 12 del mediodía para su revisión, 
                            el día indicado en la fecha, debe asistir de manera presencial, para registrar su asistencia y recibir las observaciones y/o correcciones. 
                        </Text>
                    </Text>
                    <Text style={styles.contenido}>
                        <Text style={styles.tituloAsesoria}>
                            2.Las entregas deben cumplir lo establecido en el manual de pasantías académicas, lo indicado en el aula virtual y el manual de normas URBE para 
                            los trabajos de grado   
                        </Text>
                    </Text>
                    <Text style={styles.contenido}>
                        <Text style={styles.tituloAsesoria}>
                            3.El recurso tiempo es limitado y finito, por lo que rogamos ajustarnos al horario establecido, para poder brindar la atención adecuada y 
                            personalizada a cada uno de los pasantes  
                        </Text>
                    </Text>
                    <Text style={styles.asesorias}>
                        Les deseamos el mayor de los éxitos en logro de esta meta, para apoyar y contribuir a conseguir este objetivo quedamos a su disposición, para 
                        cualquier duda o inquietud 
                    </Text>
                    <Text style={styles.asesorias}>
                        Atentamente
                    </Text>
                    <Text style={styles.asesorias}>
                        <Text style={styles.tituloAsesoria}>
                            {post.tutor}
                        </Text>
                    </Text>
                </View>
                
                </Page>
            </Document>
        </PDFViewer>
    );
};

export default Pdf;
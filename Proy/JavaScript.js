const contenedor = document.getElementById("test");
const botonres = document.getElementById("boton");
const resultadotest = document.getElementById("resultado");

const preguntas = [
    {
        pregunta: "1.¿La matemática discreta es la que estudia una serie de estructuras como algoritmos, grafos y teoría de números, que son el fundamento de la ciencia de la computación?", 
        respuestas: {
            A: "Verdadero",
            B: "Falso",
            
        },
        respuestacorrecta:"A"  
    }, 
    {
        pregunta: "2.¿Este principio establece que el número de posibilidades en múltiples eventos pueden ocurrir, se pueden determinar al multiplicar el número de resultados posibles por cada evento?", 
        respuestas: {
            A: "Regla de la suma o principio de la adición",
            B: "Principios Fundamentales del Conteo",
            C: "Regla o principio de la Multiplicación",
        },
        respuestacorrecta:"B" 
    },
    
    {
        pregunta: "3.¿Cuantos principios fundamentales del conteo existen?", 
        respuestas: {
            A: "2",
            B: "4",
            C: "1",
        },
        respuestacorrecta:"A" 
    },
    
    {
        pregunta: "4.¿Son agrupaciones en las que importa el orden de los objetos?", 
        respuestas: {
            A: "Combinaciones",
            B: "Permutaciones con repeticion",
            C: "Permutaciones",
        },
        respuestacorrecta:"C" 
    },
    {
        pregunta: "5.¿son agrupaciones en las que el contenido importa, pero el orden no?", 
        respuestas: {
            A: "Combinaciones",
            B: "Permutaciones ",
            C: "Combinaciones con repeticion",
        },
        respuestacorrecta:"A" 
    },
    {
        pregunta: "6.¿Que personaje desarrollo la teoria de conjuntos y sus fundamentos basicos?", 
        respuestas: {
            A: "Alberth Einstein",
            B: "Henry Ford",
            C: "George Cantor",
        },
        respuestacorrecta:"C" 
    },
    {
        pregunta: "7.¿Diagramas de Venn son ilustraciones usadas en la rama de la Matemática y Lógica de clases conocida como teoría de conjuntos?", 
        respuestas: {
            A: "Verdadero",
            B: "Falso",
            
        },
        respuestacorrecta:"A" 
    },
    {
        pregunta: "8.¿Es un método de demostración que se utiliza cuando se trata de establecer la veracidad de una lista infinita de proposiciones?", 
        respuestas: {
            A: "Teoria de Conjuntos",
            B: "Induccion Matematica",
            C: "Diagramas de Venn y productos Cartecianos",
        },
        respuestacorrecta:"B" 
    },
    {
        pregunta: "9.¿El Algoritmo de la división es un algoritmo que repite los pasos básicos de Raiz Cuadrada, Sumar, Restar,?", 
        respuestas: {
            A: "Verdadero",
            B: "Falso",
            
        },
        respuestacorrecta:"B" 
    },
    
    {
        pregunta: "10.¿Cual de las siguientes respuestas es un complemento de Grafo?", 
        respuestas: {
            A: "Orientado",
            B: "Dirigido",
            C: "Aristas Adyacentes",
        },
        respuestacorrecta:"C" 
    },
    {
        pregunta: "11.¿Se puede definir como la cantidad de aristas que parten desde o hacia un mismo vértice?", 
        respuestas: {
            A: "Grado de Vertice",
            B: "Ruta de Euler",
            C: "Circuito de Euler",
        },
        respuestacorrecta:"A" 
    },
    {
        pregunta: "12.¿Una ruta o camino de Euler es una trayectoria que contiene todas las aristas del grafo y recorre una arista exactamente una vez?", 
        respuestas: {
            A: "Verdadero",
            B: "Falso",
            
        },
        respuestacorrecta:"A" 
    },
    {
        pregunta: "13.¿Un circuito de Euler es un Camino de Euler que contiene todas las aristas del grafo y recorre una arista exactamente una vez?", 
        respuestas: {
            A: "Verdadero",
            B: "Falso",
            
        },
        respuestacorrecta:"B" 
    },
    {
        pregunta: "14.¿Es un caso particular de grafo, es un objeto que comienza con una raíz y se extiende en ramificaciones o lineas que terminan en un nodo?", 
        respuestas: {
            A: "Longitud de un Arbol",
            B: "Teoria de Arboles",
            C: "Longitud de Camino",
        },
        respuestacorrecta:"B" 
    },
    {
        pregunta: "15.¿Un árbol binario es un tipo de árbol en que cada vértice máximo puede tener 4 hijos?", 
        respuestas: {
            A: "Verdadero",
            B: "Falso",
           
        },
        respuestacorrecta:"B" 
    },
    {
        pregunta: "16.¿Cual de las siguientes respuestas es una caracteristica escensial de un vector?", 
        respuestas: {
            A: "Operaciones Geométricas Vectoriales",
            B: "Resta Geométrica de Vectores",
            C: "Direccion",
        },
        respuestacorrecta:"C" 
    },
    {
        pregunta: "17.¿Es el cálculo matemático que evalúa las posibilidades que existen de que una cosa suceda cuando interviene el azar?", 
        respuestas: {
            A: "Probabilidad",
            B: "Eventos",
            C: "Espacio Muestral",
        },
        respuestacorrecta:"A" 
    },
    {
        pregunta: "18.¿Espacio Muestral Discreto son aquellos espacios donde el número de sucesos elementales es finito o infinito numerable?", 
        respuestas: {
            A: "Verdadero",
            B: "Falso",
            
        },
        respuestacorrecta:"A" 
    },
    {
        pregunta: "19.¿Son aquellas que quedan totalmente definidas con un módulo, una dirección y un sentido?", 
        respuestas: {
            A: "Operaciones Geométricas Vectoriales",
            B: "Sistema de Coordenadas Cartecianas",
            C: "Cantidad Vectorial",
        },
        respuestacorrecta:"C" 
    },
    {
        pregunta: "20.¿Es aquel árbol en el que los nodos de cada nivel tienen sus dos hijos o ninguno (si es hoja).?", 
        respuestas: {
            A: "Arbol Binario Lleno",
            B: "Arbol Binario",
            C: "Arbol Binario Completo",
        },
        respuestacorrecta:"A" 
    },

];

function mostrarTest(){
    const preguntasyrespuestas = [];
    
    preguntas.forEach ((preguntaactual, numerodepregunta) => { 
        const respuestas = [];
        for(letrarespuesta in preguntaactual.respuestas) {
            respuestas.push(
                `<label>
                 <input type="radio" name="${numerodepregunta}" value="${letrarespuesta}">
                 ${letrarespuesta} : ${preguntaactual.respuestas[letrarespuesta]} 
                </input>
                </label>`);
      } 
      preguntasyrespuestas.push(
          `<div class="cuestion"> ${preguntaactual.pregunta} </div>
          <div class="respuestas"> ${respuestas.join('')} </div>
          `
           
      );
  } );
  contenedor.innerHTML = preguntasyrespuestas.join('');

}
mostrarTest();

function mostrarresultado(){
const respuestas= contenedor.querySelectorAll(".respuestas");
let respuestacorrecta = 0;

preguntas.forEach((preguntaactual, numerodepregunta) => {
    const todaslasrespuestas = respuestas[numerodepregunta];
    const checkboxrespuestas= `input[name='${numerodepregunta}']:checked`;
    const respuestaelegida = (todaslasrespuestas.querySelector(checkboxrespuestas) || {}).value;

    if(respuestaelegida === preguntaactual.respuestacorrecta){
        respuestacorrecta++;

        respuestas[numerodepregunta].style.color = 'green';
    } else {
        respuestas[numerodepregunta].style.color = 'red';
    }
});
resultadotest.innerHTML = 'Sus respuestas correctas son:'   + respuestacorrecta +   ' de un total de preguntas de:'    + preguntas.length;

}

botonres.addEventListener('click', mostrarresultado);

var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "Ay Bruna, quién lo diría... Que estamos en el viaje que en su momento veíamos tan lejano", time: 4 },
  { text: "Y es que el tiempo es eso. Lo que crees que está lejos... parpadeas y ya ha pasado", time: 10 },
  { text: "Y los cumpleaños no son excepción, son una representación de lo relativo que es el tiempo", time: 18 },
  { text: "Sinceramente, he pasado este año recordando todo lo que hemos pasado y lo perfecto que era todo", time: 26 },
  { text: "Reflexionando sobre qué podríamos haber o no haber hecho para que esto siguiera igual", time: 34 },
  { text: "Ya no podemos ni mirarnos porque sabemos todo lo que una vez fuimos el uno para el otro...", time: 42 },
  { text: "Ahora, aunque nos arrepintamos, no hay vuelta atrás... Pero lo bueno de todo esto es que hemos aprendido", time: 50 },
  { text: "Hemos podido crecer y saber, gracias a todo esto, qué hacer y qué no hacer en nuestros próximos pasos", time: 58 },
  { text: "Y eso, aunque no haya sido lo mejor, nos ha ayudado a avanzar cada uno por su camino.", time: 66 },
  { text: "Hoy es un gran día para ti, Bruna, y quiero que lo disfrutes a lo grande", time: 74 },
  { text: "Quería decirte que, aunque ahora nuestra relación no es lo que era, siempre seguirás en mi corazón", time: 80 },
  { text: "Has sido mi primera vez en muchas cosas y nunca dejaré de recordar todos esos momentos junto a ti", time: 88 },
  { text: "Sin duda han sido los mejores de mi vida, pero supongo que tú, como yo, tenemos que seguir adelante", time: 96 },
  { text: "Así que solo quería darte las gracias… por haber formado parte de mi vida.", time: 104 },
  { text: "Feliz cumpleaños, Bruna 💚.", time: 112 },
];


function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 7
  );

  if (currentLine) {

    var fadeInDuration = 0.1;
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {

    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);


function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 216000);
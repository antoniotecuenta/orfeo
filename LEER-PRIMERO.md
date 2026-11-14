# Orfeo · No mires atrás

Escribe sin releer. Cada fragmento que cierras con `.`, `,`, `?`, `!` o `…` (o cada 15 palabras seguidas sin puntuación) desaparece de la pantalla y queda sellado hasta que termine el tiempo de la sesión. Enter empieza un párrafo nuevo.

Web: https://antoniotecuenta.github.io/orfeo/

## Cómo funciona

- Eliges la duración (5 a 60 minutos, u otra) y escribes. Solo ves el fragmento que estás escribiendo. El texto de ayuda aparece solo al empezar.
- Si sales (botón «Salir» o cierras la app), el reloj se detiene y la sesión queda en pausa: puedes continuar después con el tiempo que te faltaba. Lo escrito sigue sellado mientras tanto.
- «Darla por terminada» cierra la sesión; lo escrito queda sellado solo por el tiempo que faltaba.
- Al acabar el tiempo se abre: puedes leer, ponerle título, copiar, bajar un `.txt` o borrar.
- Abreviaturas como «Sr.», «Dr.» o «etc.» no cortan la oración.

## Nube

Usa el mismo proyecto de Supabase que Bestiario, con la tabla `orfeo` (ver `schema.sql`) y el mismo login con GitHub. La dirección `https://antoniotecuenta.github.io/orfeo/` tiene que estar en **Authentication → URL Configuration → Redirect URLs**.

Con dos dispositivos, las sesiones se mezclan una por una: gana la versión modificada más recientemente de cada sesión.

## Para hacer cambios

Edita `index.html` y súbelo de nuevo. Si el celular no ve la versión nueva, sube el número en `sw.js` (`orfeo-v1` → `orfeo-v2`).

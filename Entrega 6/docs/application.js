document.addEventListener('DOMContentLoaded', function() {
    // Obtén elementos del DOM
    const castorImage = document.getElementById('imagencastor');
    const dialogText = document.getElementById('dialogText');

    // Cambia el texto del globo de diálogo al pasar el ratón sobre el castor
    imagencastor.addEventListener('mouseover', function() {
        dialogText.textContent = 'Mi nombre es Piñón el castor. Vivo en la Patagonia Chilena, pero no soy oriundo de aquí, ¡baja para conocer mi historia!';
    });

    // Restaura el texto original al salir del área del castor
    imagencastor.addEventListener('mouseout', function() {
        dialogText.textContent = "¡Hola! Pasa el cursor sobre mí.";
    });


});

document.addEventListener('DOMContentLoaded', function() {
    // Obtén elementos del DOM
    const castorpatriota = document.getElementById('castorpatriota');
    const dialogPatriota = document.getElementById('dialog-patriota');

    // Cambia el texto del globo de diálogo al pasar el ratón sobre el castor
    castorpatriota.addEventListener('mouseover', function() {
        dialogPatriota.textContent = 'En estado natural puedo llegar a vivir 24 años y tener de 3 a 4 crías cada verano.';
    });

    // Restaura el texto original al salir del área del castor
    castorpatriota.addEventListener('mouseout', function() {
        dialogPatriota.textContent = "Mi nombre científico es castor canadensis,  ¡Mi lugar de origen es el norte de Estados Unidos!";
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Obtén elementos del DOM
    const castorconstructor = document.getElementById('castorconstructor');
    const dialogText3 = document.getElementById('dialogText3');

    // Cambia el texto del globo de diálogo al pasar el ratón sobre el castor
    castorconstructor.addEventListener('mouseover', function() {
        dialogText3.textContent = 'Soy un roedor semiacuático y además la única especie capaz de dar forma o modificar su entorno a parte del ser humano.';
    });

    // Restaura el texto original al salir del área del castor
    castorconstructor.addEventListener('mouseout', function() {
        dialogText3.textContent = "Mi trabajo es ser un ingeniero de ecosistemas, a través de la construcción de diques, puedo cambiar los cursos de agua creando un nuevo habitat para diversas especies. ";
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Obtén elementos del DOM
    const castorprofe = document.getElementById('castorprofe');
    const dialogTextProfe = document.getElementById('dialogText-profe');

    // Cambia el texto del globo de diálogo al pasar el ratón sobre el castor
    castorprofe.addEventListener('mouseover', function() {
        dialogTextProfe.textContent = '¡Soy el roedor más grande de América del Norte!';
    });

    // Restaura el texto original al salir del área del castor
    castorprofe.addEventListener('mouseout', function() {
        dialogTextProfe.textContent = "Puedo llegar a medir unos 70-80 centímetros de largo y pesar hasta 32 kilogramos aproximadamente. ";
    });
});
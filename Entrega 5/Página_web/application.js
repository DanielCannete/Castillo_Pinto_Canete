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
        dialogText.textContent = "¡Hola!";
    });


});

document.addEventListener('DOMContentLoaded', function() {
    // Obtén elementos del DOM
    const castorcito3 = document.getElementById('castorcito3');
    const dialogText2 = document.getElementById('dialogText2');

    // Cambia el texto del globo de diálogo al pasar el ratón sobre el castor
    castorcito3.addEventListener('mouseover', function() {
        dialogText2.textContent = 'La flora de mi hogar en el hemisferio norte se compone en su mayoría de sauces, arces, abedules y pinos. Estos árboles tienen una rápida capacidad regenerativa a pesar de que yo los tale.';
    });

    // Restaura el texto original al salir del área del castor
    castorcito3.addEventListener('mouseout', function() {
        dialogText2.textContent = "Mi nombre científico es castor canadensis, en estado natural puedo llegar a vivir 24 años y tener de 3 a 4 crías cada verano. ¡Mi lugar de origen es el norte de Estados Unidos!";
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Obtén elementos del DOM
    const castorcito2 = document.getElementById('castorcito2');
    const dialogText3 = document.getElementById('dialogText3');

    // Cambia el texto del globo de diálogo al pasar el ratón sobre el castor
    castorcito2.addEventListener('mouseover', function() {
        dialogText3.textContent = 'Lamentablemente, la flora de la Patagonia chilena no es apta par mi trabajo por lo que árboles como Lengas, coigües y ñirres mueren y, junto con ello, dejan de ser refugio de especies nativas.';
    });

    // Restaura el texto original al salir del área del castor
    castorcito2.addEventListener('mouseout', function() {
        dialogText3.textContent = " Mi trabajo es ser un ingeniero de ecosistemas, a través de la construcción de diques, puedo cambiar los cursos de agua creando un nuevo habitat para diversas especies. ";
    });
});
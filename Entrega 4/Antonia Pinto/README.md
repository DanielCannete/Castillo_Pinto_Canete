1.Antonia Pinto

Para la creación de esta vizualización traté de emplear más de tres librerías distintas y fue muy complicado. La verdad fue el ensayo-error más grande que me ha tocado en este proyecto, a pesar de ello estoy un poquito orgullosa porque no me tenía mucha fe. 

Busqué en internet varias librerías que me ofrecieran hacer un mapa. Comencé con plotly, y a pesar de mis esfuerzos y de modificar varias veces el código, nunca se mostró. Al final de este readme le adjuntaré algunos links de borradores para que se ria un rato. 

Después me crucé con una herramienta llamada mapbox, tampoco entendía por qué nunca aparecía el mapa, busqué soluciones en reddit y al parecer esta librería funciona con algo llamado "token". Me inscribí en su página, copié el famoso token, nunca apareció el mapa. Aún no se perdía la esperanza.

Después busqué librerías de mapas que no pidieran un token, y apareció folium, que es la herramienta que utilicé. Una lección de vida muy valiosa de esta experiencia es JAMÁS subestimar un mapa, creo que desarrollé una fobia a los mapas. 

Ahora sí, mi intención era mostrar un mapa de la patagonia, y marcar con burbujas o puntos el avance por año de los castores y al mismo tiempo evidenciar el desarrollo de la población. En la página de Folium copié el código para un mapa de burbujas, y ahora, empezó la diversión (irónicamente porsupuesto).

Le consulté a Chatgpt cómo hacer para que las burbujas abarcaran una área delimitada y no aparecieran como un cuadrado, también le pregunté por algunos errores que me mostraba colab y fue muy útil. Para delimitar una parte del mapa debes buscar en google maps las coordenadas exactas, y jugar a unir los puntos del perimetro. Otros detalles como el radio de las brubujas, su color o el zoom inicial fueron más fáciles de entender, gracias a las clases.

Disclaimer: La población de castores en 1946 era de 20 castores, ya después de aquello se perdió registro y para el sondeo de 1990, los castores alcanzaban una cifra superior a los 80.000 (por supuesto son estimaciones ya que no se dedicaron a contar castor por castor). En 2023 la especie sobrepasa los 100.000, por lo que es bastante sensato no poner 100.000 pelotitas sobre el mapa (literal cubrían todo el mapa). Las burbujas buscan evidenciar el avance del castor (desde el lago Fagnano en Argentina hasta la ciudad de Punta Arenas), el color indica el año: rojo los primeros 20 castores en 1946 (ahí si puse 20 pelotitas exactas), amarillo cuando se esparcieron por tierra del fuego en la década de los 60´s, y rojo para los 90´s, cuando atravesaron la Península de Brunswick y llegaron cerca de Punta Arenas.

Le mentiría si le digo que usé un csv para programar, fui uniendo coordenadas en google maps hasta delimitar el territorio que quería, subiré un csv con las coordenadas que obtuve y su ubicación. Traté de que folium leyera un csv pero sin éxito. 

Las pregúntas que debería responder mi visualización son:
¿En qué partes del la patagonia chileno-argentina hay presencia de castor canadensis?
¿En qué año fueron introducidos los castores en la patagonia?
¿Cuál es la cifra aproximada de castores presentes en territorio chileno?

Pero como podrá ver en la foto había logrado que aparecieran las burbujas amarillas, ahora no sé que pasó y desaparecieron. Pero después logré aparecer las burbujas rojas en el perimetro de la península de Brunswick, ya no entiendo nada. Tampoco pude agregar los años como quería. Estoy contenta de haber logrado algunas cosas pero claramente no se cumplió todo el objetivo. Se cumplió de cierta manera que las burbujas (que después serán castores probablemente) tapen las letras del mapa, para aludir al concepto de invasión como conversamos en clases.  


Links a los bloopers:
https://colab.research.google.com/drive/1ZGTtUjOl8gIniz2tCBEJU4lwb_SrI2WZ?usp=sharing
https://colab.research.google.com/drive/1H5DWQx-8s9akrw1UUWsLnRlke7Q3njjE?usp=sharing

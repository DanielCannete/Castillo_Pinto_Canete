polygon_coords = [                              CORRESPONDE A LOS LÍMITES DEL PERIMETRO A DEMARCAR
    [-54.43104651417474, -68.98284793348314],
    [-54.319059153407444, -69.33990358489612],
    [-54.19712678543768, -69.6914660724412],
    [-54.08772357658102, -70.00457641291106],
    [-53.85509102762949, -70.09796020372508],
    [-53.66674706760301, -69.76287720778367],
    [-53.506970008133344, -69.3344104260881],
    [-53.330188870932155, -69.5980822917469],
    [-53.41131489534397, -70.22449387472741],
    [-53.247752014643766, -70.381687139503],
    [-53.06636879972888, -70.33362707006242],
    [-52.88933598784382, -70.12159732640274],
    [-52.682451402203505, -69.64099663199706],
    [-52.55716063925663, -69.33001969536164],
    [-52.68073750875474, -69.19149361285648],
    [-52.706438795749015, -68.61759982695393],
    [-52.9847514737543, -68.5836750692504],
    [-53.684085451629215, -68.25882250575694],
    [-54.059716147573845, -68.01158673096992],
    [-54.43751108287768, -68.13520461836345],
    [-54.40431533739254, -68.85789380620244],
    [-54.182322665484556, -69.76125529100119],
    [-53.903146454727235, -70.11309081665965]
]


polygon_path = Path(polygon_coords)              CREA EL POLIGONO

bubbles_inside_polygon = []  
num_bubbles = 600                                NÚMERO DE BURBUJAS DENTRO DEL POLÍGONO

random_lat = random.uniform(-54.43104651417474, -53.903146454727235)  COORDENADAS DEL POLÍGONO
random_lon = random.uniform(-70.381687139503, -68.01158673096992)  

    
if polygon_path.contains_point((random_lat, random_lon)):            UTILIZA UNA RESTRICCIÓN PARA QUE LAS BURBUJAS QUEDEN DENTRO DEL LÍMITE
        bubbles_inside_polygon.append((random_lat, random_lon))


m = folium.Map(location=[-54.0, -68.0], zoom_start=7)         DE AQUÍ PARA ABAJO SE PERSONALIZAN LAS BURBUJAS
for coords in bubbles_inside_polygon:
    random_lat, random_lon = coords
    folium.CircleMarker(location=[random_lat, random_lon], radius=1, color='yellow', fill=True, fill_color='yellow', fill_opacity=1).add_to(m)

m.save('tierra_del_fuego_bubbles.html')
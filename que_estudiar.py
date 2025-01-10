import tensorflow as tf
import matplotlib.pyplot as plt
import numpy as np

# Datos de entrada (características de los estudiantes)
# (Interéses en....) 1=interes 0=no interes
# 1)ingenieria
# 2)ciencias exactas,
# 3)ciencias sociales,
# 4)arte, 
# 5)cálculo, 
# 6)comunicación, 
# 7)promedio de notas, 
# 8)trabajo al aire libre, 
# 9)oficina
# 10)medicina
#PREGUNTAS MAS ESPECIFICAS:
# 11)¿Te atrae trabajar con personas? (0=no, 1=si)
# 12)¿te desemvuelves mejor trabajando solo? 0=no 1= si
# 13)¿Te atrae el trabajo relacionado con la tecnología y la innovación? 0=si 1= no
# 14)¿Te atrae el mundo de los negocios y la economía? 0= no 1=si
# 15)¿Te gusta enseñar o explicar conceptos a otras personas? (0=no, 1=si)
# 16)¿Te interesa el estudio de la historia, filosofía o política? (0=no, 1=si)
# 17)¿Te interesa enseñar, formar o capacitar a otras personas? (0=no 1=si)
# 18)¿Te motiva brindar apoyo emocional o psicológico a personas en crisis?
# 19)¿Te interesa desarrollar videojuegos, aplicaciones móviles o software? (0=no, 1=si)


# Características de los estudiantes (intereses y habilidades) y las carreras correspondientes (targets)
features = [
    # Ingeniería
    (1, 1, 0, 0, 1, 1, 8.5, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1),  # Ejemplo 1: Interés en ciencias exactas, habilidad en cálculo, buen promedio
    (1, 1, 0, 0, 1, 0, 7.2, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0),  # Ejemplo 2: Interés en ciencias exactas, habilidad en cálculo, promedio medio
    (1, 1, 0, 0, 0, 1, 9.0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0),  # Ejemplo 3: Interés en ciencias exactas, habilidades en comunicación, excelente promedio

    # Medicina
    (0, 0, 0, 0, 1, 1, 8.7, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0),  # Ejemplo 1: Habilidad en cálculo, habilidades en comunicación, interés en medicina
    (0, 0, 0, 0, 0, 1, 7.8, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0),  # Ejemplo 2: Habilidades en comunicación, interés en medicina, trabajo al aire libre
    (0, 0, 0, 0, 1, 0, 9.0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0),  # Ejemplo 3: Habilidad en cálculo, interés en medicina, oficina, excelente promedio

    # Derecho/negocios
    (0, 1, 0, 0, 0, 1, 7.3, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0),  # Ejemplo 1: Interés en ciencias exactas, habilidades en comunicación, promedio medio
    (0, 0, 1, 0, 0, 1, 8.2, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0),  # Ejemplo 2: Interés en ciencias sociales, habilidades en comunicación, buen promedio
    (0, 1, 0, 0, 0, 0, 6.8, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0),  # Ejemplo 3: Interés en ciencias exactas, habilidades de trabajo en equipo, promedio bajo

    # Arte
    (0, 0, 0, 1, 0, 1, 8.4, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0),  # Ejemplo 1: Interés en arte, habilidades en comunicación, trabajo al aire libre
    (0, 0, 0, 1, 0, 1, 7.5, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0),  # Ejemplo 2: Interés en arte, habilidades en comunicación, trabajo en oficina
    (0, 0, 0, 1, 0, 1, 8.0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0),  # Ejemplo 3: Interés en arte, habilidades en comunicación, trabajo al aire libre

    # Ayuda Social
    (0, 0, 1, 0, 0, 1, 7.5, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0),  # Ejemplo 1: Interés en ciencias sociales, habilidades en comunicación, trabajo al aire libre
    (0, 0, 1, 0, 0, 1, 8.2, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0),  # Ejemplo 2: Interés en ciencias sociales, habilidades en comunicación, oficina
    (0, 0, 1, 0, 0, 1, 9.0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0),  # Ejemplo 3: Interés en ciencias sociales, habilidades en comunicación, oficina, excelente promedio

    # Educación
    (1, 0, 1, 0, 0, 1, 8.5, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0),  # Ejemplo 1: Interés en ciencias sociales, habilidades en comunicación, trabajo en oficina
    (0, 0, 1, 0, 0, 1, 7.6, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0),  # Ejemplo 2: Interés en ciencias sociales, habilidades en comunicación, trabajo en oficina
    (0, 0, 1, 0, 0, 1, 7.8, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0),  # Ejemplo 3: Interés en ciencias sociales, habilidades en comunicación, trabajo en oficina

    # Ciencias de la Computación
    (1, 1, 0, 0, 1, 1, 7.8, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1),  # Ejemplo 1: Interés en ciencias exactas, habilidad en cálculo, buen promedio
    (0, 1, 0, 0, 1, 0, 6.9, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1),  # Ejemplo 2: Interés en ciencias exactas, habilidad en cálculo, promedio bajo
    (0, 1, 0, 0, 0, 1, 8.4, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1),  # Ejemplo 3: Interés en ciencias exactas, habilidades en comunicación, trabajo al aire libre

]

# Carreras (targets)
targets = [
    # Ingeniería
    0, 0, 0,  
    # Medicina
    1, 1, 1,
    # Derecho
    2, 2, 2, 
    # Arte
    3, 3, 3, 
    # Ayuda Social
    4, 4, 4, 
    # Educación
    5, 5, 5, 
    # Ciencias de la Computación
    6, 6, 6
]


# Definición de la red neuronal
capaEntrada = tf.keras.layers.Dense(units=8, input_shape=[19])  # 8 características de entrada
capaOculta = tf.keras.layers.Dense(units=8, activation='relu')  # Capa oculta con 8 unidades y función de activación ReLU
capaSalida = tf.keras.layers.Dense(units=7, activation='softmax')  # 7 salidas posibles (una por cada carrera)

# Crear el modelo
modelo = tf.keras.Sequential([capaEntrada, capaOculta, capaSalida])

# Compilar el modelo
modelo.compile(
    optimizer=tf.keras.optimizers.Adam(0.1),
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Entrenamiento del modelo
print('Inicio de entrenamiento...')
historial = modelo.fit(features, targets, epochs=1000, verbose=False)
print('Modelo entrenado!')

# Evaluar el modelo en los mismos datos de entrada
loss, accuracy = modelo.evaluate(features, targets, verbose=0)
print(f"Pérdida: {loss}")
print(f"Precisión: {accuracy * 100:.2f}%")

# Graficar la pérdida durante el entrenamiento
plt.xlabel('#Época')
plt.ylabel('Pérdida')
plt.plot(historial.history['loss'])
plt.show()

# Realizar predicciones
predicciones = modelo.predict(features)

# Contabilizar cuántas veces se predice cada carrera
predicciones_clase = np.argmax(predicciones, axis=1)  # Obtener la clase predicha (índice con la mayor probabilidad)
contador_carreras = np.bincount(predicciones_clase)  # Contabilizar cuántas veces cada carrera fue predicha

# Graficar los resultados
carreras = ['Ingeniería', 'Medicina', 'Derecho', 'Arte', 'Ayuda Social', 'Educación', 'Ciencias de la Computación']
plt.bar(carreras, contador_carreras)
plt.xlabel('Carrera')
plt.ylabel('Número de predicciones')
plt.title('Número de veces que se predice cada carrera')
plt.show()

modelo.save('prediccion_carreras.h5')
print("modelo guardado como 'prediccion_carreras.h5'")

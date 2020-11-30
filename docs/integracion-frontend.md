## Front-End

El Front-End de la app lo he desarrollado usando Nuxt. Elegí este Framework porque está construido por encima de Vue,
lo que facilita un montón su uso. No te tienes que preocupar de configurar las rutas por ejemplo, ya que lo hace
automáticamente. 

He desarrollado la página de inicio por lo que al entrar aparece : "No graphics found". A medida que vaya avanzando el 
desarrollo el goal será que el usuario pueda ir añadiendo al Dashboard las gráficas que quiera. Los tipos de 
gráficas estarán definidas en una [función de Firebase](https://us-central1-viz-your-data.cloudfunctions.net/api/plotTypes).

La página está desplegada en Vercel : https://viz-your-data.vercel.app/

Cuando se pulsa en el Botón de añadir se muestran los tipos disponibles:

![plot_types](img/opciones_plot.png)
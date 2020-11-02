## Configuración de Travis

1. Nos damos de alta en Travis con Github:

  ![travis config](img/autorizar_travis.png)

2. Activamos el repositorio de nuestro proyecto para poder usarlo en Travis
  
    ![travis_install](img/install_travis.png)

3. Añadimos un fichero .travis.yml y lo subimos a Github, de esta manera le indicamos
a Travis qué hacer. Cuando hagamos push podremos ver que aparece el build de Travis:
    
    ![travis_install](img/travis_gh.png)


Ahora podremos ver cómo se ha activado la construcción en Travis con todas
 las versiones que hemos indicado en el fichero de configuración:

![pr_travis](img/pr_travis.png)

En nuestra primera versión del fichero de configuración de Travis se ha probado con Node 8 a la 11, y han fallado
la 8 y la 9 como podemos ver en la siguiente imagen:

![fail_build](img/fail_build.png)

Entonces sabemos que dichas versiones no funcionan para nuestro proyecto así que las eliminamos. Probamos también a 
añadir la última versión de node.
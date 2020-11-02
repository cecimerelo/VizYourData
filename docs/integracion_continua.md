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
añadir la última versión de node. Con esta última configuración se ha construido correctamente :

![success_build](img/succes_build.png)


Para ver los cambios que se han hecho en el código para configurar Travis ir [aquí](https://github.com/cecimerelo/VizYourData/pull/34/files#diff-6ac3f79fc25d95cd1e3d51da53a4b21b939437392578a35ae8cd6d5366ca5485).

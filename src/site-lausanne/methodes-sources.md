# Sources

# Methodes

## Toponymie

## Bâti

Les cartes Siegfried donnent la base de l'analyse du bâti. Cette série de cartes couvre précisément la période concernée, de 1873 à 1945. Vu que les quartiers de la Pontaise et Prélaz ont très peu de développement avant 1880, il n'y a pas trop d'intérêt à analyser des cartes plus anciennes. Les cartes siegfried ont été géoréférencées et vectorisées par le département de digital humanities. 


Le but est de montrer l'évolution du bâti d’une manière spatio-temporelle. Nous avons tenté d'utiliser 1945 comme référence et noter les polygones présents avec une forme similaire au même endroit selon l' indice et distance de Jaccard (IoU). Cela veut dire le rapport entre l'intersection et l’union des polygons. Malheureusement, le géoréférencement n’est pas statique. Entre les cartes de 1926 et 1928, il y a une discontinuité sévère. Le même immeuble peut se déplacer à des dizaines de mètres comme vous le voyez en dessous. Alors, nous avons pris une approche manuelle en évaluant si chaque immeuble présent en 1945 était aussi présent dans les autres cartes.

![discontinute_1926_1928](images/disconuite.png)

Ce n’est pas une méthode exacte pour déterminer l'évolution du bâti car l'évaluation a été faite d’une manière subjective. Cependant, ça donne une idée d'évolution.


## Métiers

## Iconographie

La source de l'iconographie de Lausanne est le Musée historique de Lausanne. Les images sont géolocalisées. Cela permet de filtrer les images dans les secteurs administratifs de la Pontaise et de Prélaz entre 1845 et 1951. Nous avons ajouté un buffer de 100 mètres pour inclure des endroits importants comme la caserne qui se situent juste en dehors du secteur. L’iconographie de tout Lausane peut se voir sur le site [icon-lausanne](https://icono-lausanne.github.io/). Ces images sont aussi intégrées à la [Time Atlas](https://timeatlas.eu/), qui contient une iconographie plus globale.  

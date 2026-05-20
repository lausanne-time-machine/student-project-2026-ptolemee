# Sources

# Methodes

## Presse

Le site Impresso-project.ch a été utilisé pour étudier la presse lausannoise entre 1870 et 1945. L'étude s'est attardée sur le <em>La Gazette de Lausanne</em> ainsi que <em>L'Estafette</em>. La recherche s'est faite par mots-clefs "Ponthaise" ou "Pontaise" et "Prélaz" ou "Prelaz". Plus de 10'000 différentes coupures de presse ont été passées en revue et sélectionnées selon leur pertinence quant à la vie des quartiers. Les événements saillant ont permis de reconstruire une chronologie et de déduire des schémas similaires entre les deux quartiers.

Cette approche est sensible à la qualité de l'OCR présent sur le site Impresso-project.ch, ainsi que biaisée car la presse ne relaie pas tous les événements historiques et que le rapport sur certains événements peuvent être influencés par l'avis de leur auteurs.

![Pontaise_Impresso](images/Pontaise_Impresso.png)
![Prelaz_Impresso](images/Prelaz_Impresso.png)

## Toponymie

## Bâti

Les cartes Siegfried donnent la base de l'analyse du bâti. Cette série de cartes couvre précisément la période concernée, de 1873 à 1945. Vu que les quartiers de la Pontaise et Prélaz ont très peu de développement avant 1880, il n'y a pas trop d'intérêt à analyser des cartes plus anciennes. Les cartes siegfried ont été géoréférencées et vectorisées par le département de digital humanities. 


Le but est de montrer l'évolution du bâti d’une manière spatio-temporelle. Nous avons tenté d'utiliser 1945 comme référence et noter les polygones présents avec une forme similaire au même endroit selon l' indice et distance de Jaccard (IoU). Cela veut dire le rapport entre l'intersection et l’union des polygons. Malheureusement, le géoréférencement n’est pas statique. Entre les cartes de 1926 et 1928, il y a une discontinuité sévère. Le même immeuble peut se déplacer à des dizaines de mètres comme vous le voyez en dessous. Alors, nous avons pris une approche manuelle en évaluant si chaque immeuble présent en 1945 était aussi présent dans les autres cartes.

![discontinute_1926_1928](images/disconuite.png)

Ce n’est pas une méthode exacte pour déterminer l'évolution du bâti car l'évaluation a été faite d’une manière subjective. Cependant, ça donne une idée d'évolution.


## Métiers

## Iconographie

La source de l'iconographie de Lausanne est le Musée historique de Lausanne. Les images sont géolocalisées. Cela permet de filtrer les images dans les secteurs administratifs de la Pontaise et de Prélaz entre 1845 et 1951. Nous avons ajouté un buffer de 100 mètres pour inclure des endroits importants comme la caserne qui se situent juste en dehors du secteur. L’iconographie de tout Lausane peut se voir sur le site [icon-lausanne](https://icono-lausanne.github.io/). Ces images sont aussi intégrées à la [Time Atlas](https://timeatlas.eu/), qui contient une iconographie plus globale.  

## Bibliographie

### Sources

* **Schnetzler, André.** *Enquête sur les conditions du logement : Année 1894*, Lausanne, 1896 (accompagné du *Supplément*, 1899).

### Littérature secondaire

#### Le quartier comme objet historique

* **Authier, Jean-Yves.** « Les citadins et leur quartier », *L’Année sociologique*, vol. 58, n° 1, 2008, p. 21-46.
* **Authier, Jean-Yves.** *La Vie des lieux*, Presses universitaires de Lyon, 1993. DOI : [10.4000/books.pul.9065](https://doi.org/10.4000/books.pul.9065).
* **Authier, Jean-Yves, Marie-Hélène Bacqué et France Guérin-Pace (dir.).** *Le quartier : Enjeux scientifiques, actions pratiques et pratiques sociales*, Paris, La Découverte, 2006.
* **Bertoni, Angelo.** *À l’échelle du quartier : histoire d’une notion d’urbanisme (1890-1960)*, Genève, MētisPresses, 2024.
* **Bonneval, Loïc, et al.** « Étude des quartiers : défis et pistes de recherche », *Conférence Extraction et Gestion de Connaissances 2019 (EGC2019)*, Metz, 2019. HAL : [hal-02005923](https://hal.science/hal-02005923/document).
* **Cabantous, Alain.** « Le quartier, espace vécu à l'époque moderne », *Histoire, économie & société*, 13ᵉ année, n° 3, 1994 (*Lectures de la ville (XVe-XXe siècle)*), p. 427-439. DOI : [10.3406/hes.1994.1704](https://doi.org/10.3406/hes.1994.1704).
* **Saunier, Pierre-Yves.** « La ville en quartiers : découpages de la ville en histoire urbaine », *Genèses*, n° 15, 1994, p. 103-114.
* **Topalov, Christian.** « Les divisions de la ville : une approche par les mots », dans Christian Topalov (dir.), *Les divisions de la ville*, Éditions UNESCO, 2002, p. 1-5.

### Études de cas

* **Bourillon, Florence, et al. (éd.).** *Du clos Saint-Lazare à la gare du Nord*, Presses universitaires de Rennes, Comité d’histoire de la ville de Paris, 2018. DOI : [10.4000/books.pur.174021](https://doi.org/10.4000/books.pur.174021).
* **Cantrelle, Sylvie, Corinne Goy et Claudine Munier.** *Histoire d’un quartier de Montbéliard (Doubs) : Le bourg Saint-Martin (XIIIe-XXe s.)*, Paris, Éditions de la Maison des sciences de l’homme, vol. 83, 2000. OpenEdition : [editionsmsh/46748](https://books.openedition.org/editionsmsh/46748).
* **Joffre, Pierre.** « Un autre XVIIIe. Socio-histoire d’un micro-quartier parisien, de 1880 à nos jours », *L’atelier du Centre de recherches historiques*, 2024. DOI : [10.4000/130f0](https://doi.org/10.4000/130f0).
* **Jacquot, Olivier.** [Cycle de séminaires] projet Richelieu. Histoire du quartier : « Documenter l’histoire urbaine, architecturale, sociale et culturelle du quartier Richelieu (1750-1950) », *Carnet de recherche*. DOI : [10.58079/m3o2](https://doi.org/10.58079/m3o2).
* **Vidal, Frédéric.** *Les habitants d’Alcântara : Histoire sociale d’un quartier de Lisbonne au début du 20e*, Presses universitaires du Septentrion, 2006. OpenEdition : [septentrion/56412](https://books.openedition.org/septentrion/56412).
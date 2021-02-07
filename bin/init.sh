#!/bin/bash
# ./mon-script2 a b c


DATE=$(date +"%Y-%m-%d")
touch ../../$DATE-init.log
LOG=../../$DATE-init.log
(
echo "###############################"
echo "# Initialisation du framework #"
echo "###############################"

echo "$1" "$2" "$3" "$4" "$5" "$6" "$7" "$8"
echo "$#"

if [ $# != 0 ] ; 
    then   
        echo "les valeurs des paramètres sont : "$1", "$2", "$3", "$4", "$5", "$6", "$7", "$8""
        hygen init new $1 $2 $3 $4 $5 $6 $7 $8
    else
        echo "Il n'y a pas de paramètres."
        hygen init with-prompt
fi

) 2>&1 | tee -a $LOG
#lettres a b c
#3
#il y a trois paramètres, leurs valeurs sont : a, b, c 
# et une variable nommée var de valeur "lettres".


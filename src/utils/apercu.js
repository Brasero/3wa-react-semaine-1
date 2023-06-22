//Fonction prenant en argument une taille en px et une couleur et renvoyant un objet pouvant
// être utilisé dans la propriété style d'une balise React.
// Cette fonction est déclarée dans un fichier à part et exportée pour pouvoir l'utilisé là où c'est nécessaire
export function apercu(size,color) {
    return {
        fontSize: size,
        color: color
    }
}
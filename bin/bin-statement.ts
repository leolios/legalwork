/**
 * return Sorts array if statement match case for us generating app
 * @param argument
 * @return string[] retourne un array contenant les arguments pour hygen
 */
export function statement(argument: string[]): string[] {
    console.log("Argument reçu : ", argument);

    // On vérifie si l'utilisateur à tapé des arguments
    if (argument.length === 0) {
        argument.push('init', 'with-prompt');
        return argument;
    } else {
        switch (argument[0]) {
            case 'init':
                // Si il à tapé des arguments on ne les utilisent pour la génération des fichiers
                argument.splice(1, 0, 'new');
                return argument;
            default:
                return ['Désolé, l\'argument : ' + argument[0] + ' n\'existe pas, si besoin : legalwork help'];
        }
    }
}
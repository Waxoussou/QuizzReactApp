export const questions = [
    {
        id: 1,
        question: 'Que signifie JS ?',
        answers: {
            a: 'Jésus',
            b: 'JsonStandard',
            c: 'Javascript',
            d: 'Je sais (I know in French)'
        },
        expected_answer: 'c'
    },
    {
        id: 2,
        question: 'Quel est la différence entre let et const',
        answers: {
            a: 'aucune, c\'est juste un autre façon de déclarer une variable',
            b: 'const ne peux pas être reassigner',
            c: 'le scope de let est global alors que const ne l\'est pas',
            d: 'quoi, il n\'y à pas que var ??? '
        },
        expected_answer: 'b'

    },
    {
        id: 3,
        question: 'Quel est la bonne syntaxe',
        answers: {
            a: 'function(){ // code }',
            b: 'let func = () => { // code}',
            c: 'const funct = () => // code',
            d: 'toutes sont des syntaxes correctes en Javascript '
        },
        expected_answer: 'd'

    },
    {
        id: 4,
        question: 'Quel est le rapport entre Java et JavaScript?',
        answers: {
            a: ' C\'est le même langage, mais le nom  JavaScript  est utilisé pour le code s\'exécutant dans une page Web.',
            b: 'Ce sont deux langages différents, malgré quelques points communs dans la syntaxe.',
            c: 'Java est une version améliorée de JavaScript.',
            d: 'Java est une île, ça n\'a rien à voir !'
        },
        expected_answer: 'b'

    },
    {
        id: 5,
        question: 'Lequel de ces types d\'événements n\'existe pas?',
        answers: {
            a: 'blur',
            b: 'load',
            c: 'mouseclick.',
            d: 'mouseout'
        },
        expected_answer: 'c'

    },
    {
        id: 6,
        question: 'Quelle méthode n\'existe pas dans le DOM?',
        answers: {
            a: 'document.getElementsByClassName',
            b: 'document.getElementsByTagName',
            c: 'document.getElementsByAttribute.',
            d: 'document.getElementById'
        },
        expected_answer: 'c'

    },
    {
        id: 7,
        question: `Comment afficher la page précédente du navigateur ?`,
        answers: {
            a: 'previous()',
            b: 'c\'est impossible',
            c: 'rollback()',
            d: "history.back()"
        },
        expected_answer: 'd'
    },
    {
        id: 8,
        question: `La valeur d'une date représente le nombre de millisecondes écoulées depuis le ?`,
        answers: {
            a: '01 janvier 1990',
            b: `01 janvier de l'année 0`,
            c: `1er janvier 1850`,
            d: `1er janvier 1970`
        },
        expected_answer: 'd'
    },
    {
        id: 9,
        question: `Que retourne isNaN("ABC"); ?`,
        answers: {
            a: 'true',
            b: 'false',
            c: 'une erreur',
            d: 'ABC'
        },
        expected_answer: 'a'
    },
    {
        id: 10,
        question: 'Quelle méthode permet d\'iterer sur un les propriétés d\'un objet',
        answers: {
            a: 'for ... of ',
            b: 'for ... in',
            c: 'foreach',
            d: 'for'
        },
        expected_answer: 'b'
    }
]
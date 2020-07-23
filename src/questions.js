export const questions = [
    {
        id: 1,
        question: 'que signifie JS ?',
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
        question: 'quel est la différence entre let et const',
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
        question: 'quel est la bonne syntaxe',
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
]
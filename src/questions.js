export const questions = [
    {
        id: 1,
        question: 'what do JS stand for ?',
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
        question: 'what is the difference between const and let',
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
        question: 'which one is a correct function declaration',
        answers: {
            a: 'function(){...code }',
            b: 'let func = () => {...code}',
            c: 'const funct = () => ...code',
            d: 'ALL OF THE ABOVE'
        },
        expected_answer: 'd'

    },
]
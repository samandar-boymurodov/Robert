import { winnerStatus } from '../Grid Container/utils/index'

export const RobertData = {
    greeting: {
        gameStart: ["Hi, my name is Robert 😊",
            "Hello",
            "Hi, Let's play a game"
        ],
        restartGameStart: ["So, Let's move!",
            "This game, I'll win You",
            "I'd like to play with you again",
            "Let's play again",
            "You are a good opponent"
        ]
    },
    winner: {
        [winnerStatus.x]: ["You've Won!",
            "You are Amazing!",
            "Congratulations!",
            "I've lost the game 😔"
        ],
        [winnerStatus.y]: ["I've won You! 😎",
            "You shoould try one more 😉",
            "You've lost!"
        ],
        [winnerStatus.draw]: ["Congratulations, We are draw",
            "None of us has won 😐"
        ]
    },
    turn: {
        [winnerStatus.y]: ["Let me think...",
            "You are meking me think..",
            "You are doing well",
            "I am afraid..",
            "You are a great player",
            "A Good move"
        ],
        [winnerStatus.x]: ["Be quick",
            "Your turn...",
            "Robert wants you to move",
            "Use your head..",
            "Continue.."
        ]
    }
}
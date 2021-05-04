import { winnerStatus } from '../Grid Container/utils/index'

export const RobertData = {
    greeting: ["Hi, my name is Robert", "Hello", "Hi, Let's play a game"],
    winner: {
        [winnerStatus.x]: ["You Won!",
            "You are Amazing!",
            "Congratulations!"
        ],
        [winnerStatus.y]: ["I won You!",
            "You shoould try one more",
            "You lost!"
        ],
        [winnerStatus.draw]: ["Congratulations, We are draw",
            "Weird, We are Draw"
        ]
    },
    turn: {
        [winnerStatus.y]: ["Let me think...",
            "You are meking me think..",
            "I think I will lose",
            "You are a great player",
        ],
        [winnerStatus.x]: ["Be quick",
            "Your turn...",
            "Robert wants you to move",
            "Show your ability!"
        ]
    }
}
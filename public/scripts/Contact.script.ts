import { useEffect } from "react";
import styles from '@/styles/Contact.module.css';
import { AnimationData } from "@/types/animation-data.type";

function CheckCollision(ballRect: DOMRect, otherRect: DOMRect): boolean {
    const collisionLeft: boolean = ballRect.left <= otherRect.right && ballRect.left >= otherRect.left;
    const collisionRight: boolean = ballRect.right >= otherRect.left && ballRect.right <= otherRect.right;
    const collisionX: boolean = collisionLeft || collisionRight;

    const collisionTop: boolean = ballRect.top <= otherRect.bottom && ballRect.top >= otherRect.top;
    const collisionBottom: boolean = ballRect.bottom >= otherRect.top && ballRect.bottom <= otherRect.bottom;
    const collisionY: boolean = collisionTop || collisionBottom;

    return collisionX && collisionY;
}

function MoveContactBalls(balls: HTMLElement[], animationData: AnimationData[], border: DOMRect) {
    balls.forEach((ball: HTMLElement, index: number) => {
        if (animationData[index].move) {
            const ballRect: DOMRect = ball.getBoundingClientRect();

            if (ballRect.left <= border.left || ballRect.right >= border.right) {
                animationData[index].dx *= -1;
            }
            if (ballRect.top <= border.top || ballRect.bottom >= border.bottom) {
                animationData[index].dy *= -1;
            }

            // const otherBalls: HTMLElement[] = balls.slice(index + 1);
            // otherBalls.forEach((otherBall, otherIndex) => {
            //     if (animationData[index + otherIndex + 1].move) {
            //         const otherRect: DOMRect = otherBall.getBoundingClientRect();
    
            //         if (CheckCollision(ballRect, otherRect)) {
            //             if (animationData[index].dx == animationData[index + otherIndex + 1].dx) {
            //                 animationData[index].dy *= -1;
            //                 animationData[index + otherIndex + 1].dy *= -1;
            //             }
            //             else if (animationData[index].dy == animationData[index + otherIndex + 1].dy) {
            //                 animationData[index].dx *= -1;
            //                 animationData[index + otherIndex + 1].dx *= -1;
            //             }
            //             else {
            //                 animationData[index].dy *= -1;
            //                 animationData[index + otherIndex + 1].dy *= -1;
            //                 animationData[index].dx *= -1;
            //                 animationData[index + otherIndex + 1].dx *= -1;
            //             }
            //         }
            //     }
            // });

            let newBallLeft = parseInt(ball.style.left) + animationData[index].dx;
            let newBallTop = parseInt(ball.style.top) + animationData[index].dy;

            ball.style.left = newBallLeft + 'px';
            ball.style.top = newBallTop + 'px';
        }
    });
};

function ToggleAnimation(animationData: AnimationData[], move: boolean) {
    animationData.forEach((ball) => {
        ball.move = move;
    });
};

export function AnimateContactBalls() {
        const bodyDimensions = document.body.getBoundingClientRect();
        
        document.body.addEventListener('click', () => {
            ToggleAnimation(ballMovements, start);
            start = !start;
        });

        let contactBalls: HTMLElement[] = Array.from(document.getElementsByClassName(styles.contactBall)) as HTMLElement[];
        let start = false;
        let ballMovements: AnimationData[] = contactBalls.map(() => { 
            return { 
                move: true,
                dx: 2,
                dy: 2
            };
        });

        const spawn = (ball: HTMLElement, index: number) => {
            let collision = false;
            do {
                ball.style.left = Math.random() * (bodyDimensions.right - bodyDimensions.left - ball.offsetWidth) + 'px';
                ball.style.top = Math.random() * (bodyDimensions.bottom - bodyDimensions.top - ball.offsetHeight) + 'px';
                const ballRect: DOMRect = ball.getBoundingClientRect();
                const otherBalls: HTMLElement[] = contactBalls.slice(0, index).concat(contactBalls.slice(index + 1, undefined));
                otherBalls.forEach((otherBall) => {
                    const otherRect: DOMRect = otherBall.getBoundingClientRect();
                    if (CheckCollision(ballRect, otherRect)) {
                        collision = true;
                    }
                });
                collision = false;
            } while (collision);
        };

        contactBalls.forEach((ball: HTMLElement, index: number) => {
            spawn(ball, index);

            ball.addEventListener('mouseover', () => {
                ballMovements[index].move = false;
            });
            ball.addEventListener('mouseleave', () => {
                ballMovements[index].move = !start;
            });
        });

        function animate() {
            MoveContactBalls(contactBalls, ballMovements, bodyDimensions);
            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
};

import { useEffect } from "react";
import styles from '@/styles/Contact.module.css';

export default function AnimateContactBalls() {
    useEffect(() => {
        const bodyDimensions = document.body.getBoundingClientRect();
        let contactBalls = Array.from(document.getElementsByClassName(`${styles.contactBall}`));
        contactBalls.forEach((ball: HTMLElement) => {
            ball.style.left = Math.random() * (bodyDimensions.right - bodyDimensions.left - ball.offsetWidth) + 'px';
            ball.style.top = Math.random() * (bodyDimensions.bottom - bodyDimensions.top - ball.offsetHeight) + 'px';
        });

        let start = false;
        let dx = 2;
        let dy = 2;

        let ballMovements = contactBalls.map(() => { 
            return { 
                move: true,
                dx: dx * (Math.random() < 5 ? 1 : -1),
                dy: dy * (Math.random() < 5 ? 1 : -1)
            };
        });
        
        contactBalls.forEach((ball, index) => {
            ball.addEventListener('mouseover', () => {
                ballMovements[index].move = false;
            });
            ball.addEventListener('mouseleave', () => {
                ballMovements[index].move = true;
            });
        });

        let frameId;

        function moveBalls() {
            contactBalls.forEach((ball: HTMLElement, index: number) => {
                if (ballMovements[index].move) {
                    let ballLeft = parseInt(ball.style.left);
                    let ballTop = parseInt(ball.style.top);

                    ballLeft += ballMovements[index].dx;
                    ballTop += ballMovements[index].dy;

                    if (ballLeft <= 0 || ballLeft >= bodyDimensions.right - bodyDimensions.left - ball.offsetWidth) {
                        ballMovements[index].dx *= -1;
                    }
                    if (ballTop <= 0 || ballTop >= bodyDimensions.bottom - bodyDimensions.top - ball.offsetHeight) {
                        ballMovements[index].dy *= -1;
                    }

                    ball.style.left = ballLeft + 'px';
                    ball.style.top = ballTop + 'px';
                }
            });
            frameId = requestAnimationFrame(moveBalls);
        }

        document.body.addEventListener('click', () => {
            if (start) {
                ballMovements.forEach((ballMovement) => {
                    ballMovement.move = true;
                });
                moveBalls();
            }
            else {
                ballMovements.forEach((ballMovement) => {
                    ballMovement.move = false;
                });
                cancelAnimationFrame(frameId);
            }
            start = !start;
        });

        window.addEventListener('beforeunload', () => {
            cancelAnimationFrame(frameId);
        });

        moveBalls();
    });
};

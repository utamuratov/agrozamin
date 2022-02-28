import { keyframes, style } from "@angular/animations";

export const flipOutY = [
    style({transform: 'perspective(400px)', offset: 0}),
    style({transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: 1, offset: .3}),
    style({transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: 0, offset: 1}),
]
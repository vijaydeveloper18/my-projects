import {iview} from "view"
export class view implements iview{
    x: number;
    y: number;
    distancefromorigin(): number {
        return math.sqrt((this.x*this.x)+(this.y*this.y));
    }
}
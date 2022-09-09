import { Comparator } from "./Comparator";
import { ComparisionType } from "./enum";
import { BlinkDiff } from "blink-diff";

export class PixelComparator extends Comparator{
    constructor(){
        super();
        this.comparisionType = ComparisionType.Pixel;
    }

    diff;
    getType() {
        return this.comparisionType;
    }

    compare(pathA: string, pathB: string, cordinates?: number[]): number {
        
        let res: number = 0; //difference resault
        this.diff = new BlinkDiff({
            imageAPath: pathA, 
            imageBPath: pathB,
        
            thresholdType: BlinkDiff.THRESHOLD_PERCENT,
            threshold: 0.01, 

            cropImageA : {
                x: cordinates ? cordinates[0] : 0,
                y: cordinates ? cordinates[1] : 0,
                width: cordinates ? cordinates[2] : 300,
                height: cordinates ? cordinates[3] : 300 // lets assume img is 300 x 300 now
            },
            
            cropImageB : {
                x: cordinates ? cordinates[0] : 0,
                y: cordinates ? cordinates[1] : 0,
                width: cordinates ? cordinates[2] : 300,
                height: cordinates ? cordinates[3] : 300 // lets assume img is 300 x 300 now
            },

            perceptual: true,
            gamma:true
        });

        this.diff.run(function (error, result) {
            if (error) {
                throw error;
            } else {
                res = (1 - (result.differences / result.dimension)) * 100;
                console.log( ' Comparison result is :' + res.toFixed(2) + '%.');
                console.log( ' -------------------------------------------------');
            }
        });

        return res;
    }
}
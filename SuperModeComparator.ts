import { Comparator } from "./Comparator";
import { ComparisionType } from "./enum";
import { OCRComparator } from "./OCRComparator";
import { PixelComparator } from "./PixelComparator";

export class SuperModeComparator extends Comparator{
    constructor(){
        super();
        this.comparisionType = ComparisionType.SuperMode;
    }

    getType() {
        return this.comparisionType;
    }

    compare(pathA:string, pathB:string): number {
        let tmpPixelComparator = new PixelComparator();
        const pixelScore = tmpPixelComparator.compare(pathA, pathB);

        let tmpOcrComparator = new OCRComparator();
        let arr : number[][] = tmpOcrComparator.getCordinates();


        let result = 0;
        for(let i = 0; i < arr.length; i++){
            let cordinate : number[] = arr[i];
            result += 0.5 * tmpPixelComparator.compare(pathA, pathB, cordinate);
        }

        result += pixelScore * 0.5; 
        return result;

    }
}
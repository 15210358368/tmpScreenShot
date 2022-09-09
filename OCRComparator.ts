import { Comparator } from "./Comparator";
import { ComparisionType } from "./enum";

export class OCRComparator extends Comparator{
    constructor(){
        super();
        this.comparisionType = ComparisionType.OCR;
    }

    getType() {
        return this.comparisionType;
    }

    getText() : string {
        return "";
    }

    getCordinates() : number[][] {
        //use OCR return cordinates
        return [[123,222,321,81], [145,200, 321,81], [123,222, 321,81]];
    }

    compare(pathA: string, pathB: string): void {
        //ocr logic here
        //pathA and B is the local url of images
    }
}
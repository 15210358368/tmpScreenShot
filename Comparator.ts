import { ComparisionType } from "./enum";
import { OCRComparator } from "./OCRComparator";
import { PixelComparator } from "./PixelComparator";
import { SuperModeComparator } from "./SuperModeComparator";

export abstract class Comparator {
    comparisionType;

    getType(){
      return this.comparisionType;
    }
  }

export function createComparator (type : string) {
    switch(type){
      case "ocr":
        return new OCRComparator();
      case "pixel":
        return new PixelComparator();
      case "super":
        return new SuperModeComparator();
      default:
        return new SuperModeComparator();//best practice
    }
}
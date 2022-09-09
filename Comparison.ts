import { createComparator } from "./Comparator";

const type = "super"; // 3 modes, "pixel" "ocr" "super"

function  getScreenShotId(order : string){
    //here we get id of 2 screenshots
    //we just use 1 and 2 to test
    if(order == 'first')
    return "1";

    if(order == 'second')
    return "2";

    return "1"; //default
}

function fetchImgUrl(id : string){
    //fetch screen shot from aws
    //and then return url of img
    return "www.google.com/img/anything.png";
}

function downLoadImg(imgUrl){
    //download img
    let imgPath = "../img/";
    // imgPath = local path of image
    return imgPath;
}


function getSimilarity(){
    const id1 = getScreenShotId('first');
    const id2 = getScreenShotId('second');

    const comparator = createComparator(type);
    const imgUrl_1 = fetchImgUrl(id1);
    const imgUrl_2 = fetchImgUrl(id2);

    const path_1 = downLoadImg(imgUrl_1);
    const path_2 = downLoadImg(imgUrl_2);

    return comparator.compare(path_1, path_2);
}

getSimilarity();

/**
 * 画像のフルURL取得
 * 
 * 引数が NULL のとき、no_image.png の URL を返します。
 * 
 * @param imgUrl 画像のURL
 * @returns 画像のフルURL
 */
export function getFullImageUrl(imgUrl: string | null): string {
    const URL = " https://res.cloudinary.com/drf6p5cyv/image/upload/";
    const NO_IMG_URL = "no_image.png";

    if (imgUrl) {
        return `${URL}${imgUrl}`
    } else {
        return `${URL}${NO_IMG_URL}`
    }
}
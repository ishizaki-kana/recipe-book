import { faBacon, faBowlFood, faCarrot, faCartShopping, faCheese, faDrumstickBite, faFish, faMugSaucer, faSeedling } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
    carrot: faCarrot,
    bacon: faBacon,
    fish: faFish,
    cheese: faCheese,
    seedling: faSeedling,
    cart: faCartShopping,
    rice: faBowlFood,
    meat: faDrumstickBite,
    soup: faMugSaucer
};

export const getIcon = (key: string) => {
    if (key in iconMap) {
        return iconMap[key as keyof typeof iconMap];
    }

    throw new Error(`Icon not found: ${key}`);
};

export interface RecipeProps {
    id: number,
    name: string,
    summary: string,
    image: string,
    isFavorite: boolean
}

export default class Recipes {
    id: number;
    name: string;
    image: string;
    summary: string;
    isFavorite: boolean

    constructor({
        id, name, image, summary, isFavorite
    }: RecipeProps) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.summary = summary;
        this.isFavorite = isFavorite
    }

    toPlainObject(): RecipeProps {
        return {
            id: this.id,
            name: this.name,
            image: this.image,
            summary: this.summary,
            isFavorite: this.isFavorite
        }
    }
}
import { Role, locales } from "../type";
import { get } from "../utils/fetch";

type localParams = {
    locale?: locales;
};

type heroesParams = localParams & {
    role?: Role;
}

type Hero = {
    name: string;
    description: string;
    portrait: string | null;
    role: Role;
};

type HeroDetails = Hero & {
    location: string;
    abilities: Ability[];
    hitpoints: object | null;
    story: {
        sumarry: string;
        media: {
            type: string;
            link: string;
        };
        chapters: {
            title: string;
            content: string;
            picture: string;
        }[];
    };
};

type Ability = {
    name: string;
    description: string;
    icon: string;
    video?: {
        thumbnail: string;
        link: {
            mp4: string;
            webm: string;
        }
    }
};
type Roles = {
    key: Role;
    name: string;
    icon: string;
    description: string;
}[];

/**
 * Represents a collection of heroes.
 * @template T - The type of the hero key.
 */
export class Heroes<T> {
    private url;
    locale;
    /**
     * Creates an instance of Heroes.
     * @param {string} url - The base URL for the API.
     * @param {locales} locale - The locale for the API.
     */
    constructor(url: string, locale: locales) {
        this.url = url;
        this.locale = locale;
    }
    /**
     * Retrieves all heroes.
     * @param {heroesParams} [params] - Optional parameters for the API request.
     * @returns {Promise<Hero[]>} - A promise that resolves to an array of heroes.
     */
    async getHeroes(params?: heroesParams): Promise<Hero[]> {
        const data = await get<Hero[]>(`${this.url}heroes`, {
            locale: this.locale,
            ...params,
        });
        return data;
    }
    /**
     * Retrieves a specific hero.
     * @param {T} hero_key - The key of the hero to retrieve.
     * @param {localParams} [params] - Optional parameters for the API request.
     * @returns {Promise<HeroDetails>} - A promise that resolves to the details of the hero.
     */
    async getHero(hero_key: T, params?: localParams): Promise<HeroDetails> {
        return await get<HeroDetails>(`${this.url}heroes/${hero_key}`, {
            locale: this.locale,
            ...params,
        });
    }
    /**
     * Retrieves all roles.
     * @param {localParams} [params] - Optional parameters for the API request.
     * @returns {Promise<Roles>} -  A promise that resolves to an array of roles.
     */
    async getRoles(params?: localParams): Promise<Roles> {
        const data = await get<Roles>(`${this.url}roles`, {
            locale: this.locale,
            ...params,
        });
        return data;
    }
}
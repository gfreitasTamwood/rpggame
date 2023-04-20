//Class Player
import {Character} from './character.js';
class Player extends Character {
    /**
     * @var {string} playerClass
     */
    #playerClass;

    /**
     * Father Constructor
     * @param {string} name 
     * @param {int} healthPoints 
     * @param {int} atackPoints 
     * @param {int} defensePoints 
     * @param {string} picture
     * @param {string} playerClass
     */
    constructor(
        name,
        healthPoints,
        atackPoints,
        defensePoints,
        playerClass,
        picture = ""
    ) {
        super(
            name,
            healthPoints,
            atackPoints,
            defensePoints,
            picture
        );

        this.#playerClass = playerClass;
    }

    getPlayerClass() {
        return this.#playerClass;
    }
}
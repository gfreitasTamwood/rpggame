//Class Father Character
class Character {
    //Variables
    /**
     * @var {string} name
     */
    _name;

    /**
     * @var {int} experience
     */
    _experience;

    /**
     * @var {int} healthPoints
     */
    _healthPoints;

    /**
     * @var {int} atackPoints
     */
    _atackPoints;

    /**
     * @var {int} defensePoints
     */
    _defensePoints;

    /**
     * @var {int} level
     */
    _level;

    /**
     * @var {string} picture
     */
    _picture;
    
    /**
     * Father Constructor
     * @param {string} name 
     * @param {int} healthPoints 
     * @param {int} atackPoints 
     * @param {int} defensePoints 
     * @param {int} experience 
     * @param {int} level 
     * @param {string} picture
     */
    constructor(
        name,
        healthPoints,
        atackPoints,
        defensePoints,
        picture = "",
        experience = 0,
        level = 1
    ) {
        this._name = name;
        this._healthPoints = healthPoints;
        this._atackPoints = atackPoints;
        this._defensePoints = defensePoints;
        this._experience = experience;
        this._level = level;
        this._picture = picture;
    }

    /**
     * 
     * @returns string name
     */
    getName() {
        return this._name;
    }

    /**
     * 
     * @param {string} name 
     */
    setName(name) {
        this._name = name;
    }

    /**
     * 
     * @returns {int} healthPoints
     */
    getHealthPoints(){
        return this._healthPoints;
    }

    /**
     * 
     * @returns {int} atackPoints
     */
    getAtackPoints(){
        return this._atackPoints;
    }

    /**
     * 
     * @returns {int} defensePoints
     */
    getDefensePoints(){
        return this._defensePoints;
    }

    /**
     * 
     * @returns {int} experience
     */
    getExperience(){
        return this._experience;
    }

    /**
     * 
     * @returns {int} level
     */
    getLevel(){
        return this._level;
    }

    /**
     * 
     * @returns {string} picture
     */
    getPicture(){
        return this._picture;
    }

    /**
     * 
     * @param {string} picture
     */
    setPicture(picture){
        this._picture = picture;
    }

    // traversing method with DOM
    

    /**
     * 
     * @param {int} healthPoints 
     */
    setHealthPoints(healthPoints){
        this._healthPoints = healthPoints;
    }

    /**
     * 
     * @param {int} atackPoints 
     */
    setAtackPoints(atackPoints){
        this._atackPoints = atackPoints;
    }

    /**
     * 
     * @param {int} defensePoints 
     */
    setDefensePoints(defensePoints){
        this._defensePoints = defensePoints;
    }

    /**
     * 
     * @param {int} experience 
     */
    setExperience(experience){
        this._experience = this._experience + experience;
    }

    /**
     * 
     * @param {int} level 
     */
    setLevel(level){
        this._level = level;
    }
}

export default Character;
/*
https://free-game-assets.itch.io/free-assassin-mage-viking-game-heroes-pixel-art

Wizard
https://cdn-icons-png.flaticon.com/512/2822/2822377.png

Knight
https://cdn-icons-png.flaticon.com/512/2822/2822375.png

Rogue
https://cdn-icons-png.flaticon.com/512/6081/6081840.png
*/

/*
Dungeons
https://cdn-icons-png.flaticon.com/512/5374/5374285.png
https://cdnl.iconscout.com/lottie/premium/preview-watermark/cave-7480275-6081621.mp4

*/
import Player from './player.js';
// import { Monster } from './monster.js';
import FileReader from './fileReader.js';
let playersList = new Map([
    ["knight", new Player("Longleaf",100,15,15,"knight")],
    ["rogue", new Player("Spleenwort",100,15,15,"rogue")],
    ["sorcerer", new Player("Puahekili",100,15,15,"sorcerer")],
]);


/*
knight - lvl
atck = 2
hp = 8
def = 6

rogue - lvl
atck = 3
hp = 5
def = 3

sorcerer - lvl
atck = 5
def = 2
hp = 3

1 -> 2 (100xp)
(previousXp * 1.3)

2 -> 3 (130xp)
3 -> 4 (170xp)
4 -> 5 (220xp)
5 -> 6 (230xp)
6 -> 7 (250xp)
7 -> 8 (280xp)
*/

$('table').ready( function() {
    $('#knight').on('click', function(){
        $('[alt="player-1"]').attr("src","https://cdn-icons-png.flaticon.com/512/2822/2822375.png");
        $('#rogue').prop("disabled",true);
        $('#sorcerer').prop("disabled",true);

        $(".player .attack figcaption").text(
            `Attack: ${playersList.get("knight").getAtackPoints()}`
        )

        $(".player .deffense figcaption").text(
            `Deffense: ${playersList.get("knight").getDefensePoints()}`
        )

        $(".player .health figcaption").text(
            `HP: ${playersList.get("knight").getHealthPoints()}`
        )

        $(".player .level figcaption").text(
            `Level: ${playersList.get("knight").getLevel()}`
        )

        // $(".player .health span").attr("style","width:95%");
    })
    $('#rogue').on('click', function(){
        $('[alt="player-1"]').attr("src","https://cdn-icons-png.flaticon.com/512/6081/6081840.png");
        $('#knight').prop("disabled",true);
        $('#sorcerer').prop("disabled",true);

        $(".player .attack figcaption").text(
            `Attack: ${playersList.get("rogue").getAtackPoints()}`
        )

        $(".player .deffense figcaption").text(
            `Deffense: ${playersList.get("rogue").getDefensePoints()}`
        )

        $(".player .health figcaption").text(
            `HP: ${playersList.get("rogue").getHealthPoints()}`
        )

        $(".player .level figcaption").text(
            `Level: ${playersList.get("rogue").getLevel()}`
        )
    })
    $('#sorcerer').on('click', function(){
        $('[alt="player-1"]').attr("src","https://cdn-icons-png.flaticon.com/512/2822/2822377.png");
        $('#rogue').prop("disabled",true);
        $('#knight').prop("disabled",true);

        $(".player .attack figcaption").text(
            `Attack: ${playersList.get("sorcerer").getAtackPoints()}`
        )

        $(".player .deffense figcaption").text(
            `Deffense: ${playersList.get("sorcerer").getDefensePoints()}`
        )

        $(".player .health figcaption").text(
            `HP: ${playersList.get("sorcerer").getHealthPoints()}`
        )

        $(".player .level figcaption").text(
            `Level: ${playersList.get("sorcerer").getLevel()}`
        )
    })
});

jQuery.extend({
    getMonsterList: function(url){
        let result = null;

        $.ajax({
            docType: "json",
            type: "GET",
            async: false,
            url: url,
            success: function(data){
                result = data;
            },
            error: function(xhr,status,error) {
                console.error(`Sorry! File ${error}`);
            }
        });
        return result;
    }
});

const dataFile = "../data/monsters.json";
let monsterList = $.getMonsterList(dataFile);

$('.dungeons').ready(function(){
    $("input").click(function(){
        let randomMonster = Math.floor(
            Math.random()*100        
        );
        $(".monster .attack figcaption").text(
            `Attack: ${monsterList[randomMonster].atack}`
        );
        $(".monster .deffense figcaption").text(
            `Deffense: ${monsterList[randomMonster].defense}`
        );
        $(".monster .health figcaption").text(
            `HP: ${monsterList[randomMonster].health}`
        );
        $(".monster .level figcaption").text(
            `Level: ${monsterList[randomMonster].level}`
        );
        $("[alt='monster']").attr("src",monsterList[randomMonster].picture
        );
    });
});

$('.game').ready( function(){
    $('[alt="dice"]').click(function(){
        let random = (Math.floor(Math.random()*7));

        switch(random){
            default:
            case 1:
                $('[alt="dice"]').attr("src","/img/dice-1.png");
                break;
            case 2:
                $('[alt="dice"]').attr("src","/img/dice-2.png");
                break;
            case 3:
                $('[alt="dice"]').attr("src","/img/dice-3.png");
                break;
            case 4:
                $('[alt="dice"]').attr("src","/img/dice-4.png");
                break;
            case 5:
                $('[alt="dice"]').attr("src","/img/dice-5.png");
                break;
            case 6:
                $('[alt="dice"]').attr("src","/img/dice-6.png");
                break;
            
        }
    })
});
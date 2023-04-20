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
    })
    $('#rogue').on('click', function(){
        $('[alt="player-1"]').attr("src","https://cdn-icons-png.flaticon.com/512/6081/6081840.png");
        $('#knight').prop("disabled",true);
        $('#sorcerer').prop("disabled",true);
    })
    $('#sorcerer').on('click', function(){
        $('[alt="player-1"]').attr("src","https://cdn-icons-png.flaticon.com/512/2822/2822377.png");
        $('#rogue').prop("disabled",true);
        $('#knight').prop("disabled",true);
    })
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
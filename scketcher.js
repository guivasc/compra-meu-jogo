var dev
var cli

var cli2

var jogoimg

var cliimg, cli2img

var jogo, kiss

var cli3img, cli4img

var cli3

var cli4

var jogog

var score = 0


function preload(){

    kiss = loadImage('images/kiss.png')

    jogoimg = loadImage('images/cd.png')

    cliimg = loadImage('images/pngegg.png')

    cli2img = loadImage('images/pngegg (1).png')

    cli4img = loadImage('images/pngegg (3).png')

    cli3img = loadImage('images/pngegg (2).png')
}


function setup() {
    createCanvas(500,500)

    dev = createSprite(250,400,30,30)

    dev.addImage(kiss);
    dev.scale = 0.08


    cli = createSprite(250, 35, 30, 30)
    cli.addImage(cliimg);
    cli.scale = 0.3

    cli4 = createSprite(250, 140, 30, 30)
    cli4.addImage(cli4img);
    cli4.scale = 0.1

    cli3 = createSprite(250, 180, 30, 30)
    cli3.addImage(cli3img);
    cli3.scale = 0.1

    jogog = new Group()

   




    
    cli2 = createSprite(500, 45, 30, 30)
    cli2.addImage(cli2img);
    cli2.scale = 0.2



    cli.velocity.x = 5

    cli2.velocity.x = -5

    cli4.velocity.x = 7

    cli3.velocity.x = 2
}

function draw(){
    background('green')

    if(cli.x > 500){
        cli.x = 0
    }

    if(cli2.x < 1){
        cli2.x = 500
    }

    if(cli4.x > 500){
        cli4.x = 0
    }

    if(cli3.x > 500){
        cli3.x = 0
    }

    drawSprites()
    fill("white")
    textSize(15)
    text("pontuação:"+score, 30, 475)

    collider()

    if(keyWentDown("f")) {
        jogo = createSprite(250,400,20,20)
        jogo.addImage(jogoimg)
        jogo.scale = 0.08
        jogo.velocityY = -10
        jogog.add(jogo)

    
    }
    if(jogog.isTouching(cli3)) {
        jogog.destroyEach()
        score -= 100
    }
}

function collider() {
    if(jogog.isTouching(cli)||jogog.isTouching(cli2)||jogog.isTouching(cli4)) {
        jogog.destroyEach()
        score += 50
    }
}

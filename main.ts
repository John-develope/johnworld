namespace SpriteKind {
    export const Wall = SpriteKind.create()
    export const Spire = SpriteKind.create()
    export const Sprite = SpriteKind.create()
    export const Sprite2 = SpriteKind.create()
    export const Life = SpriteKind.create()
    export const Life2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Life2, function (sprite, otherSprite) {
    Life2.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Sprite2, function (sprite, otherSprite) {
    John.x += 30
    game.showLongText("John, what are ,YOU, doing here.", DialogLayout.Bottom)
    game.showLongText("Eira, i go to school. Why?", DialogLayout.Bottom)
    game.showLongText("John, ... go to school. I go home.", DialogLayout.Bottom)
    game.showLongText("Eira, ok.", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile4`, function (sprite, location) {
    scene.setBackgroundColor(15)
    Eira2.destroy()
    tiles.setTilemap(tilemap`level5`)
    John.setPosition(119, 270)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        1 1 
        `, John, 100, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile7`, function (sprite, location) {
    John.setPosition(119, 270)
    tiles.setTilemap(tilemap`level2`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTilemap(tilemap`level1`)
    game.showLongText("Good! You have unlock lives! Good work!", DialogLayout.Bottom)
    Life = sprites.create(img`
        . . . . . f . . . . f . . . . . 
        . . . . f 2 f . . f 2 f . . . . 
        . . . f 2 2 2 f f 2 2 2 f . . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 f . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . . f 2 2 2 2 f . . . . . 
        . . . . . . f 2 2 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        `, SpriteKind.Life)
    Life2 = sprites.create(img`
        . . . . . f . . . . f . . . . . 
        . . . . f 2 f . . f 2 f . . . . 
        . . . f 2 2 2 f f 2 2 2 f . . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 f . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . . f 2 2 2 2 f . . . . . 
        . . . . . . f 2 2 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        `, SpriteKind.Life2)
    Life.setPosition(200, 200)
    Life2.setPosition(200, 230)
    info.setLife(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile8`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTilemap(tilemap`level3`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile5`, function (sprite, location) {
    John.setPosition(119, 270)
    scene.setBackgroundColor(13)
    tiles.setTilemap(tilemap`level6`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    Eira2 = sprites.create(img`
        ...fffffffff......
        ..feeeeeeeeef.....
        ..feeeeeeeeef.....
        .feedddddddeef....
        .feedfdddfdeef....
        .feddfdddfddef....
        feeddfdddfddeef...
        feedddddddddeef...
        feffffdddffffef...
        fedfffffffffdef...
        fedfffffffffdef...
        fedfffffffffdef...
        fedfffffffffdef...
        .fdfffffffffdff...
        .fdfffffffffdf....
        ..fffffffffff.....
        ...fffffffff......
        ...fff...fff......
        ...fff...fff......
        ...fff...fff......
        ...fff...fff......
        `, SpriteKind.Sprite2)
    John.setPosition(156, 480)
    Eira2.y += -20
    Eira2.x += 60
    tiles.setTilemap(tilemap`level7`)
    Eira.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Life, function (sprite, otherSprite) {
    Life.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Sprite, function (sprite, otherSprite) {
    John.x += -10
    game.showLongText("Eira, hey! John what are you doing out here!?", DialogLayout.Bottom)
    game.showLongText("John, i was looking for you.", DialogLayout.Bottom)
    game.showLongText("Eira, ok but its time for you to go home.", DialogLayout.Bottom)
    game.showLongText("John, ok.", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile10`, function (sprite, location) {
    game.showLongText("Chapter1 completed.", DialogLayout.Center)
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    John.setPosition(360, 280)
    tiles.setTilemap(tilemap`level4`)
})
let Life: Sprite = null
let projectile: Sprite = null
let Eira2: Sprite = null
let Life2: Sprite = null
let John: Sprite = null
let Eira: Sprite = null
Eira = sprites.create(img`
    ...fffffffff......
    ..feeeeeeeeef.....
    ..feeeeeeeeef.....
    .feedddddddeef....
    .feedfdddfdeef....
    .feddfdddfddef....
    feeddfdddfddeef...
    feedddddddddeef...
    feffffdddffffef...
    fedfffffffffdef...
    fedfffffffffdef...
    fedfffffffffdef...
    fedfffffffffdef...
    .fdfffffffffdff...
    .fdfffffffffdf....
    ..fffffffffff.....
    ...fffffffff......
    ...fff...fff......
    ...fff...fff......
    ...fff...fff......
    ...fff...fff......
    `, SpriteKind.Sprite)
John = sprites.create(img`
    . . . . f f f f f f f f . . . . 
    . . . f 5 5 5 5 5 5 5 5 f . . . 
    . . . f 5 5 5 5 5 5 5 5 f . . . 
    . . f 5 5 d d d d d d 5 5 f . . 
    . . f d d 1 9 d d 9 1 d d f . . 
    . . . f d 1 9 d d 9 1 d f . . . 
    . . . f d d d d d d d d f . . . 
    . . . . f d d f f d d f . . . . 
    . . . f f f d d d d f f f . . . 
    . . f d d 2 f f f f 2 d d f . . 
    . f d d 2 2 2 2 2 2 2 2 d d f . 
    . f d f 2 2 2 2 2 2 2 2 f d f . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . . . f 2 2 2 2 2 2 2 2 f . . . 
    . . . f 8 8 8 f f 8 8 8 f . . . 
    . . . f 8 8 8 f f 8 8 8 f . . . 
    . . . f 8 8 8 f f 8 8 8 f . . . 
    . . . . f f f . . f f f . . . . 
    `, SpriteKind.Player)
game.showLongText("This is test1 of a... we dont no if this gona be a big game but test1 of a big game. Pres a to start Johnworld.", DialogLayout.Full)
John.setPosition(34, 15)
Eira.setPosition(200, 36)
controller.moveSprite(John)
scene.cameraFollowSprite(John)
scene.setBackgroundColor(13)
tiles.setTilemap(tilemap`level8`)

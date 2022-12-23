//guy

let guy = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
`, SpriteKind.Player)
scene.cameraFollowSprite(guy)
controller.moveSprite(guy,50,0)

guy.x = 16 * 8
guy.y = 16 * 30
//tilemap

tiles.setTilemap(tilemap`level1`)

//conditionals
let jumpHeight = 7
let jumpTime = 0
let direction = 0
let vx = 0
game.onUpdate(function(){
   


guy.vy += 8

controller.moveSprite(guy,0,0)

if (guy.isHittingTile(CollisionDirection.Bottom)){
controller.moveSprite(guy, 50, 0)
vx = 0
}

if (guy.isHittingTile(CollisionDirection.Bottom)) {
if (controller.down.isPressed()) {
   guy.setImage(img`
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
       . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
       . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
       . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
       . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
   `)
    controller.moveSprite(guy, 0, 0)
    
        jumpTime += 1
    
if (jumpTime > 30){
 jumpTime -= 1
}
if (Math.abs(direction) < 70) {
   if (controller.left.isPressed()) {
        direction -= 3
    }
    if (controller.right.isPressed()) {
        direction += 3
    }  
}
   
    }
}


    info.setScore(guy.vy)

})

controller.down.onEvent(ControllerButtonEvent.Released,function() {
jump()
     
})

function jump() {
    guy.setImage(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
    `)
  if (jumpTime > 0)
    guy.vy = -jumpTime * jumpHeight
    jumpTime = 0


if (direction > 0) {
    guy.vx = direction
}
if (direction < 0) {
    guy.vx = direction
}

direction = 0

}

scene.onHitWall(SpriteKind.Player, function(sprite: Sprite, location: tiles.Location) {
    if (guy.isHittingTile(CollisionDirection.Left)) {
        guy.vx *= -1
    }
    if (guy.isHittingTile(CollisionDirection.Right)) {
        guy.vx *= -1
    }
})


tileUtil.createSpritesOnTiles(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    7 . . . . . . . . . . . . . . .
    7 7 . . . . . . . . . . . . . .
    7 7 7 . . . . . . . . . . . . .
    7 7 7 7 . . . . . . . . . . . .
    7 7 7 7 7 . . . . . . . . . . .
    7 7 7 7 7 7 . . . . . . . . . .
    7 7 7 7 7 7 7 . . . . . . . . .
    7 7 7 7 7 7 7 7 . . . . . . . .
    7 7 7 7 7 7 7 7 7 . . . . . . .
    7 7 7 7 7 7 7 7 7 7 . . . . . .
    7 7 7 7 7 7 7 7 7 7 7 . . . . .
    7 7 7 7 7 7 7 7 7 7 7 7 . . . .
    7 7 7 7 7 7 7 7 7 7 7 7 7 . . .
`, img`
    b . . . . . . . . . . . . . . .
    b b . . . . . . . . . . . . . .
    b b b . . . . . . . . . . . . .
    b b b b . . . . . . . . . . . .
    b b b b b . . . . . . . . . . .
    b b b b b b . . . . . . . . . .
    b b b b b b b . . . . . . . . .
    b b b b b b b b . . . . . . . .
    b b b b b b b b b . . . . . . .
    b b b b b b b b b b . . . . . .
    b b b b b b b b b b b . . . . .
    b b b b b b b b b b b b . . . .
    b b b b b b b b b b b b b . . .
    b b b b b b b b b b b b b b . .
    b b b b b b b b b b b b b b b .
    b b b b b b b b b b b b b b b b
`, SpriteKind.Food)
tileUtil.createSpritesOnTiles(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . 7
    . . . . . . . . . . . . . . 7 7
    . . . . . . . . . . . . . 7 7 7
    . . . . . . . . . . . . 7 7 7 7
    . . . . . . . . . . . 7 7 7 7 7
    . . . . . . . . . . 7 7 7 7 7 7
    . . . . . . . . . 7 7 7 7 7 7 7
    . . . . . . . . 7 7 7 7 7 7 7 7
    . . . . . . . 7 7 7 7 7 7 7 7 7
    . . . . . . 7 7 7 7 7 7 7 7 7 7
    . . . . . 7 7 7 7 7 7 7 7 7 7 7
    . . . . 7 7 7 7 7 7 7 7 7 7 7 7
    . . . 7 7 7 7 7 7 7 7 7 7 7 7 7
`, img`
    . . . . . . . . . . . . . . . b
    . . . . . . . . . . . . . . b b
    . . . . . . . . . . . . . b b b
    . . . . . . . . . . . . b b b b
    . . . . . . . . . . . b b b b b
    . . . . . . . . . . b b b b b b
    . . . . . . . . . b b b b b b b
    . . . . . . . . b b b b b b b b
    . . . . . . . b b b b b b b b b
    . . . . . . b b b b b b b b b b
    . . . . . b b b b b b b b b b b
    . . . . b b b b b b b b b b b b
    . . . b b b b b b b b b b b b b
    . . b b b b b b b b b b b b b b
    . b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b
`, SpriteKind.Enemy)

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    guy.vx = -guy.vy
  
       if (guy.isHittingTile(CollisionDirection.Bottom)){
            guy.x -= 1
            controller.moveSprite(guy,0,0)
       }
   
    
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite: Sprite, otherSprite: Sprite) {
    guy.vx = guy.vy

   
        if (guy.isHittingTile(CollisionDirection.Bottom)) {
            guy.x += 1
            controller.moveSprite(guy, 0, 0)
        }

})


controller.B.onEvent(ControllerButtonEvent.Pressed,function() {
    game.reset()
}) 


let tileCheck = sprites.create(img`
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
`,SpriteKind.Player)
tileCheck.setFlag(SpriteFlag.Ghost,true)

game.onUpdate(function() {
    tileCheck.y = Math.floor(guy.y + 14)
    tileCheck.x = Math.floor(guy.x)
if (tiles.tileAtLocationEquals(tileCheck.tilemapLocation(), img`
       7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
       7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
       7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
       7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
       7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
       7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
       7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
       7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
       7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
       7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
       7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
       7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
       7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
       7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
       7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
       7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
   `)) {
      guy.vy *= -1
   }

})
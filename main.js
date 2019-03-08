// window.onload = function() {
//     const body = document.body;

     const objectsDiv = document.querySelector(".elements")

    const carHonk = document.getElementById('honk')
    const sayMilk = document.getElementById('sonlait')
    const sayTruck = document.getElementById('sonfiretruck')
    const sayApple = document.getElementById('sonpomme')
    const sayDrums = document.getElementById('sondrums')
    const sayGuitar = document.getElementById('songuitar')
    const sayComputer = document.getElementById('sonordi')
    const sayDog = document.getElementById('sonchien')
    const sayCat = document.getElementById('sonchat')
    const sayHat = document.getElementById('chapeau')
    const sayPacifier = document.getElementById('tetine')
    const sayBanana = document.getElementById('sonbanane')
    const sayShoes = document.getElementById('chaussure')
    const sayPhone = document.getElementById('sonportable')
    const sayBall = document.getElementById('sonballon')

    const milk = document.getElementById("milk")
    const apple = document.getElementById("apple")
    const ball = document.getElementById("ball")
    const banana = document.getElementById("banana")
    const car = document.getElementById("car")
    const cat = document.getElementById("cat")
    const computer = document.getElementById("computer")
    const dog = document.getElementById("dog")
    const firetruck = document.getElementById("firetruck")
    const hat = document.getElementById("hat")
    const phone = document.getElementById("phone")
    const shoes = document.getElementById("shoes")
    const pacifier = document.getElementById("pacifier")
    const guitar = document.getElementById("guitar")
    const drums = document.getElementById("drums")
    
// console.log(objects)
    function moveObjects(objects){
        objects.style.left = (Math.random() * 1100) + "px"
        objects.style.top = (Math.random() * 550) + "px"
        // console.log(`topstyle for ${objects.id}` ,objects.style.top)
       }

moveObjects(guitar)
moveObjects(milk)
moveObjects(drums)
moveObjects(pacifier)
moveObjects(firetruck)
moveObjects(dog)
moveObjects(computer)
moveObjects(hat)
moveObjects(cat)
moveObjects(phone)
moveObjects(shoes)
moveObjects(apple)
moveObjects(banana)
moveObjects(car)
moveObjects(ball)

setInterval(function(){
moveObjects(dog)}, 3000 )

setInterval(function(){
moveObjects(banana)}, 3000 )

setInterval(function(){
moveObjects(pacifier)}, 3000 ) 

setInterval(function(){
moveObjects(milk)}, 3000 ) 

setInterval(function(){
moveObjects(cat)}, 3000 ) 

setInterval(function(){
moveObjects(firetruck)}, 3000 ) 

setInterval(function(){
moveObjects(phone)}, 3000 ) 

setInterval(function(){
moveObjects(shoes)}, 3000 )

setInterval(function(){
moveObjects(ball)}, 3000 ) 

setInterval(function(){
moveObjects(computer)}, 3000 ) 

setInterval(function(){
moveObjects(drums)}, 3000 ) 

setInterval(function(){
moveObjects(hat)}, 3000 ) 

setInterval(function(){
    moveObjects(guitar)}, 3000 ) 

    setInterval(function(){
        moveObjects(car)}, 3000 )
        
        setInterval(function(){
            moveObjects(shoes)}, 3000 ) 

            setInterval(function(){
                moveObjects(apple)}, 3000 ) 
   
   
   

    car.addEventListener("click", function(){
        honk.play()
        setTimeout( () => {
            checkCount() 
        car.remove() }, 2000)
       
    })
    milk.addEventListener("click", function(){
        sayMilk.play()
        setTimeout( () => {
            checkCount() 
        milk.remove() }, 2000)
    })

    apple.addEventListener("click", function(){
        sayApple.play()
        setTimeout( () => {
            checkCount() 
        apple.remove() }, 2000)
    })

    ball.addEventListener("click", function(){
        sayBall.play()
        setTimeout( () => {
            checkCount() 
        ball.remove() }, 2000)
    })

    banana.addEventListener("click", function(){
        sayBanana.play()
        setTimeout( () => {
            checkCount() 
        banana.remove() }, 2000)
    })

    cat.addEventListener("click", function(){
        sayCat.play()
        setTimeout( () => {
            checkCount() 
        cat.remove() }, 2000)
    })

    computer.addEventListener("click", function(){
        sayComputer.play()
        setTimeout( () => {
            checkCount() 
        computer.remove() }, 2000)
    })

    dog.addEventListener("click", function(){
        sayDog.play()
        setTimeout( () => {
            checkCount() 
        dog.remove() }, 2000)
    })
    firetruck.addEventListener("click", function(){
        sayTruck.play()
        setTimeout( () => {
            checkCount() 
        firetruck.remove() }, 2000)
    })
    hat.addEventListener("click", function(){
        sayHat.play()
        setTimeout( () => {
            checkCount() 
        hat.remove() }, 2000)
    })
    phone.addEventListener("click", function(){
        sayPhone.play()
        setTimeout( () => {
        checkCount() 
        phone.remove() }, 2000)
    })
    shoes.addEventListener("click", function(){
        sayShoes.play()
        setTimeout( () => {
        checkCount() 
        shoes.remove() }, 2000)
    })
    pacifier.addEventListener("click", function(){
        sayPacifier.play()
        setTimeout( () => {
      checkCount() 
        pacifier.remove() }, 2000)
    })
    guitar.addEventListener("click", function(){
        sayGuitar.play()
        setTimeout( () => {
       checkCount() 
        guitar.remove() }, 2000)
    })
    drums.addEventListener("click", function(){
        sayDrums.play()
        setTimeout( () => {

        drums.remove()
        checkCount()  
    }, 2000)
        })


    let elements = document.querySelector('.elements')
    let count = elements.childElementCount

    const replay = function(){
        if (count === 0)
        
        location.reload()
    }
    

    const checkCount = function() {
        count -= 1
        replay()
    }


   


    














// console.log(objectsDiv.children.length)


























    // hat.addEventListener("click", function(){
    //         chapeau.play()   
// }

//divs have to move randomly on the page with the p
// attached to the img src
//when one div is cliked on it triggers audio then removeChild
//maybe trigger a bubble before disappearing
//when user clicks on the empty page function(restart)
// background music during the game

//  const car = {
//      text : 'CAR',
//      image: images/carp.png
//  }
//  const milk = {
//     text : 'MILK',
//     image : images/milk.png
// }
// const firetruck = {
//     text : 'FIRETRUCK',
//    image : images/firetruck.png
// }
// const banana = {
//     text : 'BANANA',
//    image : images/banana.png
// }
// const apple = {
//     text : 'APPLE',
//    image : images/apple.png
// }
// const cat = {
//     text : 'CAT',
//    image : images/cat.png
// }
// const computer = {
//     text : 'COMPUTER',
//    image : images/computer.png
// }
// const drums = {
//     text : 'DRUMS',
//    image : images/drums.png
// }
// const guitar = {
//     text : 'GUITAR',
//    image : images/guitar.png
// }
// const phone = {
//     text : 'PHONE',
//    image : images/phone.png
// }
// const shoe = {
//     text : 'SHOE',
//    image : images/sneaker.png
// }
// const hat = {
//     text : 'HAT',
//     image: images/hat.png
// }
// const dog = {
//     text : 'DOG',
//     image: images/dog.png
// }




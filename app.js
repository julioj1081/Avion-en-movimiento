//animacion del avion CSSPlugin Y BezierPlugin, PARA PODER USARLO EN GSAP Y PODER HACER 
// EL RECORRIDO DEL AVION
const flightpath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        { x: 100, y: -20 }, { x: 200, y: 15 }, { x: 500, y: 100 }, { x: 800, y: -120 },
        { x: 600, y: -120 }, { x: 800, y: -50 }, { x: 900, y: 120 }, { x: window.innerWidth, y: 25 }
    ]
}

/*GSAP */
const tween = new TimelineLite();
tween.add(TweenLite.to('.paper-plane', 1, { bezier: flightpath, ease: Power1.easeInOut }));



/*SCROLL MAGIC */
const controller = new ScrollMagic.Controller();
/*INICIA LA SCENE CUANDO LLEGE A LA SECCION .ANIMATION */
//triggerHook dice donde inicia la esena
const scene = new ScrollMagic.Scene({
        triggerElement: '.animation',
        duration: 2000,
        triggerHook: 0
    })
    .setTween(tween)
    .addIndicators()
    .setPin('.animation')
    .addTo(controller);
//setPin permite que se pege la pantalla hasta que termine la animacion


//Movimiento cajas
const box = {
    curviness: 1.25,
    autoRotate: true,
    values: [{ x: 10, y: -10 }, { x: -110, y: 10 }, { x: 0, y: 0 }, { x: 10, y: 0 }]
}
const box2 = {
    curviness: 1.25,
    autoRotate: true,
    values: [{ x: 10, y: -10 }, { x: -110, y: 10 }, { x: 0, y: 0 }, { x: 20, y: 1 }]
}

const tween1 = new TimelineLite();
tween1.add(TweenLite.to('.caja1', 1, { bezier: box, ease: Power1.easeInOut }))
tween1.add(TweenLite.to('.caja2', 1, { bezier: box2, ease: Power1.easeInOut }))

const scene2 = new ScrollMagic.Scene({
        triggerElement: 'footer',
        duration: 1000,
        triggerHook: 0.1
    })
    .setTween(tween1)
    .addIndicators()
    .setPin('footer')
    .addTo(controller);
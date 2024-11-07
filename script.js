var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")

main.addEventListener("mousemove", function (dets) {
              gsap.to(cursor, {
                            x: dets.x,
                            y: dets.y,
                            duration: 1,
                            opacity: 1,
                            ease: "back.out"
              })
})

function breakTheTest() {
              var h2 = document.querySelector("#nav h2");
              var h2Text = h2.textContent

              var splittedText = h2Text.split("")

              var clutter = ""
              
              var halfValue = Math.floor(splittedText.length / 2)
              splittedText.forEach(function (elem,idx) {
                            if (idx < halfValue) {
                                          clutter += `<span class="a">${elem}</span>`
                            }
                            else {
                                          clutter += `<span class="b">${elem}</span>`
                            }
              })

              h2.innerHTML = clutter
}

breakTheTest()


gsap.from("h2 .a", {
              y: -50,
              opacity: 0,
              duration: 0.7,
              delay: 0.5,
              stagger: 0.15
})

gsap.from("h2 .b", {
              y: -50,
              opacity: 0,
              duration: 0.7,
              delay: 0.5,
              stagger: -0.15
})


function page1Animation() {
              var tl = gsap.timeline()

              tl.from(" #nav h4, #nav button", {
                            y: -50,
                            opacity: 0,
                            duration: 0.7,
                            delay: 0.5,
                            stagger: 0.15,
              })

              tl.from(".centerpart-1 h1", {
                            x: -200,
                            opacity: 0,
                            duration: 0.5,
                            delay: 0.5,
              }, "-=0.3")
              tl.from(".centerpart-1 p", {
                            x: -100,
                            opacity: 0,
                            duration: 0.4,
                            delay: 0.1,
              })
              tl.from(".centerpart-1 button", {
                            opacity: 0,
                            duration: 0.5,
              })
              tl.from(".centerpart-2 img", {
                            duration: 0.5,
                            opacity: 0,
                            x: 200,
              }, "-=0.5")

              tl.from(".section1bottom img", {
                            y: 30,
                            opacity: 0,
                            duration: 0.5,
                            stagger: 0.15,
              })
}

page1Animation()

function page2Animation() {
              var tl2 = gsap.timeline({
                            scrollTrigger: {
                                          trigger: ".section2",
                                          scroller: "body",
                                          start: "top 50%",
                                          end: "top 0",
                                          scrub: 2,
                            }
              })

              tl2.from(".services", {
                            y: 30,
                            opacity: 0,
                            duration: 0.5,
              })

              tl2.from(".elem.line1.left", {
                            x: -300,
                            opacity: 0,
                            duration: 1,
              }, "anim1")

              tl2.from(".elem.line1.right", {
                            x: 300,
                            opacity: 0,
                            duration: 1,
              }, "anim1")

              tl2.from(".elem.line2.left", {
                            x: -300,
                            opacity: 0,
                            duration: 1,
              }, "anim2")
              tl2.from(".elem.line2.right", {
                            x: 300,
                            opacity: 0,
                            duration: 1,
              }, "anim2")
}

page2Animation()

function page3Animation() {
              var tl3 = gsap.timeline({
                            scrollTrigger: {
                                          trigger: ".happen",
                                          scroller: "body",
                                          start: "top 50%",
                                          end: "top 0",
                                          scrub: 2,
                            }
              })

              tl3.from(".happenpart-1 h2", {
                            x: -200,
                            opacity: 0,
                            duration: 0.3,
              })
              tl3.from(".happenpart-1 p", {
                            x: -200,
                            opacity: 0,
                            duration: 0.3,
              })

              tl3.from(".happenpart-1 button", {
                            opacity: 0,
                            duration: 0.3,
              })

              tl3.from(".happenpart-2 img", {
                            x: 200,
                            opacity: 0,
                            duration: 0.3,
              }, "-=0.5")
}

page3Animation()

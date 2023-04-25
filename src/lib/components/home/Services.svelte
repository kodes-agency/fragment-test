<script>
	import { onMount } from "svelte";
    import { SplitText } from "gsap/dist/SplitText";
    import { gsap } from "gsap/dist/gsap";
    import ScrollTrigger from "gsap/dist/ScrollTrigger";

    export let locale
    export let subText
    export let img1
    export let img1Alt
    export let img2
    export let img2Alt
    export let baseUrl

    let homeServiceSection


    if(typeof window !== "undefined") {
        gsap.registerPlugin(SplitText, ScrollTrigger)
    }

    onMount(()=>{

        const img1 = document.getElementById('img1')
        const img2 = document.getElementById('img2')
        
        if(homeServiceSection && window.innerWidth > 800) {
            document.addEventListener('mousemove', (e) => {
                const img1Width = img1.offsetWidth
                const img1Height = img1.offsetHeight
                const centerX = img1.offsetLeft + img1Width / 2
                const centerY = img1.offsetTop + img1Height / 2
                const mouseX = e.clientX - centerX
                const mouseY = e.clientY - centerY
                const rotateX = (-1)*4*mouseY/(img1Height/2)
                const rotateYimg1 = 4*mouseX/(img1Width/2)
                const rotateYimg2 = 3*mouseX/(img1Width/2)
                if(img1) img1.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateYimg1}deg)`
                if(img2) img2.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateYimg2}deg)`
            })
        }

        const ctx = gsap.context(()=> {
            let digital = new SplitText("#digital", {type:"chars, words"});
            let analog = new SplitText("#analog", {type:"chars, words"});
            let paragraph = new SplitText("#subtext", {type:"lines"});
            new SplitText("#subtext", {type:"lines", linesClass: "lineParent"});
            gsap.set(".lineParent", {overflow: "hidden"});
            gsap.set(digital.chars, {color: "var(--cyan-color)"})
    
    
            analog.words[0].addEventListener('mouseenter', () => {
                gsap.to(analog.chars, {
                    color: "var(--cyan-color)",
                    webkitTextStroke: "0px var(--white-color)",
                    stagger: 0.1,
                    ease: "power2.out",
                })
                gsap.to(digital.chars, {
                    webkitTextStroke: "2px var(--white-color)",
                    color: "transparent",
                    stagger: 0.1,
                    ease: "power2.out",
                })
            })
    
    
            digital.words[0].addEventListener('mouseenter', () => {
                gsap.to(digital.chars, {
                    color: "var(--cyan-color)",
                    webkitTextStroke: "0px var(--white-color)",
                    stagger: 0.1,
                    ease: "power2.out",
                })
                gsap.to(analog.chars, {
                    webkitTextStroke: "2px var(--white-color)",
                    color: "transparent",
                    stagger: 0.1,
                    ease: "power2.out",
                })
            })
    
            let tlServices = gsap.timeline({
                scrollTrigger: {
                    trigger: homeServiceSection,
                    start: "top 30%",
                    end: "bottom 80%",
                    toggleActions: "play none none reverse",
                }
            })
            
            gsap.set(analog.chars, {
                color: "transparent",
                webkitTextStroke: "2px var(--white-color)",
            })
    
            tlServices.from(digital.chars, {
                delay: 0.5,
                duration: 0.5,
                opacity: 0, 
                stagger: 0.08, 
                y: -20,
                ease: "power2.out",
            }, "-=0.5")
    
            tlServices.from("#slash", {
                duration: 0.5,
                opacity: 0,
                y: -20,
                ease: "power2.out",
            }, "-=0.3")
    
            tlServices.from(analog.chars, {
                opacity: 0,
                duration: 0.5,
                stagger: 0.08,
                y: -20,
                ease: "power2.out",
            }, "-=0.3")
    
            tlServices.from(paragraph.lines, {
                y: "-150%",
                rotation: -45,
                transformOrigin: "0% 50% -50",
                duration: 1,
                ease: "power3.out",
                stagger: 0.15
            }, "-=0.2")
    
            tlServices.from(".services-button", {
                opacity: 0,
                duration: 1,
                ease: "power2.out",
            }, "-=0.3")
        }, homeServiceSection)

        return () => ctx.revert()
    })



</script>

<section id="service-section" bind:this={homeServiceSection}>
    <img class="img" id="img1" src={baseUrl+img1} alt={img1Alt}>
    <img class="img" id="img2" src={baseUrl+img2} alt={img2Alt}>
    <div class="services-wrapper">
        <div class="services-content">
            <div class="services-heading">
                <span>
                    <h2 id="digital" class="heading full">digital</h2>
                    <h2 id="slash" class="heading">&#160/</h2>
                </span>
                <h2 id="analog" class="heading outline">analog</h2>
            </div>
            <div class="services-text">
                <h3 id="subtext">
                    {subText}
                </h3>
            </div>
        </div>
        <div class="services-button">
            {#if locale == 'en'}
                <a href="/about">learn more</a>
            {:else}
                <a href="/about">научи повече</a>          
            {/if}
        </div>
    </div>
</section>

<style>
    section {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        padding: 5vw;
    }

    .heading {
        font-size: 90px;
        font-weight: bold;
    }

    a {
        border-bottom: 2px solid green;
    }

    .services-content {
         display: inherit;
         flex-direction: column;
         gap: 3vh;
    }

    .services-wrapper {
        position: relative;
        display: inherit;
        flex-direction: column;
        gap: 15vh;
        z-index: 10;
    }

    .services-heading, span {
        display: flex;
        flex-direction: row;
    }

    h2 {
        font-size: 90px;
    }

    .img {
        position: absolute;
        aspect-ratio: 16/9;
        object-fit: cover;
        object-position: center;
        width: 48vw;
        transform-style: preserve-3d;
        transform: perspective(1000px);
    }

    a:hover {
        transform: scale(1.2);
    }

    #img1 {
        bottom: 20vh;
        left: 5vw;
        z-index: -1;
    }

    #img2 {
        top: 20vh;
        right: 5vw;
        z-index: -2;
    }

    #subtext {
        width: 50vw;
    }

    @media only screen and (max-width: 950px){
        .services-heading {
            flex-direction: column;
            gap:0px;
        }

        h2 {
            line-height: 90px;
        }

        h3 {
            max-width: 80vw;
        }


        .img {
            position: absolute;
            aspect-ratio: 9/16;
            object-fit: cover;
            object-position: center;
            width: auto;
            max-height: 50vh;
        }

        #img1 {
            bottom: 28vh;
            right: 5vw;
            left: auto;
            z-index: -2;
            width: 60vw;
        }

        #img2 {
            top: 15vh;
            left: 5vw;
            right: auto;
            z-index: -1;
            width: 50vw;
            
        }
        
        #subtext {
            width: auto;
        }
    }

</style>
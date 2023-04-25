<script>
    export let gradient
    export let heading
    export let subText
    import { gsap } from 'gsap/dist/gsap'
    import { SplitText } from 'gsap/dist/SplitText';
	import { onMount } from 'svelte';

    let homeHeroSection

    if (typeof window !== "undefined") {
        gsap.registerPlugin(SplitText)
    }

    onMount(() => {
        const ctx = gsap.context(()=> {
            let split = new SplitText('#h3-hero', {type: 'lines'});
            new SplitText('#h3-hero', {type: 'lines', linesClass: "lineParent"});
            gsap.set('.lineParent', {overflow: "hidden"});

            let scrollSplit = new SplitText('#scroll-down-text', {type: 'chars'});
            const scollDownTl = gsap.timeline({repeat: 3})
            scollDownTl.from(scrollSplit.chars, {
                opacity: 0,
                stagger: 0.1,
                delay: 4,
            })
            
            scollDownTl.to(scrollSplit.chars, {
                opacity: 0,
                stagger: 0.1,
            }, '-=0.2')

            const tlHero = gsap.timeline({})

            tlHero.to('h1', {
                opacity: 1,
                duration: 3,
                ease: 'power2.out',
            })

            tlHero.from(split.lines, {
                y: "-150%",
                rotation: -45,
                transformOrigin: "0% 50% -50",
                duration: 1,
                ease: "power3.out",
                stagger: 0.15
            }, '-=2.5')
        }, homeHeroSection)

        return () => ctx.revert()
    })


</script>

<section bind:this={homeHeroSection}>
    <div class="section-wrapper">  
        <div class="heading-container">          
            <h1 style="background-image: url({gradient});">
                {heading}
            </h1>
        </div> 
        <h3 id="h3-hero">
            {subText}
        </h3>
    </div>
</section>


<style>
    section {
        height: 100vh;
        display: flex;
        align-items: center;
        position: relative;
    }

    h1 {
        -webkit-text-fill-color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        background-size: 200%;
        font-size: 100px;
        line-height: normal;
        font-weight: bold;
        animation: gradient 15s infinite linear;
        margin: 0;
        line-height: 115px;
        opacity: 0;
    }


    h3 {
        width: 50vw;
    }

    .section-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-inline: 10vw;
    }





    @media only screen and (max-width: 700px){
        .section-wrapper {
            padding-inline: 5vw;
        }

        h1 {
            font-size: 70px;
            line-height: 80px;
        }

        h3 {
            width: auto;

        }
    }
</style>
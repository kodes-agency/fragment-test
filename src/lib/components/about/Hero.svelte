<script>
    import { gsap } from 'gsap/dist/gsap'
	import { onMount } from 'svelte';
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
    import { SplitText } from "gsap/dist/SplitText"
    export let heading
    export let subText
    export let img
    export let baseUrl


    let aboutHeroSection
    let aboutHeroHeading
    let aboutHeroSubtext

    if (typeof window !== "undefined") {
        gsap.registerPlugin(SplitText, ScrollTrigger)
    }

    onMount(()=>{
        const ctx = gsap.context(()=> {
            const heroSubtextSplit = new SplitText(aboutHeroSubtext, {type: 'lines'})
            new SplitText(aboutHeroSubtext, {type: 'lines', linesClass: 'parentLine'})
            gsap.set('.parentLine', {overflow: 'hidden'})
    
            const aboutHeroTl = gsap.timeline({})
    
            aboutHeroTl.from(aboutHeroHeading,{
                opacity: 0,
                delay: 0.5,
                duration: 3,
                ease: 'power2.out'
            })
    
            aboutHeroTl.from(heroSubtextSplit.lines, {
                y: '-150%',
                rotation: -45,
                opacity: 0,
                transformOrigin: '0% 50% -50',
                duration: 1,
                ease: 'power3.out',
                stagger: 0.15
            }, '-=2.5')
        }, aboutHeroSection)

        return () => ctx.revert()
    })

</script>

<section id="about-hero-section" bind:this={aboutHeroSection}>
    <div class="section-wrapper" style="background-image: url({baseUrl+img.url}); background-size: cover; background-position: center; background-repeat: no-repeat">
        <h1 id="about-hero-heading" bind:this={aboutHeroHeading}>
            {heading}
        </h1>
        <h3 id="about-hero-subtext" bind:this={aboutHeroSubtext}>
            {subText}
        </h3>
    </div>
</section>

<style>
    section {
        position: relative;
    }

    .section-wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        padding: 10vw;
        justify-content: center;
        gap: 30px;
    }

    @media only screen and (max-width: 700px){
        .section-wrapper {
            padding: 5vw;
        }

        h1 {
            font-size: 55px;
            line-height: 65px;
        }
    }
</style>
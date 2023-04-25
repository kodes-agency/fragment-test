<script>
	import Hero from "$lib/components/about/Hero.svelte";
    export let data
</script>
<main>
    <Hero
        baseUrl={data.imgUrl}
        heading={data?.data.about.heroHeading}
        subText={data?.data.about.heroSubtext}
        img={data?.data.about.heroBgImage.data.attributes}
    ></Hero>
</main>
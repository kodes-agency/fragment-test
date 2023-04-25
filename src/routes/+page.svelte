<script>
    export let data
    import Hero from '$lib/components/home/Hero.svelte'
    import Services from '$lib/components/home/Services.svelte'
</script>

<Hero
    locale={data.locale}
    heading={data.data?.home.heroHeading}
    subText={data.data?.home.heroSubtext}
    gradient={data.gradient}
></Hero>
<Services
    locale={data.locale}
    baseUrl={data.imgUrl}
    subText={data.data?.home.servicesSubtext}
    img1={data.data?.home.servicesImage1.data.attributes.url}
    img1Alt={data.data?.home.servicesImage1.data.attributes?.alternativeText}
    img2={data.data?.home.servicesImage2.data.attributes.url}
    img2Alt={data.data?.home.servicesImage2.data.attributes?.alternativeText}
></Services>



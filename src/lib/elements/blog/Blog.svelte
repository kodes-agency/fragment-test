<script>
    import { getDate } from '$lib/functions/date'
    export let locale
    export let title
    export let id
    export let img
    export let baseUrl
    export let date


    const dateRow = new Date(date)
    const dateFormatted = getDate(dateRow)

</script>

<article>
    <a href='/blogs/{id}' data-sveltekit-preload-data="tap">
        <div class="oppacity">
        </div>
        <div class="slide" style="background-image: url({baseUrl+img}); background-repeat:no-repeat; background-size: cover; background-position: center">
            <div class="meta-data">
                <span>
                    <p class="heading">{title}</p>
                    <p class="date">{dateFormatted}</p>
                </span>
                {#if locale == 'en'}
                    <p class="link">read full article</p>
                {:else}
                    <p class="link">към статията</p>
                {/if}
            </div>
        </div>
    </a>
</article>

<style>
    article {
        position: relative;
    }

    .oppacity {
        background-color: black;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0px;
        left: 0px;
        opacity: 0.3;
    }

    .slide {
        display: flex;
        flex-direction: column;
        justify-content: end;
        aspect-ratio: 1/1;
    }

    .meta-data {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 2vh;
        z-index: 1;
    }

    .link {
        border-bottom: 1px solid white;
        font-size: 14px;
        width: fit-content;
    }

    .heading {
        font-weight: bold;
        font-size: 18px;
    }

    @media only screen and (max-width: 800px){
        .slide {
            width: 80vw;
            height: 80vw;
        }
    }
</style>



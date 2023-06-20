<script>
    import { Image } from "@astrojs/image/components";

    export let name;
    export let description;
    export let tags;
    export let banner;
    export let src;

    const tagsList = tags.split(', ');
</script>

<div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-800 cursor-pointer mx-10 my-16 justify-center transition duration-500 hover:scale-105 hover:shadow-xl" on:click={() => (window.location.replace({src}))} on:keypress={() => (window.location.replace({src}))}>
    <Image class="w-full" src={banner} alt={name} />
    <div class="px-6 py-4">
        <div class="text-xl mb-2 text-gray-100">
            {name}
        </div>
        <p class="text-gray-400 text-base">
            {description}
        </p>
    </div>
    <div class="px-6 pt-4 pb-2">
        {#each tagsList as tag}
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
        {/each}
    </div>
</div>
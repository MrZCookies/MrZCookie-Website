<svelte:head>
	<title>Projects | MrZCookie</title>
	<meta property="og:title" content="Projects | MrZCookie">
	<meta name="description" content="Here are all of the projects that I have worked on before or currently.">
	<meta property="og:description" content="Here are all of the projects that I have worked on before or currently.">
</svelte:head>

<div class="flex flex-wrap justify-center items-center my-36">
	<div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-800 cursor-pointer mx-10 my-16 justify-center transition duration-500 hover:scale-105 hover:shadow-xl" on:click={() => (window.location.replace("http://mrzcookie.com"))}>
		<img class="w-full" src="/mrzcookie-website.png" alt="MrZCookie's Website">
		<div class="px-6 py-4">
			<div class="text-xl mb-2 text-gray-100">
				MrZCookie's Website
			</div>
			<p class="text-gray-400 text-base">
				My personal website that tells you more about me, my projects, my social links, and how to contact me. You are curently viewing it right now!
			</p>
		</div>
		<div class="px-6 pt-4 pb-2">
			<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
			<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
			<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Javascript</span>
			<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Sveltekit</span>
		</div>
	</div>
	<div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-800 cursor-pointer mx-10 my-16 justify-center transition duration-500 hover:scale-105 hover:shadow-xl" on:click={() => (window.location.replace("https://github.com/MrZCookies/NoCommandPrefixes"))}>
		<img class="w-full" src="/nocommandprefixes.png" alt="MrZCookie's Website">
		<div class="px-6 py-4">
			<div class="text-xl mb-2 text-gray-100">
				NoCommandPrefixes
			</div>
			<p class="text-gray-400 text-base">
				A plugin that is used to remove command's fallback prefixes to not reveal your plugins or if you just hate having them on your server.
			</p>
		</div>
		<div class="px-6 pt-4 pb-2">
			<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Java</span>
			<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Bukkit API</span>
		</div>
	</div>
</div>
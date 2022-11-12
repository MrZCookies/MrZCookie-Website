<script>
	import { slide, fade } from 'svelte/transition';

	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<nav class="bg-slate-900 shadow-xl">
	<div class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
		<div class="flex items-center justify-between">
			<a class="font-bold bg-gradient-to-r from-[#0073e6] to-[#3399ff] bg-clip-text text-transparent text-5xl transition duration-500 hover:scale-110" href="/">
				MrZCookie
			</a>
			<div on:click={toggleNavbar} class="flex md:hidden">
				<button type="button" aria-label="Menu" class="text-white hover:text-mrzcookie focus:outline-none focus:text-mrzcookie">
					{#if showMenu}
						<svg in:fade xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{:else}
						<svg in:fade xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					{/if}
				</button>
			</div>
		</div>
		<div class="flex-col mt-8 space-y-4 md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 hidden md:flex">
			<a class="text-lg text-white hover:text-mrzcookie transition duration-500 hover:scale-110" href="/">Home</a>
			<a class="text-lg text-white hover:text-mrzcookie transition duration-500 hover:scale-110" href="/projects">Projects</a>
			<a class="text-lg text-white hover:text-mrzcookie transition duration-500 hover:scale-110" href="/#about">About Me</a>
			<a class="text-lg text-white hover:text-mrzcookie transition duration-500 hover:scale-110" href="/#contact">Contact</a>
		</div>
		{#if showMenu}
			<div transition:slide class="flex-col mt-8 space-y-4 md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 flex md:hidden">
				<a class="text-lg text-white hover:text-mrzcookie" href="/">Home</a>
				<a class="text-lg text-white hover:text-mrzcookie" href="/projects">Projects</a>
				<a class="text-lg text-white hover:text-mrzcookie" href="/#about">About Me</a>
				<a class="text-lg text-white hover:text-mrzcookie" href="/#contact">Contact</a>
			</div>
		{/if}
	</div>
</nav>
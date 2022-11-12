<svelte:head>
	<title>{$page.status} | MrZCookie</title>
	<meta property="og:title" content="{$page.status} | MrZCookie">
	<meta name="description" content="There has seemed to be an error in displaying this page!">
	<meta property="og:description" content="There has seemed to be an error in displaying this page!">
</svelte:head>

<script>
	import { page } from '$app/stores';
</script>

<div class="w-full h-screen flex justify-center items-center">
	<div class="flex flex-col justify-center items-center">
		<h1 class="text-center text-8xl text-white drop-shadow-xl pb-6">{$page.status}</h1>
		<h1 class="text-center text-5xl text-white drop-shadow-xl">{$page.error.message}</h1>
		<a class="mt-8 px-12 py-3 bg-slate-900 hover:bg-slate-800 text-xl text-white drop-shadow-xl rounded-full" href="/">Return to Home</a>
	</div>
</div>
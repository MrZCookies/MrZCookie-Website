<svelte:head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="keywords" content="MrZCookie, ItsMrZCookie, Developer, Portfolio, Skript, Minecraft, Plugin">
	<meta property="og:keywords" content="MrZCookie, ItsMrZCookie, Developer, Portfolio, Skript, Minecraft, Plugin">
	<meta name="author" content="MrZCookie">
	<meta property="og:author" content="MrZCookie">
	<meta property="og:type" content="website">
	<meta name="url" content="https://mrzcookie.com">
	<meta property="og:url" content="https://mrzcookie.com">
	<meta name="theme-color" content="#3399ff">
	<link rel="icon" href="https://files.mrzcookie.com/images/mrzcookie-brand/favicon.ico">
	<link rel="manifest" href="/manifest.json">
	<link rel="apple-touch-icon" href="https://files.mrzcookie.com/images/mrzcookie-brand/apple-touch-icon.png">
</svelte:head>

<script>
	import "../app.css";
	import Header from "../components/header.svelte";
	import Footer from "../components/footer.svelte";
</script>

<header class="fixed w-full top-0 z-50">
	<Header/>
</header>
<slot/>
<footer>
	<Footer/>
</footer>
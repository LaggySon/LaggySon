<script lang="ts">
	import Traincar from './traincar.svelte';
	import Supabase from './supabase.svelte';
	import Svelte from './svelte.svelte';
	import Tailwind from './tailwind.svelte';
	import Nextjs from './nextjs.svelte';
	import Sass from './sass.svelte';
	import Prisma from './prisma.svelte';
	import Typescript from './typescript.svelte';

	let projects = [
		{ color: '#ff4700', name: 'Svelte', logo: Svelte },
		{ color: '#38bdf8', name: 'Tailwind', logo: Tailwind },
		{ color: '#3fcf8e', name: 'supabase', logo: Supabase },
		{ color: 'white', name: 'NextJS', logo: Nextjs },
		{ color: '#cd6799', name: 'SASS', logo: Sass },
		{ color: '#0c344b', name: 'Prisma', logo: Prisma },
		{ color: '#3178c6', name: 'Typescript', logo: Typescript }
	];
</script>

<nav class="sticky h-24 flex flex-col justify-center items-center">
	<h1 class="text-4xl lg:text-5xl">Michael Richards</h1>
	<h2 class="text-xl lg:text-2xl">Front End Web Developer</h2>
</nav>

<div class="flex justify-center">
	<div class=" top-0 py-12 animate-marquee2 whitespace-nowrap flex">
		{#each projects as project}
			<div class="w-80  drop-shadow-sm relative shrink-0 snap-center">
				<Traincar fill={project.color} stroke="transparent" />
				<div class="w-full h-full flex justify-center items-center absolute top-0">
					<div class="w-20 h-20 flex justify-center items-center mb-5">
						<svelte:component this={project.logo} fill="white" secFill={project.color} />
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
<div class="p-2 text-center [&>p]:mb-2">
	<p>
		In addition to being a Computer Science student at Wentworth Insitute of technology, I am a
		passionate, hard-working, self-taught Front End Web Developer.
	</p>
</div>

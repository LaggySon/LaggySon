<script lang="ts">
	import Traincar from './traincar.svelte';
	import Supabase from './supabase.svelte';
	import Svelte from './svelte.svelte';
	import Tailwind from './tailwind.svelte';
	import Nextjs from './nextjs.svelte';
	import Sass from './sass.svelte';
	import Prisma from './prisma.svelte';
	import Typescript from './typescript.svelte';
	import React from './react.svelte';
	import Angular from './angular.svelte';
	import Engine from './engine.svelte';
	import Vue from './vue.svelte';
	import Firebase from './firebase.svelte';
	import Marquee from 'svelte-fast-marquee';

	let projects = [
		{ color: '#0d6d8c', name: 'React', logo: React },
		{ color: '#dd0031', name: 'Angular', logo: Angular },
		{ color: '#41b883', name: 'Vue', logo: Vue },
		{ color: '#ff4700', name: 'Svelte', logo: Svelte },
		{ color: 'white', name: 'NextJS', logo: Nextjs },
		{ color: '#3178c6', name: 'Typescript', logo: Typescript },
		{ color: '#cd6799', name: 'SASS', logo: Sass },
		{ color: '#38bdf8', name: 'Tailwind', logo: Tailwind },
		{ color: '#0c344b', name: 'Prisma', logo: Prisma },
		{ color: '#2c394b', name: 'Firebase', logo: Firebase },
		{ color: '#3fcf8e', name: 'supabase', logo: Supabase }
	];

	let w: number;
</script>

<nav class="sticky h-24 flex flex-col justify-center items-center">
	<h1 class="text-4xl lg:text-5xl">Michael Richards</h1>
	<h2 class="text-xl lg:text-2xl">Web Developer</h2>
</nav>

<div bind:clientWidth={w} class="flex flex-col h-full">
	<div
		class="text-center text-md lg:text-lg flex flex-col justify-center  max-w-3xl h-1/6  mx-4 lg:mx-auto"
	>
		<p class="text-sm lg:text-md border rounded-lg p-4 my-5">
			In addition to being a Computer Science student at Wentworth Insitute of technology, I am a
			passionate, hard-working, self-taught Web Developer.
		</p>
		<p class="text-xl lg:text-2xl">Check out some of the technologies I've learned so far!</p>
	</div>
	<section class="border-y text-opacity-0 hover:text-opacity-100 text-white transition-all">
		<Marquee speed={w / 25}>
			<!-- <div class="h-28 text-white"><Engine /></div> -->

			{#each projects as project}
				<div title={project.name} class="w-80  drop-shadow-sm relative shrink-0 snap-center">
					<span class="absolute text-center w-full capitalize ">{project.name}</span>
					<Traincar fill={project.color} stroke="transparent" />
					<div class="w-full h-full flex justify-center items-center absolute top-0">
						<div class="w-20 h-20 flex justify-center items-center mb-5">
							<svelte:component this={project.logo} fill="white" secFill={project.color} />
						</div>
					</div>
				</div>
			{/each}
		</Marquee>
	</section>

	<article
		class=" text-center text-xl lg:text-2xl flex-grow flex flex-col justify-evenly max-w-3xl  mx-4 lg:mx-auto"
	>
		<p class="p-4 border rounded-lg">
			My favorite thing about web development is learning new technologies and finding the best way
			to get a task done.
		</p>
		<h3 class="text-center justify-self-end">Some of my projects...</h3>
	</article>
</div>

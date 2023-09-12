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
	import type { SvelteComponent, SvelteComponentTyped } from 'svelte';
	import type { SvelteComponentDev } from 'svelte/internal';
	import Github from './github.svelte';

	type Tech = {
		color: string;
		name: string;
		logo: any;
	};

	type Project = {
		name: string;
		techs: Tech[];
		desc: string;
		link: string;
	};

	let techs: Tech[] = [
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

	let projects: Project[] = [
		{
			name: 'Scoreboardish',
			techs: [
				{ color: '#0d6d8c', name: 'React', logo: React },
				{ color: 'white', name: 'NextJS', logo: Nextjs },
				{ color: '#3178c6', name: 'Typescript', logo: Typescript },
				{ color: '#cd6799', name: 'SASS', logo: Sass }
			],
			desc: 'Collection of live game overlays controlled by data on Google Sheets',
			link: 'https://scoreboardish.laggi.sh'
		},
		{
			name: 'Tranquility Gaming Website',
			techs: [
				{ color: '#0d6d8c', name: 'React', logo: React },
				{ color: 'white', name: 'NextJS', logo: Nextjs },
				{ color: '#3178c6', name: 'Typescript', logo: Typescript },
				{ color: '#cd6799', name: 'SASS', logo: Sass }
			],
			desc: 'Public facing website created for a large videogame Tournament | Hosted and managed on an AWS EC2 server',
			link: 'https://tranquility.gg'
		},
		{
			name: 'Moist Meter',
			techs: [
				{ color: '#0d6d8c', name: 'React', logo: React },
				{ color: 'white', name: 'NextJS', logo: Nextjs },
				{ color: '#3178c6', name: 'Typescript', logo: Typescript },
				{ color: '#cd6799', name: 'SASS', logo: Sass },
				{ color: '#0c344b', name: 'Prisma', logo: Prisma }
			],
			desc: 'Website to view all "Moist Meter" ratings created by popular content creator "MoistCr1tikal" | Authentication handled by AuthJS | Database hosted on PlanetScale',
			link: 'https://moist-meter.laggi.sh'
		},
		{
			name: 'Staffer',
			techs: [
				{ color: '#ff4700', name: 'Svelte', logo: Svelte },
				{ color: '#3178c6', name: 'Typescript', logo: Typescript },
				{ color: '#38bdf8', name: 'Tailwind', logo: Tailwind },
				{ color: '#0c344b', name: 'Prisma', logo: Prisma },
				{ color: '#3fcf8e', name: 'supabase', logo: Supabase }
			],
			desc: 'Web app that helps you manage and staff events that rely on a diverse, constantly changing pool of freelancers | Authentication handled by AuthJS',
			link: 'https://staffer.laggi.sh'
		},
		{
			name: 'Autown',
			techs: [
				{ color: '#ff4700', name: 'Svelte', logo: Svelte },
				{ color: '#3178c6', name: 'Typescript', logo: Typescript },
				{ color: '#38bdf8', name: 'Tailwind', logo: Tailwind },
				{ color: '#2c394b', name: 'Firebase', logo: Firebase }
			],
			desc: 'A website to help users figure out whether driving or public transit is faster for one or more daily trips',
			link: 'https://autown.laggi.sh'
		}
	];

	function getDelayClass(i: number): string {
		return `animate-bounce [animation-delay:${100 * i}ms]`;
	}

	let w: number;
</script>

<div class="h-screen flex flex-col ">
	<header class="sticky h-24 flex flex-col justify-center items-center font-Righteous">
		<h1 class="text-4xl lg:text-5xl">Michael Richards</h1>
		<h2 class="text-xl lg:text-2xl">Web Developer</h2>
	</header>

	<div bind:clientWidth={w} class="flex flex-col">
		<p class=" max-w-3xl text-center text-md lg:text-lg mx-auto">
			I love building practical, professional-looking, responsive websites/webapps in all sorts of
			frameworks!
		</p>

		<section class=" text-opacity-0 hover:text-opacity-100 text-white transition-all h-1/2 mt-5">
			<Marquee speed={w / 25}>
				<!-- <div class="h-28 text-white"><Engine /></div> -->

				{#each techs as tech}
					<div class="w-80  drop-shadow-sm relative shrink-0 snap-center">
						<span class="absolute text-center w-full capitalize ">{tech.name}</span>
						<Traincar fill={tech.color} stroke="transparent" />
						<div class="w-full h-full flex justify-center items-center absolute top-0">
							<div class="w-20 h-20 flex justify-center items-center mb-5">
								<svelte:component this={tech.logo} fill="white" secFill={tech.color} />
							</div>
						</div>
					</div>
				{/each}
			</Marquee>
		</section>
	</div>
	<section />
	<div class="mt-20">
		<section class="flex gap-4 p-2 justify-center flex-wrap items-stretch">
			{#each projects as project, i}
				<a href={project.link} style={`animation-delay:${200 * i}ms;`} class="animate-slide-in">
					<div
						class={`border rounded-lg p-2 hover:bg-slate-500 hover:animate-bounce transition-all max-w-lg h-full flex flex-col justify-between  hover:scale-105 hover:shadow-md hover:shadow-white`}
					>
						<h3 class="text-center text-2xl font-bold">{project.name}</h3>
						<p class="text-sm text-center my-2 p-2">{project.desc}</p>
						<div class="flex flex-wrap gap-2 justify-center">
							{#each project.techs as tech}
								<div
									title={tech.name}
									class={`h-10 w-10 p-2`}
									style={`background-color: ${tech.color}`}
								>
									<svelte:component this={tech.logo} fill="white" secFill={tech.color} />
								</div>
							{/each}
						</div>
					</div>
				</a>
			{/each}
		</section>
	</div>
	<footer class="text-center">
		You can find all of my other work on my <a
			class="font-bold hover:underline"
			href="https://github.com/laggyson">GitHub</a
		>
	</footer>
</div>

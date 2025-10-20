<script>
	import { onMount } from 'svelte';

	// Navbar links
	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Summer', href: '/summer' },
		{ name: 'Winter', href: '/winter' }
	];

	// Summer lawn care tiers
	const tiers = [
		{
			name: "Weekly",
			tagline: "Keep your lawn looking great all summer",
			price: "$34 / visit",
			desc: [
				"Flat rate. Quality guaranteed. No long-term contract.",
				"Flexible scheduling — book weekly or for any number of weeks in the season.",
				"Clipping options — leave clippings on lawn, remove, or composted.",
				"Cut height control — long, short, or your preferred length.",
				"Service guarantee — if a spot is missed or you’re unhappy, we’ll return at no charge."
			],
			popular: false
		},
		{
			name: "Adaptive",
			tagline: "Service that adjusts to the season",
			price: "$39 / visit",
			desc: [
				"All Weekly features included.",
				"Seasonal adjustment — weekly in early spring, then bi-weekly as growth slows.",
				"Priority scheduling — ensures your lawn stays in top shape all season.",
				"Limited slots — book before June 30th to secure this service."
			],
			popular: true
		},
		{
			name: "Bi-weekly",
			tagline: "Every other week for consistent care",
			price: "$44 / visit",
			desc: [
				"All Weekly features included.",
				"Cost-effective — maintain a healthy lawn every other week.",
				"Reliable service — perfect for moderate maintenance needs."
			],
			popular: false
		}
	];

	// SSR-safe state
	let showToast = false;
	let isMobile = false;
	const currentYear = new Date().getFullYear();

	// Detect mobile after mount
	onMount(() => {
		isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
	});

	function handleCallClick() {
		if (isMobile) {
			window.location.href = "tel:+1234567890";
		} else {
			showToast = true;
		}
	}

	function closeToast() {
		showToast = false;
	}
</script>

<div class="min-h-screen bg-[#f5f2eb] text-gray-900 font-sans relative">

	<!-- Navbar -->
	<nav class="bg-[#2f4f4f]/95 backdrop-blur-sm text-white sticky top-0 z-50 shadow-md">
		<div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
			<h1 class="text-2xl font-bold text-white">All In One Landscaping</h1>
			<ul class="flex space-x-6">
				{#each navLinks as link}
					<li>
						<a href={link.href} class="hover:text-yellow-400 transition-colors duration-200">{link.name}</a>
					</li>
				{/each}
			</ul>
		</div>
	</nav>

	<!-- Summer Lawn Care Tiers -->
	<section class="max-w-7xl mx-auto py-16 px-6">
		<h2 class="text-4xl font-bold text-center mb-2">Summer Lawn Care Options</h2>
		<p class="text-center text-gray-600 mb-12 text-sm">
			*Prices start at listed amounts and may vary depending on yard size.
		</p>

		<div class="flex flex-col md:flex-row gap-6 justify-center items-stretch">
			{#each tiers as tier}
				<div class={`flex-1 rounded-2xl p-8 shadow-lg transform transition hover:-translate-y-2
					${tier.popular ? 'bg-yellow-50 scale-105 shadow-2xl border-2 border-yellow-400' : 'bg-white'}`}>
					
					<h3 class="text-2xl font-bold mb-2">{tier.name}</h3>
					<p class="text-gray-600 mb-4 italic">{tier.tagline}</p>
					<p class="text-3xl font-bold mb-6">{tier.price}</p>
					<ul class="mb-6 list-disc list-inside text-left space-y-2">
						{#each tier.desc as line}
							<li>{line}</li>
						{/each}
					</ul>
					<button 
						on:click={handleCallClick}
						class="w-full bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 text-center transition"
					>
						Call Now
					</button>
				</div>
			{/each}
		</div>
	</section>

	<!-- Toast -->
	{#if showToast}
		<div class="fixed inset-0 flex items-center justify-center z-50 px-4 bg-black/40">
			<div class="bg-[#2f4f4f] text-white p-10 rounded-3xl shadow-2xl text-center max-w-md w-full transform scale-100 animate-fade-in">
				<p class="text-2xl font-bold mb-4 underline">Call All In One Today!</p>
				<p class="text-3xl font-mono mb-6">+1 234 567 890</p>
				<button on:click={closeToast} class="px-6 py-3 bg-yellow-400 text-black rounded-xl font-semibold text-lg hover:bg-yellow-300 transition">
					Close
				</button>
			</div>
		</div>
	{/if}

	<!-- Footer -->
	<footer class="bg-[#2f4f4f] text-gray-300 py-8 text-center">
		<p>&copy; {currentYear} All In One Landscaping. All rights reserved.</p>
	</footer>
</div>

<style>
	:global(.text-forest-green) {
		color: #2f4f4f;
	}

	@keyframes fade-in {
		from { opacity: 0; transform: scale(0.9); }
		to { opacity: 1; transform: scale(1); }
	}
	.animate-fade-in {
		animation: fade-in 0.2s ease-out;
	}
</style>

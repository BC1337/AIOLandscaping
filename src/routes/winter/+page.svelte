<script>
	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Summer', href: '/summer' },
		{ name: 'Winter', href: '/winter' },
	];

	const tiers = [
		{
			name: "Standard",
			tagline: "Cleared within 24 hours",
			price: "$99 / month",
			desc: [
				"Flat rate. Unlimited visits. No contract.",
				"Cleared fast — your property will be cleared within 24 hours after every snowfall ends.",
				"Trace accumulations — your crew will be dispatched for all snowfalls over ~1.0 cm.",
				"Unlimited visits — no surcharges for heavy snowfalls or frequent storms. Historically we average 8 visits per month.",
				"Service guarantee — we stand behind our work. If a spot is missed or you aren't happy, a crew will be sent back at no charge."
			],
			popular: false
		},
		{
			name: "Premium",
			tagline: "Cleared 2x faster",
			price: "$123 / month",
			desc: [
				"All Standard features — your service includes trace snowfalls, unlimited visits, and our service guarantee.",
				"Cleared faster — higher priority in the route, cleared up to 8 hours before Standard sites.",
				"High frequency — during multi-day snowfall events your crew will clear once every day."
			],
			popular: true
		},
		{
			name: "Express",
			tagline: "Cleared first",
			price: "$148 / month",
			desc: [
				"All Premium features — trace snowfalls, unlimited visits, service guarantee, daily clearing during prolonged storms.",
				"Cleared first — highest priority, cleared up to 12 hours before Standard or Premium sites.",
				"Limited availability — space is limited to ensure blazing fast service."
			],
			popular: false
		}
	];

	let showToast = false;

	// SSR-safe mobile check inside function
	function handleCallClick() {
		if (typeof navigator !== 'undefined' && /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
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

	<!-- Winter Service Tiers -->
	<section class="max-w-7xl mx-auto py-16 px-6">
		<h2 class="text-4xl font-bold text-center mb-2">Winter Service Packages</h2>
		<p class="text-center text-gray-600 mb-12 text-sm">
			*Prices start at listed amounts and may vary depending on driveway or lot size.
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
		<div class="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
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
		<p>&copy; {new Date().getFullYear()} All In One Landscaping. All rights reserved.</p>
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

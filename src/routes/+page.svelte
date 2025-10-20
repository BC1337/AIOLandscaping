<script>
	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Summer', href: '/summer' },
		{ name: 'Winter', href: '/winter' },
		{ name: 'Gallery', href: '/gallery' },
		{ name: 'FAQ', href: '#faq' } // scrolls to FAQ section
	];

	const faqs = [
		{
			question: "Do you offer same-day service for snow clearing?",
			answer: "Yes! Depending on the snowfall, we aim to clear driveways and sidewalks within 24 hours."
		},
		{
			question: "Can I schedule recurring lawn mowing?",
			answer: "Yes! We offer recurring lawn care packages to keep your yard healthy and tidy all season, including weekly, bi-weekly, or adaptive schedules that adjust as the grass grows. We also offer one-time services or ongoing contracts depending on your needs. Our goal is to make sure your lawn looks its best, and we stand behind our work — if something is missed or you’re not satisfied, we’ll come back at no charge."
		},
		{
			question: "Can I schedule recurring snow clearing?",
			answer: "Yes! We provide recurring snow clearing services, with options for standard, premium, or express coverage throughout the winter season. One-time clearing services or ongoing contracts are also available depending on your needs. We prioritize reliable, fast service — if a spot is missed or you aren’t happy, we’ll return at no charge."
		},
		{
			question: "Do you provide equipment or do I need to supply it?",
			answer: "We bring all necessary equipment for lawn care and snow clearing; no need to supply anything."
		},
		{
			question: "I have a smaller or bigger yard — are all the prices the same for everyone?",
			answer: "No. Prices are based on the size of your property and the service level you select. Larger yards may cost more."
		},
		{
			question: "Do you offer additional services?",
			answer: "Call us! Eaves trough cleaning, window washing, and fall clean-up may be available while spots are open."
		}
	];

	let openIndex = null;
	let showToast = false;

	function toggle(index) {
		openIndex = openIndex === index ? null : index;
	}

	// smooth scroll fallback
	function scrollToSection(event, href) {
		if (href.startsWith('#')) {
			event.preventDefault();
			const el = document.querySelector(href);
			if (el) el.scrollIntoView({ behavior: 'smooth' });
		}
	}

	function handleCallClick() {
		if (/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
			window.location.href = 'tel:+1234567890';
		} else {
			showToast = true;
		}
	}
</script>

<div class="min-h-screen bg-[#f5f2eb] text-gray-900 font-sans scroll-smooth">

	<!-- Navbar -->
	<nav class="bg-[#2f4f4f]/95 backdrop-blur-sm text-white sticky top-0 z-50 shadow-md">
		<div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
			<h1 class="text-2xl font-bold text-white">All In One Landscaping</h1>
			<ul class="flex space-x-6">
				{#each navLinks as link}
					<li>
						<a 
							href={link.href} 
							on:click={(e) => scrollToSection(e, link.href)}
							class="hover:text-yellow-400 transition-colors duration-200"
						>
							{link.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</nav>

	<!-- Hero Section -->
	<section
		class="relative h-[75vh] bg-cover bg-center flex items-center justify-center text-center"
		style="background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80');"
	>
		<div class="bg-black/40 absolute inset-0"></div>
		<div class="relative z-10 text-white px-4">
			<h2 class="text-4xl md:text-6xl font-bold mb-4">Transform Your Outdoor Space</h2>
			<p class="text-lg md:text-xl mb-6">
				Professional lawn mowing and snow clearing for every season.
			</p>
			<button
				on:click={handleCallClick}
				class="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
			>
				Call Now
			</button>
		</div>
	</section>

	<!-- Services -->
	<section class="max-w-6xl mx-auto py-16 px-6 text-center">
		<h3 class="text-3xl font-bold mb-10">Our Core Services</h3>
		<div class="grid md:grid-cols-2 gap-10">
			<!-- Lawn Mowing -->
			<a href="/summer" class="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:-translate-y-1 hover:shadow-2xl">
				<img src="https://images.unsplash.com/photo-1668120089662-42642838cfef?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1470" alt="Lawn mowing" class="w-full h-56 object-cover group-hover:brightness-110 transition"/>
				<div class="p-6">
					<h4 class="text-2xl font-semibold mb-3 text-forest-green">Lawn Mowing & Maintenance</h4>
					<p>Keep your yard looking sharp all summer with our professional mowing, trimming, and edging services.</p>
					<p class="mt-4 font-semibold text-yellow-600 group-hover:underline">Learn more →</p>
				</div>
			</a>

			<!-- Snow Clearing -->
			<a href="/winter" class="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:-translate-y-1 hover:shadow-2xl">
				<img src="https://images.unsplash.com/photo-1563611858739-f5018591533f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=735" alt="Snow clearing" class="w-full h-56 object-cover group-hover:brightness-110 transition"/>
				<div class="p-6">
					<h4 class="text-2xl font-semibold mb-3 text-forest-green">Snow Clearing & Ice Control</h4>
					<p>Driveways, sidewalks, and lots cleared fast — reliable winter maintenance when you need it most.</p>
					<p class="mt-4 font-semibold text-yellow-600 group-hover:underline">Learn more →</p>
				</div>
			</a>
		</div>
	</section>

	<!-- About -->
	<section class="bg-[#eae6dc] py-16 text-center px-6">
		<h3 class="text-3xl font-bold mb-6 text-forest-green">About All In One</h3>
		<p class="max-w-3xl mx-auto text-lg leading-relaxed">
			We’re a small local team that takes pride in hard work and clean results. Whether it’s mowing in July or
			plowing in January, All In One Landscaping delivers reliable, friendly service — year-round.
		</p>
	</section>

	<!-- FAQ Accordion -->
	<section id="faq" class="max-w-4xl mx-auto py-12 px-6">
		<h3 class="text-3xl font-bold text-center mb-8 text-forest-green">Frequently Asked Questions</h3>
		<div class="space-y-4">
			{#each faqs as faq, i}
				<div class="border rounded-lg overflow-hidden shadow-sm">
					<button
						class="w-full text-left px-6 py-4 font-semibold bg-[#f5f2eb] hover:bg-[#f0eadf] flex justify-between items-center text-forest-green"
						on:click={() => toggle(i)}
					>
						<span>{faq.question}</span>
						<span class="text-yellow-400 font-bold text-xl">{openIndex === i ? '-' : '+'}</span>
					</button>

					{#if openIndex === i}
						<div class="px-6 py-4 bg-[#fffde8]">
							<p class="text-gray-900">{faq.answer}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</section>

	<!-- Toast for desktop call -->
	{#if showToast}
		<div class="fixed inset-0 flex items-center justify-center z-50">
			<div class="bg-[#2f4f4f] text-white p-6 rounded-lg shadow-lg text-center">
				<p class="mb-2"><u>Call All In One Today!</u></p>
				<p class="font-mono">+1 234-567-890</p>
				<button class="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold" on:click={() => showToast = false}>Close</button>
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
	:global(html) {
		scroll-behavior: smooth;
	}
</style>

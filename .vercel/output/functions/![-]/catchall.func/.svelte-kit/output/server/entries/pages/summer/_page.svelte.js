import { y as ensure_array_like, x as attr, z as attr_class } from "../../../chunks/index.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const navLinks = [
      { name: "Home", href: "/" },
      { name: "Summer", href: "/summer" },
      { name: "Winter", href: "/winter" }
    ];
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
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    $$renderer2.push(`<div class="min-h-screen bg-[#f5f2eb] text-gray-900 font-sans relative"><nav class="bg-[#2f4f4f]/95 backdrop-blur-sm text-white sticky top-0 z-50 shadow-md"><div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"><h1 class="text-2xl font-bold text-white">All In One Landscaping</h1> <ul class="flex space-x-6"><!--[-->`);
    const each_array = ensure_array_like(navLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<li><a${attr("href", link.href)} class="hover:text-yellow-400 transition-colors duration-200">${escape_html(link.name)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div></nav> <section class="max-w-7xl mx-auto py-16 px-6"><h2 class="text-4xl font-bold text-center mb-2">Summer Lawn Care Options</h2> <p class="text-center text-gray-600 mb-12 text-sm">*Prices start at listed amounts and may vary depending on yard size.</p> <div class="flex flex-col md:flex-row gap-6 justify-center items-stretch"><!--[-->`);
    const each_array_1 = ensure_array_like(tiers);
    for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
      let tier = each_array_1[$$index_2];
      $$renderer2.push(`<div${attr_class(
        `flex-1 rounded-2xl p-8 shadow-lg transform transition hover:-translate-y-2
					${tier.popular ? "bg-yellow-50 scale-105 shadow-2xl border-2 border-yellow-400" : "bg-white"}`,
        "svelte-yy0juu"
      )}><h3 class="text-2xl font-bold mb-2">${escape_html(tier.name)}</h3> <p class="text-gray-600 mb-4 italic">${escape_html(tier.tagline)}</p> <p class="text-3xl font-bold mb-6">${escape_html(tier.price)}</p> <ul class="mb-6 list-disc list-inside text-left space-y-2"><!--[-->`);
      const each_array_2 = ensure_array_like(tier.desc);
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let line = each_array_2[$$index_1];
        $$renderer2.push(`<li>${escape_html(line)}</li>`);
      }
      $$renderer2.push(`<!--]--></ul> <button class="w-full bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 text-center transition">Call Now</button></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <footer class="bg-[#2f4f4f] text-gray-300 py-8 text-center"><p>© ${escape_html(currentYear)} All In One Landscaping. All rights reserved.</p></footer></div>`);
  });
}
export {
  _page as default
};

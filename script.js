
const places = [
  {
    name: "Bir",
    category: "Adventure",
    location: "Bir, Himachal Pradesh",
    description: "A beautiful mountain destination known for paragliding, peaceful surroundings and Tibetan culture.",
    details: "Explore local cafés, mountain views, village walks and adventure activities. Check weather conditions before paragliding.",
    image: "photo-1464822759023-fed622ff2c3b"
  },
  {
    name: "Billing Viewpoint",
    category: "Nature",
    location: "Bir-Billing Road",
    description: "Enjoy wide mountain views and beautiful Himalayan landscapes from the Billing area.",
    details: "Popular for panoramic views and paragliding take-off experiences. Conditions can change quickly at higher elevations.",
    image: "photo-1464278533981-50106e6176b1"
  },
  {
    name: "Bir Landing Site",
    category: "Adventure",
    location: "Bir",
    description: "A well-known landing area where visitors can watch paragliders return from the sky.",
    details: "A great place to observe paragliding activity and enjoy the open landscape. Follow safety instructions and keep clear of landing zones.",
    image: "photo-1473448912268-2022ce9509d8"
  },
  {
    name: "Chokling Monastery",
    category: "Monastery",
    location: "Bir Tibetan Colony",
    description: "A colourful Buddhist monastery with Tibetan-inspired architecture and a peaceful atmosphere.",
    details: "Explore the monastery respectfully, dress modestly and ask before photographing people or ceremonies.",
    image: "photo-1548013146-72479768bada"
  },
  {
    name: "Bangoru Waterfall",
    category: "Nature",
    location: "Near Bir",
    description: "A natural escape for travellers who enjoy greenery, streams and quiet surroundings.",
    details: "Confirm the current trail condition locally before visiting. Avoid slippery rocks and be especially careful after rainfall.",
    image: "photo-1432405972618-c60b0225b8f9"
  },
  {
    name: "Palpung Sherabling Monastery",
    category: "Monastery",
    location: "Bhattu, near Bir",
    description: "A significant Buddhist monastic centre surrounded by peaceful Himalayan scenery.",
    details: "Visit respectfully and check visitor access and ceremony timings before planning your trip.",
    image: "photo-1605649487212-47bdab064df7"
  },
  {
    name: "Gunehar Village",
    category: "Village",
    location: "Near Bir",
    description: "A charming village known for its rural atmosphere, mountain views and nature trails.",
    details: "Enjoy a relaxed walk, observe local life and respect private homes, farmland and village customs.",
    image: "photo-1470770841072-f978cf4d019e"
  },
  {
    name: "Tibetan Colony",
    category: "Culture",
    location: "Bir",
    description: "Discover Tibetan culture, local markets, cafés and traditional food in this lively neighbourhood.",
    details: "Explore local shops, taste Tibetan dishes and visit nearby monasteries while respecting local traditions.",
    image: "photo-1518005020951-eccb494ad742"
  },
  {
    name: "Chowgan",
    category: "Village",
    location: "Bir",
    description: "A green and peaceful part of Bir with open landscapes and views of the surrounding hills.",
    details: "Enjoy village walks, local cafés and the relaxed pace of life. Ask locally about walking routes.",
    image: "photo-1500530855697-b586d89ba3ee"
  },
  {
    name: "Baijnath Shiva Temple",
    category: "Culture",
    location: "Baijnath, Himachal Pradesh",
    description: "A historic Shiva temple celebrated for its traditional stone architecture and religious importance.",
    details: "Observe temple customs, follow photography rules and check opening times before visiting.",
    image: "photo-1606293926075-69a00dbfde81"
  },
  {
    name: "Palampur Tea Gardens",
    category: "Nature",
    location: "Palampur",
    description: "Beautiful green tea gardens set against the dramatic backdrop of the Dhauladhar mountains.",
    details: "Enjoy scenic views and learn about the region's tea-growing heritage. Ask permission before entering private plantations.",
    image: "photo-1441974231531-c6227db76b6e"
  },
  {
    name: "Rajgundha Valley",
    category: "Nature",
    location: "Near Bir",
    description: "A scenic Himalayan valley known for mountain views, traditional villages and trekking routes.",
    details: "Plan ahead for transport, accommodation and trail conditions. Carry suitable clothing and avoid travelling unprepared.",
    image: "photo-1464822759023-fed622ff2c3b"
  },
  {
    name: "Deer Park Institute",
    category: "Other",
    location: "Bir",
    description: "A learning centre focused on classical Indian wisdom, philosophy, arts and contemplative traditions.",
    details: "Check the official programme and visitor arrangements if you wish to attend a course, event or public activity.",
    image: "photo-1500534623283-312aade485b7"
  },
  {
    name: "Bir Tea Factory",
    category: "Other",
    location: "Bir area",
    description: "An opportunity to explore the local tea-making story and the region's tea culture.",
    details: "Confirm the exact location, whether visits are offered and any opening hours with local sources before travelling.",
    image: "photo-1515823064-d6e0c04616a7"
  },
  {
    name: "Tsering Jong Monastery",
    category: "Monastery",
    location: "Bir area",
    description: "A Buddhist spiritual destination for visitors interested in Tibetan traditions and peaceful surroundings.",
    details: "Confirm the monastery's location and visitor access locally. Respect prayer times and any photography restrictions.",
    image: "photo-1548013146-72479768bada"
  },
  {
    name: "Dharmalaya Institute",
    category: "Other",
    location: "Bir",
    description: "A centre associated with sustainable living, ecological learning and mindful community practices.",
    details: "Check current programmes and visitor policies before arriving, as access may depend on scheduled activities.",
    image: "photo-1472396961693-142e6e269027"
  },
  {
    name: "Ahju Fort",
    category: "Culture",
    location: "Ahju area",
    description: "A heritage-themed destination for travellers interested in local history and the region's past.",
    details: "Verify the exact site, access route and whether it is open to visitors before planning a visit.",
    image: "photo-1519681393784-d120267933ba"
  },
  {
    name: "Barot Valley",
    category: "Nature",
    location: "Mandi district",
    description: "A picturesque valley known for river scenery, forested hills and peaceful mountain surroundings.",
    details: "Enjoy the landscapes and plan transport carefully. Check road and weather conditions, especially during the monsoon and winter.",
    image: "photo-1470770841072-f978cf4d019e"
  },
  {
    name: "Andretta Artist Village",
    category: "Culture",
    location: "Near Palampur",
    description: "A creative village known for its art, pottery traditions and connection with artists.",
    details: "Look for pottery studios and galleries that welcome visitors. Confirm workshop availability and opening hours in advance.",
    image: "photo-1452860606245-08befc0ff44b"
  },
  {
    name: "Neugal Khad",
    category: "Nature",
    location: "Near Palampur",
    description: "A scenic stream and river landscape with views towards the Dhauladhar mountain range.",
    details: "Visit during safe weather and stay away from fast-flowing water, particularly after rain.",
    image: "photo-1437482078695-73f5ca6c96e2"
  },
  {
    name: "Sherab Ling Monastery",
    category: "Monastery",
    location: "Bhattu area, near Bir",
    description: "A respected Tibetan Buddhist monastery set in peaceful surroundings among the hills.",
    details: "Explore respectfully, keep noise low and check visitor access and event timings before travelling.",
    image: "photo-1605649487212-47bdab064df7"
  },
  {
    name: "Thamsar Pass",
    category: "Adventure",
    location: "Dhauladhar range",
    description: "A high mountain pass known for challenging trekking routes and dramatic alpine scenery.",
    details: "This is a demanding mountain route. Check seasonal accessibility, permits where required and local guidance before attempting it.",
    image: "photo-1464278533981-50106e6176b1"
  },
  {
    name: "Baragran",
    category: "Village",
    location: "Bir region",
    description: "A quiet rural destination for visitors who want to discover local landscapes and village life.",
    details: "Confirm the specific village location and road conditions locally. Be considerate of residents and private property.",
    image: "photo-1470770841072-f978cf4d019e"
  },
  {
    name: "Palachak",
    category: "Nature",
    location: "Dhauladhar region",
    description: "A mountain destination for those interested in remote landscapes and outdoor exploration.",
    details: "Check the exact route, weather and access with local guides. Remote mountain travel requires careful preparation.",
    image: "photo-1464822759023-fed622ff2c3b"
  },
  {
    name: "Barabhangal",
    category: "Village",
    location: "Kangra district region",
    description: "A remote Himalayan village known for its mountain setting and traditional rural character.",
    details: "Access can be difficult and seasonal. Confirm current route conditions and seek experienced local guidance before travelling.",
    image: "photo-1464278533981-50106e6176b1"
  },
  {
    name: "Chaugan Village Walks",
    category: "Village",
    location: "Bir",
    description: "Discover local lanes, green fields and everyday village life around the Bir area.",
    details: "Choose marked or locally recommended paths and ask permission before photographing residents or entering private land.",
    image: "photo-1500530855697-b586d89ba3ee"
  },
  {
    name: "Bir Mountain Trails",
    category: "Adventure",
    location: "Bir area",
    description: "Explore the natural surroundings of Bir on a walk suited to your experience and fitness.",
    details: "Ask locals about safe, accessible trails. Carry water, wear suitable footwear and check weather conditions.",
    image: "photo-1472396961693-142e6e269027"
  },
  {
    name: "Dhauladhar Mountain Views",
    category: "Nature",
    location: "Bir and nearby areas",
    description: "Admire the impressive mountain range that forms a dramatic backdrop to the region.",
    details: "Clear mornings may offer excellent views. Weather and visibility vary, so allow flexibility in your plans.",
    image: "photo-1464822759023-fed622ff2c3b"
  }
];

const placesGrid = document.getElementById("placesGrid");
const searchInput = document.getElementById("searchInput");
const filters = document.getElementById("filters");
const placeCount = document.getElementById("placeCount");
const noResults = document.getElementById("noResults");
const backToTop = document.getElementById("backToTop");

let selectedCategory = "All";

function renderPlaces() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  const filteredPlaces = places.filter((place) => {
    const matchesCategory =
      selectedCategory === "All" ||
      place.category === selectedCategory;

    const searchableText =
      `${place.name} ${place.category} ${place.location} ${place.description}`
        .toLowerCase();

    return matchesCategory && searchableText.includes(searchTerm);
  });

  placeCount.textContent =
    `${filteredPlaces.length} ${filteredPlaces.length === 1 ? "place" : "places"}`;

  noResults.hidden = filteredPlaces.length !== 0;

  placesGrid.innerHTML = filteredPlaces.map((place) => {
    const originalIndex = places.indexOf(place);

    const imageUrl =
      `https://images.unsplash.com/${place.image}?auto=format&fit=crop&w=900&q=80`;

    return `
      <article class="place-card">
        <div class="card-image">
          <img
            src="${imageUrl}"
            alt="${place.name}"
            loading="lazy"
            onerror="this.onerror=null;this.src='https://placehold.co/900x600/e9f0e9/254d3b?text=Explore+Bir';"
          >
          <span class="category-tag">${place.category}</span>
        </div>

        <div class="card-content">
          <span class="card-number">
            DESTINATION ${String(originalIndex + 1).padStart(2, "0")}
          </span>

          <h3>${place.name}</h3>
          <p>${place.description}</p>

          <div class="card-actions">
            <span>⌖ ${place.location}</span>
            <button
              class="details-btn"
              type="button"
              aria-expanded="false"
              aria-controls="details-${originalIndex}"
              data-index="${originalIndex}"
            >
              View Details +
            </button>
          </div>

          <div class="extra-details" id="details-${originalIndex}" hidden>
            ${place.details}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

searchInput.addEventListener("input", renderPlaces);

filters.addEventListener("click", (event) => {
  const button = event.target.closest(".filter-btn");

  if (!button) return;

  selectedCategory = button.dataset.category;

  document.querySelectorAll(".filter-btn").forEach((filterButton) => {
    const isActive = filterButton === button;
    filterButton.classList.toggle("active", isActive);
    filterButton.setAttribute("aria-pressed", String(isActive));
  });

  renderPlaces();
});

placesGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".details-btn");

  if (!button) return;

  const index = button.dataset.index;
  const details = document.getElementById(`details-${index}`);
  const isOpening = details.hidden;

  details.hidden = !isOpening;
  button.textContent = isOpening ? "Show Less −" : "View Details +";
  button.setAttribute("aria-expanded", String(isOpening));
});

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 350);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.setAttribute(
    "aria-pressed",
    String(button.dataset.category === "All")
  );
});

renderPlaces();

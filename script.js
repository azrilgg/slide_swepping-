const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slide = document.querySelector('.slide');
const currentCounter = document.getElementById('current');
const totalCounter = document.getElementById('total');

// Mobile Menu Elements
const menuToggle = document.querySelector('.menu-toggle');
const closeMenu = document.querySelector('.close-menu');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const mobileLinks = document.querySelectorAll('.mobile-menu-overlay a');
const sections = document.querySelectorAll('section');

// Modal Elements (Info)
const modal = document.querySelector('.discovery-modal');
const closeModalBtn = document.querySelector('.close-modal');
const modalTitle = document.querySelector('.modal-title');
const modalDesc = document.querySelector('.modal-desc');
const modalFacts = document.querySelector('.modal-facts');
const modalGallery = document.querySelector('.modal-gallery');

// Video Modal Elements
const videoModal = document.querySelector('.video-modal-overlay');
const closeVideoBtn = document.querySelector('.close-video');
const youtubeFrame = document.getElementById('youtube-frame');

// Search & Login Elements
const searchBtn = document.querySelector('.btn-search');
const userBtn = document.querySelector('.btn-user');
const searchOverlay = document.querySelector('.search-overlay');
const closeSearchBtn = document.querySelector('.close-search');
const loginOverlay = document.querySelector('.login-modal-overlay');
const closeLoginBtn = document.querySelector('.close-login');
const searchInput = document.querySelector('.search-input');


let isAnimating = false;
let slideIndex = 1;

// Initialize total counter
const totalSlides = document.querySelectorAll('.item').length;
totalCounter.innerText = totalSlides < 10 ? `0${totalSlides}` : totalSlides;

/* --- HOLIDAYS DATA --- */
const holidaysData = [
    {
        name: "Luxury Resorts",
        subtitle: "Exclusive Escapes",
        desc: "Indulge in the world's most breathtaking 5-star resorts. From private warm-water islands in the Maldives to secluded mountain chalets in the Alps, our luxury packages offer unparalleled service, gourmet dining, and absolute privacy. Every detail is curated for your ultimate comfort.",
        facts: [
            { label: "Price Range", value: "$5k - $50k" },
            { label: "Service", value: "24/7 Butler" },
            { label: "Rating", value: "5-Star" }
        ],
        images: [
            "https://i.pinimg.com/736x/8b/b2/eb/8bb2eb9d03065a35b25f6974bc95292e.jpg",
            "images/slide-4.jpg",
            "images/slide-5.jpg"
        ]
    },
    {
        name: "Adventure",
        subtitle: "Adrenaline & Nature",
        desc: "For those who seek the thrill of the unknown. Embark on guided expeditions through the Amazon rainforest, scale the peaks of the Himalayas, or dive into the deep blue holes of Belize. Our adventure packages combine safety with the raw power of nature.",
        facts: [
            { label: "Difficulty", value: "Moderate to Expert" },
            { label: "Group Size", value: "Small (4-8)" },
            { label: "Duration", value: "10-21 Days" }
        ],
        images: [
            "https://i.pinimg.com/1200x/35/c6/35/35c635bca65c43069ac1b54f4670f308.jpg",
            "images/slide-3.jpg",
            "images/slide-6.jpg"
        ]
    },
    {
        name: "Culture",
        subtitle: "History & Tradition",
        desc: "Immerse yourself in the living history of the world. Walk the ancient streets of Rome, participate in traditional tea ceremonies in Kyoto, or explore the pyramids of Egypt with expert archaeologists. Connect with locals and understand the heritage of humanity.",
        facts: [
            { label: "Guide", value: "Local Expert" },
            { label: "Focus", value: "History/Art" },
            { label: "Experience", value: "Immersive" }
        ],
        images: [
            "https://i.pinimg.com/736x/01/d0/11/01d011ffc90143d04f5832db407bb61f.jpg",
            "images/slide-2.jpg",
            "images/slide-8.jpg"
        ]
    }
];

/* --- DESTINATION DATA (With Unique Videos) --- */
const destinationsData = [
    {
        name: "Saint Antönien",
        subtitle: "Switzerland Alps",
        desc: "Saint Antönien is a picturesque municipality in the Prättigau/Davos Region in the canton of Grisons in Switzerland. It is a hidden gem for ski touring in winter and hiking in summer. The village is famously embedded in a stunning mountain amphitheater, offering peace, tranquility, and breathtaking alpine vistas.",
        population: "360",
        climate: "Alpine",
        bestTime: "Dec - Mar",
        // Cinematic Swiss Alps
        video: "https://www.youtube.com/embed/ZzwdNz095BA?autoplay=1&mute=0&controls=0&rel=0",
        images: ["https://i.pinimg.com/1200x/f0/fc/13/f0fc1351acae457370a6aaaac01172d2.jpg", "https://i.pinimg.com/1200x/58/8b/61/588b61a8ece74cc6c8f43cb31a77dd82.jpg", "https://i.pinimg.com/1200x/4d/2d/13/4d2d13360b643559c8b73916ea8cf805.jpg"]
    },
    {
        name: "Nagano Prefecture",
        subtitle: "Norway Alps", // Kept user's text override
        desc: "Innlandet (Lillehammer Region) is an inland province in the heart of Norway. Best known as the host of the 1994 Winter Olympics, the region boasts world-class ski resorts like Hafjell and Kvitfjell, as well as Dovrefjell National Park, where wild musk oxen roam the tundra.",
        population: "375.000",
        climate: "Kontinental",
        bestTime: "Feb - Apr",
        // Norway/Scandinavia Cinematic
        video: "https://www.youtube.com/embed/ScsxDb9lhQA?autoplay=1&mute=0&controls=0&rel=0",
        images: ["https://i.pinimg.com/736x/45/f8/5f/45f85f6bb8dbdabc45c82f4e9f3b09a3.jpg", "https://i.pinimg.com/1200x/a4/ec/9c/a4ec9cfd29ef0995f749fa82d3f73702.jpg", "https://i.pinimg.com/1200x/78/55/10/785510cf2d86e25f67f44d8af4c8cd89.jpg"]
    },
    {
        name: "Nature GOAT",
        subtitle: "Iceland",
        desc: "Experience the raw power of the 'Land of Fire and Ice.' Iceland is home to roaring active volcanoes, massive, frozen glaciers, and countless majestic waterfalls. From the Northern Lights dancing across the winter sky to the never-setting Midnight Sun.",
        population: "5,000",
        climate: "Arid",
        bestTime: "Oct - Apr",
        // Iceland 4K
        video: "https://www.youtube.com/embed/MraC3c2O3F4?autoplay=1&mute=0&controls=0&rel=0",
        images: ["https://i.pinimg.com/1200x/f3/2b/47/f32b473c050c546478f318f1b0735207.jpg", "https://i.pinimg.com/1200x/7a/e1/25/7ae12596bddf8d8d7ffcbef31cc024b6.jpg", "https://i.pinimg.com/1200x/18/22/82/182282d5c3ccd1ac966079b37eb273c0.jpg"]
    },
    {
        name: "Yosemite National Park",
        subtitle: "Sierra Nevada USA",
        desc: "Yosemite National Park is in California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.",
        population: "1,000",
        climate: "Mediterranean",
        bestTime: "May - Sep",
        // Yosemite 4K
        video: "https://www.youtube.com/embed/9fJEFi3ccwI?autoplay=1&mute=0&controls=0&rel=0",
        images: ["https://i.pinimg.com/1200x/0b/0d/b4/0b0db479d42fc97c545bf298e7329ef9.jpg", "https://i.pinimg.com/736x/c2/46/95/c24695b4b307ee25546e27d903e6ddbf.jpg", "https://i.pinimg.com/736x/f5/1d/21/f51d2144d73bf3c8aec21d3d0ad75584.jpg"]
    },
    {
        name: "The Low Lands",
        subtitle: "NetherLands",
        desc: "The Netherlands is home to colorful tulip fields, majestic historic windmills, and a network of enchanting urban canals. From the wonder of dams that hold back the power of the sea to a cycling culture that blends with nature.",
        population: "18 M",
        climate: "Maritime",
        bestTime: "Apr - Oct",
        // Netherlands 4K
        video: "https://www.youtube.com/embed/e5W5uD980V8?autoplay=1&mute=0&controls=0&rel=0",
        images: ["https://i.pinimg.com/1200x/1a/5e/7b/1a5e7b545b9896781f27a0abd5032db5.jpg", "https://i.pinimg.com/736x/fc/c1/b3/fcc1b320d4d7ac22393ead59c3cbcf18.jpg", "https://i.pinimg.com/1200x/af/f6/89/aff6894307627895b6e9c813f1bcbbdb.jpg"]
    },
    {
        name: "The Land of the Morning Calm",
        subtitle: "South Korea",
        desc: "South Korea is home to the sharp granite peaks of Seoraksan, the exotic volcanic island of Jeju, and thousands of small islands scattered off its southern coast.",
        population: "51,7 M",
        climate: "Humid Continental",
        bestTime: "Jun - Aug",
        // South Korea 4K
        video: "https://www.youtube.com/embed/3P1CnWI62Ik?autoplay=1&mute=0&controls=0&rel=0",
        images: ["https://i.pinimg.com/736x/38/84/4f/38844fbae3efc01f02a3b4bda974ab8e.jpg", "https://i.pinimg.com/736x/b3/1f/62/b31f627d9f6b476e81550735e527f4b9.jpg", "https://i.pinimg.com/736x/35/0f/68/350f683792a122894704f7ab4388e823.jpg"]
    },
    {
        name: "Bali Islands",
        subtitle: "Indonesia",
        desc: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple.",
        population: "4.4M",
        climate: "Tropical",
        bestTime: "Apr - Oct",
        // Bali 4K
        video: "https://www.youtube.com/embed/G58fdE9R_Y0?autoplay=1&mute=0&controls=0&rel=0",
        images: ["https://i.pinimg.com/1200x/9d/de/d9/9dded94fb70625d796a7e265ae0b9538.jpg", "https://i.pinimg.com/736x/7a/a3/5f/7aa35f423e4508268c6edc6cd506bcaf.jpg", "https://i.pinimg.com/1200x/43/3f/80/433f80f11a2ec37c1da091dec4afe853.jpg"]
    },
    {
        name: "CLEAN COUNTRY",
        subtitle: "Japan",
        desc: "Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses.",
        population: "1.47M",
        climate: "Humid Subtropical",
        bestTime: "Mar - May",
        // Kyoto/Japan 4K
        video: "https://www.youtube.com/embed/G5RpJwCJDqc?autoplay=1&mute=0&controls=0&rel=0",
        images: ["https://i.pinimg.com/736x/21/dd/9a/21dd9a16f3759347be392150d167b4c7.jpg", "https://i.pinimg.com/736x/91/ce/b4/91ceb4dcf717bbd52645461dafe48cfb.jpg", "https://i.pinimg.com/1200x/84/4b/f3/844bf3201e6a246acb161da6a551f97a.jpg"]
    },
    {
        name: "Matador Country",
        subtitle: "SPAIN",
        desc: "Experience the fiery energy of the 'Land of the Matador,' a symphony of color and passion on the Iberian Peninsula. Spain is home to magnificent, timeless architecture, emotional Flamenco dancing, and a unique blend of Moorish and European cultures. From the peaks of the Pyrenees to the golden beaches of the Mediterranean, every corner of this country celebrates life with the unwavering spirit of 'Fiesta'.",
        population: "48,5M",
        climate: "Humid Subtropical",
        bestTime: "Apr - June",
        // Spain/Matador
        video: "https://www.youtube.com/embed/G5RpJwCJDqc?autoplay=1&mute=0&controls=0&rel=0",
        images: ["https://i.pinimg.com/736x/e5/aa/92/e5aa928898fdacc28faf3d1d8d685636.jpg", "https://i.pinimg.com/1200x/ad/ca/dd/adcadd3541582e9a6eb0dad395214ae5.jpg", "https://i.pinimg.com/736x/f3/84/6e/f3846ee11bcdcca5183f761b053d6e66.jpg"]
    },
    {
        name: "La Ville Lumière",
        subtitle: "FRANCE",
        desc: "Witness the splendor of 'The Hexagon,' a perfectly carved masterpiece in the heart of Western Europe. France is the keeper of the flame of art, home to iron towers that pierce the Paris skyline, majestic palaces that whisper of past glories, and botanical gardens that spread the scent of lavender across the globe. From the dazzling blue coast to the cloud-touching peaks of the Alps, this country embodies true elegance and the timeless art of living.",
        population: "68M",
        climate: "Temperate",
        bestTime: "Apr - June",
        // France/La Ville Lumiere
        video: "https://www.youtube.com/embed/G5RpJwCJDqc?autoplay=1&mute=0&controls=0&rel=0",
        images: ["https://i.pinimg.com/736x/cb/6c/c7/cb6cc7923ba8350dfe6db9ae89a4a653.jpg", "https://i.pinimg.com/1200x/9c/b4/bd/9cb4bddbb20779771ffe4d7470fd07ea.jpg", "https://i.pinimg.com/1200x/34/98/3e/34983ef69188da3d354586fd74d2245e.jpg"]
    }
];

// Open Info Modal
function openModal(input) {
    let data;

    // Check if input is index (number) or object
    if (typeof input === 'number') {
        data = destinationsData[input];
    } else {
        data = input;
    }

    if (!data) return;

    modalTitle.innerText = data.name;
    document.querySelector('.modal-subtitle').innerText = data.subtitle;
    modalDesc.innerText = data.desc;

    // Handle Facts: Dynamic vs Static Fallback
    if (data.facts) {
        modalFacts.innerHTML = data.facts.map(fact => `
            <div class="fact-item">
              <span class="fact-label">${fact.label}</span>
              <span class="fact-value">${fact.value}</span>
            </div>
        `).join('');
    } else {
        // Fallback for Destinations (Population, Climate, Best Time)
        modalFacts.innerHTML = `
            <div class="fact-item">
              <span class="fact-label">Population</span>
              <span class="fact-value">${data.population || 'N/A'}</span>
            </div>
            <div class="fact-item">
              <span class="fact-label">Climate</span>
              <span class="fact-value">${data.climate || 'N/A'}</span>
            </div>
            <div class="fact-item">
              <span class="fact-label">Best Time</span>
              <span class="fact-value">${data.bestTime || 'N/A'}</span>
            </div>
        `;
    }

    // Update Gallery
    const img1 = data.images[0] || 'images/slide-1.jpg';
    const img2 = data.images[1] || 'images/slide-2.jpg';
    const img3 = data.images[2] || 'images/slide-3.jpg';

    modalGallery.innerHTML = `
        <div class="gallery-item" style="background-image: url('${img1}')"></div>
        <div class="gallery-item" style="background-image: url('${img2}')"></div>
        <div class="gallery-item" style="background-image: url('${img3}')"></div>
    `;

    modal.classList.add('active');
}

// Open Video Modal
function openVideoModal(index) {
    const data = destinationsData[index];
    if (data && data.video) {
        youtubeFrame.src = data.video;
        videoModal.classList.add('active');
    }
}

function closeVideo() {
    videoModal.classList.remove('active');
    youtubeFrame.src = ""; // Stop playback
}


// Attach Listeners
document.addEventListener('click', (e) => {
    const target = e.target;

    // 1. Explore Links (Holidays)
    if (target.closest('.explore-link')) {
        e.preventDefault();
        const card = target.closest('.holiday-card');
        const titleElement = card.querySelector('h3');
        if (titleElement) {
            const title = titleElement.innerText.trim();
            // Find in holidayData
            const holiday = holidaysData.find(h => h.name.toUpperCase().includes(title.toUpperCase().split(' ')[0]) || title.toUpperCase().includes(h.name.toUpperCase()));

            if (holiday) {
                openModal(holiday);
            }
        }
        return;
    }

    // 2. Play Button -> Video Modal
    if (target.closest('.play-btn')) {
        let name = '';
        const container = target.closest('.item');
        if (container) {
            const nameEl = container.querySelector('.name');
            if (nameEl) name = nameEl.innerText;
        }
        if (name) {
            const index = destinationsData.findIndex(d => d.name.toUpperCase() === name.toUpperCase().trim());
            if (index !== -1) openVideoModal(index);
        }
        return;
    }

    // 3. Discover Button / Marquee Card -> Info Modal
    if (target.closest('.discover-btn') || target.closest('.dest-card')) {
        let name = '';

        if (target.closest('.dest-card')) {
            const card = target.closest('.dest-card');
            name = card.getAttribute('data-name');
        }
        else {
            const container = target.closest('.item');
            if (container) {
                const nameEl = container.querySelector('.name');
                if (nameEl) name = nameEl.innerText;
            }
        }

        if (name) {
            const index = destinationsData.findIndex(d => d.name.toUpperCase() === name.toUpperCase().trim());
            if (index !== -1) openModal(index);
        }
    }
});

// Close Buttons
closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));
if (closeVideoBtn) closeVideoBtn.addEventListener('click', closeVideo);

// Close on outside click
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
    if (e.target === videoModal) closeVideo();
    if (e.target === searchOverlay) searchOverlay.classList.remove('active');
    if (e.target === loginOverlay) loginOverlay.classList.remove('active');
});


/* --- SEARCH & LOGIN LOGIC --- */
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        setTimeout(() => searchInput.focus(), 100);
    });
}

if (closeSearchBtn) {
    closeSearchBtn.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
        searchInput.value = ''; // Reset
    });
}

if (userBtn) {
    userBtn.addEventListener('click', () => {
        loginOverlay.classList.add('active');
    });
}

if (closeLoginBtn) {
    closeLoginBtn.addEventListener('click', () => {
        loginOverlay.classList.remove('active');
    });
}

// Simple Search Filter
searchInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
});

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const val = searchInput.value.toLowerCase();

        // Check Destinations
        let foundDest = destinationsData.findIndex(d => d.name.toLowerCase().includes(val) || d.subtitle.toLowerCase().includes(val));

        if (foundDest !== -1) {
            openModal(foundDest);
            searchOverlay.classList.remove('active');
            return;
        }

        // Check Holidays
        let foundHoliday = holidaysData.find(h => h.name.toLowerCase().includes(val) || h.subtitle.toLowerCase().includes(val));
        if (foundHoliday) {
            openModal(foundHoliday);
            searchOverlay.classList.remove('active');
        } else {
            searchInput.style.color = '#ff4444';
            setTimeout(() => searchInput.style.color = '#fff', 500);
        }
    }
});


/* --- CAROUSEL LOGIC --- */

function updateCounter(direction) {
    if (direction === 'next') {
        slideIndex++;
        if (slideIndex > totalSlides) slideIndex = 1;
    } else {
        slideIndex--;
        if (slideIndex < 1) slideIndex = totalSlides;
    }
    currentCounter.innerText = slideIndex < 10 ? `0${slideIndex}` : slideIndex;
}

function handleNext() {
    if (isAnimating) return;
    isAnimating = true;

    let items = document.querySelectorAll('.item');
    slide.appendChild(items[0]);
    updateCounter('next');

    setTimeout(() => {
        isAnimating = false;
    }, 500); // 0.5s matches CSS transition
}

function handlePrev() {
    if (isAnimating) return;
    isAnimating = true;

    let items = document.querySelectorAll('.item');
    slide.prepend(items[items.length - 1]);
    updateCounter('prev');

    setTimeout(() => {
        isAnimating = false;
    }, 500);
}

if (next) next.addEventListener('click', handleNext);
if (prev) prev.addEventListener('click', handlePrev);

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'Escape') {
        modal.classList.remove('active');
        closeVideo();
        searchOverlay.classList.remove('active');
        loginOverlay.classList.remove('active');
    }
});


/* --- MOBILE MENU --- */
if (menuToggle && mobileMenuOverlay) {
    menuToggle.addEventListener('click', () => {
        mobileMenuOverlay.classList.add('active');
    });
}
if (closeMenu && mobileMenuOverlay) {
    closeMenu.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('active');
    });
}
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('active');
    });
});

/* --- SCROLL SPY --- */
window.addEventListener('scroll', () => {
    let current = '';

    if (sections.length > 0) {
        sections.forEach(section => {
            if (section.getAttribute('id')) {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= (sectionTop - 300)) {
                    current = section.getAttribute('id');
                }
            }
        });
    }

    navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


/* --- INITIALIZE MARQUEE --- */
function initMarquee() {
    const track1 = document.getElementById('track-1');
    const track2 = document.getElementById('track-2');

    if (!track1 || !track2) return;

    const set1 = destinationsData;
    const set2 = [...destinationsData].reverse();

    const createCards = (data) => {
        return data.map(dest => {
            const img = dest.images[0] || 'images/slide-1.jpg';
            return `
                <div class="dest-card" style="background-image: url('${img}')" data-name="${dest.name}">
                    <div class="dest-info">
                        <h4>${dest.name}</h4>
                        <p>${dest.subtitle}</p>
                    </div>
                </div>
            `;
        }).join('');
    };

    const content1 = createCards(set1).repeat(4);
    const content2 = createCards(set2).repeat(4);

    track1.innerHTML = content1;
    track2.innerHTML = content2;
}

initMarquee();

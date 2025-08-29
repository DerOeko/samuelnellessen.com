---
title: "Samuel Nellessen"
description: "Bachelor student in AI at Radboud University. Research interests in AI safety, mechanistic interpretability, and the intersection of artificial and natural intelligence."
hidemeta: true
disableShare: true
ShowBreadCrumbs: false
---

<nav class="main-nav">
<div class="nav-container">
<button class="hamburger" onclick="toggleMenu()">
<span></span>
<span></span>
<span></span>
</button>
<div class="nav-links">
<a href="#about-me" class="nav-link">About</a>
<a href="#news" class="nav-link">News</a>
<a href="#education" class="nav-link">Education</a>
<a href="#publications" class="nav-link">Publications</a>
<a href="#projects" class="nav-link">Projects</a>
<a href="#blog" class="nav-link">Blog</a>
</div>
</div>
</nav>

<script>
function toggleMenu() {
    const navContainer = document.querySelector('.nav-container');
    const hamburger = document.querySelector('.hamburger');
    
    navContainer.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navContainer = document.querySelector('.nav-container');
        const hamburger = document.querySelector('.hamburger');
        
        navContainer.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const navContainer = document.querySelector('.nav-container');
    const hamburger = document.querySelector('.hamburger');
    
    if (!navContainer.contains(e.target)) {
        navContainer.classList.remove('active');
        hamburger.classList.remove('active');
    }
});
</script>

<div class="homepage-container">

<div class="profile-header">
<div class="profile-container">
<div class="profile-section">
<img src="picture.png" alt="Samuel Nellessen" class="profile-image">
<div class="profile-info">

# Samuel Nellessen

**Bachelor Student in Artificial Intelligence**  
Radboud University Nijmegen, Netherlands  
📍 Nijmegen, Netherlands

<div class="social-icons">
<a href="mailto:samuelgerrit.nellessen@gmail.com" class="icon-btn" title="Email">
<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
</svg>
</a>
<a href="/files/CV.pdf" class="icon-btn" title="CV" target="_blank">
<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
<path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
</svg>
</a>
<a href="https://www.linkedin.com/in/samuelnellessen/" class="icon-btn" title="LinkedIn" target="_blank">
<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
<path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/>
</svg>
</a>
<a href="https://x.com/SamuelNellessen" class="icon-btn" title="X (Twitter)" target="_blank">
<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
</svg>
</a>
<a href="https://github.com/DerOeko" class="icon-btn" title="GitHub" target="_blank">
<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
<path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.58 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
</svg>
</a>
</div>

</div>




</div>

</div>
<div class="haiku-easter-egg">
<button id="haiku-btn" class="haiku-button">✍️</button>
<div id="haiku-output" class="haiku-output" style="display: none;">
  <div class="haiku-text"></div>
  <div class="haiku-loading" style="display: none;">Composing haiku...</div>
</div>
</div>
</div>

## About Me {#about-me}

My academic journey started with a fascination for the brain, leading me through psychology and Philosophy & Cognitive Science. However, I increasingly felt that the ideas and beliefs I gained "<a href="https://www.lesswrong.com/posts/a7n8GdKiAZRX86T5A/making-beliefs-pay-rent-in-anticipated-experiences" target="_blank">don't pay rent</a>". They didn't seem to relate to concrete sensory experiences, regardless of whether they were solved or not. This ultimately led me to studying AI at Radboud University.

After conducting research on computational models for depression with <a href="https://www.roshancools.com/" target="_blank">Roshan Cools</a> at the Donders Institute, I became increasingly motivated by AI Safety challenges through engagement with EA communities. Since January, I've dedicated myself to Mechanistic Interpretability, specifically detecting deception in neural networks. My biggest worry is that models might learn different internal goals (mesa-optimization strategies) and learn to hide these with superhuman capability through alignment faking or steganographic reasoning.

I was an ARENA Fellow in the 2025 iteration, building technical skills and working on a project on LLM reasoning from my AI Safety Camp project (supervised by Nandi Schoots).

Now I am researching automated red-teaming for safety evaluation with <a href="https://www.linkedin.com/in/tal-kachman/" target="_blank">Tal Kachman's lab</a>. I'm particularly focused on understanding how LLM-to-LLM interactions differ from human-LLM interactions in a multipolar AI world—do models exploit linguistic quirks when interacting with each other? Do our current safety evaluation tools adequately replicate real deployment conditions?

---

## News {#news}

<div id="news-content">Loading news...</div>

---

## Education {#education}

<div id="education-content">Loading education...</div>

---

## Publications {#publications}

<div id="publications-content">Loading publications...</div>

---

## Blog {#blog}

<div id="blog-content">Loading blog posts...</div>

---

## Projects {#projects}

<div id="projects-content">Loading projects...</div>




<script>
// Function to load and render content from JSON files
async function loadContent() {
    try {
        // Load News
        const newsResponse = await fetch('/data/news.json');
        const newsData = await newsResponse.json();
        const newsContent = document.getElementById('news-content');
        newsContent.innerHTML = '<ul>' + newsData.map(item => 
            `<li><strong>${item.date}</strong>: ${item.description}</li>`
        ).join('') + '</ul>';

        // Load Education  
        const educationResponse = await fetch('/data/education.json');
        const educationData = await educationResponse.json();
        const educationContent = document.getElementById('education-content');
        educationContent.innerHTML = educationData.map(item => `
            <div class="education-item">
                <p><strong>${item.degree}</strong> <em>(${item.period})</em><br>
                ${item.institution}</p>
                <ul>${item.details.map(detail => `<li>${detail}</li>`).join('')}</ul>
            </div>
        `).join('');

        // Load Publications
        const publicationsResponse = await fetch('/data/publications.json');
        const publicationsData = await publicationsResponse.json();
        const publicationsContent = document.getElementById('publications-content');
        publicationsContent.innerHTML = publicationsData.map(item => `
            <div class="publication-item">
                <p><strong>${item.title}</strong> <em>(${item.year})</em><br>
                ${item.authors.join(', ')}<br>
                <em>${item.venue}</em> | ${item.links.map(link => `<a href="${link.url}" target="_blank">${link.text}</a>`).join(' | ')}</p>
                <p>${item.description}</p>
            </div>
        `).join('<hr>');

        // Load Projects
        const projectsResponse = await fetch('/data/projects.json');
        const projectsData = await projectsResponse.json();
        const projectsContent = document.getElementById('projects-content');
        projectsContent.innerHTML = projectsData.map(item => {
            let linksHtml = '';
            if (item.links && item.links.length > 0) {
                linksHtml = `<p>${item.links.map(link => `<a href="${link.url}" target="_blank">${link.text}</a>`).join(' | ')}</p>`;
            }
            return `
                <div class="project-item">
                    <p><strong>${item.title}</strong> <em>(${item.status})</em></p>
                    <p>${item.description}</p>
                    ${linksHtml}
                </div>
            `;
        }).join('');

        // Load Blog
        const blogResponse = await fetch('/data/blog.json');
        const blogData = await blogResponse.json();
        const blogContent = document.getElementById('blog-content');
        blogContent.innerHTML = blogData.map(item => {
            let linksHtml = '';
            if (item.links && item.links.length > 0) {
                linksHtml = `<p>${item.links.map(link => `<a href="${link.url}" target="_blank">${link.text}</a>`).join(' | ')}</p>`;
            }
            return `
                <div class="blog-item">
                    <p><strong>${item.title}</strong> <em>(${item.status})</em></p>
                    <p>${item.description}</p>
                    ${linksHtml}
                </div>
            `;
        }).join('<hr>');

    } catch (error) {
        console.error('Error loading content:', error);
        // Fallback content if JSON loading fails
        document.getElementById('news-content').innerHTML = 'Unable to load news content.';
        document.getElementById('education-content').innerHTML = 'Unable to load education content.';
        document.getElementById('publications-content').innerHTML = 'Unable to load publications content.';
        document.getElementById('projects-content').innerHTML = 'Unable to load projects content.';
        document.getElementById('blog-content').innerHTML = 'Unable to load blog content.';
    }
}

// Load content when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadContent();
    initializeHaikuGenerator();
});

// Initialize haiku generator
function initializeHaikuGenerator() {
    const haikuBtn = document.getElementById('haiku-btn');
    const profileImage = document.querySelector('.profile-image');
    const haikuOutput = document.getElementById('haiku-output');
    const haikuText = haikuOutput.querySelector('.haiku-text');
    const haikuLoading = haikuOutput.querySelector('.haiku-loading');
    
    // Function to generate haiku (shared by both button and image)
    const generateHaikuHandler = async () => {
        try {
            // Disable button and show loading
            haikuBtn.disabled = true;
            haikuOutput.style.display = 'block';
            haikuLoading.style.display = 'block';
            haikuText.style.display = 'none';
            
            // Get website content for context
            const websiteContent = extractWebsiteContent();
            
            // Generate haiku with loading animation
            const haiku = await generateHaiku(websiteContent);
            
            // Hide loading, show haiku container, then type it out
            haikuLoading.style.display = 'none';
            haikuText.style.display = 'block';
            await typeHaiku(haiku, haikuText);
            
        } catch (error) {
            console.error('Failed to generate haiku:', error);
            haikuLoading.style.display = 'none';
            haikuText.style.display = 'block';
            haikuText.textContent = 'Poetry failed to bloom\nTechnical difficulties\nPlease try again soon';
        } finally {
            haikuBtn.disabled = false;
        }
    };
    
    // Add event listeners to both button and profile image
    haikuBtn.addEventListener('click', generateHaikuHandler);
    profileImage.addEventListener('click', generateHaikuHandler);
}

// Extract website content for haiku context
function extractWebsiteContent() {
    const sections = {
        name: "Samuel Nellessen",
        role: "Bachelor Student in Artificial Intelligence",
        university: "Radboud University Nijmegen, Netherlands",
        interests: "AI safety, mechanistic interpretability, computational neuroscience",
        currentWork: "Research Assistant at Donders Institute",
        fellowship: "Neurotech Foresight Fellow"
    };
    return sections;
}

// Generate haiku with fun loading messages and typing animation
async function generateHaiku(content) {
    const loadingMessages = [
        "Counting syllables...",
        "Seeking inspiration...",
        "Channeling inner poet...",
        "Consulting the muses...",
        "Arranging words artfully...",
        "Meditating on haiku form...",
        "Gathering poetic thoughts..."
    ];
    
    const poems = [
        "A student in Nijmegen studies,\nAI safety research, he muddles\nThrough neural nets and code,\nDown the academic road,\nWith coffee stains and mental huddles.",
        
        "Bachelor's degree in progress,\nSwitched from philosophy (more or less).\nNow at Donders Institute,\nMaking models compute\nWhile avoiding thesis stress.",
        
        "From Germany to Netherlands,\nCollecting academic strands.\nMechanistic interpretability\nSounds like responsibility,\nBut mostly it's just reading papers and taking stands.",
        
        "Research Assistant by day,\nBlog writer when time allows, they say.\nSubstack posts and LessWrong thoughts,\nSharing what research has taught,\nIn that particular academic way.",
        
        "Neurotech Fellow sounds impressive,\nThough the work can be obsessive.\nPeering into model layers,\nJoining the AI safety players,\nHoping the field stays progressive.",
        
        "Radboud University halls,\nWhere many a student crawls\nThrough problem sets and papers,\nLike most academic capers,\nAnswering knowledge's calls.",
        
        "Publications starting to appear,\nArXiv preprints drawing near.\nThe academic game begins,\nWith its losses and its wins,\nYear by year, career by career.",
        
        "Computational neuroscience,\nSounds complex (because it is, hence\nThe long hours in the lab,\nTrying not to grab\nToo much coffee for sustenance).",
        
        "AI safety conferences attended,\nNetworking skills extended.\nThough sometimes wonder,\nAmid the academic thunder,\nIf the world will be defended.",
        
        "A profile on the internet,\nShowing projects, not done yet.\nFrom mice studies to LLMs,\nNavigating academic systems,\nJust another student's bet."
    ];
    
    return new Promise(resolve => {
        // Show random loading message
        const loadingMsg = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
        const haikuLoading = document.querySelector('.haiku-loading');
        haikuLoading.textContent = loadingMsg;
        
        // Wait 1 second, then return random poem
        setTimeout(() => {
            const randomPoem = poems[Math.floor(Math.random() * poems.length)];
            resolve(randomPoem);
        }, 1000);
    });
}

// Type out haiku with animation
function typeHaiku(text, element) {
    return new Promise(resolve => {
        element.textContent = '';
        let currentIndex = 0;
        
        function typeNextCharacter() {
            if (currentIndex < text.length) {
                element.textContent = text.substring(0, currentIndex + 1);
                currentIndex++;
                
                // Longer pause for line breaks, shorter for characters
                const delay = text[currentIndex - 1] === '\n' ? 200 : 50;
                setTimeout(typeNextCharacter, delay);
            } else {
                resolve();
            }
        }
        
        typeNextCharacter();
    });
}
</script>

</div>


const fs=require('fs'),path=require('path'),c=require('cheerio'),crypto=require('crypto');
const pages=fs.readdirSync('.').filter(f=>f.endsWith('.html')&&!f.startsWith('Null'));fs.mkdirSync('.oasis-work/original',{recursive:true});for(let f of pages)fs.copyFileSync(f,'.oasis-work/original/'+f);
let rules={};function map(a,b){rules[a]=b}function pairs(s){for(let l of s.trim().split('\n')){let i=l.indexOf('|');if(i>0)map(l.slice(0,i),l.slice(i+1));}}
pairs(`Our Awards: 2023 Red Herring Top 100 Asia Winners Official Announcement|Agri-Technology and farmer support through agents and rural outlets
Crafting Business From 1991|Oasis Agribusiness (U) Limited
We're Bringing Your|Empowering Rural
Business.|Communities.
Building Your|Supporting Your
Future.|Farm.
Powering Your|Growing Through
Success.|Technology.
Empowering your business|Empowering agricultural
vision with our company|communities with technology
Maintaining Client Relationships|Field-based Farmer Support
Attracting and Retaining Top Talent|Learning and Financial Linkages
Staying Ahead of Industry Trends|Climate-smart Agriculture
We create solutions that are|Agricultural services for
bold & up with the times|farmers and enterprises
Strategic Solutions|Agricultural Inputs
Growth Consultants|Farmer Support
Market Research & Analysis|Learning and Financial Linkages
Digital Transformation|Digital Learning
Resources Consulting|Enterprise Development
IT Consulting and Solutions|Software Solutions
Market Research|Farmer Learning
Market Analysis|Agricultural Inputs
Strategic Roadmap|Farmer Learning
Financial Planning|Financial Linkages
Risk Management|Agro Insurance
Talent Acquisition|Enterprise Development
Welcome to World Best|Connecting Farmers with
Business Company|Products and Support
Tailored Solutions and Personalized|Products and Services Together
Proven Track Record and Expertise|Agents and Rural Outlets
Commitment to Measurable Results|Inclusive Farmer Support
Consulting Business Consulting Business Consulting Business Consulting Business Consulting Business|OatechExperience Team Members|Our Farmer Support Network
Meet Our Global Experts|Our Agent and Support Model
Meet Our Team|Our Support Network
Our Team|Our Network
Team Mates|Our Network
Most Creative People|Supporting Farmers
Around Us|Through Our Network
Our Happy Customer|Our Core Values
4.8|Integrity
(Feedback Received)|(Our company profile)
We've worked on over 200 projects with 150+ clients|Our values: empowerment, innovation, sustainability, integrity and collaboration
Trusted by 5000+ Worldwide|Serving women, men, youth,
Brands & Customers|refugees and host communities
Experienced & Quality|Agricultural Products
Service Provider|and Support Services
Extra Growth For|Company Established
Your Company|in 2015
68|2015
Extra Growth For Your Company|Company established in 2015
Read our blog for the latest on|Explore our services and
research & insights.|agricultural approach.
Our Blog Posts|Farmer Resources
Latest News|Our Approach
Latest Posts|Farmer Resources
Insights & Updates|Agricultural Resources
Our Blog|Farmer Resources
Blog|Resources
Blog List|Resource Overview
Blog Details|Farmer Support
The Full Story|Supporting Agricultural Communities
Challenges of consultation new Business Firms|Access to agricultural products through local agents
Secrets to Operational Efficiency Optimization in the Modern|Farmer learning and support through technology
Enhance Customer Experience and Boost Loyalty|Financial linkages and enterprise development
Digital Transformation Services Can Revolutionize|Digital learning for agricultural communities
Essential for Effective Market Research & Analysis|Agricultural products through agents and outlets
Essential Strategies for Effective Market Research & Analysis|Connecting farmers with agricultural inputs
The Ultimate Guide to Financial Advisory and Planning|Financial linkages for agricultural enterprises
The Ultimate Guide to Financial Advisory|Financial linkages for farmers
Importance of Management in Achieving Organizational|Enterprise development for rural businesses
Importance of Management in Achieving Org.|Enterprise development services
Proven Methods for Performance Improvement and Sustaining|Field-based support for farming communities
Maximizing IT Consulting and Solutions for Enhanced|Software solutions for agricultural enterprises
Developing a Sustainable and Environmentally Friendly|Sustainable practices and agricultural innovation
Leveraging Sales and Marketing Strategy to Accelerate|Agent networks and rural service outlets
Building smart business solution for you|Connecting farmers with products and support
Ultimate Business Strategy Solution|Our agricultural support model
Sign Up To Our Newsletter|Talk to Oasis Agribusiness
Subscribe to our Newsletter & Event right now to be updates|Email us about products, farmer support and enterprise services.
Newsletter|Get in touch
Subscribe Now|Email Oasis
Subscribe Us Today|Contact Oasis Today
Subscribe Us & Receive Our Offers and updates We don't spam your email!|Contact our office for product and service enquiries.
Keep In Touch|Contact Oasis
Send Us Message|Send an Enquiry
You can connect with us|Connect with Oasis
when need help!|for farmer support
Call Us 24/7|Call Our Office
Service Station|Head Office
Company Address|Head Office
Address Here|Head Office
Send Us A Message|Email Our Office
8:00am - 17:00pm|Contact us for opening hours
Terms of Use|Company Profile
Privacy Policy|Contact Enquiries
Testimonials|Our Mission
What We Do|Explore Oasis
Portfolio|Projects
Price Plan|Service Enquiries
Price Plans|Service Enquiries
Affordable Solutions|Enquire About Our Services
Flexible Pricing Plans|Choose Your Enquiry
Flexible and affording plans tailored to your needs.|Contact Oasis for availability and service information.
Save up to %20 for a limited time.|Prices are confirmed directly by our office.
Monthly|Products
Yearly|Support
Basic Plan|Farm Inputs
Standard Plan|Farmer Support
Business Plan|Enterprise Services
This Service Plan For 3 Months|Enquire about agricultural inputs
This Service Plan For 4 Months|Enquire about farmer support
This Service Plan For 6 Months|Enquire about enterprise services
/Month|/ enquiry
/Yearly|/ enquiry
24/7 Consultant Service|Field-based Farmer Support
24/7 Customer Service|Agent and Outlet Network
Great Customer Support|Electronic Farmer Learning
Market Growth Solution|Financial Linkages
Select This Plan|Contact Oasis
Let's Request a Schedule For|Contact Our Office About
Free Consultation|Agricultural Services
Call For More Info|Call Our Office
Get Some Question Answer|Questions About Oasis
Share the joy of achieving glorious moments & climbed up the top|Agricultural support through agents, rural outlets and technology
What is the typical duration of a consulting engagement?|What products and services does Oasis provide?
What types of businesses do you work with?|Which communities does Oasis support?
How working process is simplified?|How can I contact Oasis?
How can we help your business?|How does the Oasis agent model work?
What are the advantages of Webteck?|What learning support is available?
About Company|About Oasis
Meet our expert dynamic digital agency team|Agri-Technology for agricultural communities
Digital Right Business Consultant|Agents and Rural Outlets
Our Expertise|Our Agricultural Services
Business Growth Management|Agricultural Products and Support
Instant Business Growth|Products and Farm Tools
Client Relationships|Agent-based Support
Explore our fintech solution offerings:|Agricultural services and technology:
Our Brochures|Company Profile
Company Details|Contact Our Office
Explore the Project|Documented Programmes
Portfolio of Work|Programmes and Activities
Amazing Featured Projects|Documented Programmes and Activities
Discover Our Recent Projects|Explore Our Documented Programmes
Recent Project Gallery|Programme Overview
Business Consulting|NU-HortiMAP
Digital Solutions|FtF-IAM
Financial Advisory|NU-TEC MD
Team Management|Agent Capacity Building
Enterprise Solutions|Enterprise Digital Platforms
Strategy & Planning|August 2023 - March 2024
Growth & Innovation|November 2020 - November 2022
Research & Insights|Seeds, agro-chemicals and tools
Finance & Investment|September 2018 - February 2020
Operations & Productivity|Documented programme activity
Business Scaling|Documented programme activity
Project Information|Programme Information
Clients:|Programme:
Josefin H. Smith|NU-HortiMAP
Category:|Partners:
Date:|Period:
25 January, 2023|Aug 2023 - Mar 2024
Address:|Area:
258 Dancing Street, USA|Kole, Oyam and Lira
Our Business Growth|Northern Uganda Horticulture Market Acceleration
The Challenge Of Project|Documented Programme Activities
Alina Varsha|Agent Network
Markus Daniel|Rural Outlets
Sophia Rose|Farmer Learning
Isabella Grace|Field Support
William Thomas|Enterprise Services
Isabella Rebecca|Financial Linkages
Sarah Charlotte|Software Solutions
Emily Watson|Agricultural Inputs
Daniel Foster|Agro Insurance
Olivia Bennett|Community Support
Lucas Martin|Enterprise Support
Michael Richard|Agent Support
Hannah Victoria|Farmer Learning
CEO|Agricultural products
CTO|Last-mile services
Chef Advisor|Electronic learning
Manager|Farmer support
Operations Head|Seeds and farm tools
Technical Lead|Agricultural services
Senior Advisor|Inclusive support
Project Manager|Enterprise development
Business Consultant|Agent-based delivery
Strategy Advisor|Rural service access
Operations Consultant|Farmer services
Client Manager|Community support
Investor|Financial linkages
New York|Lira Head Office
London|Oyam Outlet
2307 Beverley Rd Brooklyn, NY 11226 United States.|Plot 63-69, Women Peace House Suite 2, Lira City.
2307 Beverley Rd London, England 11226 United Kingdom.|Odyebo A, Atura Parish, Aber Sub-County, Oyam District.
Molan Avenue DY Block, 58H|Plot 63-69, Women Peace House Suite 2
Berlin, Germany.|Lira City, Uganda
452 Marie Avenue, 166HK|Lira City, Uganda
186 DO Street View, Berlin|Plot 63-69, Lira City
258 Street Avenue, Berlin, Germany|Women Peace House Suite 2, Lira City
112, CHA-100, USA|Lira City, Uganda
Best sustainability|Sustainable practices
Health and safety|Farmer support
Modern methods|Agri-Technology
Certified Technician|Learning platforms
20+ Years In Business|Established in 2015
Our nearly 8,000 committed|Our agent and rural outlet
staff members|network
are ready to help.|connects farmers with support.
Happy Users Around|Our Mission for
From Worlds|Farming Communities
Jasmine Juthi|Our Mission
Chief Designer|Oasis Agribusiness
Daniel X. Horrar|Our Mission
Angelina H. Dekato|Oasis Agribusiness
Brand Designer|Agri-Technology company
Author|Company Profile
by David Smith|Company Profile
Admin|Oasis Profile
Danch Martin|Oasis Profile
Emily Carter|Oasis Profile
Lily Morgan|Oasis Profile
15 Dec, 2024|Company Profile
15 Dec, 2025|Company Profile
15 Jan, 2026|Company Profile
15 Jan, 2025|Company Profile
Leave a Reply|Contact Oasis
Submit Message|Send Enquiry
How will activities traditional manufacturing|High-quality seeds and agro-chemicals
All these digital and projects aim to enhance|Farm tools and agro insurance
I monitor my software that takes screenshots|Electronic farmer learning platforms
Laoreet dolore niacin sodium glutimate|Financial linkages for farmers
Minim veniam sodium glutimate nostrud|Enterprise development and software
Strategy Growth|Farmer Support
Finance Solution|Financial Linkages
Investment Policy|Enterprise Development
Tax Managment|Agro Insurance
UI/UX Design|Farmer Learning
Finance|Financial Linkages
Brand Designer|Company Profile
Start a private group|Explore our agricultural
video call.|support model.
Watch Demo|Learn About Oasis
Watch Our Video|Explore Our Work
Watch Video Watch Video Watch Video Watch Video Watch Video Watch Video Watch Video Watch Video Watch Video Watch Video Watch Video Watch Video Watch Video Watch Video Watch Video Watch Video|Explore Oasis Explore Oasis Explore Oasis Explore Oasis Explore Oasis Explore Oasis Explore Oasis Explore Oasis Explore Oasis Explore Oasis Explore Oasis Explore Oasis Explore Oasis Explore Oasis Explore Oasis Explore Oasis
Have Any Project? Let's Talk|Have an Enquiry? Let's Talk
& Grow your Business|About Agricultural Services
Quality Client Services|Agricultural Products
Unique Innovation Ideas|Digital Farmer Learning
Business Growth Manage|Enterprise Development
Interaction Design|Agri-Technology
Experience magical design solutions|Connect with Oasis Agribusiness
Toll Free Customer Care|Head Office Telephone
Need Live Support?|Email Our Office
Career|Contact Oasis
Press Media|Company Profile
CAREERS|CONTACT OASIS
SUCCESS STORIES|PROGRAMMES
OUR PEOPLE|OUR NETWORK
NULLPHPSCRIPT.COM|Oasis Agribusiness
The|The
Building|Support
You Want Here!|For Your Farm
You Need Here!|For Your Enterprise
Your Vision Is|Farmer Support Is
Dedication|Our Purpose
Solving|Providing
Your Business|Communities
Boosting|Empowering
Provide Awesome Service|Agricultural Products and Support
With Our Tools|Through Local Networks
We're All Ears|Contact Oasis
We're Here to Help|Contact Oasis
MAke A Quote|Email Our Office`);
const about='Oasis Agribusiness (U) Limited is an Agri-Technology company connecting farmers with agricultural products and services through agents and rural outlets. Our work brings together inputs, field-based support, learning platforms, financial linkages and enterprise services.';
const mission='To empower and transform agricultural communities through innovative Agri-Technology solutions, comprehensive support services, and sustainable practices.';
const vision='To be the leading catalyst for agricultural advancement and empowerment through Agri-Technology, sustainable practices and inclusive solutions.';
const support='Our agent and rural outlet model connects farmers with high-quality seeds, agro-chemicals, farm tools and agro insurance, alongside field-based support, electronic learning, financial linkages and enterprise development.';
let originalStructure={};for(let f of pages){let $=c.load(fs.readFileSync(f,'utf8'),{decodeEntities:false});originalStructure[f]=$('body *').map((i,e)=>e.tagName+'|'+($(e).attr('class')||'')).get();let k=0;$('body *').each((i,e)=>{if(['script','style'].includes(e.tagName))return;for(let n of e.children||[]){if(n.type!=='text'||!n.data.trim())continue;let old=n.data.trim().replace(/\s+/g,' '),v=rules[old];if(v===undefined){if(/@/.test(old)&&old.length<100)v='oasisagroagent@gmail.com';else if(/^(\+?\(?\d[\d\s()+-]{7,})$/.test(old))v='0393 238073';else if(/^\$\d/.test(old))v='Ask';else if(old.length>85)v=[about,support,mission,vision][k++%4];else if(/\$750K|Big Data Migration|Unlocking the Secrets|Maximizing IT|Leveraging Sales/.test(old))v='Agricultural services through agents and rural outlets';else if(/Copyright|Bizgen\. All images/.test(old))v='© Oasis Agribusiness (U) Limited. All rights reserved.';else if(/Business Growth Business|Growth Work Growth/.test(old))v='Empowerment Innovation Sustainability Community Impact Integrity Collaboration';}if(v!==undefined)n.data=n.data.replace(n.data.trim(),v);}});
$('title').text(({'index.html':'Agricultural Products and Farmer Support','about.html':'About Oasis','service.html':'Our Services','service-details.html':'Agricultural Services','project.html':'Programmes','project-details.html':'Documented Programmes','team.html':'Our Support Network','faq.html':'Frequently Asked Questions','pricing.html':'Service Enquiries'}[f]||(/contact/.test(f)?'Contact Oasis':/blog/.test(f)?'Farmer Resources':'Agricultural Products and Farmer Support'))+' | Oasis Agribusiness (U) Limited');
$('meta[name="description"],meta[property="og:description"],meta[name="twitter:description"]').attr('content','Oasis Agribusiness (U) Limited provides agricultural inputs, farmer support, learning and enterprise services through agents and rural outlets in Uganda.');$('meta[property="og:title"],meta[name="twitter:title"]').attr('content',$('title').text());$('meta[name="keywords"]').attr('content','Oasis Agribusiness, Uganda, agricultural inputs, farmer support, Agri-Technology');
$('a').each((i,e)=>{let a=$(e),h=a.attr('href')||'';if(h.startsWith('mailto:'))a.attr('href','mailto:oasisagroagent@gmail.com');if(h.startsWith('tel:'))a.attr('href','tel:+256393238073');if(/facebook|twitter|linkedin|behance|instagram|youtube|vimeo/.test(h)||a.find('.fa-brands').length){a.attr('href','contact.html').attr('aria-label','Contact Oasis; social accounts not supplied');a.contents().filter((i,n)=>n.type==='text'&&n.data.trim()).each((i,n)=>n.data=' Contact');}if(h==='#'&&!a.closest('nav,.rts-mobile-menu-active,.mobile-menu').length&&!a.is('[data-bs-toggle]'))a.attr('href','contact.html');if(/\.pdf$/.test(h))a.attr('href','oasis_raw_image_data/About Oasis.pdf');});
$('.popup-video,.video-play-button,a.video-play').attr('href','project.html').removeClass('popup-video');$('a[href*="youtube"],a[href*="vimeo"]').attr('href','project.html');
$('img').each((i,e)=>{let a=$(e),s=a.attr('src')||'';a.attr('alt',/logo/.test(s)?'Oasis Agribusiness (U) Limited':/brand/.test(s)?'Oasis company value':/team/.test(s)?'Agricultural support network illustration from supplied photographs':/icon|shape|arrow/.test(s)?'':'Oasis supplied photograph: agricultural products, fields and rural support');});
$('.counter').each((i,e)=>{$(e).text('2015');let p=e.parent;for(let n of p.children||[])if(n.type==='text')n.data=n.data.replace(/[%+xM]/g,'');});$('.count-title,.counter-title').each((i,e)=>{if($(e).find('.counter').length)$(e).siblings('p').text('Company established in 2015');});
$('.accordion-button').each((i,e)=>{$(e).text(['What products and services does Oasis provide?','Which communities does Oasis support?','How can I contact Oasis?'][i%3]);});$('.accordion-body').each((i,e)=>{$(e).text([support,'Oasis supports women, men, youth, refugees and host communities. Its company profile describes work across Lango, Karamoja, West Nile and Acholi.','Call 0393 238073 or email oasisagroagent@gmail.com. The head office is at Plot 63-69, Women Peace House Suite 2, Lira City.'][i%3]);});
$('.newsletter-form').each((i,e)=>{$(e).find('input').attr('placeholder','Email us for product and service information').attr('readonly','readonly');$(e).find('button').attr('type','button').attr('onclick',"window.location.href='mailto:oasisagroagent@gmail.com'");});
$('form').each((i,e)=>{let a=$(e);if(a.attr('id')!=='contact-form'){a.attr('data-oasis-unconfigured','true');}a.find('input[type="email"]').attr('type','email');});
$('iframe').each((i,e)=>{let a=$(e);if(/maps/.test(a.attr('src')||'')){a.attr('src','https://maps.google.com/maps?q=Lira%20Uganda&t=&z=12&ie=UTF8&iwloc=&output=embed').attr('title','Lira, Uganda — city overview; not an office pin');}});
let html=$.html();html=html.replace('</body>','    <script defer src="assets/js/oasis-content.js"></script>\n</body>');fs.writeFileSync(f,html);}
fs.writeFileSync('.oasis-work/structure.json',JSON.stringify(originalStructure));fs.writeFileSync('.oasis-work/content-rules.json',JSON.stringify(rules,null,2));

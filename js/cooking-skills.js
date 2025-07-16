// Cooking Skills page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Setup is handled by shared.js
});

// Skill card data
const skillsData = {
    'knife-skills': {
        title: 'Knife Skills',
        level: 'Beginner',
        intro: 'Proper knife skills are the foundation of efficient cooking. Learn the basics to cook faster and safer.',
        techniques: [
            {
                name: 'Proper Knife Grip',
                description: 'Hold the knife with your dominant hand using a "pinch grip" - pinch the blade between thumb and forefinger, wrap remaining fingers around the handle.'
            },
            {
                name: 'Guiding Hand Technique',
                description: 'Use your non-dominant hand to guide the food, keeping fingertips curled under in a "claw" shape to protect from cuts.'
            },
            {
                name: 'Basic Dice',
                description: 'Cut food into uniform cubes. Make horizontal cuts, then vertical cuts, then dice across. Start with 1/2-inch pieces.'
            },
            {
                name: 'Julienne (Matchsticks)',
                description: 'Cut vegetables into thin, uniform strips about 2 inches long and 1/8 inch thick. Great for stir-fries.'
            },
            {
                name: 'Chiffonade',
                description: 'Stack leafy herbs or greens, roll tightly, then slice across the roll to create thin ribbons.'
            }
        ],
        safety: [
            'Always cut away from your body',
            'Keep knives sharp - dull knives are more dangerous',
            'Use a cutting board that won\'t slip',
            'Never try to catch a falling knife',
            'Clean knives immediately after use'
        ]
    },
    'pan-cooking': {
        title: 'Pan Cooking',
        level: 'Beginner',
        intro: 'Master the stovetop with these essential pan cooking techniques that form the basis of countless recipes.',
        techniques: [
            {
                name: 'Sautéing',
                description: 'Cook food quickly in a small amount of oil over medium-high heat. Keep food moving for even cooking.'
            },
            {
                name: 'Searing',
                description: 'Cook protein at high heat to create a flavorful brown crust. Don\'t move food until it releases easily.'
            },
            {
                name: 'Pan-Frying',
                description: 'Cook food in moderate amount of oil over medium heat. More oil than sautéing, less than deep frying.'
            },
            {
                name: 'Deglazing',
                description: 'Add liquid to a hot pan to lift up browned bits (fond) and create a quick sauce or gravy.'
            },
            {
                name: 'Sweating',
                description: 'Cook vegetables slowly over low heat until they release moisture. Used to build flavor bases.'
            }
        ],
        safety: [
            'Heat pan before adding oil',
            'Don\'t overcrowd the pan',
            'Turn handles away from walkways',
            'Use appropriate heat levels',
            'Have a lid nearby to smother grease fires'
        ]
    },
    'timing-temps': {
        title: 'Timing & Temperatures',
        level: 'Essential',
        intro: 'Understanding proper cooking times and temperatures is crucial for food safety and quality results.',
        techniques: [
            {
                name: 'Internal Temperature Guidelines',
                description: 'Chicken: 165°F, Ground meat: 160°F, Whole cuts beef/pork: 145°F, Fish: 145°F, Eggs: 160°F'
            },
            {
                name: 'Visual Doneness Cues',
                description: 'Learn to recognize when food is done: clear juices, firm texture, proper color changes.'
            },
            {
                name: 'Resting Meat',
                description: 'Let cooked meat rest 5-10 minutes before cutting to allow juices to redistribute.'
            },
            {
                name: 'Pasta Testing',
                description: 'Taste test pasta 1-2 minutes before package time. Should be "al dente" - firm but not crunchy.'
            },
            {
                name: 'Carryover Cooking',
                description: 'Food continues cooking after heat is removed. Account for 5-10°F temperature rise.'
            }
        ],
        safety: [
            'Use a food thermometer for accuracy',
            'Never leave perishable food at room temperature over 2 hours',
            'Cool large portions quickly in shallow containers',
            'Reheat leftovers to 165°F',
            'When in doubt, throw it out'
        ]
    },
    'seasoning': {
        title: 'Seasoning & Flavoring',
        level: 'Intermediate',
        intro: 'Transform simple ingredients into delicious meals by mastering the art of seasoning and flavor building.',
        techniques: [
            {
                name: 'Salt Timing',
                description: 'Salt early for vegetables and proteins to draw out moisture. Salt pasta water generously.'
            },
            {
                name: 'Layering Flavors',
                description: 'Build flavor throughout cooking: aromatics first, spices bloomed in oil, fresh herbs at the end.'
            },
            {
                name: 'Acid Balance',
                description: 'Add brightness with lemon juice, vinegar, or wine. Balance richness and enhance other flavors.'
            },
            {
                name: 'Herb Usage',
                description: 'Hardy herbs (rosemary, thyme) go in early. Delicate herbs (basil, cilantro) added at the end.'
            },
            {
                name: 'Taste and Adjust',
                description: 'Always taste before serving. Adjust salt, acid, heat, or sweetness as needed.'
            }
        ],
        safety: [
            'Start with less seasoning - you can always add more',
            'Toast whole spices before grinding for better flavor',
            'Store spices in cool, dark places',
            'Replace ground spices every 1-2 years',
            'Taste with clean spoons to avoid contamination'
        ]
    },
    'prep-basics': {
        title: 'Meal Prep Basics',
        level: 'Beginner',
        intro: 'Efficient meal preparation saves time, money, and ensures you always have healthy options available.',
        techniques: [
            {
                name: 'Batch Cooking',
                description: 'Cook large quantities of grains, proteins, and roasted vegetables to use throughout the week.'
            },
            {
                name: 'Mise en Place',
                description: 'Prepare and organize all ingredients before cooking. Speeds up cooking and reduces stress.'
            },
            {
                name: 'Storage Strategies',
                description: 'Use proper containers, label with dates, and understand which foods store well together.'
            },
            {
                name: 'Component Cooking',
                description: 'Prepare versatile components that can be mixed and matched for different meals.'
            },
            {
                name: 'Smart Shopping',
                description: 'Plan meals around sales, buy seasonal produce, and prep immediately after shopping.'
            }
        ],
        safety: [
            'Cool cooked food quickly before refrigerating',
            'Use prepared food within 3-4 days',
            'Store raw and cooked foods separately',
            'Reheat only what you\'ll eat immediately',
            'Keep your workspace clean and organized'
        ]
    },
    'kitchen-safety': {
        title: 'Kitchen Safety',
        level: 'Essential',
        intro: 'Creating a safe kitchen environment prevents accidents and foodborne illness.',
        techniques: [
            {
                name: 'Fire Prevention',
                description: 'Keep pot handles turned in, clean grease buildup, never leave cooking unattended.'
            },
            {
                name: 'Knife Safety',
                description: 'Keep knives sharp, use proper cutting boards, never put knives in dishwater.'
            },
            {
                name: 'Cross-Contamination Prevention',
                description: 'Use separate cutting boards for raw meat and vegetables. Wash hands frequently.'
            },
            {
                name: 'Burn Prevention',
                description: 'Use dry towels for hot items, announce "hot behind" in shared kitchens, test food temperature.'
            },
            {
                name: 'First Aid Basics',
                description: 'Know how to treat minor cuts and burns. Keep a basic first aid kit in the kitchen.'
            }
        ],
        safety: [
            'Keep a fire extinguisher nearby',
            'Know how to turn off gas and electricity',
            'Never use water on a grease fire',
            'Keep emergency numbers handy',
            'Clean spills immediately to prevent slips'
        ]
    },
    'equipment-basics': {
        title: 'Equipment Basics',
        level: 'Beginner',
        intro: 'Understanding your tools helps you cook more efficiently and safely in any kitchen.',
        techniques: [
            {
                name: 'Essential Tools',
                description: 'Chef\'s knife, cutting board, wooden spoon, can opener, measuring cups, and a good pan.'
            },
            {
                name: 'Pan Selection',
                description: 'Non-stick for eggs, stainless steel for searing, cast iron for high heat and oven use.'
            },
            {
                name: 'Proper Care',
                description: 'Hand wash knives, season cast iron, avoid high heat with non-stick pans.'
            },
            {
                name: 'Improvisation',
                description: 'Use what you have: wine bottle as rolling pin, plate as cutting board cover.'
            },
            {
                name: 'Dorm-Friendly Options',
                description: 'Electric kettle, microwave-safe bowls, good knife, small cutting board, mini rice cooker.'
            }
        ],
        safety: [
            'Check electrical cords for damage',
            'Don\'t put metal in microwaves',
            'Use oven mitts, not dish towels',
            'Keep appliances away from water',
            'Unplug when not in use'
        ]
    },
    'pasta-grains': {
        title: 'Pasta & Grains',
        level: 'Beginner',
        intro: 'Master these staple foods that form the base of countless affordable, satisfying meals.',
        techniques: [
            {
                name: 'Perfect Pasta',
                description: 'Use plenty of salted water, stir occasionally, taste test before package time, save pasta water.'
            },
            {
                name: 'Absorption Method Rice',
                description: '1:2 ratio rice to water, bring to boil, reduce heat, cover, simmer 18 minutes, rest 5 minutes.'
            },
            {
                name: 'Quinoa Cooking',
                description: 'Rinse quinoa, use 1:2 ratio with liquid, simmer 15 minutes until liquid absorbed.'
            },
            {
                name: 'Pasta Water Magic',
                description: 'Starchy pasta water helps sauces cling to noodles and creates silky textures.'
            },
            {
                name: 'Grain Storage',
                description: 'Store cooked grains in refrigerator up to 5 days, freeze for longer storage.'
            }
        ],
        safety: [
            'Use large pot to prevent boiling over',
            'Add salt to water, not oil',
            'Don\'t rinse pasta unless making cold salad',
            'Cool grains quickly if storing',
            'Reheat thoroughly before eating'
        ]
    }
};

// Video data with example YouTube links
const videoData = {
    'basic-knife-skills': {
        title: 'Basic Knife Skills for Beginners',
        duration: '5:32',
        description: 'Learn proper knife grip, basic cuts, and safety techniques.',
        url: 'https://www.youtube.com/watch?v=JMA2SqaDgG8',
        embedUrl: 'https://www.youtube.com/embed/JMA2SqaDgG8'
    },
    'perfect-eggs': {
        title: 'How to Cook Perfect Eggs',
        duration: '3:45',
        description: 'Master scrambled, fried, and boiled eggs.',
        url: 'https://www.youtube.com/watch?v=PUP7U5vTMM0',
        embedUrl: 'https://www.youtube.com/embed/PUP7U5vTMM0'
    },
    'rice-pasta-basics': {
        title: 'Perfect Rice and Pasta Every Time',
        duration: '7:18',
        description: 'Foolproof methods for cooking grains.',
        url: 'https://www.youtube.com/watch?v=3pEIDRiL66o',
        embedUrl: 'https://www.youtube.com/embed/3pEIDRiL66o'
    },
    'seasoning-guide': {
        title: 'Seasoning and Spice Basics',
        duration: '6:12',
        description: 'Transform bland food with proper seasoning.',
        url: 'https://www.youtube.com/watch?v=bJUiWdM__Qw',
        embedUrl: 'https://www.youtube.com/embed/bJUiWdM__Qw'
    },
    'meal-prep-basics': {
        title: 'Meal Prep for Busy Students',
        duration: '8:34',
        description: 'Efficient meal preparation strategies.',
        url: 'https://www.youtube.com/watch?v=fij8xKRCiww',
        embedUrl: 'https://www.youtube.com/embed/fij8xKRCiww'
    },
    'kitchen-safety': {
        title: 'Essential Kitchen Safety',
        duration: '4:56',
        description: 'Prevent accidents and food poisoning.',
        url: 'https://www.youtube.com/watch?v=FgAd7l-kCPE',
        embedUrl: 'https://www.youtube.com/embed/FgAd7l-kCPE'
    }
};

// Open skill detail modal
function openSkillModal(skillId) {
    const skill = skillsData[skillId];
    if (!skill) {
        console.error('Skill not found:', skillId);
        return;
    }
    
    const modalHTML = `
        <div class="skill-modal-overlay" onclick="closeSkillModal()">
            <div class="skill-modal" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeSkillModal()">×</button>
                <div class="modal-content">
                    <div class="skill-modal-header">
                        <div class="skill-modal-title">
                            <h2>${skill.title}</h2>
                            <div class="skill-level-badge ${skill.level.toLowerCase()}">${skill.level}</div>
                        </div>
                    </div>
                    
                    <div class="skill-intro">
                        <p>${skill.intro}</p>
                    </div>
                    
                    <div class="skill-sections">
                        <div class="techniques-section">
                            <h3>Techniques</h3>
                            <div class="technique-list">
                                ${skill.techniques.map(technique => `
                                    <div class="technique-item">
                                        <h4>${technique.name}</h4>
                                        <p>${technique.description}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="safety-section">
                            <h3>Safety & Tips</h3>
                            <ul class="safety-list">
                                ${skill.safety.map(tip => `<li>${tip}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden';
}

// Close skill modal
function closeSkillModal() {
    const modal = document.querySelector('.skill-modal-overlay');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

// Open video modal with embedded YouTube player
function openVideoModal(videoId) {
    const video = videoData[videoId];
    if (!video) {
        console.error('Video not found:', videoId);
        return;
    }
    
    const modalHTML = `
        <div class="video-modal-overlay" onclick="closeVideoModal()">
            <div class="video-modal" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeVideoModal()">×</button>
                <div class="video-modal-content">
                    <div class="video-player-container">
                        <iframe 
                            src="${video.embedUrl}?autoplay=1" 
                            title="${video.title}"
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div class="video-info">
                        <h3>${video.title}</h3>
                        <p>${video.description}</p>
                        <div class="video-actions">
                            <a href="${video.url}" target="_blank" class="watch-on-youtube">Watch on YouTube</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden';
}

// Close video modal
function closeVideoModal() {
    const modal = document.querySelector('.video-modal-overlay');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

// Handle video thumbnail errors - create default graphic
function handleVideoThumbnailError(img, videoTitle) {
    img.style.display = 'none';
    const placeholder = document.createElement('div');
    placeholder.className = 'video-thumbnail-placeholder';
    placeholder.style.cssText = `
        width: 100%;
        height: 200px;
        background: linear-gradient(45deg, #e76f51, #f4a261);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        color: white;
        font-weight: bold;
    `;
    
    placeholder.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 10px;">VIDEO</div>
            <div style="font-size: 1.1rem;">${videoTitle}</div>
        </div>
    `;
    
    // Copy over the play button and duration if they exist
    const playButton = img.parentNode.querySelector('.play-button');
    const duration = img.parentNode.querySelector('.video-duration');
    
    img.parentNode.insertBefore(placeholder, img);
    
    // Re-append play button and duration to show on top of placeholder
    if (playButton) {
        img.parentNode.appendChild(playButton);
    }
    if (duration) {
        img.parentNode.appendChild(duration);
    }
}

// Make functions globally available
window.openSkillModal = openSkillModal;
window.closeSkillModal = closeSkillModal;
window.openVideoModal = openVideoModal;
window.closeVideoModal = closeVideoModal;
window.handleVideoThumbnailError = handleVideoThumbnailError;
// STORY SET SELECTION
// Change this to switch between story sets:
// 'set1' = Original 12 stories (more traditional, poetic)
// 'set2' = New 12 stories (more humor, rhymes, dual-level meaning)
// 'both' = All 24 stories combined
const ACTIVE_STORY_SET = 'both'; // Change this to 'set1', 'set2', or 'both'

// Stories database for Avi - SET 1 (Original)
const storiesSet1 = [
    {
        id: 1,
        pillar: "Love",
        icon: "💝",
        title: "The Moon and the Sun",
        text: `
            <p>High above the world, the Sun and the Moon loved each other deeply. But they had a problem, little Avi. They could never be together at the same time.</p>
            
            <p>When the Sun rose each morning, painting the sky in gold and orange, the Moon had to say goodbye and rest. And when the Moon came out to dance among the stars, the Sun had to slip below the horizon.</p>
            
            <p>"How can we show our love," asked the Moon, "when we can never be together?"</p>
            
            <p>The Sun thought and thought. "We may not share the same sky," she said, "but we can share the same world. Each day, I will warm the flowers you love. Each night, you can shine on the oceans I've kissed. We will love the same Earth, together."</p>
            
            <p>And so they did. The Sun warmed the day, and the Moon cooled the night. The Sun grew the forests, and the Moon called to the tides. They were always apart, but they were never alone.</p>
            
            <p>Because real love, dear Avi, doesn't need to be in the same place at the same time. Real love is choosing the same dreams, caring for the same world, and knowing in your heart that someone is always thinking of you—even across the sky.</p>
        `
    },
    {
        id: 2,
        pillar: "Resilience",
        icon: "🌱",
        title: "The Little Seed in the Stone",
        text: `
            <p>Once, a tiny seed fell between two great stones. It was dark there. Cold. The stones pressed close together, and there was barely any room to grow.</p>
            
            <p>"I'm stuck," said the seed. "I'll never become a tree."</p>
            
            <p>But deep inside that seed was something special—a tiny spark that wouldn't give up. So the seed did the only thing it could do. It reached. One small root, then another, searching for soil.</p>
            
            <p>Day after day, the roots pushed through tiny cracks. Week after week, a small green shoot pressed upward, searching for light. The stones didn't move. The way didn't get easier. But the seed kept reaching.</p>
            
            <p>Years passed. That little seed became a mighty tree, and do you know what happened to those stones? The tree's roots had grown so strong that they lifted the stones apart. Where there had been no way, the tree had made a way.</p>
            
            <p>People came from far away to see the tree growing from stone. "How did you do it?" they asked.</p>
            
            <p>The tree rustled its leaves and whispered: "I didn't move the stones all at once. I just grew a little bit each day. Even when it was hard. Even when I couldn't see the sun yet. I kept growing toward it."</p>
            
            <p>Remember this, Avi: You don't have to move mountains in a day. You just have to keep growing, even through the stones.</p>
        `
    },
    {
        id: 3,
        pillar: "Courage",
        icon: "🦁",
        title: "The Smallest Lion",
        text: `
            <p>In the great savanna lived the smallest lion cub anyone had ever seen. His name was Tau, which means "lion" in a language from far away.</p>
            
            <p>All the other cubs were bigger, faster, louder. When they practiced their roars, the ground shook. When Tau tried to roar, it came out as a squeak.</p>
            
            <p>"I'll never be brave like them," Tau thought sadly.</p>
            
            <p>One day, a terrible fire started in the dry grass. All the big lions roared warnings—so loud that the small animals froze in fear and couldn't move. The rabbits huddled together. The meerkats stood still. They were too frightened to run.</p>
            
            <p>But Tau's small voice could speak softly. He ran to the rabbits and whispered, "Follow me, I know a safe way." His voice didn't scare them. They listened. He led them to the river.</p>
            
            <p>Then he ran back for the meerkats, the birds, the mice. Trip after trip, while the other lions roared their big roars, little Tau used his small voice to guide everyone to safety.</p>
            
            <p>When the fire was out, the elder lion called everyone together. "Tau," she said, "you showed the truest courage today. The others showed strength—but you showed something greater. You helped those who needed you, even when you were afraid."</p>
            
            <p>Sweet Avi, courage isn't about being the biggest or the loudest. Courage is doing what needs to be done, even when your paws are shaking. Even when your roar is small. Especially then.</p>
        `
    },
    {
        id: 4,
        pillar: "Kindness",
        icon: "🌻",
        title: "The Rain That Learned to Dance",
        text: `
            <p>The Rain was very sad. Everywhere it went, people ran away. They closed their windows, grabbed their umbrellas, and hurried inside.</p>
            
            <p>"Everyone hates me," cried the Rain. "I just wanted to visit the earth."</p>
            
            <p>A wise old Cloud floated by and said, "Rain, you're thinking only about yourself. Look closer at where you fall."</p>
            
            <p>So the Rain looked. Really looked. And the Rain began to see things it had never noticed before.</p>
            
            <p>There was a garden where an old woman had been praying for her flowers. The Rain fell there first, gently, and watched her face light up with joy.</p>
            
            <p>There was a river that was running low, where fish were struggling. The Rain filled it back up, and the fish danced in the fresh water.</p>
            
            <p>There was a child with a new red umbrella who had been waiting all week to use it. The Rain fell softly, and the child splashed and laughed in every puddle.</p>
            
            <p>The Rain learned to listen—to fall hard where the earth was thirsty, to fall soft where umbrellas were new, to pause where picnics were spread, and to pour where gardens waited.</p>
            
            <p>"Now I understand," said the Rain. "Kindness isn't about me. It's about paying attention to what others need."</p>
            
            <p>And from that day on, the Rain didn't just fall. The Rain danced—sometimes gentle, sometimes strong, always exactly what the earth needed.</p>
            
            <p>Avi, my little one, this is kindness: noticing what others need and showing up for them, in exactly the way they need you to.</p>
        `
    },
    {
        id: 5,
        pillar: "Curiosity",
        icon: "🔭",
        title: "The Star Who Wanted to Know",
        text: `
            <p>In the velvet night sky lived a young star named Stella. While the other stars were content to simply shine, Stella always had questions.</p>
            
            <p>"Why do we twinkle?" she asked. "Where does the darkness go when we light up? What's beyond the edge of the sky?"</p>
            
            <p>The older stars sighed. "Just shine, Stella. That's what stars do."</p>
            
            <p>But Stella couldn't help it. She was curious about everything. She watched the Moon change shape and wondered why. She saw shooting stars and asked where they were going. She noticed that she shined brighter when she was part of a constellation and wondered about connection.</p>
            
            <p>One night, a small child looked up at the sky and pointed. "Mom, what are stars made of?"</p>
            
            <p>Stella listened carefully to the answer: "Stars are made of the same stuff as you—atoms that were born billions of years ago. We're all made of stardust."</p>
            
            <p>Stella shimmered with excitement. "Do you hear that?" she called to the other stars. "We're connected to everything! Every question I've asked, every answer I've searched for—it all matters! We're not just here to shine. We're here to remind them where they came from!"</p>
            
            <p>And from that night on, when children looked up and asked questions, Stella shined her brightest. Because she knew that questions aren't annoying—they're the beginning of understanding.</p>
            
            <p>Dear Avi, never stop asking why. Every question you ask makes the world a little brighter. Your curiosity is your superpower.</p>
        `
    },
    {
        id: 6,
        pillar: "Patience",
        icon: "🐢",
        title: "The River's Journey",
        text: `
            <p>High in the mountains, a young river was born from melting snow. It rushed down the mountainside, tumbling over rocks, racing as fast as it could go.</p>
            
            <p>"I want to reach the ocean NOW!" the river cried, pushing and crashing against everything in its way.</p>
            
            <p>An old stone in the riverbed spoke up. "Slow down, young river. You're missing everything."</p>
            
            <p>"I don't have time to slow down!" said the river. "The ocean is waiting!"</p>
            
            <p>But as the river rushed, it was too fast to carve beautiful canyons. Too quick to create peaceful pools where fish could live. Too hurried to reflect the sunset on its surface.</p>
            
            <p>Then one day, the river came to a huge, flat valley. No matter how much it rushed, it couldn't go faster here. It had to slow down and spread wide.</p>
            
            <p>At first, the river was frustrated. But then something magical happened. Slowing down, the river could finally see its reflection. Birds came to drink. Flowers grew along its banks. Children splashed in its shallows. The river created life everywhere it flowed.</p>
            
            <p>"The ocean will always be there," said the old stone, who had traveled with the river. "But this valley, these birds, these children—they're only here right now."</p>
            
            <p>The river understood. It still flowed toward the ocean, but it was no longer in a hurry. It knew that the journey was just as important as the destination.</p>
            
            <p>Little Avi, patience doesn't mean standing still. It means moving forward while noticing the beauty around you. The destination will come—but the journey is where life happens.</p>
        `
    },
    {
        id: 7,
        pillar: "Gratitude",
        icon: "🙏",
        title: "The Tree Who Counted Gifts",
        text: `
            <p>In the middle of a forest stood an old oak tree who had grown tired and bitter. "Nobody appreciates me," the tree grumbled. "I give and give, and what do I get? Nothing!"</p>
            
            <p>A tiny sparrow landed on a branch. "What do you give?" she asked.</p>
            
            <p>"Everything!" said the tree. "My shade, my branches, my acorns. And nobody even says thank you."</p>
            
            <p>The sparrow tilted her head. "Let's try something. Tomorrow, let's count what you receive instead of what you give."</p>
            
            <p>The next morning, the tree began to notice. The sun rose and gave the tree light for its leaves. "One gift," counted the tree.</p>
            
            <p>The rain fell and gave the tree water for its roots. "Two gifts."</p>
            
            <p>The wind blew and gave the tree a dance, making its branches sway. "Three gifts."</p>
            
            <p>The squirrels played in the tree's branches, making it laugh. "Four gifts."</p>
            
            <p>The children read books in the tree's shade, filling the air with stories. "Five gifts."</p>
            
            <p>By sunset, the tree had counted hundreds of gifts. The moon gave light. The stars gave company. The earth gave a place to stand. The seasons gave change and beauty.</p>
            
            <p>"I've been so busy thinking about what I give," whispered the tree, "that I forgot to notice everything given to me. I'm not tired. I'm abundant. I'm rich with gifts."</p>
            
            <p>From that day on, the tree began each morning by counting three gifts before the sun fully rose. And a grateful tree, it turns out, never feels tired at all.</p>
            
            <p>Avi, when life feels heavy, count your gifts. You'll find you're richer than you knew.</p>
        `
    },
    {
        id: 8,
        pillar: "Perseverance",
        icon: "⛰️",
        title: "The Mountain Climber's Secret",
        text: `
            <p>A young girl stood at the bottom of the tallest mountain in the world. She had dreamed of reaching the top her whole life.</p>
            
            <p>"It's impossible," said the people in the village. "Look how far away the peak is. Look how small you are."</p>
            
            <p>But the girl had a secret. She didn't look at the peak. She looked at the next step.</p>
            
            <p>"I can take one step," she said. So she did.</p>
            
            <p>Then she looked for the next step. "I can take one more step." And she did.</p>
            
            <p>Days passed. Weeks passed. The girl took one step, then another, then another. Some steps were easy. Some were so hard she had to rest before trying again. But she never looked at the distant peak and felt overwhelmed. She only looked at the next step.</p>
            
            <p>One morning, the girl took a step and realized there were no more steps to take. She had reached the top. She could see the whole world from up there.</p>
            
            <p>People gathered in amazement. "How did you do it?" they asked. "How did someone so small climb something so big?"</p>
            
            <p>The girl smiled. "I didn't climb the mountain," she said. "The mountain is still too big for me. I just took a lot of single steps. Anyone can take one step. The secret is taking the next one, and the next one, and the next one after that."</p>
            
            <p>"But what if you wanted to quit?" someone asked.</p>
            
            <p>"Oh, I wanted to quit a thousand times," the girl laughed. "But I never had to climb the whole mountain. I only ever had to take one more step. And I could always manage one more."</p>
            
            <p>Sweet Avi, when something feels too big, too hard, too far away—don't look at all of it. Just find the next step. Then take it. That's the secret to climbing mountains.</p>
        `
    },
    {
        id: 9,
        pillar: "Joy",
        icon: "🎨",
        title: "The Color Collector",
        text: `
            <p>There once was a woman who collected colors. Not paint or crayons—she collected moments of color and kept them in her heart.</p>
            
            <p>On Monday, she saw the orange of a monarch butterfly and tucked it away in her memory.</p>
            
            <p>On Tuesday, she noticed the blue of her daughter's eyes and saved it like a treasure.</p>
            
            <p>On Wednesday, she found the pink of a wild rose and pressed it into her heart.</p>
            
            <p>People thought she was strange. "Why do you stop and stare at ordinary things?" they asked as they rushed past.</p>
            
p>"Because they're not ordinary," she said. "They're miracles wearing everyday clothes."</p>
            
            <p>One day, a terrible storm came. It rained for weeks. Everything turned gray and cold. People became sad and heavy.</p>
            
            <p>But not the color collector. She closed her eyes and opened her heart, and all the colors she had saved came flooding back. The orange butterfly. The blue eyes. The pink rose. The yellow sunlight. The green leaves. The purple twilight.</p>
            
            <p>"How are you still happy?" people asked. "Everything is gray."</p>
            
            <p>"Not in here," she said, tapping her heart. "In here, I have a whole rainbow. I've been collecting it my whole life, one color at a time. The storm can take the sunshine from the sky, but it can't take the sunshine I've saved in my soul."</p>
            
            <p>She taught everyone her secret: Joy isn't something that happens to you. Joy is something you collect—moment by moment, color by color, smile by smile. When you save the good moments, they're yours forever.</p>
            
            <p>Dear Avi, start collecting colors today. Save them in your heart. On gray days, you'll have a rainbow waiting inside you.</p>
        `
    },
    {
        id: 10,
        pillar: "Wisdom",
        icon: "🦉",
        title: "The Owl's Three Questions",
        text: `
            <p>In the oldest tree in the forest lived the wisest owl anyone had ever known. Animals came from everywhere to ask the owl for advice.</p>
            
            <p>"How do I become wise like you?" asked a young fox.</p>
            
            <p>The owl blinked her great eyes slowly. "I will teach you, but it will take time. Are you ready?"</p>
            
            <p>The fox nodded eagerly.</p>
            
            <p>"Before you make any choice," said the owl, "you must ask yourself three questions. These questions have guided me through a very long life."</p>
            
            <p>"The first question is: Is it true? Many things sound true, but only some things are true. Before you believe something or repeat it, make sure it is actually true."</p>
            
            <p>"The second question is: Is it kind? Sometimes true things can be said in cruel ways. Before you speak, make sure your truth is wrapped in kindness."</p>
            
            <p>"The third question is: Is it necessary? Many true and kind things still don't need to be said. Before you speak, ask if your words will help or just add noise to the world."</p>
            
            <p>The fox thought about this. "That seems simple."</p>
            
            <p>"Simple to understand," agreed the owl. "Very difficult to practice. I have lived for fifty years, and I still catch myself forgetting to ask these questions. But every time I remember to ask them, I make better choices."</p>
            
            <p>The fox went home and tried to use the three questions. It was harder than she thought! But slowly, she noticed she made fewer mistakes. She hurt fewer feelings. She solved more problems.</p>
            
            <p>Years later, animals started calling the fox wise too. And when they asked her secret, she smiled and said, "Three questions. That's all. Just three questions, asked over and over again, for your whole life."</p>
            
            <p>Avi, wisdom isn't about knowing everything. It's about asking the right questions: Is it true? Is it kind? Is it necessary? Ask these, and you'll always find your way.</p>
        `
    },
    {
        id: 11,
        pillar: "Hope",
        icon: "🌅",
        title: "The Dawn That Never Failed",
        text: `
            <p>Long ago, there was a village that forgot how to hope. They had been through so many hard times—storms and droughts and difficulties—that they stopped believing good things could happen.</p>
            
            <p>"What's the point of trying?" they said. "Things will probably just go wrong anyway."</p>
            
            <p>In this village lived a small girl who woke up every morning before anyone else. While it was still dark, she would climb to the top of the highest hill and wait.</p>
            
            <p>And every morning, without fail, the sun rose.</p>
            
            <p>One day, a woman from the village followed her. "What are you doing up here in the dark?" she asked.</p>
            
            <p>"Waiting for the sunrise," said the girl.</p>
            
            <p>"But it comes every day," said the woman. "Why wait for something that's guaranteed?"</p>
            
            <p>The girl smiled. "That's exactly why! The sun has risen every single day of my life. Through every storm, every difficulty, every dark night—the sun has never forgotten to come back. If the sun can keep showing up, day after day, no matter what—then so can I."</p>
            
            <p>The woman sat down beside her, and together they watched the sky grow light. First gray, then pink, then gold. And when the sun finally broke over the horizon, the woman felt something she hadn't felt in years.</p>
            
            <p>Hope.</p>
            
            <p>She brought others to watch the sunrise. They brought others. Soon, the whole village would gather on the hill each morning, reminding themselves: The dawn has never failed. Not once. Not ever.</p>
            
            <p>"No matter how dark it gets," the girl would say, "morning is already on its way. You just have to hold on until it arrives."</p>
            
            <p>My precious Avi, hope is not foolish. Hope is brave. It's trusting that light will come again, even when you're sitting in darkness. And it always does. It always has. The dawn has never failed.</p>
        `
    },
    {
        id: 12,
        pillar: "Belonging",
        icon: "🏡",
        title: "The Puzzle Piece's Journey",
        text: `
            <p>Once there was a puzzle piece who felt very alone. It was oddly shaped, with bumps and curves that didn't seem to make sense.</p>
            
            <p>"I don't fit anywhere," the piece said sadly. "I'm too different. I'll never belong."</p>
            
            <p>The puzzle piece tried forcing itself into spaces that looked almost right. It would squeeze and push, trying to change its shape. But it never quite fit, and it was exhausting trying to be something it wasn't.</p>
            
            <p>Then one day, the puzzle piece stopped trying to fit into spaces that were wrong. Instead, it just rested and looked at itself honestly. "These are my edges," it said. "These bumps and curves are part of who I am."</p>
            
            <p>And then something wonderful happened. Another puzzle piece came along—one with the opposite curves, the matching bumps, the perfect spaces.</p>
            
            <p>"I've been looking everywhere for you!" said the other piece.</p>
            
            <p>They fit together perfectly. Click!</p>
            
            <p>Soon, more pieces came. One by one, they found each other. Each piece was different—different colors, different shapes, different edges. But together, they made something beautiful. A picture that couldn't exist without every single one of them.</p>
            
            <p>"I thought being different meant I didn't belong," said the first puzzle piece.</p>
            
            <p>"Being different is exactly why you belong," said all the others. "We don't need another piece like us. We need you, exactly as you are. Your unique shape is what makes the picture complete."</p>
            
            <p>The puzzle piece learned that belonging doesn't mean being the same. Belonging means finding the people who appreciate your unique edges, who fit with you exactly as you are.</p>
            
            <p>Sweet Avi, you will always belong. Not because you're the same as everyone else, but because you're you. Your unique shape is exactly what the world needs. Somewhere, your people are looking for you too.</p>
        `
    }
];
// NEW STORY SET - Stories with humor, rhymes, and dual-level meaning for baby AND parents
const storiesSet2 = [
    {
        id: 13,
        pillar: "Love",
        icon: "🦦",
        title: "The Otter Who Held Hands",
        text: `
            <p>In the cold ocean lived two otters named Opal and Otto. They did everything together—diving for clams, floating on their backs, playing in the kelp forest.</p>
            
            <p>But there was one thing they did that made all the other animals smile: whenever they slept, they held hands.</p>
            
            <p>"Why do you hold hands?" asked a passing whale. "Aren't you worried you'll drift apart in your sleep?"</p>
            
            <p>"That's exactly why we hold hands," said Opal.</p>
            
            <p>Otto nodded. "The current is strong. The ocean is big. If we don't hold on to each other, we might wake up far apart. And I'd rather wake up together than wake up alone."</p>
            
            <p>The whale thought about this. "But what if one of you wants to swim away in the night?"</p>
            
            <p>The otters looked at each other and laughed. "Then we'd let go!" said Otto. "We hold hands because we WANT to stay together, not because we HAVE to. That's what makes it love."</p>
            
            <p>Years passed. Opal and Otto grew old together, their paws wrinkled and their whiskers gray. Other otters would see them floating, paws clasped, and ask: "Doesn't your paw get tired?"</p>
            
            <p>"Oh yes," said Opal, squeezing Otto's paw. "But my heart would be more tired without it."</p>
            
            <p><em>Here's what your parents know, little Avi: Love isn't about never letting go. It's about choosing to hold on, every single night, even when the current is strong. Even when your paw gets tired. Especially then.</em></p>
            
            <p>And so the otters held hands as they floated, and the ocean rocked them gently, and they dreamed of tomorrow—together, always together, by choice.</p>
        `
    },
    {
        id: 14,
        pillar: "Resilience",
        icon: "🥚",
        title: "The Egg That Wouldn't Crack",
        text: `
            <p>Once there was an egg named Edgar. He lived in a warm nest with his three brothers and sisters, and every day, the mother bird would sing: <em>"Crack crack crack, little ones! Time to hatch! The world is waiting!"</em></p>
            
            <p>One by one, Edgar's siblings cracked their shells—<em>tap tap TAP!</em>—and tumbled out, all fluffy and cheeping.</p>
            
            <p>But Edgar stayed inside his shell.</p>
            
            <p>"Come on, Edgar!" chirped his sister. "It's beautiful out here!"</p>
            
            <p>"I'm... I'm trying," said Edgar from inside. "But my shell is so thick. And I'm so tired. And what if I'm not ready?"</p>
            
            <p>His mother nestled close. "Oh, my little egg. You don't crack your shell all at once. You make one tiny crack. Then you rest. Then another tiny crack. Then you rest again."</p>
            
            <p>"But what if I never get out?" Edgar worried.</p>
            
            <p>"You will," said his mother. "Because inside that egg is a bird who wants to fly. And that bird? That's you. You're already everything you need to be—you just have to break through to meet yourself."</p>
            
            <p>So Edgar made one small crack. Just one. <em>Tap.</em> Then he rested.</p>
            
            <p>The next day, another crack. <em>Tap.</em> Then he rested.</p>
            
            <p>On the third day—<em>TAP TAP CRACK!</em>—his beak poked through! He could see sky!</p>
            
            <p>On the fourth day, one wing pushed out. On the fifth, the other wing. And on the sixth day, Edgar tumbled into the nest, exhausted, messy, absolutely beautiful.</p>
            
            <p>"You did it!" cheered his siblings.</p>
            
            <p>"I did," said Edgar, breathing hard. "But wow. That was the hardest thing I've ever done."</p>
            
            <p>His mother smiled. "And now you know something important: The struggle to break through? That's what made your wings strong enough to fly."</p>
            
            <p><em>Your parents know this, Avi: Sometimes the hardest part isn't the breaking—it's the resting between the breaks. It's okay to take your time. The shell will crack when you're ready. And when it does, you'll have wings.</em></p>
        `
    },
    {
        id: 15,
        pillar: "Courage",
        icon: "🐛",
        title: "The Very Brave Caterpillar",
        text: `
            <p>There once was a caterpillar named Carl who was afraid of everything. Afraid of birds. Afraid of storms. Afraid of the dark. Afraid of leaves that looked at him funny.</p>
            
            <p>"Carl," said his friend Cassie, "you're going to turn into a butterfly soon. Aren't you excited?"</p>
            
            <p>"EXCITED?!" Carl trembled. "I'm terrified! What if I get stuck in the cocoon? What if my wings don't work? What if I forget how to be me?"</p>
            
            <p>An old butterfly landed nearby. "Oh, you WILL forget how to be you," she said cheerfully.</p>
            
            <p>Carl gasped. "WHAT?!"</p>
            
            <p>"Inside the cocoon," the butterfly continued, "you'll literally dissolve. You'll become goo. Complete mush. Everything you are will fall apart."</p>
            
            <p>Carl started hyperventilating. "This is TERRIBLE NEWS!"</p>
            
            <p>"But here's the thing," the butterfly said gently. "That goo? It remembers. Somewhere in that mush is every leaf you ate, every friend you made, every fear you faced. And it uses all of that to build something new. Something that can FLY."</p>
            
            <p>"But I won't be Carl anymore," he said sadly.</p>
            
            <p>"You'll be MORE than Carl," she said. "You'll be what Carl was always becoming."</p>
            
            <p>Still, when the time came, Carl was scared. He spun his cocoon slowly, crying a little.</p>
            
            <p>"Cassie?" he called out. "I'm scared."</p>
            
            <p>"I know," Cassie called back. "But Carl? Being scared and doing it anyway? THAT'S courage."</p>
            
            <p>Inside the cocoon, Carl did indeed dissolve. And it was strange. And lonely. And weird. But then—cell by cell—he began to remember himself. To rebuild himself. To become.</p>
            
            <p>When he emerged, his wings wet and crumpled, Cassie gasped. "Carl! You're BEAUTIFUL!"</p>
            
            <p>Carl looked at his wings. "I'm... different. But also... still me?"</p>
            
            <p>"You're you," Cassie said. "Just you with wings now."</p>
            
            <p><em>Mom and Dad know this one hurts, Avi: Change means letting go of who you were to become who you're meant to be. And yes, it's terrifying. Yes, you'll dissolve a little. But you'll also fly.</em></p>
            
            <p>And Carl flew. Scared at first, then braver. And he never stopped being afraid of everything. But he flew anyway. That's what brave caterpillars do.</p>
        `
    },
    {
        id: 16,
        pillar: "Kindness",
        icon: "🦔",
        title: "The Hedgehog's Hug",
        text: `
            <p>Harriet the hedgehog had a problem: she was covered in spikes.</p>
            
            <p>Every time she tried to hug someone, they said "OW!" and jumped away. The rabbits avoided her. The squirrels kept their distance. Even her own family hugged very, very carefully.</p>
            
            <p>"I just want to hug someone without hurting them," Harriet cried to the old owl.</p>
            
            <p>The owl blinked wisely. "Have you tried taking your spikes off?"</p>
            
            <p>"I CAN'T take them off!" said Harriet. "They're part of me! They protect me!"</p>
            
            <p>"Exactly," said the owl. "So maybe the question isn't 'How do I stop having spikes?' Maybe it's 'Who's willing to be careful around them?'"</p>
            
            <p>This made Harriet sad. She curled into a ball—which made her even spikier—and rolled away.</p>
            
            <p>Later, she found a tortoise named Terry crying by a stream.</p>
            
            <p>"What's wrong?" asked Harriet.</p>
            
            <p>"I'm stuck on my back!" Terry wailed. "And everyone who tries to flip me over gets tired. I'm too heavy. Too hard to help."</p>
            
            <p>Harriet looked at her spikes. Then at Terry. Then she had an idea.</p>
            
            <p>She carefully positioned her spikes under Terry's shell and HEAVED. The spikes gave her leverage! Terry flipped right over!</p>
            
            <p>"You did it!" Terry gasped. "But... weren't you afraid your spikes would hurt me?"</p>
            
            <p>"I was careful," Harriet said. "I can't take my spikes off. But I can choose where I point them."</p>
            
            <p>Terry smiled. "Can I... can I try to hug you?"</p>
            
            <p>"I'm very spiky," Harriet warned.</p>
            
            <p>"I'm very shelled," Terry said. "We might be perfect for each other."</p>
            
            <p>And you know what? They were. Terry's shell protected him from Harriet's spikes. And Harriet's spikes protected Terry from predators. They became best friends.</p>
            
            <p>One day, Harriet asked: "Do you ever wish I wasn't spiky?"</p>
            
            <p>"Never," said Terry. "Your spikes make you YOU. And you're the kindest person I know—not despite your spikes, but including them."</p>
            
            <p><em>Here's the grown-up part, little one: Real kindness isn't making yourself smaller so you don't hurt anyone. It's being fully yourself while being careful with others. Some people will get close. Some won't. That's okay. The right people—the Terry people—will love you, spikes and all.</em></p>
        `
    },
    {
        id: 17,
        pillar: "Curiosity",
        icon: "🐙",
        title: "The Octopus Who Asked Why",
        text: `
            <p>Oliver the octopus had eight arms and eight billion questions.</p>
            
            <p><em>"Why is water wet? Why do fish swim in schools—do they take tests? Why is my blood blue? Why do I have three hearts? WHY DO I HAVE THREE HEARTS?!"</em></p>
            
            <p>The other sea creatures got annoyed. "Oliver, PLEASE. Can you just BE for five minutes without asking WHY?"</p>
            
            <p>But Oliver couldn't help it. Everything was interesting! Everything led to another question!</p>
            
            <p>One day, he asked an old sea turtle: "Why do you swim so slowly?"</p>
            
            <p>"Because I've learned," said the turtle, "that the ocean rewards the curious more than the fast."</p>
            
            <p>"What do you mean?"</p>
            
            <p>The turtle smiled. "Swim with me. But this time, don't ask questions with your mouth. Ask them with your eyes."</p>
            
            <p>So Oliver swam slowly, really LOOKING. He saw things he'd swum past a thousand times but never noticed: Tiny shrimp doing backflips. Coral breathing. Light bending through water in impossible colors.</p>
            
            <p>"I've been swimming too fast," Oliver whispered.</p>
            
            <p>"Most creatures do," said the turtle. "They're so busy going somewhere that they forget to notice HERE."</p>
            
            <p>Oliver spent the whole day asking questions with his eyes instead of his mouth. He found seventeen new creatures he'd never seen before. He discovered that if you watch a clam long enough, it gets embarrassed and closes. He learned that seahorses hold tails when they're in love—just like otters hold hands!</p>
            
            <p>That night, his friends asked: "Oliver, you were quiet today. Are you okay?"</p>
            
            <p>"I'm GREAT!" said Oliver. "I just learned that there are two kinds of curiosity: the kind that asks questions, and the kind that LISTENS to answers. I've been doing a lot of asking. I think I need to do more listening."</p>
            
            <p>But then he immediately added: "Although I DO have a new question—"</p>
            
            <p>Everyone groaned.</p>
            
            <p>"—why do questions make people groan? Is it the frequency? The interruption? The reminder that they don't know everything? I HAVE SO MANY FOLLOW-UP QUESTIONS."</p>
            
            <p><em>Your parents are laughing because they GET it, Avi: Curiosity is beautiful, but it can also be exhausting. The trick is learning when to ask out loud and when to ask quietly. When to wonder with words and when to wonder with your heart. Both kinds of curiosity matter. And yes, you'll probably ask "why" seven thousand times a day. And yes, we'll pretend to be annoyed. But secretly? We'll love every single question. Even at 3 AM. Even "why is the sky blue" for the fourteenth time. Every. Single. One.</em></p>
        `
    },
    {
        id: 18,
        pillar: "Patience",
        icon: "🌰",
        title: "The Acorn's Long Game",
        text: `
            <p>An acorn fell from a great oak tree and landed—<em>plop!</em>—in the dirt.</p>
            
            <p>"HELLO WORLD!" the acorn shouted. "I'm going to be a MIGHTY OAK TREE! When do I start?"</p>
            
            <p>The old tree above chuckled. "Oh, you've already started."</p>
            
            <p>"But I'm still just an acorn! When do I get big?"</p>
            
            <p>"In about 20 years, you'll be a young tree. In 50 years, you'll be respectable. In 100 years, you'll be getting interesting. In 300 years, you might be magnificent."</p>
            
            <p>The acorn was horrified. "THREE HUNDRED YEARS?! That's forever! What am I supposed to DO for 300 years?"</p>
            
            <p>"Grow," said the tree.</p>
            
            <p>"That's IT?!"</p>
            
            <p>"That's everything."</p>
            
            <p>The acorn was furious. A nearby mushroom sprouted overnight and was already full-grown. "SEE?!" said the acorn. "Mushroom did it in ONE DAY!"</p>
            
            <p>"Sure," said the old tree. "And they'll be gone by next week. You're not playing the mushroom game. You're playing the tree game. Different timeline. Different rules. Different rewards."</p>
            
            <p>Years passed. The acorn became a seedling—barely a foot tall. A rabbit hopped by and laughed. "Still tiny, huh?"</p>
            
            <p>The seedling sighed. "Yeah. Still tiny."</p>
            
            <p>More years. The seedling became a sapling. Birds nested in nearby bushes but not in the sapling. "Too small," they said.</p>
            
            <p>Decades passed. The sapling became a young tree. Still not impressive. Still not mighty. Just... growing.</p>
            
            <p>And then one day—it must have been year 47 or 48—something shifted. The tree realized it was taller than the bushes. Stronger than the saplings. Its roots reached DEEP. Its branches spread WIDE.</p>
            
            <p>More time passed. 100 years. 200 years. And finally, after 300 years, a young acorn fell at its base.</p>
            
            <p>"HELLO!" shouted the acorn. "When do I get big?"</p>
            
            <p>The now-ancient tree smiled. "Oh, you've already started. But here's the secret: You don't GET big. You BECOME big. One day, one season, one year at a time. And it's slow. Painfully slow. Slower than you want. Slower than everyone else. But baby acorn? When you're ready—when you've done the work—people will rest in your shade for another 300 years. That's the tree game. Long, slow, and magnificent."</p>
            
            <p><em>Mom and Dad are crying now, Avi, because they needed this story too: In a world of overnight success and instant results, we're trying to grow you slowly. Deeply. With strong roots. And it's HARD to be patient. Hard to trust that slow growth is still growth. But we're not raising a mushroom. We're growing an oak. And oaks take time.</em></p>
        `
    },
    {
        id: 19,
        pillar: "Gratitude",
        icon: "🦆",
        title: "The Duck Who Forgot to Complain",
        text: `
            <p>Daphne the duck complained about EVERYTHING.</p>
            
            <p><em>"This pond is too cold. No, wait, too warm. These fish are too fishy. Why is the sky so sky-like? And don't even get me started on wet feathers. I'm a DUCK and I hate wet feathers!"</em></p>
            
            <p>One day, a wizard frog hopped by. (Yes, a wizard frog. They exist. Keep up.)</p>
            
            <p>"You complain a lot," said the wizard frog.</p>
            
            <p>"Well EXCUSE ME for having STANDARDS," huffed Daphne.</p>
            
            <p>"I'll make you a deal," said the frog. "For one day—just one day—you can't complain. Instead, every time you want to complain, you have to say one thing you're grateful for."</p>
            
            <p>"That sounds HORRIBLE. I hate it already."</p>
            
            <p>"Perfect!" The frog waved his wand. "The spell is cast. See you tomorrow!"</p>
            
            <p>Daphne woke up cold. She opened her mouth to complain but the spell caught her tongue. Instead, she heard herself say: "I'm... grateful... for... feathers? I guess? Because I'd be colder without them?"</p>
            
            <p>She tried to complain about breakfast. Nope. "I'm grateful this pond HAS fish, even if they're too fishy."</p>
            
            <p>She tried to complain about the rain. "I'm grateful my feathers are waterproof... which I literally JUST COMPLAINED ABOUT THIS MORNING. This is confusing."</p>
            
            <p>By afternoon, something weird was happening. She started noticing things:</p>
            
            <p>The way sunlight hit the water. <em>(Grateful for light.)</em><br>
            Her friend Dennis who always listened to her complain. <em>(Grateful for Dennis... I guess.)</em><br>
            The fact that she could FLY. <em>(Okay, fine, flying is pretty cool.)</em></p>
            
            <p>By evening, she couldn't WAIT to find things to be grateful for. It became a game!</p>
            
            <p>The next morning, the wizard frog returned. "Spell's broken. You can complain again!"</p>
            
            <p>Daphne thought about it. "Can I... keep doing the gratitude thing? I think I liked it better."</p>
            
            <p>"Really?" The frog was shocked.</p>
            
            <p>"Yeah. Complaining made everything feel heavy. Gratitude made everything feel lighter. I'm still going to complain SOMETIMES—"</p>
            
            <p>"Of course."</p>
            
            <p>"—but now I know complaining is a CHOICE. And gratitude is also a choice. And one of those choices made me happier."</p>
            
            <p>The wizard frog smiled. "That's the secret they don't tell you: Gratitude doesn't change what you HAVE. It changes what you SEE."</p>
            
            <p><em>Your parents laugh because we're ALL Daphne sometimes, Avi. We complain about the water temperature, the wet feathers, the fishy fish. And then we remember: We HAVE water. We HAVE feathers. We HAVE fish. We HAVE you. And suddenly everything gets lighter.</em></p>
            
            <p>And Daphne? She still complained. But she also said "thank you" a LOT more. And that made all the difference.</p>
        `
    },
    {
        id: 20,
        pillar: "Perseverance",
        icon: "🐢",
        title: "The Turtle's Terrible, Horrible, No Good Race",
        text: `
            <p>Everyone knows the story about the turtle who beat the rabbit in a race. But what they DON'T tell you is what happened the next day.</p>
            
            <p>The turtle (his name was Trevor) woke up EXHAUSTED. "I'm never racing again," he groaned. "That was the hardest thing I've ever done."</p>
            
            <p>But then a poster appeared: SECOND ANNUAL RACE - TOMORROW!</p>
            
            <p>"Oh no," said Trevor.</p>
            
            <p>All the animals gathered. "You gonna win again?" they asked.</p>
            
            <p>"Probably not," Trevor said honestly. "Yesterday I got LUCKY. The rabbit took a nap. Today he'll probably actually TRY."</p>
            
            <p>"So why race at all?" asked a chipmunk.</p>
            
            <p>Trevor thought about this. "Because... last time, I learned something. I learned I could do hard things. Even when I'm slow. Even when everyone's watching. And I think I need to learn if I can do it AGAIN. When it's harder. When luck isn't helping."</p>
            
            <p>The race started. The rabbit ZOOMED ahead. Trevor plodded along at his usual turtle pace.</p>
            
            <p>But this time? The rabbit didn't nap. The rabbit RAN THE WHOLE WAY.</p>
            
            <p>Trevor lost. By a LOT.</p>
            
            <p>Everyone felt bad for him. "It's okay, Trevor," they said. "You tried."</p>
            
            <p>But Trevor was SMILING.</p>
            
            <p>"Why are you happy?" asked the rabbit, confused. "You lost."</p>
            
            <p>"Yeah," said Trevor. "But here's the thing: Yesterday, I won because you made a mistake. Today, you ran your best race and I STILL finished. I didn't quit. I didn't hide. I kept going even when I knew I'd lose. And that? That's harder than winning."</p>
            
            <p>The rabbit sat down next to Trevor, exhausted. "You know what? You're right. It's easy to run when you think you'll win. It's hard to keep running when you know you won't."</p>
            
            <p>"Exactly!" said Trevor. "So I'm actually PROUDER of today than yesterday. Because yesterday tested my speed. Today tested my character."</p>
            
            <p>From then on, Trevor raced every year. He never won again. And he didn't care.</p>
            
            <p>Because he'd learned the secret: Perseverance isn't about winning. It's about showing up when it's hard. Continuing when it's easier to quit. Finishing even when no one's watching.</p>
            
            <p><em>Here's what keeps your parents going, Avi: We'll have hard days. Days where we feel slow. Days where we "lose." Days where everyone else seems to have it figured out. But we'll keep showing up. For you. For each other. For ourselves. Not because we'll always win. But because showing up—especially when it's hard—is how you build a life worth living.</em></p>
            
            <p>And Trevor? He's still racing. Dead last, every single time. Smiling the whole way.</p>
        `
    },
    {
        id: 21,
        pillar: "Joy",
        icon: "🦘",
        title: "The Kangaroo's Bounce",
        text: `
            <p>Kelly the kangaroo had a problem: she couldn't stop bouncing.</p>
            
            <p><em>Boing! Boing! BOING!</em></p>
            
            <p>"Kelly," said her mother, "you need to calm down."</p>
            
            <p><em>BOING!</em> "But I'm HAPPY!" <em>BOING!</em></p>
            
            <p>"Yes, but you're bouncing on everyone's nerves."</p>
            
            <p>The problem was: Kelly found joy in EVERYTHING. A good stick? <em>BOING!</em> A pretty cloud? <em>BOING!</em> The fact that grass exists? <em>BOING BOING BOING!</em></p>
            
            <p>The other animals held a meeting. "Kelly's joy is EXHAUSTING," they said. "Can someone teach her to be more... moderate?"</p>
            
            <p>A very serious koala volunteered. "I will show her how to be calm."</p>
            
            <p>The koala took Kelly to his eucalyptus tree. "Lesson one," he said slowly, "is to sit very still and think serious thoughts."</p>
            
            <p>Kelly tried. She really did. But then a butterfly flew by and she BOUNCED after it.</p>
            
            <p>"Kelly!" the koala sighed. "You're supposed to be CALM!"</p>
            
            <p>"But I SAW A BUTTERFLY!" Kelly squealed. "It was ORANGE! And it FLEW! How is that not amazing?!"</p>
            
            <p>The koala realized this wasn't working. "Maybe you're just built differently."</p>
            
            <p>"What do you mean?"</p>
            
            <p>"Well," said the koala, "I'm built for calm. You're built for bounce. Neither is better. They're just different. And the world needs both."</p>
            
            <p>"Really?" Kelly stopped bouncing (for a second). "You're not annoyed by me?"</p>
            
            <p>"Honestly? Sometimes, yes. Your energy is A LOT." The koala smiled. "But you know what? Yesterday I saw you bouncing in the rain, and you were SO happy that it made ME smile. I hadn't smiled in months. Your joy is contagious. And sometimes—not always, but sometimes—contagious joy is exactly what the world needs."</p>
            
            <p>Kelly thought about this. "So I don't have to stop bouncing?"</p>
            
            <p>"Nope. But maybe learn to bounce with awareness. Notice when others need quiet. Notice when they need your bounce. Joy is a gift—but like all gifts, timing matters."</p>
            
            <p>From then on, Kelly still bounced. But she learned to bounce THOUGHTFULLY. Morning bounce? Full volume! Late night bounce? Quieter. Friend having a bad day? BRING THE BOUNCE. Friend needing silence? Sit still (while bouncing INTERNALLY).</p>
            
            <p><em>Mom and Dad are smiling because they hope you're Kelly, Avi. We hope you find joy in everything—butterflies and grass and the fact that oxygen exists. But we also hope you learn what Kelly learned: Joy isn't about being happy ALL the time. It's about noticing the things worth bouncing about. And there are SO MANY things worth bouncing about.</em></p>
            
            <p>And Kelly? She's still bouncing. Sometimes too much. Sometimes just right. But always, always authentic. <em>BOING!</em></p>
        `
    },
    {
        id: 22,
        pillar: "Wisdom",
        icon: "🦫",
        title: "The Beaver's Dam Good Advice",
        text: `
            <p>Bernie the beaver was the best dam builder in the forest. (Get it? Dam? Hehe.)</p>
            
            <p>But Bernie had a secret: he'd failed at dam-building seventeen times before he got good at it.</p>
            
            <p>One day, a young beaver named Betty asked: "Bernie, how do you build such perfect dams?"</p>
            
            <p>"Oh, mine aren't perfect," Bernie laughed. "See that stick there? It's in the wrong place. That mud patch? Too thin. That rock? Completely unnecessary but I like how it looks."</p>
            
            <p>"But your dams WORK!" said Betty. "Mine keep falling apart!"</p>
            
            <p>"How many have you built?"</p>
            
            <p>"Three."</p>
            
            <p>"Ah," said Bernie. "There's your first problem. You've only built three terrible dams. I've built seventeen terrible dams. I'm way ahead of you in the terrible-dam department."</p>
            
            <p>Betty was confused. "But... shouldn't I be trying to build GOOD dams?"</p>
            
            <p>"Nope!" Bernie grinned. "You should be trying to build MORE dams. Good dams come from building lots of bad dams. Wisdom comes from collecting mistakes like river stones."</p>
            
            <p>"That doesn't make sense."</p>
            
            <p>"Okay, watch." Bernie started building a dam in front of Betty. He placed a stick. The current knocked it away. "Mistake one: Wrong angle. Now I know." He tried again with a different angle. Better! He added mud. Too thin—it washed away. "Mistake two: Wrong mud ratio. Now I know."</p>
            
            <p>Betty watched Bernie make mistake after mistake, each one teaching him something new, until finally the dam held.</p>
            
            <p>"See?" said Bernie. "Every mistake is information. The goal isn't to avoid mistakes. The goal is to make NEW mistakes instead of the SAME mistakes."</p>
            
            <p>"So wisdom is just... fancy mistake collection?"</p>
            
            <p>"Exactly! And here's the secret nobody tells you: The beavers who look wise? We just made our mistakes earlier. You're making your mistakes NOW, which means in 10 years, YOU'LL be the wise one teaching some young beaver about your seventeen terrible dams."</p>
            
            <p>Betty built another dam. It fell apart. But this time, she smiled. "Mistake four! I'm building my wisdom!"</p>
            
            <p>Years later, Betty became known as the wisest beaver in the forest. Young beavers would ask: "How do you know so much?"</p>
            
            <p>And Betty would say: "Oh, I don't know MUCH. I just know what doesn't work. I've failed at building dams forty-three different ways. That's not wisdom—that's just a really good mistake collection."</p>
            
            <p><em>Your parents want you to hear this, Avi: We're going to let you fail. A lot. Not because we don't love you, but because we do. Because wisdom comes from falling down and getting back up. From building terrible dams and learning why they fell. From making mistakes and collecting them like treasures. The goal isn't to raise a child who never messes up. It's to raise an adult who knows how to learn from mess-ups. That's wisdom.</em></p>
        `
    },
    {
        id: 23,
        pillar: "Hope",
        icon: "🐛",
        title: "The Firefly Who Lost Her Light",
        text: `
            <p>Fiona the firefly woke up one morning and her light was gone.</p>
            
            <p>She tried everything: Deep breaths. Positive thinking. Standing on one leg. Nothing worked. Her tail stayed dark.</p>
            
            <p>"This is it," she said dramatically. "I'm broken forever. I'll never glow again. I might as well be a regular fly."</p>
            
            <p>"Oh, stop being dramatic," said her grandmother, who'd lived through 87 summers and had seen EVERYTHING.</p>
            
            <p>"But Grandma! What if it never comes back?"</p>
            
            <p>"Then you'll live in the dark for a while," Grandma said simply. "And then one day, when you're not paying attention, it'll flicker back."</p>
            
            <p>"But how do you KNOW?"</p>
            
            <p>"Because I've lost my light seven times. Once for a whole month. And every single time, I thought 'THIS time it's gone forever.' And every single time, I was wrong."</p>
            
            <p>Fiona didn't believe her. Days passed. Her light stayed dark. Other fireflies would light up the night, and Fiona would sit in the shadows, feeling sorry for herself.</p>
            
            <p>Until one night, a young firefly named Fred couldn't find his way home. He was crying in the dark.</p>
            
            <p>Fiona sighed. "I can't help. My light's out."</p>
            
            <p>"I don't need your light," Fred sniffled. "I just need someone to sit with me in the dark until morning."</p>
            
            <p>So Fiona sat with Fred. They talked about being scared. About feeling broken. About worrying the darkness would last forever.</p>
            
            <p>"But it won't," said Fiona, surprising herself. "It never does. Darkness is just light taking a break."</p>
            
            <p>"How do you know?"</p>
            
            <p>"Because dawn always comes. Every single morning, for billions of years, the sun has come back. Not because it HAS to. But because that's what light DOES. It comes back."</p>
            
            <p>And as Fiona said those words—about light always returning—her tail gave a tiny flicker.</p>
            
            <p>Then another.</p>
            
            <p>Then a glow.</p>
            
            <p>"YOUR LIGHT!" Fred gasped. "It's back!"</p>
            
            <p>Fiona looked at her glowing tail, tears in her eyes. "It came back when I stopped waiting for it. When I was just... helping you."</p>
            
            <p>Grandma flew over. "That's the secret of hope, little ones. It's not about believing your light will come back. It's about being kind in the darkness anyway. About sitting with others who are scared. About trusting that light is just resting, not gone. Hope isn't naive optimism. It's stubborn faith in the eventual return of dawn."</p>
            
            <p><em>Mom and Dad need to hear this too, Avi: There will be dark times. Times when we feel like we've lost our light. When we're exhausted, overwhelmed, scared. Times when the glow fades. But we're going to sit with each other in those dark times. And we're going to trust—even when it's hard—that the light is just resting. That dawn is already on its way. And that our job isn't to force the light back. It's to be kind in the darkness until it returns on its own. And it always does. It always, always does.</em></p>
        `
    },
    {
        id: 24,
        pillar: "Belonging",
        icon: "🦩",
        title: "The Flamingo Who Wasn't Pink",
        text: `
            <p>Francine the flamingo had a problem: she wasn't pink. She was white.</p>
            
            <p>All the other flamingos were perfectly pink. But Francine? White as snow. White as clouds. White as "this is embarrassing."</p>
            
            <p>"It's the shrimp," explained her mother. "Pink flamingos eat a lot of shrimp. The shrimp make us pink."</p>
            
            <p>"But I DO eat shrimp!" Francine protested.</p>
            
            <p>"I know, dear. Your body just... processes color differently."</p>
            
            <p>The other flamingos tried to be nice. But Francine heard the whispers: <em>"There's the white one." "She doesn't match." "Is she even a real flamingo?"</em></p>
            
            <p>One day, Francine decided: "I'm leaving. I'll find birds who look like me."</p>
            
            <p>She flew to a lake full of white swans. "Hello, fellow white birds!"</p>
            
            <p>The swans looked at her long legs and curved neck. "Um... you're not a swan."</p>
            
            <p>"But I'm WHITE like you!"</p>
            
            <p>"Being the same color doesn't make us the same," said the wisest swan. "You stand on one leg. We don't. You eat shrimp. We eat plants. You're flamingo-shaped. We're swan-shaped. You're trying to fit in based on color, but belonging is about more than matching."</p>
            
            <p>Francine flew away, confused and sad. She stopped at a pond to rest.</p>
            
            <p>A frog hopped over. "You look lost."</p>
            
            <p>"I don't belong anywhere," Francine sighed. "I'm not pink enough for flamingos. Not swan enough for swans. I'm just... wrong everywhere."</p>
            
            <p>The frog thought about this. "Can I tell you something? I used to be a tadpole. I had a tail and gills and I lived underwater. Then I grew legs and lungs and had to leave the water. For a while, I wasn't ANYTHING. Not fish, not frog, just... in between. It was the loneliest time of my life."</p>
            
            <p>"What did you do?"</p>
            
            <p>"I stopped trying to fit into categories. I just became MORE myself. More frog-like every day. And you know what? Other frogs found me. Because they weren't looking for someone who matched them. They were looking for someone who was authentically THEMSELVES."</p>
            
            <p>Francine flew back to the flamingos. This time, instead of hiding her whiteness, she stood tall.</p>
            
            <p>"I know I'm different," she said. "I'm white. I'm always going to be white. But I'm also a flamingo. I stand on one leg. I love shrimp. I sleep with my head backward. I'm ALL the flamingo things except pink. And if that's not flamingo enough for you, then maybe I need to find flamingos who care more about heart than color."</p>
            
            <p>The oldest flamingo stepped forward. "You know what? That's the most flamingo thing I've ever heard. Real flamingos don't match perfectly. They just show up AS THEMSELVES and trust the flock will make room."</p>
            <p>And they did.</p>
            
            <p><em>Here's the hard truth your parents are still learning, Avi: You won't belong everywhere. And that's okay. Some flocks will care too much about matching. Some will care more about being authentic. Your job isn't to turn pink for people who only see color. Your job is to be SO FULLY YOURSELF that you attract people who love you for exactly that. The right flock won't ask you to change. They'll just make room for one more beautiful, weird, perfectly-you flamingo. Even if you're white. Especially if you're white.</em></p>
        `
    }
];

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = storiesSet2;
}

// Combine story sets based on selection
let stories;
if (ACTIVE_STORY_SET === 'set1') {
    stories = storiesSet1;
} else if (ACTIVE_STORY_SET === 'set2') {
    stories = storiesSet2;
} else {
    // Both sets combined
    stories = [...storiesSet1, ...storiesSet2];
}

// Make stories available globally
window.stories = stories;

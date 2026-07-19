/* Defenders of the Wild — rules content.
   Source: Defenders of the Wild Rulebook v1.0 (Outlandish Games, February 2024).
   Rules text is adapted/summarized from the publisher's rulebook.
   Block types understood by the renderer (see app.js):
   p, h, ul, ol, steps, dl, note, example, faq, icons, divider */

Rulebooks.register({
  id: "defenders",
  title: "Defenders of the Wild",
  fullTitle: "Defenders of the Wild",
  tagline: "Co-operative resistance against the machines for 1–4 players",
  accent: "#c05a28",
  theme: { "--accent-ink": "#8a3d14" },
  cover: "❧",
  imgBase: "assets/img/defenders/",
  glyphs: {
    "dir-right": "dir-right.png",
    "dir-left": "dir-left.png",
    "dmg-0": "dmg-0.png",
    "dmg-1": "dmg-1.png",
    "dmg-2": "dmg-2.png",
    mech: "mech.png",
    pollution: "pollution.png",
  },
  meta: [
    { label: "Players", value: "1–4" },
    { label: "Time", value: "1–2 hours" },
    { label: "Ages", value: "14+" },
    { label: "Designers", value: "Henry Audubon & T.L. Simons" },
    { label: "Publisher", value: "Outlandish Games" },
  ],
  blurb:
    "The machines have invaded the Commonwood, enclosing habitats behind walls and spreading toxic pollution. As organizers of the animal resistance, you must cooperate to clear pollution, fight mechs, breach walls, build camps, and rewild factories before the machines complete their core — everyone wins or loses together.",

  chapters: [
    /* ---------------------------------------------------------------- */
    {
      id: "intro",
      title: "Introduction",
      sections: [
        {
          id: "overview",
          title: "War Has Come to the Wild",
          summary: "The story, and what you're trying to do.",
          blocks: [
            { t: "p", html: "For millennia, the animals of the Commonwood built their societies on the two principles of the Wild: <strong>everything is connected</strong> and <strong>nothing lasts forever</strong>. But when a secret group of powerful animals tried to conquer the cycle of the seasons — fusing formidable technology with perilous magic in a hidden bunker — their experiment went terribly awry. It unleashed an invasion of deadly machines possessed by corrupted magic, and now the machines rampage across the Commonwood, enclosing every habitat, town, and village in their path." },
            { t: "p", html: "Scrappy crews of animals are rising up to resist the occupation with guerrilla tactics and clandestine sabotage. Calling themselves <strong>Defenders of the Wild</strong>, these partisans hail from all four animal factions: the Order with its wisdom of the flame, the Council with its fortitude and bread, the Sect with its ingenious inventions, and the Coven with its spells and subterfuge." },
            { t: "p", html: "You are organizers of the animal resistance who have converged on a dangerous flashpoint: construction has begun on a new <strong>machine core</strong> and sprawling factory complex where an animal village once stood. Engines are building walls that enclose habitat after habitat, mechs guard expanding factories, and toxic pollution spreads. You must cooperate — despite longstanding factional disagreements — to win this crucial battle." },
          ],
        },
        {
          id: "factions",
          title: "The Animal Factions",
          summary: "The Order, the Council, the Coven, and the Sect.",
          blocks: [
            { t: "dl", items: [
              { term: "The Order", def: "An ancient fellowship of scholars, firekeepers, mapmakers, and librarians who cultivate the wisdom of the Wild in candlelit monasteries and ornate forest academies. They practice flame divination to peer into the past and forecast the future, and keep the Wildfire burning — transforming it into a deadly weapon when necessary. <em>Home habitat: forests.</em>" },
              { term: "The Council", def: "A powerful federation of civil servants, guards, farmers, and bakers with extensive agricultural communes on the plains. Driven by fairness, solidarity, and structure (and fueled by plenty of ale and bread), they were among the first to face down the machines. <em>Home habitat: plains.</em>" },
              { term: "The Coven", def: "An ever-shifting alliance of witches, herbalists, bards, and bandits who have practiced the healing magic of the Wild for countless generations. Based in the ungovernable marshes, they are masters of the ambush — adept at turning botanicals into everything from poultice to poison. <em>Home habitat: marshes.</em>" },
              { term: "The Sect", def: "A shadowy society of machinists, miners, mathematicians, and hackers working in remote laboratories deep in the mountains. Known for superstitious lore, labyrinthine crystal mines, and ingenious inventions, they craft the controversial gadgets and weaponry they deem necessary for animal survival. <em>Home habitat: mountains.</em>" },
            ] },
          ],
        },
        {
          id: "objectives",
          title: "Winning & Losing",
          summary: "Fully co-operative: everyone wins or loses together.",
          blocks: [
            { t: "p", html: "Defenders of the Wild is a <strong>fully cooperative</strong> game. All players win or lose together." },
            { t: "note", variant: "golden", title: "Winning the game", text: "Destroy the machine core by completing both objectives together:<br>• <strong>All factories</strong> built by the machines must be <strong>rewilded</strong>.<br>• <strong>Each player</strong> must build <strong>all of their camps</strong>." },
            { t: "h", text: "Losing the game" },
            { t: "p", html: "There are 3 ways for all players to lose:" },
            { t: "dl", items: [
              { term: "Core construction complete", def: "If 5 factories have been built and the machines are ordered to build another, all players lose." },
              { term: "Toxic disaster", def: "If all 6 toxic sites have spread and the machines are ordered to spread more, all players lose." },
              { term: "Massacre", def: "If 2 defenders from the same habitat are killed, all players lose." },
            ] },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "components-setup",
      title: "Components & Setup",
      sections: [
        {
          id: "components",
          title: "Components",
          summary: "What's in the box.",
          blocks: [
            { t: "h", text: "Board & machines" },
            { t: "ul", items: [
              "6 game board perimeter tiles, 12 habitat hex tiles, 1 center base tile",
              "6 factory tiles (rewilded side on the back), 42 pollution tokens, 6 toxic site tokens",
              "30 walls, 20 mechs, 2 engines, 12 breach markers",
              "1 machine direction pawn, 1 direction circle, 1 toxic site circle",
              "13 machine cards (7 base & 6 difficult)",
              "1 damage die, 12+ damage tokens",
            ] },
            { t: "h", text: "Factions & players" },
            { t: "ul", items: [
              "4 faction circles and 4 support trackers (1 per faction)",
              "Organizers for each faction, with 8 organizer cards (2 per faction)",
              "72 defender cards (18 per faction)",
              "24 camps (6 per faction)",
              "4 death tokens (1 per habitat type)",
              "Item tokens — Order maps (4), Council bread (4), Coven potions (4), Sect rockets (4)",
              "1 first player marker, 4 player aids",
            ] },
          ],
        },
        {
          id: "setup-board",
          title: "Setup: Board & Machines",
          summary: "Build the board, the core, and the machine circles.",
          blocks: [
            { t: "steps", items: [
              { n: "1", title: "Create the game board", html: "Connect all 6 perimeter tiles to form the six-sided perimeter. Randomly place the 12 habitat hex tiles inside the perimeter — each tile can be placed on either side, but make sure the arrows at the centers of all tiles point in the same direction. Place the center base tile in the open spot at the center." },
              { n: "2", title: "Create the machine core", html: "Stack all factory tiles in numerical order — 0 on the bottom, 5 on top — with the darker rewilded sides face down. Shuffle the <em>orientations</em> of the stacked tiles so the factory direction arrows point in random directions (but don't shuffle the numerical order). Place the stack on the center base tile: this is the machine core." },
              { n: "3", title: "Set up the machine circles", html: "Place the direction circle and the toxic site circle to one side of the board. Place all 6 toxic site tokens on the toxic site circle. Set the machine direction to 'right' by placing the machine direction pawn on the right-hand direction space marked by the :dir-right: icon." },
              { n: "4", title: "Deploy engines & walls", html: "Place 1 wall on the hex edge the machine core's factory direction arrow points toward, a second wall on the next edge to the right, and an engine on the following edge to the right. Then place 2 more walls and the other engine on the hex edges off the opposite side of the core (next to the top factory tile's number 5), mirroring the same pattern. Engines stand upright with their jagged fronts facing away from the walls at their backs. Pile the remaining walls within reach." },
              { n: "5", title: "Deploy mechs", html: "Place 2 mechs in the machine core. Place 1 mech in each habitat hex adjacent to a :mech: icon on the perimeter. Pile the remaining mechs within reach." },
              { n: "6", title: "Spread pollution", html: "Place 1 pollution token in each habitat hex with a :pollution: icon. Pile the remaining pollution tokens within reach." },
            ] },
          ],
        },
        {
          id: "setup-players",
          title: "Setup: Players",
          summary: "Factions, camps, organizers, decks, and starting positions.",
          blocks: [
            { t: "steps", items: [
              { n: "7", title: "Choose factions", html: "Assign each player 1 of the 4 factions. Each player takes the corresponding faction circle, organizers, organizer cards, camps, support tracker, defender cards, player aid, and 3 damage tokens. Return unplayed factions' components to the box." },
              { n: "8", title: "Set up your faction circle & camps", html: "Place your faction circle in front of you and set 1 camp aside as your <strong>starting camp</strong>. The support track runs around the top half of your faction circle. Use the side of your faction circle matching your player count (marked with 4, 3, or 2 small dots), place 1 camp on the '4' space of the support track, and fill each space to the right with a camp per your player count: <strong>4 players</strong> — 4 camps on the track (return 1 to the box); <strong>3 players</strong> — 4 camps, leaving the final space next to the 2 dots empty (return 1); <strong>2 players</strong> — 5 camps on the track. Place your support tracker on the first space of the track. (<strong>1 player</strong>: follow 2-player setup and see 1 Player Mode.)" },
              { n: "9", title: "Choose organizers", html: "Review your faction's 2 organizer cards and pick 1 to play as. Place the organizer figure with your starting camp. Assemble the 12 defender cards listed on your organizer card, then tuck the card under the top of your faction circle with the portrait revealed. Return the other organizer, its card, and the leftover defender cards to the box." },
              { n: "10", title: "Set up your defenders deck", html: "Shuffle your 12 defender cards face-down to the left of your faction circle. Leave room for an exhaustion pile on the right. Draw 3 defender cards into your hand — don't reveal them to the other players." },
              { n: "11", title: "Distribute breach markers", html: "Split the 12 breach markers evenly: <strong>2 players</strong> — 6 each; <strong>3 players</strong> — 4 each; <strong>4 players</strong> — 3 each." },
              { n: "12", title: "Distribute items", html: "Take 1 item token for each faction <em>in play</em>. Place your item tokens next to your faction circle with the darker used side face-up." },
              { n: "13", title: "Set up death tokens", html: "Place all 4 death tokens in a row near the board." },
              { n: "14", title: "Set up the machine deck", html: "For your first games, use the base deck of 7 machine cards and return the 6 cards marked 'difficult' to the box. To raise difficulty, randomly draw difficult cards — <strong>Intermediate</strong>: 1–2, <strong>Expert</strong>: 3–4, <strong>Extreme</strong>: 5–6 — and substitute each for the base card with the same name, keeping the deck at 7 cards. Shuffle the deck face-down within reach; leave room for a discard pile." },
              { n: "15", title: "Choose starting camp locations", html: "Choose one of your faction's home habitat hexes next to the board perimeter and place your starting camp there along with your organizer. If none of your home habitat hexes touch the perimeter, choose one that is 1 hex away from it." },
              { n: "16", title: "Randomly assign first player", html: "Give that player the first player marker." },
            ] },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "playing",
      title: "Playing the Game",
      sections: [
        {
          id: "round-structure",
          title: "Round Structure",
          summary: "Organize in silence, then act in turns.",
          blocks: [
            { t: "p", html: "Defenders of the Wild is played in rounds. Each round is an <strong>organize</strong> phase followed by an <strong>action</strong> phase, each with 2 steps." },
            { t: "h", text: "Phase 1: Organize (all players together)" },
            { t: "steps", items: [
              { n: "A", title: "Choose in silence", html: "All players cease communication and silently choose a defender card from their hand to play as their <strong>active defender</strong> for the round, placing it face down on top of their exhaustion pile. If you have no cards in hand, place the top card of your defenders deck face down instead." },
              { n: "B", title: "Reveal together", html: "Once every player's card is face down, all players simultaneously flip their active defenders face up. Communication may now resume. Special abilities marked <strong>'reveal'</strong> must be resolved before proceeding. When a defender with a <strong>Comrade</strong> ability is revealed, the first player marker passes to the next player on the left — once per revealed Comrade if several appear at once." },
            ] },
            { t: "h", text: "Phase 2: Action (each player in turn)" },
            { t: "steps", items: [
              { n: "A", title: "Take actions", html: "The player with the first player marker takes the first turn. On your turn, you may take as many actions as the <strong>action points</strong> noted on your active defender card. Any defender can take any action on the action menu. After spending all your action points, you may <strong>team up</strong> defenders from your hand that share your active defender's habitat for extra actions. Abilities marked <strong>'ongoing'</strong> may affect your turn and other players' turns." },
              { n: "B", title: "Draw a machine card", html: "After taking actions, draw and resolve 1 machine card. Each type of machine card deploys, moves, and manages a specific set of machine components." },
            ] },
            { t: "p", html: "Turn order rotates clockwise. After all players have taken their turns, all active defenders become exhausted and a new round begins with the organize phase — in silence once again." },
          ],
        },
        {
          id: "communication",
          title: "Restrictions on Communication",
          summary: "When you must stay silent, and what you may never say.",
          blocks: [
            { t: "ul", items: [
              "At the start of the organize phase, you may not communicate — choose your active defender in silence. Discussion resumes once all players reveal simultaneously.",
              "At all times, you may not reveal your hand of defender cards or discuss any specifics of the cards in your hand, <em>other than noting the defenders' habitats</em>. Saying \"I have a way to help with that next turn\" or \"I don't currently have any forest defenders\" is fine — directly mentioning any other feature of a card in hand is not.",
            ] },
            { t: "note", variant: "note", title: "Revealed cards are public", text: "Once your active defender is face up on your exhaustion pile, anyone may freely view and discuss it." },
          ],
        },
        {
          id: "game-board",
          title: "The Game Board",
          summary: "Habitats, home habitats, walls, factories, and wild hexes.",
          blocks: [
            { t: "p", html: "The board starts with 36 habitat hexes surrounding the machine core hex. Each hex has 6 edges shared with adjacent hexes or the perimeter." },
            { t: "p", html: "There are 4 habitat types — <strong>forests</strong> (home of the Order), <strong>plains</strong> (Council), <strong>marshes</strong> (Coven), and <strong>mountains</strong> (Sect). Each faction can only build camps in its home habitat. Half the defender cards in your deck are from your faction's home habitat." },
            { t: "p", html: "Machine cards order engines to advance and build <strong>walls</strong> along hex edges — there is no way to stop the advance of engines or the building of walls. When a habitat hex becomes fully enclosed on all 6 edges, it is in danger of becoming a <strong>factory</strong>: factory tiles are built on enclosed hexes when a 'factories' machine card is resolved." },
            { t: "p", html: "Players cannot enter the machine core hex. The only way to destroy the core and win is to rewild every factory the machines build while also building all of your camps." },
            { t: "note", variant: "tip", title: "Wild hexes", text: "When players rewild a factory, it becomes a <strong>wild</strong> hex that counts as <em>every</em> faction's home habitat and <em>every</em> defender's habitat." },
          ],
        },
        {
          id: "defender-cards",
          title: "Defender Cards",
          summary: "Card anatomy, teaming up, and reshuffling.",
          blocks: [
            { t: "p", html: "On your turn as active player, you take actions on the board with your organizer using your active defender's action points and abilities." },
            { t: "dl", items: [
              { term: "Habitat", def: "Noted in the upper left corner. Half your deck is from your faction's home habitat; the rest are from other habitats. Corridors of connected hexes matching your active defender's habitat let you move faster (see the Move action)." },
              { term: "Action points", def: "Noted in the lower left. Spend 1 action point per action from the action menu. All defenders may take any action. You may only take actions in the hex where your organizer is, unless a special ability says otherwise." },
              { term: "Special ability", def: "Detailed along the bottom of the card — 'reveal' abilities trigger during the organize phase, 'ongoing' abilities modify actions during turns. See the Special Abilities appendix." },
              { term: "Organizer initial", def: "In the lower-right corner. When building your deck, combine your faction's 6 base defenders (no initial) with the 6 defenders bearing your organizer's initial." },
            ] },
            { t: "h", text: "Teaming up" },
            { t: "p", html: "Once you have spent all of your active defender's action points, you may <strong>team up</strong> additional defenders from your hand — they must share your active defender's habitat. Each teamed up defender gives you exactly 1 additional action point; its own action points and special ability are ignored. Team up 1 defender at a time, spending the extra action point before teaming up another. Teamed up defenders go under your active defender in the exhaustion pile." },
            { t: "h", text: "Reshuffling the deck" },
            { t: "p", html: "If your defenders deck runs out, shuffle your exhaustion pile — except your active defender and any teamed up defenders — and place it face down as a new deck." },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "support-damage",
      title: "Support & Damage",
      sections: [
        {
          id: "support-camps",
          title: "Support & Camps",
          summary: "Earn support, build camps, grow your hand — then exit.",
          blocks: [
            { t: "p", html: "Building all your camps is a win requirement, and building camps is how you draw more defender cards into your hand. Each camp is also a location for regrouping, healing, and gaining an item." },
            { t: "p", html: "Camps are earned with <strong>support</strong> from the animal inhabitants of the Commonwood, tracked on the support track around your faction circle." },
            { t: "dl", items: [
              { term: "Gaining support", def: "Gain 1 support each time you <strong>destroy a mech</strong>, <strong>breach a wall</strong>, <strong>clear a hex of pollution</strong>, or <strong>rewild a factory</strong>. Move your support tracker forward 1 step per support gained." },
              { term: "Maxed out", def: "Your support is maxed out when the next step on the track is blocked by a camp. You can still take support-generating actions, but gain no support until you build that camp and reset the tracker." },
              { term: "Building & drawing", def: "When you build a camp, reset your support tracker to its starting position, then draw cards from your defenders deck until your hand size reaches the newly revealed number on the support track." },
            ] },
            { t: "h", text: "Endgame: your final camp" },
            { t: "p", html: "When you build your final camp, you have completed your faction's objectives and you <strong>exit the game</strong>. Leave your support tracker on the final step and place your organizer in the center of your faction circle. You may keep strategizing with the other players, but you take no further turns." },
            { t: "ul", items: [
              "The <em>last</em> player to build their final camp cannot exit while any factories remain unrewilded — keep playing until all factories are rewilded.",
              "Draw and resolve 1 machine card after building your final camp if the game hasn't ended.",
            ] },
          ],
        },
        {
          id: "damage-death",
          title: "Damage & Death",
          summary: "Mechs, damage rolls, toxic sites, and killed defenders.",
          blocks: [
            { t: "p", html: "Taking actions near mechs is the most common way to take damage; you also take 1 damage every time you clear a toxic site. When you take damage, place that many damage tokens on your faction circle below your faction shield." },
            { t: "icons", items: [
              { img: "hunter-hex.png", term: "Hunter", def: "A mech in a habitat hex. Hunters pursue players when mechs machine cards are drawn." },
              { img: "sniper-hex.png", term: "Sniper", def: "A mech in a factory hex. Snipers threaten players in adjacent hexes." },
            ] },
            { t: "h", text: "Rolling damage" },
            { t: "p", html: "When you take an action with your organizer starting in the same hex as a mech, or adjacent to a factory with a sniper, roll the damage die once. Roll only <strong>once per action</strong>, no matter how many mechs threaten you. The die can inflict 1 damage :dmg-1:, 2 damage :dmg-2:, or no damage :dmg-0:." },
            { t: "dl", items: [
              { term: "Melee rolls", def: "Starting your action in the same hex as 1 or more mechs: both :dmg-1: and :dmg-2: inflict damage." },
              { term: "Sniper rolls", def: "Starting in a hex free of mechs but adjacent to snipers: only :dmg-1: inflicts damage." },
              { term: "Both at once", def: "In a hex with mechs <em>and</em> adjacent to snipers: roll for melee damage." },
            ] },
            { t: "h", text: "Toxic sites" },
            { t: "p", html: "Take 1 damage each time you clear a toxic site. Toxic sites can be cleared with a clear pollution action, a potion, or a defender's special ability." },
            { t: "h", text: "Defender death" },
            { t: "p", html: "You can sustain at most <strong>3 damage tokens</strong>. If damage would take you past 3, another player randomly chooses a defender from your hand: that defender is <strong>killed</strong> and placed face up under the death token matching its habitat. Whenever one of your defenders is killed, clear all damage from your faction circle." },
            { t: "ul", items: [
              "If you exceed 3 damage with no cards in hand, the top card of your defenders deck is drawn and killed.",
              "If 2 defenders from the same habitat are killed, the game ends and all players lose.",
            ] },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "actions",
      title: "Action Menu",
      sections: [
        {
          id: "move",
          title: "Move",
          summary: "Step to an adjacent hex — or sweep through a habitat corridor.",
          blocks: [
            { t: "p", html: "A move action repositions your organizer to an adjacent, unobstructed hex — or through multiple hexes of a <strong>habitat corridor</strong> matching your active defender's habitat. Ending a move in a hex with a camp also lets you gain an item (see Items). Any number of organizers can share a hex." },
            { t: "h", text: "Obstructions to movement" },
            { t: "ul", items: [
              "Walls block movement to adjacent hexes unless they have been <strong>breached</strong>.",
              "Factories and rewilded factories have walls on all 6 edges — you may not move through them unless breached.",
              "You cannot move through engines, enter the machine core, or move off the board perimeter.",
            ] },
            { t: "h", text: "Moving through a habitat corridor" },
            { t: "p", html: "A habitat corridor is any connected set of hexes of the same habitat type. For 1 move action you may move through multiple unobstructed corridor hexes if they all match your active defender's habitat. Your organizer must <strong>start and/or end</strong> the move in the corridor:" },
            { t: "ul", items: [
              "Starting <em>inside</em> a matching corridor: move to any hex inside or adjacent to the corridor, if the path is unobstructed.",
              "Starting <em>adjacent</em> to a matching corridor: move to any connected hex of the corridor, if the path is unobstructed.",
              "Rewilded factories can be part of a connected corridor as long as the walls along the path have been breached.",
              "You may <strong>not</strong> pass through hexes containing mechs during a corridor move.",
            ] },
          ],
        },
        {
          id: "build-camp",
          title: "Build a Camp",
          summary: "Turn maxed-out support into a camp and a bigger hand.",
          blocks: [
            { t: "p", html: "Spend 1 action point, pick up the camp occupying the next step of your <strong>maxed out</strong> support track, and place it in your organizer's hex. Reset your support tracker to the start of the track, then draw cards from your defenders deck until your hand reaches the newly revealed number on the track." },
            { t: "ul", items: [
              "Only 1 camp can be in each hex.",
              "You may only build camps in your faction's home habitat hexes or in rewilded factory hexes.",
              "Building your final camp completes your objectives — you exit the game (see Support & Camps).",
            ] },
          ],
        },
        {
          id: "regroup-heal",
          title: "Regroup & Heal",
          summary: "Teleport to your camps; clear your damage at any camp.",
          blocks: [
            { t: "h", text: "Regroup" },
            { t: "p", html: "Spend 1 action point and reposition your organizer to any hex with one of <strong>your</strong> camps, anywhere on the board. Unlike move actions, regrouping ignores distance and obstructions — but does <em>not</em> let you gain an item." },
            { t: "h", text: "Heal" },
            { t: "p", html: "With your organizer in a hex with a camp of <strong>any</strong> faction, spend 1 action point and remove <strong>all</strong> damage tokens from your faction circle." },
            { t: "note", variant: "tip", title: "Healing under fire", text: "If taking a heal action requires rolling damage, remove all damage tokens <em>before</em> rolling." },
          ],
        },
        {
          id: "fight-actions",
          title: "Clear, Destroy & Breach",
          summary: "The three support-earning strikes against the machines.",
          blocks: [
            { t: "h", text: "Clear pollution (+1 support)" },
            { t: "p", html: "Spend 1 action point and remove <strong>all pollution tokens</strong> — or <strong>the toxic site token</strong> — from your organizer's hex. Clearing a toxic site inflicts 1 damage on you. Cleared pollution returns to the pollution pile; cleared toxic site tokens return to the toxic site circle. Gain 1 support unless your track is maxed out." },
            { t: "h", text: "Destroy a mech (+1 support)" },
            { t: "p", html: "Spend 1 action point and remove 1 mech from your organizer's hex, returning it to the mech pile. Gain 1 support unless maxed out." },
            { t: "h", text: "Breach a wall (+1 support)" },
            { t: "p", html: "Spend 1 action point and place a breach marker next to a wall along an edge of your organizer's hex. Breached walls can be moved through by all players. Gain 1 support unless maxed out." },
            { t: "ul", items: [
              "If all of your breach markers are on the board, you cannot take another breach action.",
              "Breach markers stay in place when a factory is built over a breached wall, and when a factory is rewilded.",
            ] },
          ],
        },
        {
          id: "rewild",
          title: "Rewild a Factory",
          summary: "Flip a cleared factory to its wild side. (+1 support)",
          blocks: [
            { t: "p", html: "Rewilding all factories the machines build is half of the win condition. To rewild a factory, <strong>all pollution and mechs in it must first be cleared and destroyed</strong>. Then spend 1 action point and flip the factory tile your organizer is in to its rewilded side — keeping the factory direction arrow pointing the same direction. Gain 1 support unless maxed out." },
            { t: "ul", items: [
              "Rewilded factories no longer spread pollution, but keep walls on all 6 edges.",
              "Any faction may build a camp in a rewilded factory, and rewilded hexes count as every defender's habitat for corridor moves (through breached walls).",
              "Players can never enter or rewild the machine core itself.",
            ] },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "items",
      title: "Items",
      sections: [
        {
          id: "items-rules",
          title: "Gaining & Using Items",
          summary: "Each faction's camps offer a unique consumable.",
          blocks: [
            { t: "p", html: "Each faction offers a unique item that players gain by visiting that faction's camps. Item tokens start next to your faction circle with their darkened <strong>used</strong> side face up." },
            { t: "dl", items: [
              { term: "Gaining", def: "End a <strong>move</strong> action with your organizer in the same hex as a faction's camp to gain that faction's item — flip your token to its colorful gained side. If your organizer is already in a hex with a camp, you may spend 1 action point to gain the item. Ending a <em>regroup</em> in a camp hex does not gain an item." },
              { term: "Using", def: "Use a gained item at any time during your turn <em>before drawing your machine card</em>. Using an item costs no action point. After resolving its effect, flip the token back to its used side." },
            ] },
            { t: "icons", items: [
              { img: "bread.png", term: "Council item: Bread", def: "Gives you 1 additional action point to spend on any action." },
              { img: "potions.png", term: "Coven item: Potions", def: "Remove 1 damage token from your faction circle, or clear pollution, without spending an action point. Do not roll damage when using potions." },
              { img: "rockets.png", term: "Sect item: Rockets", def: "Destroy a mech or breach a wall without spending an action point. Do not roll damage when using rockets." },
              { img: "maps.png", term: "Order item: Maps", def: "Move or regroup without spending an action point. Do not roll damage when using maps." },
            ] },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "machine-cards",
      title: "Machine Cards",
      sections: [
        {
          id: "machine-deck",
          title: "The Machine Deck",
          summary: "One card ends every turn; the deck of 7 recycles.",
          blocks: [
            { t: "p", html: "After taking all actions on your turn, draw and resolve 1 machine card, then place it face up on the discard pile. Once all 7 machine cards have been drawn and resolved, reshuffle the discard pile into a new face-down deck." },
            { t: "note", variant: "warn", title: "Order matters", text: "Always resolve a machine card in the printed sequence, one step at a time." },
            { t: "p", html: "The machine direction — set on the direction circle to right :dir-right: or left :dir-left: — controls how engines advance, where reset engines deploy, and how the machines break ties. It only changes when the <strong>reboot</strong> card toggles it." },
          ],
        },
        {
          id: "engines",
          title: "Engines Cards",
          summary: "Engines advance, build walls, reset, and redeploy.",
          blocks: [
            { t: "p", html: "Engines sit on habitat hex edges with one hex to their right (marked with the :dir-right: icon) and one to their left (:dir-left:). They have a jagged forward-facing front and a flat back, and only ever advance forward." },
            { t: "steps", items: [
              { n: "1", title: "Engines advance twice", html: "Check the machine direction to determine whether each engine advances around the hex to its right :dir-right: or to its left :dir-left:. For each advance, move the engine 1 hex edge forward in that direction and build 1 wall behind it on the edge it moved from. Advance each engine simultaneously, one edge at a time, twice per engines card." },
              { n: "2", title: "Deploy reset engines", html: "Deploy any engines that reset to the machine core in step 1. A reset engine deploys to 1 of the 6 edges radiating like spokes off the <strong>highest numbered</strong> factory or rewilded factory: start at the edge its factory direction arrow points to; if blocked by a wall, factory wall, or the other engine, rotate around the tile in the machine direction to the next clear edge. If all 6 edges are blocked, repeat on the next highest numbered tile." },
            ] },
            { t: "ul", items: [
              "<strong>Dead ends & resetting:</strong> an engine ordered to advance into an edge that has a wall, a factory, or another engine <strong>resets</strong> — place it on the machine core, and build 1 wall on the edge it reset from.",
              "<strong>Advancing along the perimeter:</strong> engines never stop on a perimeter edge. An engine advancing along the perimeter keeps going — building walls on every perimeter edge of that habitat hex — until it stops on the next non-perimeter edge. However many edges that covers, it counts as only 1 of the engine's 2 advances.",
              "If the machines have not built any factories yet, the top factory on the machine core is the highest numbered factory.",
              "Always deploy engines with their back to the factory and their front facing out.",
              "If both engines have reset, deploy them one at a time.",
            ] },
          ],
        },
        {
          id: "factories",
          title: "Factories Cards",
          summary: "Enclosed hexes become factories; otherwise pollution spreads.",
          blocks: [
            { t: "steps", items: [
              { n: "1", title: "If any habitat hexes are enclosed, build 1 factory", html: "An <strong>enclosed</strong> hex has walls on all 6 of its edges. Factories and rewilded factories count as walls toward enclosing their neighbors, and <em>breached</em> walls still count — but engines do not. If no hexes are enclosed, skip to step 2." },
              { n: "2", title: "Factories spread pollution", html: "Only if no factory was built in step 1. Each factory — and the top factory on the machine core — has 3 <strong>pollution chutes</strong>. Spread 1 pollution token per chute into the hex adjacent to that chute, starting with the highest numbered factory and working down." },
            ] },
            { t: "h", text: "Building a factory" },
            { t: "p", html: "Remove all walls on the enclosed hex's edges. Pick up the top factory tile of the machine core — along with any toxic site token, pollution tokens, and mechs on it — and place it on the target hex, keeping its factory direction arrow pointing the same direction as it did on the core. Then <strong>deploy 2 snipers</strong> to the factory newly revealed on top of the machine core." },
            { t: "ul", items: [
              "If the factory replaces a breached wall, the breach marker remains in place.",
              "A camp built over stays on top of the factory but cannot be used for regrouping, healing, or items until the factory is rewilded.",
              "Organizers in the hex are placed on top of the new factory.",
              "Pollution in the hex goes on top of the factory. If pollution there reaches 3 or more, replace the tokens with a toxic site token; if a toxic site is already there, just remove the pollution.",
              "Hunters in the hex go on top of the factory — they are now snipers.",
            ] },
            { t: "h", text: "If multiple hexes are enclosed" },
            { t: "p", html: "The machines build only 1 factory per card. Find the factory direction arrow on top of the machine core and scan in a straight line from the core to the perimeter, rotating the scan around the core in the machine direction until it hits an enclosed hex — build there. If the scan hits 2 enclosed hexes on the same line, build on the one closer to the core." },
            { t: "h", text: "Spreading pollution & toxic sites" },
            { t: "ul", items: [
              "If 3 or more pollution tokens ever occupy a single hex, replace them with a toxic site token from the toxic site circle.",
              "Pollution skips over hexes that already have toxic sites, continuing in the same direction to the next adjacent hex — passing through any walls or engines.",
              "If multiple chutes face the same hex, that hex receives 1 token per chute.",
              "Chutes spread pollution into factory hexes and the machine core just like habitat hexes — but never off the board perimeter.",
            ] },
          ],
        },
        {
          id: "mechs-card",
          title: "Mechs Cards",
          summary: "Engines deploy hunters; hunters pursue the players.",
          blocks: [
            { t: "steps", items: [
              { n: "1", title: "Each engine deploys 1 hunter", html: "Deploy 1 hunter mech to the habitat hex directly in front of each engine. If an engine faces the perimeter, a factory, or a rewilded factory, deploy the hunter to the habitat hex on the engine's right or left according to the machine direction." },
              { n: "2", title: "Hunters pursue: active player 2 hexes, others 1", html: "Hunters pursue the <strong>active player</strong> first, then each other player one at a time going clockwise from the active player's left. A pursuing hunter moves from its position into the hex with the pursued player's organizer — up to <strong>2 habitat hexes</strong> away for the active player, <strong>1 hex</strong> for everyone else. Hunters out of range hold their position." },
            ] },
            { t: "ul", items: [
              "Hunters never pursue through walls (including breached walls) and never pursue into factories or rewilded factories.",
              "Hunters already sharing a hex with any player's organizer hold their position and do not pursue.",
            ] },
          ],
        },
        {
          id: "reboot",
          title: "The Reboot Card",
          summary: "Flip the machine direction, then act like a factories card.",
          blocks: [
            { t: "steps", items: [
              { n: "1", title: "Toggle machine direction", html: "Move the machine direction pawn to the opposite space on the direction circle — from right :dir-right: to left :dir-left: or back." },
              { n: "2", title: "Then resolve as a factories card", html: "Proceed with the same 2 steps as a factories card: if any habitat hexes are enclosed, build 1 factory; otherwise factories spread pollution." },
            ] },
          ],
        },
        {
          id: "difficult-cards",
          title: "Difficult Cards",
          summary: "Optional harder versions of engines, factories, and mechs.",
          blocks: [
            { t: "p", html: "When setting up, you can raise the difficulty by randomly drawing 1–6 cards marked 'difficult' — <strong>Intermediate</strong>: 1–2, <strong>Expert</strong>: 3–4, <strong>Extreme</strong>: 5–6 — and substituting each for the base card of the same name, keeping the deck at 7 cards." },
            { t: "dl", items: [
              { term: "Difficult engines", def: "One engine advances 3 times and the other twice. To find which advances 3 times, scan from the machine core's factory direction arrow, rotating in the machine direction until the scan hits an engine." },
              { term: "Difficult factories", def: "Pollution is always spread in step 2, regardless of whether a factory was built in step 1." },
              { term: "Difficult mechs", def: "Adds a third step: every player whose organizer shares a hex with a mech takes 1 damage." },
            ] },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "endgame-solo",
      title: "Endgame & Solo",
      sections: [
        {
          id: "endgame",
          title: "Endgame",
          summary: "How victory and defeat actually resolve.",
          blocks: [
            { t: "h", text: "Winning" },
            { t: "p", html: "If at any time during a player's turn all players have built all their camps <em>and</em> all factories built by the machines have been rewilded, the game ends and all players win. Remove the machine core from the board and place all organizers on the center base tile to celebrate together." },
            { t: "p", html: "<em>News of your victory spreads like sparks across the Commonwood, igniting the fires of hope and solidarity in its wake. Everything is connected! Nothing lasts forever!</em>" },
            { t: "h", text: "Losing" },
            { t: "dl", items: [
              { term: "Core construction complete", def: "5 factory tiles have been built and a factories card or the reboot card orders the machines to build the final factory tile." },
              { term: "Toxic disaster", def: "All 6 toxic sites have spread to the board and a factories card orders the machines to spread more toxic sites." },
              { term: "Massacre", def: "2 defenders from the same habitat are killed." },
            ] },
          ],
        },
        {
          id: "solo",
          title: "1 Player Mode",
          summary: "Play 2 factions with a single combined hand.",
          blocks: [
            { t: "p", html: "Defenders of the Wild is primarily designed as a multiplayer game but can be enjoyed alone: play as <strong>2 factions with 1 hand of defenders</strong>, following the 2-player setup with these changes:" },
            { t: "ul", items: [
              "Your initial hand of 3 defender cards may combine defenders from either faction's deck.",
              "Place the first player marker back in the box.",
            ] },
            { t: "h", text: "Adjustments to gameplay" },
            { t: "ul", items: [
              "Ignore all rules restricting communication.",
              "Each turn, choose any defender from your hand as your active defender, regardless of faction. Place it on the exhaustion pile next to that defender's faction circle and resolve the turn with that faction's components. Draw and resolve a machine card after each turn.",
              "If you have no defenders from one of your factions in hand, you may draw the top card of that faction's deck as your active defender for the turn.",
              "'Reveal' abilities resolve immediately when you choose the defender; 'ongoing' abilities last while the defender is on top of its exhaustion pile.",
              "A defender's special ability affects only its own faction unless it says it affects other players.",
              "You may only team up defenders from the same faction as your active defender.",
              "When building a camp, draw from the deck belonging to your active defender's faction.",
              "If one of your factions exceeds 3 damage, shuffle your hand and randomly choose the defender that is killed.",
              "When you build a faction's final camp, move all of that faction's cards in your hand to its exhaustion pile — that faction exits the game. Continue playing as the other faction.",
            ] },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "appendix",
      title: "Appendix",
      sections: [
        {
          id: "abilities-rules",
          title: "Special Abilities: Rules",
          summary: "How reveal and ongoing abilities resolve.",
          blocks: [
            { t: "dl", items: [
              { term: "Reveal abilities", def: "Resolve during the organize phase and never require rolling damage. Gain 1 support per mech destroyed, wall breached, and hex cleared of pollution by the ability. Players may resolve multiple reveal abilities in any order." },
              { term: "Ongoing abilities", def: "Modify actions during player turns. All rules for taking actions — including rolling damage and gaining support — remain the same apart from the modifications the ability specifies." },
            ] },
            { t: "ul", items: [
              "Resolving a special ability is always required.",
              "Special abilities affect only you unless noted otherwise.",
              "Ignore obstructions when resolving special abilities that reference adjacent hexes.",
            ] },
          ],
        },
        {
          id: "abilities-list",
          title: "Special Abilities: All Defenders",
          summary: "Every defender ability, by faction.",
          blocks: [
            { t: "p", html: "Defenders marked • are the faction's base defenders and appear in every deck. The others bear an organizer's initial and only appear in that organizer's deck." },
            { t: "h", text: "The Order" },
            { t: "dl", items: [
              { term: "• Order Comrade", def: "Reveal: The first player marker passes to the left." },
              { term: "• Archives", def: "Reveal: Gain maps." },
              { term: "• Almanac Printing", def: "Reveal: All players gain maps." },
              { term: "B — Controlled Blaze", def: "Reveal: Clear pollution in all adjacent hexes." },
              { term: "B — Feel the Burn", def: "Ongoing: Gain 1 support whenever you take any amount of damage." },
              { term: "B — Pyromancy", def: "Reveal: Take 1 damage." },
              { term: "S — Manifesto", def: "Reveal: +2 support." },
              { term: "S — Traveling Library", def: "Reveal: Relocate 1 of your built camps to any forest hex." },
              { term: "S — Sanctuary", def: "Ongoing: Each player may regroup to any player's camp without rolling damage." },
            ] },
            { t: "h", text: "The Council" },
            { t: "dl", items: [
              { term: "• Council Comrade", def: "Reveal: The first player marker passes to the left." },
              { term: "• Field Kitchen", def: "Reveal: Gain bread." },
              { term: "• Break Bread", def: "Reveal: All players gain bread." },
              { term: "N — Sustenance", def: "Ongoing: +1 support after any player builds a camp." },
              { term: "N — Bountiful Harvest", def: "Reveal: Draw 2 defender cards." },
              { term: "N — Caravans", def: "Ongoing: All players may move through any type of habitat corridor." },
              { term: "T — Fortitude", def: "Ongoing: Ignore :dmg-2: on the damage die." },
              { term: "T — Sharpshooter", def: "Reveal: Destroy 1 mech in an adjacent hex." },
              { term: "T — Field Hospital", def: "Reveal: All players remove 1 damage." },
            ] },
            { t: "h", text: "The Coven" },
            { t: "dl", items: [
              { term: "• Coven Comrade", def: "Reveal: The first player marker passes to the left." },
              { term: "• Bubbling Brew", def: "Reveal: Gain potions." },
              { term: "• Apothecary", def: "Reveal: All players gain potions." },
              { term: "Z — Evasion", def: "Ongoing: Ignore :dmg-1: on the damage die." },
              { term: "Z — Ambush", def: "Reveal: Destroy 1 mech in your location." },
              { term: "Z — Secret Paths", def: "Reveal: All players may relocate to a hex adjacent to their location." },
              { term: "A — Friendly Fungi", def: "Ongoing: Moving to a hex clears pollution in that hex." },
              { term: "A — Rain of Rust", def: "Reveal: Replace 1 mech with 1 pollution in any hex without a toxic site." },
              { term: "A — Medicinal Herbs", def: "Reveal: Choose a player to remove all damage." },
            ] },
            { t: "h", text: "The Sect" },
            { t: "dl", items: [
              { term: "• Sect Comrade", def: "Reveal: The first player marker passes to the left." },
              { term: "• Arsenal", def: "Reveal: Gain rockets." },
              { term: "• Fireworks Festival", def: "Reveal: All players gain rockets." },
              { term: "G — Hack Attack", def: "Do not draw a machine card this turn." },
              { term: "G — Scrap Hunter", def: "Ongoing: Gain 1 additional support whenever you destroy a mech." },
              { term: "G — Power Down", def: "Ongoing: All players may move through walls." },
              { term: "U — Tunnels", def: "Reveal: Relocate to any mountain hex." },
              { term: "U — Ballistics", def: "Ongoing: You may use rockets to destroy a mech in an adjacent hex." },
              { term: "U — Demolitions", def: "Reveal: Breach any wall." },
            ] },
            { t: "h", text: "Tokens reference" },
            { t: "icons", items: [
              { img: "damage-token.png", term: "Damage token", def: "Marks damage on your faction circle. 3 is the most you can sustain — more kills a defender." },
              { img: "toxic-site.png", term: "Toxic site", def: "Forms when 3 or more pollution tokens gather in one hex. Clearing one inflicts 1 damage. All 6 on the board puts the game one step from a toxic disaster." },
            ] },
          ],
        },
      ],
    },
  ],
});

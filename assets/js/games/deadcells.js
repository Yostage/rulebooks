/* Dead Cells: The Rogue-Lite Board Game — rules content.
   Source: Dead Cells rulebook (Le Scorpion Masqué, 2024).
   Naive text-first pass; component icons live on the physical cards/tokens.
   Block types understood by the renderer (see app.js):
   p, h, ul, ol, steps, dl, note, example, faq, story, icons, divider */

Rulebooks.register({
  id: "deadcells",
  title: "Dead Cells",
  fullTitle: "Dead Cells: The Rogue-Lite Board Game",
  tagline: "Co-op rogue-lite dungeon crawl for 1–4 players",
  accent: "#10b6c4",
  theme: { "--accent-ink": "#0b6470" },
  cover: "☠",
  imgBase: "assets/img/deadcells/",
  glyphs: {
    cell: "cell.png",
    potion: "potion.png",
    "gold-tooth": "gold-tooth.png",
    scroll: "scroll.png",
    vial: "vial.png",
    rune: "rune.png",
    blueprints: "blueprints.png",
    equipment: "equipment.png",
    check: "check.png",
    poisoned: "state-poisoned.png",
    bleeding: "state-bleeding.png",
    frozen: "state-frozen.png",
    "on-fire": "state-on-fire.png",
    marked: "state-marked.png",
    damage: "act-damage.png",
    block: "act-block.png",
    skill: "act-skill.png",
    loot: "act-loot.png",
    survival: "ability-survival.png",
    tactics: "ability-tactics.png",
    brutality: "ability-brutality.png",
  },
  meta: [
    { label: "Players", value: "1–4" },
    { label: "Time", value: "45'" },
    { label: "Age", value: "14+" },
    { label: "Publisher", value: "Le Scorpion Masqué" },
  ],
  blurb:
    "A cooperative rogue-lite. Fight your way through the cell-by-cell biomes, die, spend your Cells to grow permanently stronger, and run again — until you can finally beat the Hand of the King.",

  chapters: [
    {
      id: "intro",
      title: "Introduction",
      sections: [
        {
          id: "welcome",
          title: "You've Been Here Before",
          summary: "The premise.",
          blocks: [
            { t: "p", html: "You've been here before. As you come to your senses and stand up, you… recognize this place. What are you doing here, how will you get out, and… what's that terrible smell??" },
            { t: "p", html: "This is no time to lose your head; you'll have to get to the bottom of all this. …actually, you're probably already at the bottom; looks like you'll have to work your way to the top." },
            { t: "p", html: "Man, this place is a dump. Wonder who's in charge…?" },
          ],
        },
        {
          id: "game-concept",
          title: "Game Concept",
          summary: "What a rogue-lite is, and how you win.",
          blocks: [
            { t: "note", variant: "tip", title: "Goal of the Game", text: "You've got to get out — your goal is to <strong>beat the Hand of the King</strong>. You won't manage it on your first try; it will take a number of Runs before you succeed." },
            { t: "h", text: "A Run" },
            { t: "p", html: "A <strong>Run</strong> is a single play that ends when either someone in your Group dies, or you beat a Boss." },
            { t: "p", html: "Traditional co-op games end when a player dies. In a rogue-lite like Dead Cells, dying ends the <em>Run</em> — but not the game. Dying is just the beginning: each Run lets you grow stronger, both individually and as a group, by spending the <strong>Cells</strong> you collect." },
            { t: "h", text: "Your Bag" },
            { t: "p", html: "As you move through the Biomes you'll collect valuable objects. Your <strong>Bag</strong> is the shared stash where all Gold Teeth :gold-tooth:, Potions :potion:, and Cells :cell: go." },
            { t: "h", text: "Biomes" },
            { t: "p", html: "A <strong>Biome</strong> is a zone the Group moves through and discovers, made of spaces with Encounters, Treasure chests, Doors, and Merchants. The first Biome is the Prisoners' Quarters. You finish a Biome when you reach one of its Exit doors. After every two Biomes you'll meet a <strong>Boss</strong> you must beat to go further." },
          ],
        },
        {
          id: "contents",
          title: "Game Contents",
          summary: "What's in the box.",
          blocks: [
            { t: "h", text: "Boards & markers" },
            { t: "ul", items: [
              "1 Mutation board, 1 Combat board, 1 Annexe board",
              "4 Beheaded boards, 1 Serenade board (solo)",
              "4 Double-sided Biome boards (6 Biomes + 1 Double Biome) and 163 Biome tiles",
              "Scroll markers (green / red / purple), Maximum Health markers, First Player token",
            ] },
            { t: "h", text: "Tokens" },
            { t: "ul", items: [
              "State tokens: Poisoned, Frozen, On Fire, Bleeding, Marked (6 each)",
              "Combat: 12 Shield, 6 Golden Shield, 30 Damage tokens",
              "Loot: Cells, Gold Teeth (plus Large variants), Potions, Scroll tokens",
              "Plus Worm, Bell, Lantern, Malaise, Shuriken, Key, Wall/Hole, and Combat Round markers",
            ] },
            { t: "h", text: "Cards" },
            { t: "ul", items: [
              "7 Rune, 119 Upgrade, 21 Well, 5 Malaise cards",
              "24 Combat, 82 Equipment, 115 Monster, 16 Secret, 3 Solo Combat, 43 Boss cards",
              "Reference / Player Aid cards and deck Separators",
            ] },
            { t: "note", variant: "note", title: "Card codes", text: "Every card has a code (bottom-right) so ordered decks can always be restored. Sort by these codes, not by card backs." },
          ],
        },
      ],
    },

    {
      id: "setup",
      title: "Setup",
      sections: [
        {
          id: "first-time-setup",
          title: "First-Time Setup",
          summary: "Sorting the decks the first time you play.",
          blocks: [
            { t: "p", html: "Place the items in their designated spaces. Open all packs and turn the cards so the codes on the bottom-right are visible. Leave the Separators aside for now." },
            { t: "p", html: "Place the <strong>Rune cards</strong> in their slots on the Mutation board, grey (no-text) side up. Some slots stay empty — those are for later." },
            { t: "note", variant: "warn", title: "Never shuffle ordered decks", text: "Decks showing the ordered-deck symbol must stay in order. If they get mixed up, every card has a letter + number so it can be put back correctly." },
            { t: "p", html: "Sort the decks into the box: the Central Compartment holds the Beheaded decks, Serenade, and starter Equipment; the Upgrade decks are Survival (SV), Tactics (TC), Brutality (BR), and the Abandoned Well (W); plus the Boss decks (C1–C3) and Biome decks (B1–B7) with their Blueprints." },
          ],
        },
        {
          id: "biome-setup",
          title: "Biome Setup",
          summary: "The Annexe and Biome boards.",
          blocks: [
            { t: "h", text: "The Annexe board" },
            { t: "p", html: "The Annexe board holds the shared decks and discard piles you draw from during play (Monster, Equipment, Blueprint, etc.)." },
            { t: "h", text: "The Biome board" },
            { t: "p", html: "Shuffle and place all of the current Biome's tiles face-down at random on the board's spaces, matching their shapes. Return remaining tiles to the tuckbox. Place the <strong>Group token</strong> on the starting space at the far left of the Biome board." },
          ],
        },
        {
          id: "equipment-vs-blueprint",
          title: "Equipment vs. Blueprints",
          summary: "Two kinds of gear.",
          blocks: [
            { t: "dl", items: [
              { term: "Equipment deck", def: "A constant presence throughout your campaign that grows, improves, and changes as you add Blueprint cards to it." },
              { term: "Blueprints", def: "Plans for new Equipment. The group carries them until the end of the Biome, where (with the Collector's help) they're turned into real Equipment. Die before the Biome ends and you lose the plan before realizing it." },
            ] },
          ],
        },
        {
          id: "choosing-beheaded",
          title: "Choosing a Beheaded",
          summary: "Pick your character.",
          blocks: [
            { t: "p", html: "Choosing a Beheaded is your first decision — and you can choose a new one every time you play. Everything (nearly) resets each play, but the Beheaded themselves don't change. You can also change the player count from game to game; no need to keep the same group." },
            { t: "p", html: "Each Beheaded has a different set of Skills they can access and unlock, detailed on its Beheaded Aid." },
          ],
        },
        {
          id: "player-setup",
          title: "Player Setup",
          summary: "Setting up your Beheaded board.",
          blocks: [
            { t: "steps", items: [
              { n: "1", title: "Take a board", html: "Each player takes the Beheaded board they want to play; return unused Beheaded to the box." },
              { n: "2", title: "Scroll markers", html: "Take a Scroll marker of each colour (green, purple, red) and place each on the first scroll space of its colour." },
              { n: "3", title: "Health", html: "Place the Maximum Health token on the 4th heart from the left of the Health Track — you begin with 3 Health Points." },
              { n: "4", title: "Combat deck", html: "Shuffle your Beheaded's Combat cards, deal yourself 3 (kept hidden), and place the rest as your Draw Pile." },
              { n: "5", title: "Player Aid", html: "Take your Beheaded Aid card (icon descriptions are on the back)." },
              { n: "6", title: "First Player", html: "Give the First Player token to a player of your choice." },
            ] },
            { t: "note", variant: "note", title: "4-player game", text: "Assign 1 Damage token to two Beheaded of your choice at the start of the game." },
            { t: "h", text: "Beheaded board overview" },
            { t: "dl", items: [
              { term: "Name", def: "Your Beheaded's name and flavour text." },
              { term: "Health Track", def: "Your Health Points, where Damage tokens go." },
              { term: "Draw / Discard Piles", def: "Your face-down Combat deck and face-up discard." },
              { term: "Scroll Tracks", def: "Track boosts to your abilities during a Run." },
              { term: "Equipment Slots", def: "Where Equipment cards are placed." },
              { term: "Active Space", def: "Where you play your Active card during Combat." },
            ] },
            { t: "h", text: "The Scroll Tracks" },
            { t: "p", html: "The three Scroll Tracks each have their own colour and symbol:" },
            { t: "icons", items: [
              { img: "ability-survival.png", term: "Survival", def: "Green — Health and staying power." },
              { img: "ability-tactics.png", term: "Tactics", def: "Purple — ranged and clever play." },
              { img: "ability-brutality.png", term: "Brutality", def: "Red — raw melee damage." },
            ] },
            { t: "p", html: "Each time you earn a Scroll, slide that colour's marker one space right to unlock a new skill or ability." },
            { t: "note", variant: "tip", title: "Cumulative", text: "Everything to the <strong>left</strong> of a Scroll marker is an active ability, and these stack. When a Health boost unlocks, remember to also move your Max Health marker." },
          ],
        },
      ],
    },

    {
      id: "exploring",
      title: "Exploring a Biome",
      sections: [
        {
          id: "exploring",
          title: "Exploring",
          summary: "The three-step loop through a Biome.",
          blocks: [
            { t: "p", html: "As your Group moves through each Biome, repeat three simple steps:" },
            { t: "steps", items: [
              { n: "1", title: "Move the Group", html: "In order: <strong>choose</strong> a path (per the Movement Rules), <strong>verify</strong> you have the Runes to pass the corridor, <strong>perform</strong> any Checks, then <strong>place</strong> the Group token in the new space." },
              { n: "2", title: "Flip and Reveal", html: "Flip the tile on the new space and carry out its effects." },
              { n: "3", title: "Dead or Alive?", html: "If everyone is alive, repeat steps 1–3. If anyone is dead, the Run ends — go to End of Run." },
            ] },
            { t: "h", text: "Movement rules" },
            { t: "ul", items: [
              "The Group can only move into a space connected by a corridor.",
              "Move only in the direction of the arrows on the corridor.",
              "You cannot skip over any spaces.",
              "After discussion, the First Player makes the final decision on the route.",
            ] },
            { t: "h", text: "Runes" },
            { t: "p", html: "If a Rune symbol blocks a corridor, the Group must possess that Rune (its card flipped to the active side on the Mutation board) to pass. If not, find another path." },
          ],
        },
        {
          id: "tile-icons",
          title: "Tile Icons",
          summary: "What you collect and trigger on tiles.",
          blocks: [
            { t: "icons", items: [
              { img: "first-player.png", term: "First Player", def: "When attached to another icon, that effect is only for the First Player (good or bad) and can't be reassigned." },
              { img: "change-first-player.png", term: "Change First Player", def: "The First Player token passes clockwise — always the first action to take place." },
              { img: "either-or.png", term: "Either / Or", def: "Choose ONE of the listed items. If a choice is a Check, you must be able to pass it to choose it." },
              { img: "equipment.png", term: "Equipment", def: "Take the top Equipment card and give it to a Beheaded to equip." },
              { img: "blueprints.png", term: "Blueprints", def: "Take 1 Blueprint from the bottom of the deck onto the Collector space (available in the Interbiome)." },
              { img: "gold-tooth.png", term: "Gold Tooth", def: "Take 1 Gold Tooth per icon into the Group's Bag." },
              { img: "scroll.png", term: "Scroll", def: "Move 1 Scroll of the indicated colour one space right on 1 player's board." },
              { img: "vial.png", term: "Vial", def: "Immediately remove 1 Damage token from a Beheaded's Health Track." },
              { img: "cell.png", term: "Cell", def: "Take 1 Cell per icon into the Group's Bag." },
              { img: "potion.png", term: "Potion", def: "Take 1 Potion into the Bag. Spend to remove ALL Damage from a Beheaded during Round 0 or instead of a Loot Action." },
              { img: "rune.png", term: "Rune", def: "Flip the matching Rune card on the Mutation board; its use is on the card and it stays with you forever." },
              { img: "check.png", term: "Check", def: "Perform a Check (Survival, Brutality, or Tactics — see Checks)." },
            ] },
          ],
        },
        {
          id: "tile-types",
          title: "Tile Types",
          summary: "Treasure, Merchant, Encounter, Door, Teleport.",
          blocks: [
            { t: "dl", items: [
              { term: "Treasure", def: "Flip the tile and collect the reward(s)." },
              { term: "Cursed Treasure", def: "Flip, collect the reward(s), and suffer the consequences (see Cursed Treasure Key)." },
              { term: "Merchant", def: "Shows what can be bought, how much it costs, and how many times — like the Interbiome market." },
              { term: "Encounter / Elite Encounter", def: "The first step of Combat: shows what you face and how to set it up." },
              { term: "Door", def: "Discover new places and meet interesting new 'people'." },
              { term: "Teleportation", def: "Appears in later Biomes — and you can't access them yet." },
            ] },
          ],
        },
        {
          id: "checks",
          title: "Checks",
          summary: "Testing your Survival, Brutality, or Tactics.",
          blocks: [
            { t: "p", html: "A Check puts your Survival :survival:, Brutality :brutality:, or Tactics :tactics: skills to the test. Passing can open a route or grant bonuses; failing can block progress or deal damage. There are two types:" },
            { t: "h", text: "Hand Checks" },
            { t: "p", html: "If the First Player can discard a Combat card from their hand with the required symbol, the Group passes. If it was a corridor Check, you may move through. If they lack a matching card, the Group fails (and can't take that corridor)." },
            { t: "h", text: "Deck Checks" },
            { t: "p", html: "The First Player draws the top card of their Combat deck. If it shows an indicated icon, they gain the reward; otherwise nothing. The card is discarded. A Deck Check failure in a corridor does <em>not</em> stop you moving through it." },
            { t: "note", variant: "note", title: "After a Check", text: "Refill your hand to 3 cards. If your draw pile is empty, shuffle your discard, place it face-down, and draw from there." },
          ],
        },
      ],
    },

    {
      id: "combat",
      title: "Combat",
      sections: [
        {
          id: "combat-setup",
          title: "Combat Setup",
          summary: "Building the fight from an Encounter tile.",
          blocks: [
            { t: "p", html: "Once you flip an Encounter tile, follow its icons top to bottom:" },
            { t: "steps", items: [
              { n: "1", title: "Place Enemies", html: "Draw a Monster (or Elite Monster) card for each icon of that type on the tile. Place them face up one at a time on the Combat board in the same order, always starting on the leftmost enemy space. Special placement icons may force a card to the leftmost or far-right space instead." },
              { n: "2", title: "Place Loot", html: "Place any indicated tokens on the Group space. Equipment / Blueprint loot is drawn and placed face up on the Group space (Blueprints from the bottom of the deck)." },
            ] },
            { t: "note", variant: "note", title: "Who are we fighting?", text: "<strong>Enemies</strong> covers Monsters, Elites, Bosses, and Boss minions. Terms matter — some Equipment or attacks target specific Enemies (e.g. Elites only)." },
            { t: "note", variant: "note", title: "Occupied space", text: "If a special-placement Enemy would land where an Enemy already is, place it like a normal Enemy instead." },
          ],
        },
        {
          id: "the-cards",
          title: "Cards & the Combat Board",
          summary: "Reading Combat cards, Monster cards, and the board.",
          blocks: [
            { t: "h", text: "Combat card anatomy" },
            { t: "dl", items: [
              { term: "Check Symbol", def: "Used when performing a Check." },
              { term: "Beheaded / Card Name", def: "Whose card it is, or the type of attack." },
              { term: "Round Numbers", def: "The Combat Round in which each Action takes place." },
              { term: "Actions", def: "The Actions that take place that round." },
              { term: "Range icon", def: "Which Enemies the action affects, or if it's a Group action." },
            ] },
            { t: "h", text: "Monster card anatomy" },
            { t: "dl", items: [
              { term: "Health", def: "Damage needed to kill the Monster (number in the heart)." },
              { term: "Elite icon", def: "A star marks an Elite Monster." },
              { term: "Round Numbers / Actions", def: "What the Monster does, and when." },
              { term: "Round IV icon", def: "An Action taken at the end of Combat if the Monster is still alive." },
              { term: "Death", def: "The Group's reward (or penalty!) for killing the Monster." },
            ] },
            { t: "h", text: "The Combat board" },
            { t: "dl", items: [
              { term: "Combat Round Marker", def: "Tracks the current Combat round." },
              { term: "Group space", def: "The Group's position relative to the Monsters; also where Loot is placed." },
              { term: "Enemy spaces", def: "Where Monster cards are placed." },
              { term: "Wall/Hole space", def: "Holds the Wall/Hole token when required; some Equipment cares whether a Wall or Hole is present." },
              { term: "Round End space", def: "The actions taken at the end of each Combat Round." },
            ] },
          ],
        },
        {
          id: "playing-combat-cards",
          title: "Playing Combat Cards",
          summary: "How many cards each player count plays.",
          blocks: [
            { t: "p", html: "Regardless of player count, a total of <strong>3 Combat cards</strong> are played each time. Starting with the First Player and going clockwise, each player: (1) chooses a card from hand, (2) announces ONE Action on it and which Round it happens in, and (3) places it face-down on their Active Space. Then all cards are revealed." },
            { t: "dl", items: [
              { term: "2-player", def: "First Player plays 2 cards, the other plays 1. Effects on the First Player apply only to their first-played card; at end of Combat the first card is discarded, then the second on top." },
              { term: "3-player", def: "All players play 1 card." },
              { term: "4-player", def: "Only 3 cards may be played; players decide who passes. The First Player must take part and cannot pass." },
            ] },
            { t: "p", html: "Possible Actions: <strong>Do Damage, Block, Loot, Perform a Skill, Assign a State, Heal</strong>." },
            { t: "h", text: "The Passing Player" },
            { t: "p", html: "On their turn, the passing player reveals the top card of their Combat deck instead of playing. If it has a Scroll symbol, advance that Scroll 1 space (choose, if two symbols); the card is discarded either way. They may then discard any hand cards and re-draw. A passing player takes no part in Combat: no Damage, no States, no Loot." },
            { t: "h", text: "Preparation Phase" },
            { t: "ul", items: [
              "Keep the strategy discussion <strong>BRIEF</strong> — under a minute. You're under attack.",
              "You may discuss priorities (which Enemies to focus, what to watch for).",
              "You may NOT discuss what icons are on your cards.",
            ] },
          ],
        },
        {
          id: "combat-phase",
          title: "Combat Phase",
          summary: "Rounds, Round 0, and Range.",
          blocks: [
            { t: "note", variant: "golden", title: "Golden Rule of Combat", text: "Combat always resolves <strong>left to right</strong> on the Combat board. The leftmost Enemy acts first, then the Group, then each Enemy to the right. All Combat card and Monster Actions must be played, if possible." },
            { t: "h", text: "Rounds I, II, III" },
            { t: "p", html: "A Combat Round is all Beheaded and Enemies performing the Action in that round's space on their card. The Group acts First-Player-first, clockwise; Monsters act left to right." },
            { t: "h", text: "Round 0" },
            { t: "p", html: "A special round before Round I, triggered only if Equipment, Skills, or Monsters with the Round 0 icon are in play. It's also when the Group can use <strong>Potions</strong>: discard a Potion to remove all Damage from one Beheaded." },
            { t: "h", text: "Range" },
            { t: "p", html: "The Range icon on an Action shows which Enemies you can hit. White spaces are valid targets; unless stated otherwise, only one Enemy is targeted at a time. If an Enemy is killed and removed, attacks targeting that empty space have no effect." },
          ],
        },
        {
          id: "combat-actions",
          title: "Combat Actions",
          summary: "Damage, Block, Skill, Loot.",
          blocks: [
            { t: "icons", items: [
              { img: "act-damage.png", term: "Damage", def: "Deal Damage to an Enemy, or (for Enemies) to a Beheaded." },
              { img: "act-block.png", term: "Block", def: "Place a Shield token; discard it to cancel one Damage." },
              { img: "act-skill.png", term: "Skill", def: "Activate a Skill on your board or Equipment (Beheaded only)." },
              { img: "act-loot.png", term: "Loot", def: "Take one type of item from the Group space (Beheaded only)." },
            ] },
            { t: "h", text: "Damage" },
            { t: "dl", items: [
              { term: "Beheaded", def: "Assign 1 Damage token to a targeted Enemy. When Damage equals or exceeds the Enemy's Health, it's killed." },
              { term: "Enemy", def: "Assign 1 Damage token to a Beheaded (or Companion) of choice, First Player having the final word. When all spaces left of the Max Health marker are filled, that Beheaded is killed." },
            ] },
            { t: "h", text: "Block" },
            { t: "p", html: "Place 1 Shield token (on a Beheaded board or Enemy card). Discard a Shield to cancel one incoming Damage instead of assigning it." },
            { t: "ul", items: [
              "Characters may have multiple Shields.",
              "Shields do <strong>not</strong> block States (Poisoned, Frozen, etc.).",
              "Any attack triggered by taking Damage is cancelled if that Damage is blocked.",
            ] },
            { t: "h", text: "Skill (Beheaded only)" },
            { t: "ul", items: [
              "Activate one Skill on your board (left of the Scroll) or on Equipment you carry.",
              "Performing a Skill is never mandatory.",
              "Multiple Skill activations may hit different Skills or the same one repeatedly.",
              "Scroll-track Skills can only be activated once per Combat Round.",
            ] },
            { t: "h", text: "Loot (Beheaded only)" },
            { t: "p", html: "Take all of <em>one</em> type of item on the Group space into the Bag (e.g. choose the two Gold Teeth OR the one Cell). Looted Scrolls and Equipment are assigned at end of Combat. Alternatively, spend your Loot action to discard a Potion and remove all Damage from a Beheaded." },
          ],
        },
        {
          id: "states",
          title: "States",
          summary: "Poisoned, Bleeding, On Fire, Frozen, Marked.",
          blocks: [
            { t: "p", html: "States work the same for Beheaded and Enemies — place a token of the appropriate type on the card or board." },
            { t: "icons", items: [
              { img: "state-poisoned.png", term: "Poisoned", def: "Apply 1 Damage per Poisoned token during the Round End Phase of every Combat Round." },
              { img: "state-bleeding.png", term: "Bleeding", def: "Any character still Bleeding after Combat Round III dies." },
              { img: "state-on-fire.png", term: "On Fire", def: "The first On Fire token has no effect; a second On Fire token kills the character immediately." },
              { img: "state-frozen.png", term: "Frozen", def: "Placed on the character's next Combat line that has an Action; all that round's Actions are skipped by the Frozen character." },
              { img: "state-marked.png", term: "Marked", def: "A Marked character suffers +1 to any Damage they receive for the rest of Combat, per token." },
            ] },
            { t: "note", variant: "note", title: "Immunity", text: "An Immune character simply doesn't get the token, so it has no effect. You can deliberately 'assign' a State to an Immune Beheaded to cancel that State's effect." },
          ],
        },
        {
          id: "equipment-combat",
          title: "Equipment in Combat",
          summary: "Timed, Always Active, Skill, Companions.",
          blocks: [
            { t: "dl", items: [
              { term: "Timed — Choose (/)", def: "Used in the indicated round instead of the Action on your Combat card." },
              { term: "Timed — More (+)", def: "Used in the indicated round; if your Combat card has an Action there, it adds to it." },
              { term: "Always Active", def: "Triggers automatically during Combat, as many times as it is triggered." },
              { term: "Skill", def: "Activated with a Skill Action; usable only as many times as you have Skill actions." },
            ] },
            { t: "note", variant: "note", title: "Timed limit", text: "Only 1 Timed Equipment card per Combat card per round, and you can't use the same Timed Equipment twice in one round." },
            { t: "h", text: "Companions" },
            { t: "ul", items: [
              "Equipped like Equipment (they need an available slot).",
              "They have Health and can take Damage; when killed they go to the Equipment discard.",
              "They cannot receive Shields or States, and cannot be healed.",
            ] },
          ],
        },
        {
          id: "round-end",
          title: "Killing Monsters & Round End",
          summary: "Death bonuses, Round End, Round IV, upkeep.",
          blocks: [
            { t: "h", text: "Killing a Monster" },
            { t: "ul", items: [
              "Immediately take its <strong>Death Bonus</strong> (everything in the Death space) into the Bag. A Damage icon there must be assigned to a Beheaded.",
              "Remove the card to the Monster discard; the space stays empty until the Round End phase.",
              "If all Monsters are dead, Combat is NOT over — States still tick and you still play through all rounds (you may still Loot; Skills may be skipped).",
            ] },
            { t: "h", text: "Round End Phase" },
            { t: "ul", items: [
              "Assign 1 Damage per Poison token on all boards and Monster cards.",
              "Move Monsters toward the Group to fill empty spaces to the right of the Group; a far-right Enemy may move two spaces if both are empty. Never move Enemies past the Group.",
            ] },
            { t: "h", text: "Final Round & Round IV" },
            { t: "p", html: "If Monsters remain at the end of Round III: apply Poison damage; any Bleeding character is killed; any Monster with a Round IV icon performs its Round IV action." },
            { t: "h", text: "End-of-Combat Upkeep" },
            { t: "ul", items: [
              "Assign looted Scrolls and Equipment to Beheaded who fought; looted Blueprints go to the Collector space. Passing players get no Loot.",
              "Discard un-killed Monsters and un-looted Loot (unlooted Blueprints go to the bottom of the Blueprint deck).",
              "Discard all Shields and State tokens, and your Active card.",
              "Draw back up to 3 Combat cards (shuffle discard into deck if needed).",
            ] },
          ],
        },
        {
          id: "equipment-cards",
          title: "Equipment Cards",
          summary: "Slots and equipping.",
          blocks: [
            { t: "p", html: "Each Beheaded starts with ONE Equipment slot, so only one piece of Equipment until more slots are unlocked." },
            { t: "ul", items: [
              "When you gain Equipment, either equip it in the first available slot or discard it. You may discard as many Equipment cards as you like while equipping one.",
              "Once equipped, Equipment can't be traded during that Run.",
              "Equipment may be discarded during the Interbiome.",
            ] },
          ],
        },
      ],
    },

    {
      id: "between",
      title: "Between & After",
      sections: [
        {
          id: "dying",
          title: "Dying & Finishing the Biome",
          summary: "When a Beheaded falls, and when you escape.",
          blocks: [
            { t: "note", variant: "warn", title: "Dying", text: "If any Beheaded's Health Track fills with Damage (left of the Max Health marker), that Beheaded is dead and your Run is over — go to End of Run. If a Beheaded dies during Combat, you must still finish the Combat." },
            { t: "p", html: "Survived all your Combats and reached one of the two Exits? You've finished the Biome — move on to the Interbiome, then the next Biome (or Boss)." },
          ],
        },
        {
          id: "interbiome",
          title: "The Interbiome",
          summary: "Catch your breath; shop; move on.",
          blocks: [
            { t: "steps", items: [
              { n: "1", title: "Collect Blueprint(s)", html: "Any Blueprints on the Collector space are placed on top of the Equipment deck for free — permanently part of your Equipment deck now." },
              { n: "2", title: "Visit the Market", html: "Each Interbiome character offers items to purchase (what / cost / how many times), like Merchant tiles." },
              { n: "3", title: "Cleanup", html: "Remaining Equipment cards are discarded; remaining Blueprints go to the bottom of the Blueprint deck." },
            ] },
            { t: "h", text: "Market Actions (left to right)" },
            { t: "dl", items: [
              { term: "The Healer", def: "Pay the indicated Gold Teeth to remove 1 Damage from a Beheaded, as many times as indicated." },
              { term: "The Merchant", def: "Draw the indicated number of Equipment cards, buy any for the listed cost, and equip them immediately." },
              { term: "The Collector", def: "Draw the indicated number of Blueprints from the bottom of the deck, buy any, and place them on top of the Equipment deck in any order." },
            ] },
            { t: "note", variant: "note", title: "Cells", text: "Cells may NOT be spent in the Interbiome." },
            { t: "h", text: "The Next Biome" },
            { t: "p", html: "Return the finished Biome's tiles, Monster/Elite cards, and Blueprints to the box (Equipment stays). Then set up the next Biome — or Boss — indicated by the Exit you passed through." },
          ],
        },
        {
          id: "bosses",
          title: "Fighting a Boss",
          summary: "Turns, instances, and winning.",
          blocks: [
            { t: "p", html: "Take the Boss Reference sheet and follow its Setup. The sheet has all the specifics; these rules are common to all Bosses:" },
            { t: "note", variant: "note", title: "The Boss is an Enemy", text: "A Boss is an <strong>Enemy</strong>, not a Monster — Enemy effects apply, Monster/Elite effects are ignored. Notably, the Boss does not automatically move toward the Beheaded at the end of a round." },
            { t: "h", text: "Turns" },
            { t: "p", html: "Boss Combats run over <strong>Turns</strong>, each being all Combat Rounds I–IV. Round 0 is played only at the very start and at the start of each new Boss instance. After Round III/IV, start a new Turn: draw back up to 3 cards, pass the First Player token clockwise, and play new cards face-down." },
            { t: "h", text: "Boss Instances" },
            { t: "p", html: "Each Boss has at least 2 instances (the two card sides). When the first instance is defeated: the Turn ends immediately; remove all States/Shields from the Boss and the Beheaded; flip the Boss card; discard Active cards and draw a new Combat card; Combat restarts with the new instance from Round 0. Other board elements (Fire Strikes, Shurikens, etc.) remain." },
            { t: "h", text: "End of Boss Battle" },
            { t: "ul", items: [
              "<strong>A Beheaded dies:</strong> you lose; the battle ends at the end of the current Turn. Go to End of Run: Death.",
              "<strong>The Boss dies:</strong> the battle ends immediately when the final instance dies — you win! Go to End of Run: Success.",
            ] },
            { t: "note", variant: "warn", title: "Victory requires survivors", text: "All Beheaded must be alive when the Boss dies for it to count as a victory." },
          ],
        },
        {
          id: "end-of-run",
          title: "End of Run",
          summary: "Death and Success both reset — but you keep your Cells.",
          blocks: [
            { t: "h", text: "Death" },
            { t: "p", html: "You've died — but your journey has just begun. You now get to spend Cells to grow stronger. The price of death — your Group must:" },
            { t: "ol", items: [
              "Discard all Bag items <strong>except Cells</strong> (Equipment shuffles back into its deck; Blueprints go to the bottom of theirs).",
              "Put any Blueprints on the Collector space onto the bottom of the Blueprint deck.",
              "Discard all equipped Equipment and shuffle the discard into the Equipment deck — Blueprint gear you earned this Run is now permanently in your deck.",
              "Remove all States, Shields, and Damage from Beheaded boards, and reset all Scrolls and Max Health markers to their starting spaces.",
            ] },
            { t: "h", text: "Success" },
            { t: "p", html: "You killed a Boss! Read the Victory section on the Boss Reference Sheet for your reward, then follow steps 1–4 of Death above." },
          ],
        },
      ],
    },

    {
      id: "progression",
      title: "Progression",
      sections: [
        {
          id: "mutation-board",
          title: "The Mutation Board",
          summary: "Where permanent progress lives.",
          blocks: [
            { t: "p", html: "The Mutation Board holds cards bought with Cells at the end of a Run, and is how the Group's progress is <strong>saved</strong> between Runs. Cards here are permanent and survive death." },
            { t: "dl", items: [
              { term: "Runes", def: "Discover a Rune and flip its card to the coloured side; the Group possesses it for all future Runs." },
              { term: "Start of Game", def: "These cards give permanent advantages before a Run begins — remember to apply them when starting." },
              { term: "During Game", def: "These give permanent advantages during a Run." },
              { term: "Skill", def: "The Group may only have 1 Skill card at a time; the card explains how to replace an existing Skill." },
              { term: "Boss Cells", def: "Kill the Hand of the King to discover what this space does…" },
            ] },
            { t: "note", variant: "note", title: "Running out of space", text: "If the Mutation board fills up, either remove an existing card (losing its ability) or don't place the new one. The removed/unplaced card goes to the Beheaded tuckbox and can return in future Runs." },
            { t: "note", variant: "tip", title: "Saving your game", text: "When you're done, leave all cards in their slots and fold the Mutation board shut to preserve your progress." },
          ],
        },
        {
          id: "spending-cells",
          title: "Spending Your Cells",
          summary: "Upgrade decks and the Well.",
          blocks: [
            { t: "note", variant: "warn", title: "Use them or lose them", text: "Cells can't be carried between Runs — any unspent Cells are discarded and lost." },
            { t: "h", text: "The Upgrade decks" },
            { t: "p", html: "Three decks — <strong>Survival, Tactics, Brutality</strong> — match the Scroll Tracks. Spend Cells from your Bag on as many Upgrades as you like. Each Upgrade costs 2 Cells, and you take the bottom card of the chosen deck." },
            { t: "dl", items: [
              { term: "Permanent Mutations", def: "Slide into a Mutation board slot for a permanent group effect." },
              { term: "Improved Combat cards", def: "Add to a Beheaded's Combat deck; used in all future Runs (unless Purged) and freely reassignable between Beheaded." },
              { term: "Instruction cards", def: "Just follow the written instructions." },
              { term: "Feat cards", def: "Place on the Mutation board per the card; an optional task that rewards you once its requirements are met." },
            ] },
            { t: "h", text: "The Well" },
            { t: "p", html: "Throw 1 Cell into the mysterious Abandoned Well — who knows what might happen? You can do this as many times as you want." },
          ],
        },
        {
          id: "combat-deck",
          title: "Your Combat Deck & Purging",
          summary: "Deck size limits and removing cards.",
          blocks: [
            { t: "p", html: "Your Combat Deck starts with 6 ST cards and grows as you add Improved Combat cards. There's no maximum size, but it can never contain fewer than 6 cards." },
            { t: "p", html: "You can't permanently remove cards (including ST cards) unless a game element lets you perform a <strong>Purge Action</strong>: slide a card into the tray slot to remove it from the game forever. When no deck is specified, you may Purge any card from the Equipment deck, any Beheaded deck, or Serenade's deck." },
          ],
        },
        {
          id: "resetting",
          title: "Resetting Your Game",
          summary: "Returning everything to the start.",
          blocks: [
            { t: "p", html: "To reset the campaign to its original state (to lend it or restart with newcomers), sort cards by their bottom-right codes — not by their backs:" },
            { t: "ol", items: [
              "<strong>Purge:</strong> retrieve all Purged cards and sort them into their Upgrade decks.",
              "<strong>Mutation board:</strong> flip all Runes to the grey side; sort the rest into Upgrade decks.",
              "<strong>Beheaded decks:</strong> set aside ST cards; sort the rest into Upgrade decks.",
              "<strong>Equipment/Blueprints:</strong> set aside ST cards; sort the rest by Biome code (B1–B7) or Secrets (S).",
              "<strong>Biomes:</strong> for each Biome, separate its Monster/Elite and Blueprint cards back to the box; sort the rest into Upgrade decks.",
            ] },
          ],
        },
      ],
    },

    {
      id: "solo",
      title: "Solo Mode",
      sections: [
        {
          id: "solo-setup",
          title: "Solo Mode: Serenade",
          summary: "Playing alone with an AI partner.",
          blocks: [
            { t: "p", html: "Choose a Beheaded and proceed as though it were a multiplayer game, with <strong>Serenade</strong> as your partner. The Beheaded always plays two cards (like the First Player in a 2-player game)." },
            { t: "h", text: "Setup" },
            { t: "ul", items: [
              "Place the Serenade board 'POWER' side up to the right of your Beheaded board, leaving room for a discard pile.",
              "Place the Serenade Scroll on the first Scroll space.",
              "Shuffle the 3 Serenade Combat cards into a face-down pile on the board.",
              "Give the First Player token to the Beheaded — but Serenade can take the First Player role during the Run.",
            ] },
            { t: "note", variant: "note", title: "No Equipment", text: "Serenade has no Equipment slots and cannot be assigned Equipment cards. It has only 4 Health — assign Damage wisely. It can take States and other Beheaded effects." },
          ],
        },
        {
          id: "serenade-combat",
          title: "Serenade in Combat",
          summary: "How Serenade acts and powers up.",
          blocks: [
            { t: "p", html: "The Beheaded plays their cards, then flips the top card of Serenade's deck; Serenade performs that card's Combat actions." },
            { t: "p", html: "Serenade also activates a power based on the symbol on the top card of the <em>Beheaded's</em> Combat discard pile, in the indicated round (e.g. +1 Damage in Round III, Freeze in Round 0, Target in Round 0). No card in the discard → no special power. Multiple symbols → you choose. No symbol → nothing." },
            { t: "p", html: "At end of Combat, discard the top Serenade card face-down, and discard the Beheaded's cards in the order played. If Serenade's deck runs out, use the actions printed on its board for the rest of the Biome; its discard may only be reshuffled during the Interbiome." },
            { t: "h", text: "Serenade's Combat deck" },
            { t: "p", html: "You may add Improved Combat cards to Serenade's deck and Purge cards from it. Minimum size is 3, no maximum." },
            { t: "h", text: "Rewards, transformation & death" },
            { t: "ul", items: [
              "Serenade can collect a Scroll obtained during the game (unless it's destined for the Player); whatever the colour, the Serenade Scroll advances one space.",
              "Serenade can be healed and assigned Upgrade cards at end of Run, like a Beheaded.",
              "When the Serenade Scroll passes the Power Up space, Serenade <strong>transforms</strong>: flip the board to MELEE, fully heal, keep its cards/discard, and reset the Scroll to the first space of the new track.",
              "Serenade is treated like a Beheaded — if it dies, the Run is over.",
            ] },
          ],
        },
      ],
    },

    {
      id: "reference",
      title: "Reference",
      sections: [
        {
          id: "keys",
          title: "Cursed Treasure, Bell & Constraint Keys",
          summary: "Biome-specific penalty effects.",
          blocks: [
            { t: "h", text: "Cursed Treasure Key" },
            { t: "dl", items: [
              { term: "Stilt Village (B4)", def: "Discard all Potions · all Beheaded take Damage until each has only 1 Health remaining." },
              { term: "Clock Tower (B5)", def: "Discard all Potions · all Beheaded discard 1 equipped Equipment card." },
              { term: "Forgotten Sepulcher (B6)", def: "No communication during Combat preparation · flip all lit Lanterns to unlit." },
              { term: "High Peak Castle (B7)", def: "Discard all Gold Teeth · cannot use Runes until end of Biome." },
            ] },
            { t: "h", text: "Bell Key — Clock Tower (B5)" },
            { t: "ul", items: [
              "First Player takes 2 Damage.",
              "First Player loses 1 Scroll upgrade of their choice.",
              "First Player discards 1 Equipment.",
            ] },
            { t: "h", text: "Constraint Key — High Peak Castle (B7)" },
            { t: "ul", items: [
              "First Player cannot perform their Action in a Combat Round.",
              "You must have 2 Shields to Block 1 Damage.",
              "Potions cannot be used.",
              "Skill Action cannot be used.",
            ] },
          ],
        },
        {
          id: "credits",
          title: "Credits",
          summary: "Who made the game.",
          blocks: [
            { t: "dl", items: [
              { term: "Game Design", def: "Antoine Bauza, Corentin Lebrat, Ludovic Maublanc, Théo Rivière" },
              { term: "Head of Studio", def: "Manuel Sanchez" },
              { term: "Development", def: "Olivier Lamontagne, Christian Lemay, Manuel Sanchez" },
              { term: "Illustrators", def: "Laure de Chateaubourg, Naïade, Robin Lagofun, Paul Vérité" },
              { term: "Art Direction", def: "Sébastien Bizos" },
            ] },
            { t: "p", html: "© 2024 Le Scorpion Masqué inc. Based on the Dead Cells video game by Motion Twin / Evil Empire." },
          ],
        },
      ],
    },
  ],
});

/* Contra: The Board Game — rules content.
   Source: Contra Rulebook v2 (Blacklist Games / Konami).
   Block types understood by the renderer (see app.js):
   p, h, ul, ol, steps, dl, note, example, faq, story, kv, divider */

Rulebooks.register({
  id: "contra",
  title: "Contra",
  fullTitle: "Contra: The Board Game",
  tagline: "Cooperative commando action for 1–4 players",
  accent: "#7cb342",
  cover: "▚",
  meta: [
    { label: "Players", value: "1–4" },
    { label: "Type", value: "Cooperative" },
    { label: "Publisher", value: "Blacklist Games · Konami" },
  ],
  blurb:
    "Each player is a commando defending Earth from the Red Falcon Army. Traverse a stage, complete objectives, and destroy the boss before your medals run out.",

  chapters: [
    {
      id: "intro",
      title: "Introduction",
      sections: [
        {
          id: "briefing",
          title: "Mission Briefing",
          summary: "The story so far.",
          blocks: [
            { t: "p", html: "Created by the Earth Federation Government, Contra is composed of the world's most elite soldiers. With superior skills and an indomitable spirit, these commandos have been at the forefront of the fight with the extraterrestrial forces that have recently come to threaten humanity…" },
            { t: "p", html: "Welcome to Contra, soldier. Here's the sitrep." },
            { t: "p", html: "Two months have passed since the end of the catastrophic Alien Wars, and society has slowly been rebuilding in the hopes of returning to how things were before the entity known as <strong>Red Falcon</strong> rained its fury across the globe." },
            { t: "p", html: "Bill Rizer and Lance Bean, the war heroes you've undoubtedly heard about, have since been busy instructing the next generation of our elite task force. The moment Red Falcon went down, they knew it was only a matter of time before hostile forces from beyond the stars attempted another incursion." },
            { t: "p", html: "Our satellites picked up bizarre imagery in the <strong>Galuga Archipelago</strong> — the location of Contra's first encounter with the Red Falcon Army. There seems to be new activity in the remains of the old alien base, and some of the structures seem to have been rebuilt and enhanced. We sent a single recon drone in, and what we saw before contact was lost was most worrisome: <strong>Gomeramos King</strong>. The beating heart of Red Falcon's second-in-command, Java, was being carted around in some sort of large preservation chamber." },
            { t: "p", html: "There's no time to waste, soldier. Grab your weapon and board the chopper. It's time to go back to where it all began." },
          ],
        },
        {
          id: "overview",
          title: "Overview",
          summary: "What the game is and how you win or lose.",
          blocks: [
            { t: "p", html: "<strong>Contra: The Board Game</strong> is a cooperative board game for 1–4 players based on the acclaimed Contra video game series. Each player takes on the role of a commando, defending Earth from alien invaders and the evil machinations of the Red Falcon Army." },
            { t: "p", html: "Each game consists of a <strong>stage</strong> that the players traverse, completing objectives while confronting a dangerous <strong>boss</strong>." },
            { t: "note", variant: "tip", title: "Win &amp; Lose", text: "The players <strong>lose</strong> if any commando must discard a medal token and cannot. The players <strong>win</strong> by destroying the boss." },
          ],
        },
        {
          id: "golden-rule",
          title: "Golden Rule",
          summary: "Card effects beat the rulebook.",
          blocks: [
            { t: "note", variant: "golden", title: "Golden Rule", text: "If any card effect contradicts a rule found in this rulebook, the <strong>card effect takes priority</strong>." },
            { t: "p", html: "If there is ever any conflict in card effect timing when several effects would resolve at the same time, priority goes to <strong>stage cards</strong>, then <strong>enemy cards</strong>, then <strong>commando cards</strong>, in that order." },
          ],
        },
      ],
    },

    {
      id: "components",
      title: "Components & Cards",
      sections: [
        {
          id: "components",
          title: "Components",
          summary: "Everything in the box.",
          blocks: [
            { t: "ul", items: [
              "2 double-sided stage tiles",
              "8 miniatures (4 commandos, 4 bosses)",
              "212 standard cards — 80 commando, 80 enemy, 44 stage, 4 turn, 4 mission",
              "42 small cards — 16 weapon, 18 objective, 4 move reminder, 4 attack reminder",
              "12 card dividers",
              "10 custom dice — 5 commando dice, 5 enemy dice",
            ] },
            { t: "h", text: "170 tokens" },
            { t: "ul", items: [
              "36 advantage tokens (3 types)",
              "4 pillbox sensor tokens",
              "12 medal tokens",
              "12 objective tokens",
              "8 bubble dimer tokens",
              "12 stage tokens",
              "56 damage tokens",
              "5 each of Greeders, Gunners, Snipers, Buggers, Garths, Rangels (1 of each color)",
            ] },
          ],
        },
        {
          id: "card-overview",
          title: "Card Overview",
          summary: "Reading commando and enemy cards.",
          blocks: [
            { t: "h", text: "Commando deck" },
            { t: "dl", items: [
              { term: "Default Weapon", def: "The standard weapon the commando starts with (name, attack power, range). Weapon cards are placed here when gained." },
              { term: "Commando Ability", def: "The commando's unique ability and the type of advantage token it costs to perform it." },
              { term: "Advantage Type", def: "Each commando card belongs to a type of advantage, indicating which type it can be spent as." },
              { term: "Card Ability", def: "A commando card may instead be played for this ability." },
            ] },
            { t: "h", text: "Enemy deck" },
            { t: "dl", items: [
              { term: "Boss Commando Value", def: "Indicates how many commandos a boss card is for. During setup, include each boss card that does not exceed the number of commandos in the game." },
              { term: "Health Value", def: "The amount of damage a card must suffer before being defeated." },
              { term: "Enemy Ability", def: "Some enemies have constant abilities that change how commandos interact with them." },
              { term: "Special Ability", def: "When a result is rolled during an enemy attack, this ability may trigger as an additional effect." },
              { term: "Defeated Ability", def: "When defeated, some boss cards add an additional ability for the remainder of the game." },
              { term: "Enemy Color", def: "Each enemy card corresponds to an enemy of a specific color, matching its token." },
            ] },
          ],
        },
      ],
    },

    {
      id: "setup",
      title: "Setup",
      sections: [
        {
          id: "setup",
          title: "Setup",
          summary: "Six steps to start a game.",
          blocks: [
            { t: "steps", items: [
              { n: "1", title: "Choose Commandos", html: "Each player chooses 1 commando, gathering its deck and miniature, a mission card, and one of each objective token.<ul><li>Find your commando's <strong>character card</strong> and place it in your play area; shuffle the rest into your draw deck to its left.</li><li>Draw a starting hand of <strong>4 cards</strong> and place <strong>3 medal tokens</strong> on your character card.</li><li>You may <strong>mulligan</strong>: discard any number of cards, draw back up to 4, then shuffle the discards back in.</li><li>Place your mission card nearby with one of each objective token next to it.</li></ul>" },
              { n: "2", title: "Choose Stage", html: "Choose a stage and gather its tile and deck (the <strong>Jungle</strong> stage is recommended for a first game). Place the tile in the center, place a pillbox sensor token on each pillbox sensor icon, and place each commando in a start space. Then build the stage play area:<ul><li>Place the stage <strong>Reference</strong> card \"Setup\" side up, leaving room to its right.</li><li>Follow its Setup effect, adding cards to the right in the exact order specified.</li><li>Shuffle the stage deck and place it facedown to the left of the Reference card.</li></ul>" },
              { n: "3", title: "Choose Enemy", html: "Choose an enemy deck to fight.<ul><li>Remove the boss cards and Reference card; shuffle and place the enemy deck facedown. Place the Reference \"Setup\" side up to the right of it.</li><li>Gather the matching boss miniature and enemy tokens.</li><li>Follow the Reference card's Setup effect.</li><li>Remove each boss card that exceeds the player count, then give each commando 1 remaining boss card (\"Defeated\" side down). Place the boss miniature on the boss spaces.</li></ul>" },
              { n: "4", title: "Prepare Dice, Tokens & Card Decks", html: "Place the commando and enemy dice near the play area. Create token pools for each advantage type and for damage. Shuffle the objective and weapon decks and place them facedown nearby." },
              { n: "5", title: "Gain Starting Advantage & Reminders", html: "Each commando gains 1 of each type of advantage token. Each takes 1 Move and 1 Attack reminder card, and 1 turn card placed \"Commando Turn\" faceup above their character card." },
              { n: "6", title: "Draw Enemies", html: "Each commando draws 1 enemy card from the enemy deck." },
            ] },
          ],
        },
        {
          id: "difficulty",
          title: "Difficulty Ratings",
          summary: "Mix and match for your challenge level.",
          blocks: [
            { t: "p", html: "Each stage's \"Stage Setup\" card lists the relative difficulty of that stage, and each enemy deck's reference card lists the difficulty of that enemy deck. Mix stages and enemy decks to customize your game's complexity and challenge." },
          ],
        },
      ],
    },

    {
      id: "play",
      title: "Playing the Game",
      sections: [
        {
          id: "game-round",
          title: "The Game Round",
          summary: "Three turns, repeated each round.",
          blocks: [
            { t: "p", html: "Each game is played over a number of rounds until the players win or lose. Each round consists of three turns, resolved in order:" },
            { t: "steps", items: [
              { n: "1", title: "Commando Turns", html: "In an order of the group's choosing, each player takes a turn following the steps of the commando turn." },
              { n: "2", title: "Enemy Turn", html: "In an order of the group's choosing, each player resolves an enemy attack, one at a time." },
              { n: "3", title: "Stage Turn", html: "Activate each stage card in the stage play area, then draw and resolve 1 stage card." },
            ] },
            { t: "p", html: "After the stage turn, players begin another round by flipping their turn cards and each drawing an enemy (as noted on the turn card). This continues until the game ends." },
          ],
        },
        {
          id: "drawing-enemies",
          title: "Drawing Enemies",
          summary: "How enemies enter your play area.",
          blocks: [
            { t: "p", html: "Each time a commando draws an enemy card, place that card to the right of the rightmost card in your play area. Then place the corresponding enemy token in the empty enemy space nearest your commando. If all enemy spaces are occupied, place it in the empty space nearest the enemy space closest to the commando." },
            { t: "note", variant: "warn", title: "3-enemy limit", text: "A commando cannot have more than <strong>3 enemies</strong> in their play area (including their boss card). If you must draw an enemy while already holding 3, you instead immediately <strong>suffer 1 damage</strong>." },
          ],
        },
        {
          id: "commando-turns",
          title: "Commando Turns",
          summary: "Move, attack, and play cards — in any order.",
          blocks: [
            { t: "p", html: "Players take turns in any order. Each commando finishes their turn entirely before the next. While taking their turn a player is the <strong>active player</strong>, and may do the following in any order:" },
            { t: "dl", items: [
              { term: "Move", def: "Once during their turn, the active player may Run or Jump. Flip your Move reminder card to track this." },
              { term: "Attack", def: "Once during their turn, the active player may attack an enemy within range. Flip your Attack reminder card to track this." },
              { term: "Play Cards", def: "Play any number of cards from hand. Cards may grant special abilities, extra moves, or extra attacks — these are additional and do not affect your normal move and attack." },
            ] },
            { t: "h", text: "Commando character card abilities" },
            { t: "p", html: "Each commando has a unique ability on their character card, activated by spending the corresponding advantage. These may be used during any commando, enemy, or stage turn. Unless otherwise specified, they cannot be activated during a commando attack and cannot interrupt effects already resolving — use them before or after an effect. Each may be resolved multiple times as long as you can pay the cost." },
            { t: "p", html: "After finishing all activities, the active player draws 1 card and flips their turn card to complete their turn. Play then passes to the next player." },
          ],
        },
        {
          id: "movement",
          title: "Commando Movement",
          summary: "Run up to 3, or Jump 1.",
          blocks: [
            { t: "p", html: "Each time a commando moves, they choose to Run or Jump before moving, and may choose differently each time:" },
            { t: "dl", items: [
              { term: "Running", def: "Move up to 3 spaces." },
              { term: "Jumping", def: "Move 1 space, ignoring the effects of special spaces if desired." },
            ] },
            { t: "p", html: "Commandos may move through spaces occupied by other commandos but cannot end there (if they would, they return to their most recent space). Commandos cannot move into spaces occupied by enemies, but may move into spaces with tokens unless otherwise specified." },
            { t: "p", html: "Each time a commando would move into a special space, they must resolve its effect before continuing — unless they entered by jumping, in which case they may choose which effects to trigger." },
          ],
        },
        {
          id: "special-spaces",
          title: "Special Spaces",
          summary: "Ledges, objectives, pillbox sensors, and more.",
          blocks: [
            { t: "dl", items: [
              { term: "Ledge Spaces", def: "Spaces within a red outline; they represent changes in elevation. You can only cross a red line into a ledge space by jumping. Within a grouping of ledges you only need to jump when increasing elevation — you may run within the group and when decreasing elevation." },
              { term: "Objective Spaces", def: "Once on your turn, when you move into an objective space you may interrupt your turn to resolve it." },
              { term: "Pillbox Sensor Spaces", def: "When you move (or are moved) into a pillbox sensor space containing a token, you may discard that token to draw 1 weapon card." },
              { term: "Stage-Specific Spaces", def: "Some stages have unique spaces, described on their stage cards." },
              { term: "Enemy & Boss Spaces", def: "No effect when commandos enter, but enemies and bosses enter play here." },
            ] },
            { t: "note", variant: "note", title: "Enemies &amp; special spaces", text: "Enemies <strong>ignore</strong> special spaces when moving, unless specified otherwise." },
          ],
        },
        {
          id: "attacks",
          title: "Commando Attacks",
          summary: "Choose a target, roll dice, deal damage.",
          blocks: [
            { t: "p", html: "During their turn each commando may perform 1 attack (card effects may grant more). Each attack is fully resolved before another begins. Resolve these steps in order:" },
            { t: "steps", items: [
              { n: "1", title: "Choose a Target", html: "Choose an enemy within range of your current weapon." },
              { n: "2", title: "Gather &amp; Roll Dice", html: "Gather the number of commando dice your current weapon provides (effects may add dice), then roll. Resolve any <strong>criticals</strong> first: each counts as 1 success and \"explodes,\" adding 1 commando die to the pool which is rolled immediately. Keep resolving criticals as they appear — there is no limit." },
              { n: "3", title: "Resolve Attack", html: "For each advantage-symbol result, you may spend matching advantage to convert it to a success. Each success deals 1 damage to the target. If an attack hits multiple targets, each single damage is applied to each target." },
              { n: "4", title: "Gain Advantage", html: "For each advantage symbol <em>not</em> converted, gain 1 matching advantage token." },
            ] },
            { t: "example", title: "Example 1 — Lance", text: "Lance plays \"Engage\" and targets an enemy within 1 space, granting +1 die. His rifle gives 2 dice, so he rolls 3. He rolls 2 successes and 1 critical. The critical explodes, adding a die that's also a critical, which explodes again into a success. Total: 5 successes (the 3 base + 2 from the criticals). Lance deals 5 damage." },
            { t: "example", title: "Example 2 — Lucia", text: "Lucia's \"Shockwave Pulse\" card specifies its own range and attack pool, so she doesn't use her current weapon (and gets no weapon special ability). She rolls 2 successes and 1 advantage result, chooses not to convert it, and deals 2 damage to each target. She then gains 1 advantage token." },
          ],
        },
        {
          id: "range-damage",
          title: "Range, Damage & Defeating Enemies",
          summary: "Counting spaces and removing enemies.",
          blocks: [
            { t: "dl", items: [
              { term: "Range", def: "Counted in spaces on the stage map. A target is in range when it is a number of spaces away ≤ the attack's range. You may count through special spaces and spaces containing miniatures or tokens." },
              { term: "Dealing Damage", def: "Damage is assigned to the target's enemy card. When a card suffers damage equal to its health value, that enemy is defeated." },
              { term: "Defeating Enemies", def: "A defeated non-boss enemy's card is discarded and its token returned to the supply. A defeated boss card is flipped to its \"Defeated\" side. Each time a commando attacks and defeats an enemy or boss card, that commando draws 1 card. If a stage effect defeats an enemy, choose any commando to draw a card." },
            ] },
          ],
        },
        {
          id: "commando-dice",
          title: "Commando Dice Results",
          summary: "Success, critical, and advantage faces.",
          blocks: [
            { t: "dl", items: [
              { term: "Success", def: "Each success deals 1 damage during a commando attack." },
              { term: "Critical", def: "Treated like a success and \"explodes,\" immediately adding 1 die to the roll." },
              { term: "Advantage Results", def: "Can be converted into successes by spending the matching advantage. Any advantage symbols not converted let you gain 1 advantage of that type." },
            ] },
          ],
        },
        {
          id: "enemy-turn",
          title: "Enemy Turn",
          summary: "Each commando resolves the attack against them.",
          blocks: [
            { t: "p", html: "During the enemy turn, players take turns (in any order) resolving enemy attacks. Unless specified, enemies attack the commando whose play area they're in, regardless of range. Each enemy attack is fully resolved before the next." },
            { t: "steps", items: [
              { n: "1", title: "Gather &amp; Roll Enemy Dice", html: "The attacked commando gathers 1 enemy die per enemy card in their play area (or more from effects) and rolls." },
              { n: "2", title: "Resolve Specials", html: "For each <strong>special</strong> result, resolve the special ability on the leftmost enemy card that hasn't triggered yet this attack (each enemy triggers at most once per attack). Each is its own fully-resolved effect. For each special that cannot be resolved, the attacked commando draws 1 enemy card." },
              { n: "3", title: "Resolve Incoming Damage", html: "Suffer the remaining damage results as a single effect. Spend advantage to prevent it; if you can't prevent all of it, lose a medal. Regardless of how much unprevented damage remains, you cannot lose more than <strong>1 medal per damage effect</strong>." },
            ] },
            { t: "example", title: "Boss adds a die", text: "Sweets has 3 enemy cards: 1 boss card (\"Defeated\" side up) and 2 others. The boss's Defeated ability says she rolls 1 additional die during her enemy attacks, so she rolls 4 enemy dice total." },
            { t: "h", text: "Adding results to the enemy attack pool" },
            { t: "p", html: "Some effects add specific results to the enemy attack pool; resolve these along with the rolled results as if they had been rolled. For example, an effect reading \"Add 1 damage to the enemy attack pool\" is treated as an extra die showing that damage result." },
          ],
        },
        {
          id: "enemy-dice",
          title: "Enemy Dice Results",
          summary: "Damage and special faces.",
          blocks: [
            { t: "dl", items: [
              { term: "Enemy Damage", def: "Each makes the attacked commando suffer the corresponding type of damage." },
              { term: "Enemy Special", def: "Each triggers an enemy's special ability and may spawn additional enemies." },
            ] },
          ],
        },
        {
          id: "enemy-movement",
          title: "Enemy Movement",
          summary: "How enemies path across the map.",
          blocks: [
            { t: "p", html: "When an enemy moves, follow the shortest path toward the destination in the effect. Enemies ignore special spaces and cannot move through spaces containing commandos or other enemies. If the destination is blocked, the enemy moves toward the next closest eligible destination; if all are blocked (or an effect prevents movement), it doesn't move." },
            { t: "p", html: "When an enemy has multiple valid end spaces, it always chooses one that puts it as close to as many commandos as possible." },
            { t: "note", variant: "note", title: "Bosses move differently", text: "Bosses can only move or be moved by effects on boss cards." },
          ],
        },
        {
          id: "stage-turn",
          title: "Stage Turn",
          summary: "Activate stage cards, then draw one.",
          blocks: [
            { t: "p", html: "Resolve each <strong>Activate</strong> effect on each stage card in the stage play area, left to right. Then draw and resolve 1 stage card." },
            { t: "note", variant: "warn", title: "Run out and you lose", text: "If a stage card must be drawn and none remain in the stage deck, the players immediately lose." },
            { t: "p", html: "When resolving a stage card, first check for a <strong>pillbox sensor icon</strong>. If present, players may place a pillbox sensor token in an empty pillbox sensor space. If a commando is in that space when the token is added, they may immediately discard it to draw a weapon card." },
            { t: "p", html: "Then resolve each effect on the card top to bottom (each paragraph is its own effect). Unless otherwise specified, stage cards are discarded after they are fully resolved." },
            { t: "p", html: "After the stage turn, each commando flips their turn card, draws 1 enemy card, and play continues with a new commando turn." },
          ],
        },
        {
          id: "end-of-game",
          title: "End of the Game",
          summary: "Two ways to lose, one way to win.",
          blocks: [
            { t: "note", variant: "warn", title: "You lose if…", text: "A commando must discard a medal token and cannot (becoming defeated), <em>or</em> a stage card must be drawn and none remain in the stage deck." },
            { t: "note", variant: "tip", title: "You win if…", text: "You destroy the boss — the moment all boss cards in play are \"Defeated\" side up." },
          ],
        },
      ],
    },

    {
      id: "concepts",
      title: "Core Concepts",
      sections: [
        {
          id: "advantage",
          title: "Advantage",
          summary: "The currency of skill and survival.",
          blocks: [
            { t: "p", html: "Advantage represents a commando's skills. It is tracked with advantage tokens and the advantage symbols on commando cards." },
            { t: "dl", items: [
              { term: "Mobility", def: "Evasiveness and agility." },
              { term: "Accuracy", def: "Skill with firearms." },
              { term: "Subtlety", def: "Skill at stealth and close combat." },
              { term: "Any", def: "Represents any advantage type (the commando's choice)." },
            ] },
            { t: "h", text: "Current advantage" },
            { t: "p", html: "Your current advantage is your advantage tokens plus the advantage symbols on the commando cards in your hand. When asked how much advantage you have, check your current advantage." },
            { t: "h", text: "Token limit" },
            { t: "note", variant: "warn", title: "Max 3 of each", text: "You can never possess more than <strong>3 of each type</strong> of advantage token; discard the excess. This limit is only for tokens — there's no limit to cards in hand regardless of their advantage symbols." },
            { t: "h", text: "Spending advantage" },
            { t: "p", html: "Spend any matching advantage from your current advantage to pay costs. A spent token returns to the supply. A card spent for its advantage symbol is discarded without resolving its effects. If you \"must\" spend advantage, you cannot avoid the cost unless offered an alternate choice (such as suffering a consequence), in which case you may choose to suffer the consequence instead." },
            { t: "h", text: "Advantage in attacks &amp; damage" },
            { t: "p", html: "In a commando attack you may spend advantage to convert an advantage result on a commando die into a success. When you suffer damage (always of an advantage type), you must spend matching advantage to prevent it or lose a medal." },
          ],
        },
        {
          id: "damage",
          title: "Suffering & Preventing Damage",
          summary: "Pay advantage or lose a medal.",
          blocks: [
            { t: "p", html: "When commandos suffer damage, it is always of an advantage type. You must either spend advantage matching the type and quantity to prevent it, or lose a medal. You only ever lose <strong>1 medal per damage effect</strong>, no matter how much damage that effect deals." },
            { t: "p", html: "You can face several separate damage effects in one turn; each is resolved individually, so you could lose more than 1 medal in a turn if you can't prevent multiple effects." },
            { t: "example", title: "Example — Bill", text: "Bill rolls 3 enemy dice: one special and two damage. The special resolves first as its own effect; part of it makes him suffer 2 damage, which he prevents by spending 2 advantage. Then he resolves the two damage results as a single effect. He has only 1 advantage left and declines to spend it, so he suffers the damage and loses a medal: he discards a medal token, discards his equipped weapon, and draws back up to 4 cards." },
          ],
        },
        {
          id: "objectives",
          title: "Objectives",
          summary: "Complete missions for ongoing bonuses.",
          blocks: [
            { t: "p", html: "Once on your turn, when you move into an objective space you may interrupt your turn to do one of the following:" },
            { t: "ul", items: [
              "If the space does <strong>not</strong> match an objective token on your mission card: draw the top objective card and attempt that objective.",
              "If the space <strong>matches</strong> an objective token on your mission card: draw 1 card from your deck.",
            ] },
            { t: "h", text: "Attempting objectives" },
            { t: "p", html: "Compare the drawn objective card's requirements with your current advantage. If your current advantage meets or exceeds the requirement, you complete it and place the matching objective token on your mission card. Otherwise you do not complete it and must resolve the card's <strong>Scout</strong> effect." },
            { t: "note", variant: "note", title: "It's only a check", text: "You do <strong>not</strong> spend advantage when attempting an objective — it's only a check for the right combination. Either way, the objective card is discarded after resolving." },
            { t: "h", text: "Objective tokens" },
            { t: "p", html: "While an objective token is on your mission card, you gain the corresponding effect listed there. Each mission card can hold only 1 of each type of objective token. If a token is ever discarded from your mission card, set it beside the card and you may attempt that objective again." },
          ],
        },
        {
          id: "enemies",
          title: "Enemies",
          summary: "Drawing, placing, and defeating them.",
          blocks: [
            { t: "p", html: "Each time you must \"draw an enemy,\" draw an enemy card, place it to the right of the rightmost card in your play area, and place the matching token in the empty enemy space nearest your commando. If all enemy spaces are occupied, choose the enemy space nearest the commando and place the enemy in the empty space nearest it." },
            { t: "note", variant: "warn", title: "3-card limit", text: "A commando cannot have more than <strong>3 enemy cards</strong> (including their boss card). If you must draw one while at 3, you instead immediately suffer 1 damage." },
            { t: "p", html: "When an enemy suffers damage equal to its health value, it is defeated: remove its token (to supply) and discard its card (except boss cards). The commando who defeated it draws 1 card; if a game effect defeated it, choose any commando to draw." },
          ],
        },
        {
          id: "bosses",
          title: "Bosses",
          summary: "Multi-card enemies you must destroy.",
          blocks: [
            { t: "p", html: "Boss cards are a unique enemy card type. Each enemy deck usually has several numbered 1–4; the number refers to the player count and has no effect beyond setup. Bosses can only move or be moved by effects on boss cards." },
            { t: "h", text: "Targeting &amp; damaging" },
            { t: "p", html: "Each boss card corresponds to the boss miniature. When the boss is attacked, the attacking commando may divide and assign the damage among any number of undefeated boss cards. Even with multiple cards in play, the boss counts as a single target." },
            { t: "h", text: "Defeating &amp; destroying" },
            { t: "p", html: "When a boss card is defeated it is flipped to its \"Defeated\" side and the commando who defeated it draws 1 card. Some Defeated sides have constant abilities that last the rest of the game. Defeated boss cards cannot be flipped back, assigned damage, or leave play. The boss is <strong>destroyed</strong> only when all boss cards are \"Defeated\" side up." },
            { t: "note", variant: "note", title: "Always an enemy", text: "Boss cards are always an enemy in your play area, defeated or not — they always contribute at least 1 enemy die and count toward your 3-card limit (leaving room for 2 other enemies)." },
          ],
        },
        {
          id: "medals",
          title: "Medals",
          summary: "Your endurance — don't run out.",
          blocks: [
            { t: "p", html: "Each commando begins with <strong>3 medal tokens</strong>, representing endurance. Each time you suffer damage you cannot prevent, you lose a medal. Only 1 medal can be lost per damage effect." },
            { t: "h", text: "Losing a medal" },
            { t: "p", html: "Each time you lose a medal: discard 1 medal token, discard any weapon card you have, optionally discard any number of cards from hand, then draw until you have 4 cards." },
          ],
        },
        {
          id: "weapons",
          title: "Weapons",
          summary: "Upgrade your firepower.",
          blocks: [
            { t: "p", html: "Each commando has a default weapon on their character card, providing a range and attack power (number of dice). When you gain a weapon card you may place it on your character card (covering the default or any previously equipped weapon), becoming your current weapon. Each time you lose a medal, you must also discard a weapon card you have, if able." },
          ],
        },
      ],
    },

    {
      id: "additional",
      title: "Additional Rules",
      sections: [
        {
          id: "general",
          title: "General Rules",
          summary: "Player choice, empty spaces, interrupts, cards.",
          blocks: [
            { t: "dl", items: [
              { term: "Player Choice", def: "When faced with multiple valid options for an effect, unless specified, players collectively decide how to resolve it." },
              { term: "Empty Spaces", def: "An empty space contains no commandos or enemies." },
              { term: "Interrupt", def: "The game is momentarily paused to handle the effect, then resumes where it left off." },
            ] },
            { t: "h", text: "Cards" },
            { t: "dl", items: [
              { term: "Discard Piles", def: "Each deck has its own discard pile. When a deck runs out, shuffle its discard pile into a new deck — except the stage deck, which is not reshuffled (running it out loses the game)." },
              { term: "Revealing Cards", def: "A revealed card is shown to all players without resolving its effects, then returned to the top of the deck facedown, unless otherwise specified. Cards revealed from a hand return to that hand." },
              { term: "Cards in Hand", def: "When determining current advantage, do not count cards currently being resolved from being played — only cards actually in hand." },
              { term: "Hand Size", def: "There is no limit to how many cards a player can hold." },
            ] },
          ],
        },
        {
          id: "effects",
          title: "Effects & Costs",
          summary: "How to read and pay for effects.",
          blocks: [
            { t: "p", html: "Each paragraph on a card (separated by a horizontal line) is a separate effect. Additionally, each time \"each commando\" is instructed to do something, that commando's reaction is its own separate effect." },
            { t: "example", title: "Example — separate effects", text: "\"Infection Spreads\" says: \"Each commando must either discard 1 damage from the map or place 2 infectious gels in the wadder space nearest them.\" Each commando's reaction is its own effect, so multiple commandos failing it can each trigger the \"We're overrun!\" effect on the Alien Lair Reference card." },
            { t: "h", text: "Paying for effect costs" },
            { t: "p", html: "If players are given the <em>option</em> of paying for an effect (often the word \"may\"), they can only trigger it if they pay the cost in full." },
            { t: "h", text: "Forced negative effects" },
            { t: "p", html: "If presented with a single forced negative effect, players must perform it or pay its cost as fully as able. Given a choice of multiple forced negatives, players must choose one they can fully perform/pay; if none can be fully met, choose the one they can come closest to and perform it to the best of their ability. Falling short can carry extra consequences specified in enemy and stage decks." },
            { t: "h", text: "Per-commando values (×)" },
            { t: "p", html: "When a number is followed by the commando icon, multiply that value by the number of commandos in the game. Example: a \"2×\" value in a 2-commando game equals 4." },
          ],
        },
        {
          id: "limitations",
          title: "Component Limitations",
          summary: "What's limited by the box.",
          blocks: [
            { t: "dl", items: [
              { term: "Advantage Tokens", def: "Limited to those in the supply. You cannot gain advantage tokens if none remain, nor take ones used for other effects until they return to the supply (unless otherwise specified)." },
              { term: "Damage Tokens", def: "Considered unlimited — use substitutes if you run out." },
              { term: "Other Tokens", def: "Limited by what's in the game. If a supply runs out, you cannot gain more of that token until it refills." },
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
          id: "faq",
          title: "FAQ",
          summary: "Frequently asked questions.",
          blocks: [
            { t: "h", text: "Tokens" },
            { t: "faq", items: [
              { q: "Do bubble dimers count as enemies?", a: "No. A space with a bubble dimer is still an empty space, and a bubble dimer cannot be the target of an attack." },
              { q: "Can a commando ever have more than 3 of each advantage token?", a: "No. See Advantage Token Limit." },
              { q: "Do cards in my hand count toward the 3-token limit?", a: "No. You can spend a card from hand for an advantage cost, but cards are not advantage tokens." },
              { q: "If I need a token but the supply is empty, can I take one off a component?", a: "No. If there aren't enough of a token in the supply, you cannot gain one, and you can't remove a token from a component unless an effect allows it." },
            ] },
            { t: "h", text: "Special spaces" },
            { t: "faq", items: [
              { q: "Can I resolve an objective space if I entered it on another turn?", a: "No — only on your own turn, and only once per turn." },
              { q: "Can I resolve a pillbox sensor space outside of my turn?", a: "Yes. The moment you enter one, for any reason, you may discard the token and draw a weapon card." },
              { q: "Do enemies trigger special-space effects?", a: "Enemies ignore the effects of all special spaces unless specified otherwise." },
            ] },
            { t: "h", text: "Stage cards" },
            { t: "faq", items: [
              { q: "If told to \"discard the top card of the stage deck,\" do I resolve it?", a: "No. It is simply discarded without effect." },
              { q: "If a card says each commando \"must\" discard tokens and we know one can't, can we choose to avoid it?", a: "No. Commandos must discard the tokens if able." },
            ] },
            { t: "h", text: "Boss cards" },
            { t: "faq", items: [
              { q: "Does the boss card count toward the 3-enemy maximum?", a: "Yes — with the boss card you have room for 2 more enemy cards." },
              { q: "Does the boss card still count as an enemy when \"Defeated\"?", a: "Yes. It keeps contributing 1 enemy die, and some Defeated sides have a constant ability active for the rest of the game." },
            ] },
          ],
        },
        {
          id: "optional",
          title: "Optional Rules",
          summary: "Tune the challenge to your group.",
          blocks: [
            { t: "dl", items: [
              { term: "Optional Cards", def: "Future products may include Optional cards carrying all the rules they need to add new challenges and rewards." },
              { term: "Jump Start Mode", def: "Each commando starts with 2 of each advantage token." },
              { term: "Rough Start Mode", def: "The commandos start with no advantage tokens." },
              { term: "Unpredictable Environment Mode", def: "After setup, randomly remove a stage card without looking and return it to the box. Remove a second for an \"expert\" version." },
              { term: "Battle Damage Mode", def: "Whenever a commando loses a medal, also permanently remove the top card of their deck from the game." },
            ] },
          ],
        },
        {
          id: "quick-reference",
          title: "Quick Reference",
          summary: "Round, attack, and enemy summaries.",
          blocks: [
            { t: "h", text: "Game round" },
            { t: "ol", items: [
              "<strong>Commando Turns</strong> — each player takes a turn.",
              "<strong>Enemy Turn</strong> — each player resolves an enemy attack.",
              "<strong>Stage Turn</strong> — Activate stage cards, then draw &amp; resolve 1 stage card.",
            ] },
            { t: "p", html: "Then flip turn cards and each draw an enemy. Repeat until the game ends." },
            { t: "h", text: "Commando attack" },
            { t: "ol", items: [
              "Choose a target in range.",
              "Gather &amp; roll dice; resolve criticals (explode).",
              "Resolve attack — convert advantage results, deal 1 damage per success.",
              "Gain advantage for unconverted advantage results.",
            ] },
            { t: "h", text: "Enemy attack" },
            { t: "ol", items: [
              "Gather &amp; roll 1 enemy die per enemy card.",
              "Resolve specials (leftmost untriggered card first).",
              "Resolve incoming damage — prevent with advantage or lose a medal (max 1 per effect).",
            ] },
          ],
        },
      ],
    },

    {
      id: "stories",
      title: "Stories",
      sections: [
        {
          id: "story-mode",
          title: "Story Mode",
          summary: "Linked stages played as a campaign.",
          blocks: [
            { t: "p", html: "A story is a series of narratively linked stages played by a fixed group of commandos, made up of <strong>parts</strong> played in order." },
            { t: "ul", items: [
              "Select a story and read the <strong>Prologue</strong> of Part 1.",
              "Set up using the listed stage and enemy decks, plus any special setup instructions.",
              "Note any special rules for the part — keep the rulebook handy mid-game.",
              "After winning or losing a stage, read the related <strong>Epilogue</strong> and apply any rewards or penalties.",
              "Keep the same commandos for the entire story. If taking a break, log your progress and rewards/penalties.",
            ] },
            { t: "p", html: "A story concludes when the commandos are told they have won or lost the story." },
          ],
        },
        {
          id: "return-to-galuga",
          title: "Story: Return to Galuga",
          summary: "Confirm Java's presence and eliminate it.",
          blocks: [
            { t: "p", html: "<em>A report of our recent operation in the Galuga Archipelago off the coast of New Zealand — the site of Contra's first encounter with the Red Falcon Army. The mission: confirm the presence of the entity known as Java and eliminate it with extreme prejudice.</em>" },
            { t: "story", part: "Part 1", stage: "Jungle", enemy: "Defense Wall",
              prologue: "Rifles slung over their shoulders, the Contras launch from the chopper into the night. A flare lights the sky, bullets rip through the trees, and the base alarm echoes through the valley. \"Looks like our covert approach wasn't as covert as we thought! Time to go knock at their door!\"",
              setup: "During step 6 of setup, choose a commando to draw an additional enemy card.",
              rules: "None.",
              win: "The defense wall blows open. Each commando starts the next stage with 1 additional advantage token of their choice. Advance to Part 2.",
              lose: "The RFA's gotten some upgrades. The commandos have failed their mission — regroup and try Part 1 again." },
            { t: "story", part: "Part 2", stage: "Waterfall", enemy: "Garmakilma",
              prologue: "The commandos emerge onto a picturesque cove with a gargantuan overhang waterfall. They'll have to climb it — using strange levitating rock platforms as alien \"elevators\" — to reach where Java's heart was spotted.",
              setup: "The Slip Track begins on the second space.",
              rules: "None.",
              win: "Lucia learns the RFA used cloning tech to resurrect Java from DNA littered across the island. Choose a commando to start the next stage with an objective token of their choice on their mission card. Advance to Part 3.",
              lose: "The defense system won't go down; the team escapes up a cage elevator and Lance blows a fuel canister behind them. Advance to Part 3." },
            { t: "story", part: "Part 3", stage: "Snow Field", enemy: "Gordea",
              prologue: "Atop a snow-covered mountain ridge, grenades erupt from the treeline and a massive spiked assault vehicle rolls out, its cannon gleaming. All Bill can manage is \"Oh, crap.\"",
              setup: "After step 2 of setup, search the stage deck for a copy of \"Dogra Mk. II.\" Shuffle it into the top 3 cards of the stage deck.",
              rules: "None.",
              win: "The titan falls, revealing a hidden reinforced door — an entrance to a hive. During the next stage, after setup but before the first round, the commandos may reveal the top card of the stage deck. Advance to Part 4.",
              lose: "Lance is pinned but escapes into the tunnel as his team draws the behemoth away. Advance to Part 4." },
            { t: "story", part: "Part 4", stage: "Alien Lair", enemy: "Java",
              prologue: "Deep in the humid, pulsating hive, purple blobs pour from the walls. \"Java is in here somewhere, and we've got to destroy it at all costs. Failure isn't an option.\"",
              setup: "After setup, each commando must hatch a bugger (see Java Reference card).",
              rules: "None.",
              win: "Lucia sets a charge — 10 minutes. The chopper escapes as a flash comparable to a small sun rises into the sky. \"We're Contra. It's what we do best.\" The commandos win this story!",
              lose: "As the aliens swarm over their bodies, the Contras know they have failed — the mission, and the world. The commandos lose this story." },
          ],
        },
        {
          id: "escape-from-galuga",
          title: "Story: Escape from Galuga",
          summary: "Between destroying Java and boarding the chopper.",
          blocks: [
            { t: "p", html: "<em>A classified report detailing what happened between the moment the commandos destroyed Java and the moment they boarded the chopper to escape Galuga…</em>" },
            { t: "story", part: "Part 1", stage: "Alien Lair", enemy: "Gordea",
              prologue: "The charge won't blow. Lucia's plan: reboot the defense system to broadcast a signal HQ can detect and call in an airstrike. Then the once-dead Gordea crashes through the ceiling. \"Why won't you just die?\"",
              setup: "The commandos start in the boss spaces, not the commando spaces. Gordea starts within 1 space of a boss space.",
              rules: "None.",
              win: "The titan staggers into an acid pool and sinks. Each commando starts the next stage with 1 additional advantage token of their choice. Advance to Part 2.",
              lose: "\"This thing just won't stop! Retreat to the heart's remains!\" The commandos have failed — try Part 1 again." },
            { t: "story", part: "Part 2", stage: "Snow Field", enemy: "Defense Wall",
              prologue: "Back in the snow field, the team must breach the armored facility to reach the elevator shaft down to the defense system, wary of grenadiers and mobile artillery.",
              setup: "None.",
              rules: "Each boss card gains +5 to its health value.",
              win: "The breach exposes the elevator shaft. During the next part, after Special Setup, the commandos may return 1 additional card from the top of the stage deck to the box without looking. Advance to Part 3.",
              lose: "Sweets hotwires a wrecked Dogra tank and blasts an opening in the wall. \"There's our entrance! Move!\" Advance to Part 3." },
            { t: "story", part: "Part 3", stage: "Waterfall", enemy: "Garmakilma",
              prologue: "At the defense system, Lucia broadcasts the signal — then a backup auxiliary boots up the wreck. \"We need this thing to stay active long enough for HQ to detect it. Don't destroy it and stay alive!\"",
              setup: "Each commando begins within 1 space of a boss space. After step 2 of setup, return the top card of the stage deck to the box without looking.",
              rules: "The Garmakilma boss card cannot take damage. When a stage card cannot be drawn, the commandos win. Ignore the \"Slow Down!\" special rule on the Waterfall stage reference card during this game.",
              win: "HQ picks up the signal — airstrike in twenty minutes. Choose a commando to start the next stage with a random weapon card. Advance to Part 4.",
              lose: "HQ gets the signal, but a blast drops the ground out from under the commandos into the river below. Choose a commando to start the next stage with one less medal. Advance to Part 4." },
            { t: "story", part: "Part 4", stage: "Jungle", enemy: "Java",
              prologue: "Emerging into the jungle at sunset, they find another Java — a clone — in a glass vessel being prepped for transport, surrounded by egg sacks. \"We can't let them take it out of here. Contras, light it up!\"",
              setup: "The commandos start in the boss spaces. The boss starts in the commando spaces. During step 6 of setup, each commando draws an additional enemy card.",
              rules: "Each boss card gains +5 to its health value.",
              win: "Missiles rain down as the chopper takes off, napalm-X consuming the jungle and the aliens within. The commandos win this story!",
              lose: "\"It's been an honor, Contras.\" The final words are consumed by the detonation. The commandos lose this story." },
          ],
        },
        {
          id: "credits",
          title: "Credits",
          summary: "Who made the game.",
          blocks: [
            { t: "dl", items: [
              { term: "Game Design", def: "Adam Sadler and Brady Sadler" },
              { term: "Game Development & Story", def: "Scott McFall" },
              { term: "Producer & Art Director", def: "Max Lei" },
              { term: "Graphic Design", def: "Chris Doughman" },
              { term: "Art", def: "The Creation Studio" },
              { term: "Sculptor", def: "Brusham Arekar" },
            ] },
            { t: "p", html: "In memory of Kazuhisa Hashimoto." },
            { t: "p", html: "© Konami Digital Entertainment · blacklistgamesllc.com" },
          ],
        },
      ],
    },
  ],
});

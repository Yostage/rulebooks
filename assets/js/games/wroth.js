/* Wroth — rules content.
   Source: Wroth Rules of Play v1.0 (Chip Theory Games, © 2025) +
   the official online clarifications/errata (support.chiptheorygames.com).
   Rules text is adapted/summarized; where the published v1.0 text was wrong,
   the errata corrections are folded into the base text and the full Q&A is
   kept in the Clarifications & FAQ chapter for reference.
   Block types understood by the renderer (see app.js):
   p, h, ul, ol, steps, dl, note, example, faq, icons, divider */

Rulebooks.register({
  id: "wroth",
  title: "Wroth",
  fullTitle: "Wroth",
  tagline: "Dice-drafting area control for 1–4 players",
  accent: "#d03070",
  theme: { "--accent-ink": "#8e1f4c" },
  cover: "❂",
  imgBase: "assets/img/wroth/",
  glyphs: {
    mine: "mine.png",
    extend: "extend.png",
    maneuver: "maneuver.png",
    battle: "battle.png",
    strike: "strike.png",
    assault: "assault.png",
    double: "double.png",
    "vp-bonus": "vp-bonus.png",
  },
  meta: [
    { label: "Players", value: "1–4" },
    { label: "Mode", value: "PvP / Solo / Co-op" },
    { label: "Designer", value: "Manny Trembley" },
    { label: "Publisher", value: "Chip Theory Games" },
  ],
  blurb:
    "Rival factions marshal troops to control the regions of the Drudgeon peninsula. Draft dice, deploy and maneuver, attack for territory, and race to 30 victory points — or take on a single AI faction in solo/co-op.",

  chapters: [
    /* ---------------------------------------------------------------- */
    {
      id: "intro",
      title: "Introduction",
      sections: [
        {
          id: "overview",
          title: "A Battle for Supremacy",
          summary: "What Wroth is and how you win.",
          blocks: [
            { t: "p", html: "The Drudgeon peninsula has known only war for centuries. Factions marshal their troops for battle to control the peninsula's plateaus — masses of foot soldiers and spear-carriers crossing plains and waves to fight, alongside their chiefs, officers, seers, masters, and lords." },
            { t: "p", html: "In Wroth, each player represents a unique culture with a distinctive approach to battle. Each faction is made up of <strong>basic troops</strong> (common faction-specific markers) and two or more kinds of <strong>elite troops</strong> (represented by dice)." },
            { t: "p", html: "These factions fight to control the regions of a radiant landscape rising from the ocean mist. Each region grants victory points to the faction that controls it at the end of each round, plus a bonus if that faction is the only one present. Factions <strong>draft dice</strong> to perform actions that let them deploy and maneuver troops to seize those regions." },
            { t: "note", variant: "tip", title: "How the game ends", text: "The game ends after a round when one faction either reaches <strong>30 victory points</strong> (standard mode) or completes a scenario-based mission (solo/co-op mode)." },
          ],
        },
        {
          id: "modes",
          title: "Modes of Play",
          summary: "Standard (PvP) vs Solo/Co-operative.",
          blocks: [
            { t: "dl", items: [
              { term: "Standard mode (PvP)", def: "Two to four human players each control one faction and face off against each other." },
              { term: "Solo / Co-operative mode", def: "One to four human players work together to fight a single AI faction. Learn standard mode first, then apply the solo/co-op differences." },
            ] },
          ],
        },
        {
          id: "factions",
          title: "The Factions",
          summary: "The cultures of the Drudgeon peninsula.",
          blocks: [
            { t: "dl", items: [
              { term: "The Aldan", def: "An ancient culture — tall, proud, and all but undying. They value order and precision above all, marching to battle by the strict dictates of history and tradition." },
              { term: "The Guild", def: "Knowledge, shadow, and grim amusement. Their power lies not in their own armies but in mercenary muscle and the decisive intelligence bought with their wealth." },
              { term: "The Koda", def: "Fierce islanders who pass down a hatred of mainlanders. Their chosen warriors shed their mortal bodies to embrace the essence of the Great Bear, Koda-konn — yet they nurture their own with selfless love." },
              { term: "The Ooglan", def: "Pale agents of chaos and malevolence who screech and squeal before descending into uncanny silence. Few survive an encounter with them." },
              { term: "The Runen", def: "Simultaneously unmovable and unstoppable. They die to defend what they claim and press without relenting toward what they want — nursing grudges over generations." },
            ] },
            { t: "h", text: "Expansion factions" },
            { t: "dl", items: [
              { term: "The Paldeyn", def: "Noble cavalry and shield-lines that will not be moved. They pursue the singular goal of driving before them any who challenge their right to keep what they have won." },
              { term: "The Venna", def: "Northern exiles bound by the purpose and magic of the hyperborean forests. Their community and knowledge give them power — as do their ties to the darker powers of the world below." },
            ] },
            { t: "note", variant: "note", title: "Note", text: "The Paldeyn and Venna are expansion factions and are not part of the base game." },
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
            { t: "ul", items: [
              "1 Map Playmat, 1 VP Tracker Playmat",
              "5 Faction Playmats (front: human player side, back: AI faction side)",
              "130 Basic Troop Markers (26 per faction)",
              "36 Elite Troop Dice",
              "20 Corra Gemstones",
              "9 Action Dice, 5 All-Seeing Dice",
              "15 Faction Feat Cards, 4 Reference Cards",
              "11 Victory Point (VP) Tokens, 2 Objective Tokens, 1 AI Deployment Base (DB) Token",
              "1 First Player Token, 1 Round Counter Die (d6), 1 Chaos Die (d8)",
              "15 Solo/Co-operative Scenario Cards",
            ] },
            { t: "h", text: "Basic troop colors" },
            { t: "dl", items: [
              { term: "Aldan", def: "Orange" },
              { term: "Koda", def: "Ruby" },
              { term: "Runen", def: "Emerald" },
              { term: "Guild", def: "Pink" },
              { term: "Ooglan", def: "White" },
            ] },
            { t: "note", variant: "warn", title: "Errata baked in", text: "There are <strong>36</strong> Elite Troop Dice, not 39 as the v1.0 components list states. The Aldan troops are <strong>orange</strong> (not \"maroon\") and the Guild troops are <strong>pink</strong> (not \"dark blue\"); the v1.0 list named the wrong colors." },
          ],
        },
        {
          id: "setup",
          title: "Setup (Standard Mode)",
          summary: "Preparing a PvP game.",
          blocks: [
            { t: "steps", items: [
              { n: "1", title: "Prepare the table", html: "Set the map and VP tracker in the center. Each player chooses a side of the map where they will deploy. Return unneeded Action Dice to the box (see the count below), then place a random VP token <strong>face-up</strong> on each numbered region and return the leftovers." },
              { n: "2", title: "Distribute factions", html: "Each player takes a faction's playmat (human-player side up) and its basic troop markers, elite troop dice, and one All-Seeing Die. Each player secretly selects <strong>one</strong> of that faction's three feat cards, and places one basic troop marker by the VP tracker to mark their running score." },
              { n: "3", title: "Deploy starting troops", html: "Each player places <strong>three</strong> basic troops into the deployment zone on their side of the map." },
              { n: "4", title: "Determine first player", html: "Randomly choose a first player; they take the First Player token. Turns go clockwise." },
            ] },
            { t: "h", text: "Action dice by player count" },
            { t: "dl", items: [
              { term: "2–3 players", def: "7 Action Dice" },
              { term: "4 players", def: "9 Action Dice" },
            ] },
            { t: "note", variant: "tip", title: "Feats are chosen in secret", text: "Choose your feat without revealing it; all feats are revealed only once every player has chosen. You're not meant to pick your feat based on what others took." },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "map",
      title: "The Map",
      sections: [
        {
          id: "regions",
          title: "Regions & Adjacency",
          summary: "How the map is divided and what touches what.",
          blocks: [
            { t: "p", html: "The map consists of <strong>regions</strong> separated by thick white lines. Two regions are <strong>adjacent</strong> if they share a common border, or if they are joined by a land bridge with a double-ended arrow. Troops move between adjacent regions, and some actions deal damage to adjacent regions." },
            { t: "p", html: "Each region is randomly assigned a VP token at the start of the game, showing how many victory points it is worth each round. Some VP tokens also grant a bonus action to the region's controller (see Spoils). A region's VP token generally doesn't change during a game." },
            { t: "h", text: "Region order" },
            { t: "p", html: "Every region except the Shores has a <strong>region order number</strong> (printed on the map) that sets when it is assessed during scoring and certain other effects. This order never changes between games and is unrelated to a region's victory-point value." },
            { t: "h", text: "Full adjacency list" },
            { t: "dl", items: [
              { term: "Deployment zones", def: "Adjacent to regions 1–6" },
              { term: "Region 1", def: "Deployment zones and region 5" },
              { term: "Region 2", def: "Deployment zones and region 6" },
              { term: "Region 3", def: "Deployment zones and region 6" },
              { term: "Region 4", def: "Deployment zones and region 5" },
              { term: "Region 5", def: "Deployment zones and regions 1, 4, 6, 7" },
              { term: "Region 6", def: "Deployment zones and regions 2, 3, 5, 7" },
              { term: "Region 7", def: "Regions 5, 6, 8" },
              { term: "Region 8", def: "Region 7" },
            ] },
          ],
        },
        {
          id: "shores",
          title: "The Shores & Deployment Zones",
          summary: "The water region and where troops enter the map.",
          blocks: [
            { t: "p", html: "The <strong>Shores</strong> is a single large region surrounding the map's central plateau and touching all four edges. It has four <strong>deployment zones</strong>, marked by piers (south and west) or tent encampments (north and east), where players typically deploy troops." },
            { t: "ul", items: [
              "Deployment zones are <strong>not their own regions</strong> — they are specific portions of the Shores. Troops there occupy both their deployment zone and the Shores.",
              "Neither the Shores nor the troops in it (including in deployment zones) can attack, be attacked, or be targeted for damage. Troops there are still \"in play\" for ability and scenario requirements.",
              "The Shores is adjacent to regions 1–6, so troops leaving a deployment zone can move directly into any of those.",
              "Once troops leave the Shores, they may never return to it.",
            ] },
            { t: "note", variant: "warn", title: "The Shores is never controlled", text: "Although it is a region, the Shores is never counted for control — only numbered regions are. No one scores or dominates the Shores." },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "troops-combat",
      title: "Troops, Corra & Combat",
      sections: [
        {
          id: "troops",
          title: "About Troops",
          summary: "Basic vs elite, and vitality.",
          blocks: [
            { t: "p", html: "Each faction has <strong>basic troops</strong> — the foot soldiers of its army. Every faction names them differently, but they all follow the same rules, and they are a limited resource. A basic troop has <strong>1 vitality</strong>: once it takes 1 point of damage it is defeated, removed from the map, and placed in that faction's discard." },
            { t: "p", html: "Each faction also has <strong>elite troops</strong>, represented by dice. These dice are <em>never rolled</em> in play — their number tracks the elite's remaining <strong>vitality</strong> (HP). An elite is deployed showing its highest value; each point of damage lowers the die by one. When an elite reaches zero it is removed from the map and returned to the faction mat, available to buy again." },
            { t: "note", variant: "note", title: "Vitality", text: "Vitality is a troop's capacity to absorb damage before being removed. Damage from any source is measured in <strong>points</strong>. A basic troop has 1 vitality; an elite's starting vitality is the largest number on its die." },
          ],
        },
        {
          id: "corra",
          title: "Corra",
          summary: "The currency, and running out of it.",
          blocks: [
            { t: "p", html: "<strong>Corra</strong> is a mystical currency that powers every faction's capabilities. Corra gemstones are gained from the central stockpile and returned to it when spent. Corra is intentionally limited to twenty pieces." },
            { t: "h", text: "Running out of Corra" },
            { t: "ul", items: [
              "If several players collect Corra at once (e.g. during Phase 3) and there isn't enough for everyone's full allotment, distribute in player order (AI last), <strong>one Corra at a time</strong>, until the stockpile is gone.",
              "If a single player collects Corra and there isn't enough, that player empties the stockpile and forfeits the rest.",
            ] },
            { t: "example", title: "Example", text: "In a 4-player game, if each player is owed 2 Corra and there are only 3 in the supply, players 1–3 each receive 1 Corra (one at a time, in order), and the supply runs out." },
          ],
        },
        {
          id: "gathering",
          title: "Gathering Troops",
          summary: "Pulling troops from multiple places for an action.",
          blocks: [
            { t: "p", html: "Some rules tell you to <strong>gather</strong> troops before acting with them (for example, to deploy them to a region). When troops are gathered, they may be taken from any combination of the player's faction playmat, the regions on the map, or even the player's discard (basic troops eliminated earlier)." },
          ],
        },
        {
          id: "move-deploy",
          title: "Moving vs Deploying",
          summary: "Two different things — and abilities care which.",
          blocks: [
            { t: "dl", items: [
              { term: "Move", def: "One or more troops change position between two adjacent regions on the map." },
              { term: "Deploy", def: "One or more troops are placed onto the map from somewhere else (usually a faction mat). Even troops gathered from the map and then placed into an adjacent region count as a deploy, not a move." },
            ] },
            { t: "note", variant: "warn", title: "Deploying is not moving", text: "Abilities that trigger off a troop <em>moving</em> (such as the Ram's) do <strong>not</strong> trigger when a troop is deployed." },
            { t: "note", variant: "note", title: "Multi-region & simultaneous moves", text: "An ability that moves a troop more than one region counts as two separate single-region moves, not one extended move. When several troops move at once, they move <strong>simultaneously</strong>: finish all movement first, then anything that triggers off the movement (such as Trappers) resolves." },
          ],
        },
        {
          id: "attacking",
          title: "Attacking & Dealing Damage",
          summary: "How attacks are directed and resolved.",
          blocks: [
            { t: "p", html: "Attacks always deal <strong>damage</strong> (measured in points). Some other abilities deal damage too, but those are not \"attacks\" unless stated. You can never attack or damage your own faction (or freely discard your own troops)." },
            { t: "p", html: "An attack is directed at a single <strong>region</strong>, and the damage is dealt to a single <strong>faction</strong> within that region. You may divide those points any way you like among that faction's troops there." },
            { t: "note", variant: "warn", title: "Leftover damage is lost", text: "If you defeat all of the chosen faction's troops and still have damage left over, that damage is lost — you cannot redirect it to a different faction or region. (Some elite abilities affect how and where damage must be applied.)" },
          ],
        },
        {
          id: "abilities",
          title: "Resolving Abilities",
          summary: "Mandatory use, and partial resolution.",
          blocks: [
            { t: "note", variant: "note", title: "You must use an ability if you can", text: "You must apply an elite's ability text whenever it applies and can be resolved — even if it's less advantageous than not using it." },
            { t: "example", title: "Example", text: "Playing the Ooglan, if you attack a region with a Nameless, the damage you deal must equal that Nameless's Vitality — even if the Nameless has 1 Vitality and you were attacking with the All-Seeing Die's Assault (which would otherwise deal 2)." },
            { t: "note", variant: "note", title: "Do as much as possible", text: "When you resolve an ability, do as much of it as you can and skip the parts you can't. For example, the Ooglan's Parasite says \"Defeat an opposing basic troop in a region the Ooglan occupy. Add 1 Horde from the discard to that region.\" With no Hordes in the discard, you still defeat the troop and simply skip adding a Horde." },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "dice-actions",
      title: "Dice & Actions",
      sections: [
        {
          id: "action-die",
          title: "The Action Die",
          summary: "The four drafted actions.",
          blocks: [
            { t: "p", html: "Action Dice are rolled into a draft pool each round; the face you draft determines the action you may take. Each die shows one of four faces:" },
            { t: "icons", items: [
              { img: "mine.png", term: "Mine", def: "Take one Corra from the stockpile." },
              { img: "extend.png", term: "Extend", def: "Deploy up to two of your basic troops from your faction playmat to any region where you already have one or more troops." },
              { img: "maneuver.png", term: "Maneuver", def: "Move up to two troops from one region to a single adjacent region — or deploy two basic troops from your playmat to your deployment zone." },
              { img: "battle.png", term: "Battle", def: "Attack a region you occupy, or one adjacent to it, for 1 damage." },
            ] },
            { t: "note", variant: "warn", title: "Extend needs an existing troop", text: "You may use Extend to add troops to your deployment zone, but Extend requires the target region to already contain at least one of your troops — so your deployment zone must already hold one of yours." },
          ],
        },
        {
          id: "all-seeing-die",
          title: "The All-Seeing Die",
          summary: "Your once-per-turn bonus die.",
          blocks: [
            { t: "p", html: "On your turn you may spend your All-Seeing Die by removing it from your playmat. It is <strong>not</strong> a form of Action Die, so it is activated in addition to your action for the turn. You reroll it each round during Discern (Phase 3). Its four faces:" },
            { t: "icons", items: [
              { img: "mine.png", term: "Mine", def: "Take one Corra from the stockpile." },
              { img: "strike.png", term: "Strike", def: "Attack any region for 1 damage." },
              { img: "assault.png", term: "Assault", def: "Attack a region you occupy, or one adjacent to it, for 2 damage." },
              { img: "double.png", term: "Double", def: "Immediately repeat an action you just carried out (e.g. a second Mine, another Extend, or even a second Exodus)." },
            ] },
            { t: "note", variant: "tip", title: "Double can be resolved differently", text: "When you Double an action, you carry it out again but need not do it the same way — a doubled Maneuver can move completely different troops, or deploy instead of move." },
            { t: "note", variant: "note", title: "Round die in PvP", text: "The Round Counter Die is only needed in solo/co-op (and for future factions). There's no need to track round numbers in a standard PvP game." },
          ],
        },
        {
          id: "exodus-buying",
          title: "Exodus, Buying & Feats",
          summary: "Spending two dice, buying elites, and feat cards.",
          blocks: [
            { t: "h", text: "The Exodus action" },
            { t: "p", html: "Instead of a regular action, you may spend <strong>two</strong> unspent dice (the All-Seeing Die may be one of them), showing any faces. Forfeit those dice actions, then choose a region and move as many of your troops as you wish from it to any adjacent region(s). This still counts as an \"action\" for abilities that invoke that term." },
            { t: "h", text: "Buying elite troops & abilities" },
            { t: "p", html: "At any time during your turn you may spend Corra on a faction ability listed on your mat (some factions only) or to bring elite troops into battle — as many as you can afford. Costs are shown on the faction mat. An elite is <strong>deployed when bought</strong>; most go to your deployment zone unless the troop says otherwise. Elites may only be purchased if they can be legally placed. Buying abilities and elites does <strong>not</strong> count as an \"action.\"" },
            { t: "note", variant: "note", title: "No die, no extras", text: "If you have no Action Die to spend on your turn, your turn is skipped — and you may not buy elite troops or use your All-Seeing Die that turn." },
            { t: "h", text: "Feat cards" },
            { t: "p", html: "Each faction has three unique feat cards, each either a once-per-game power or an ongoing (Persistent) effect. When you choose a faction you also choose one feat (secretly) and return the others. Place your feat face-up beside your mat. Unless stated otherwise, you may only use your feat on your own turn. To balance experience levels, newer players may take an additional feat." },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "round",
      title: "The Game Round",
      sections: [
        {
          id: "overview",
          title: "Round & Turn Overview",
          summary: "The six phases, and what a turn looks like.",
          blocks: [
            { t: "p", html: "Wroth is played in <strong>rounds</strong>, each of six <strong>phases</strong> that always occur in the same order. Rounds continue until someone wins." },
            { t: "ol", items: [
              "<strong>Maintenance</strong> — set the round die; pass the First Player token.",
              "<strong>Spoils</strong> — earn bonus actions from VP-token symbols.",
              "<strong>Groundwork</strong> — reinforce, reroll All-Seeing Dice, gain Corra.",
              "<strong>Draft</strong> — roll and draft the Action Dice.",
              "<strong>Actions</strong> — take turns spending dice.",
              "<strong>Victory Points</strong> — score the regions.",
            ] },
            { t: "note", variant: "tip", title: "On your turn (any order)", text: "Spend Corra · Activate an Action Die or Exodus action (mandatory) · Activate your All-Seeing Die · Activate your faction feat, if available." },
          ],
        },
        {
          id: "phase-1-2",
          title: "Phase 1: Maintenance · Phase 2: Spoils",
          summary: "Upkeep and VP-token bonus actions.",
          blocks: [
            { t: "h", text: "Phase 1: Maintenance" },
            { t: "p", html: "Set the Round Counter Die to the current round number, then pass the First Player token clockwise (skip the pass on Round 1)." },
            { t: "h", text: "Phase 2: Spoils" },
            { t: "p", html: "Some VP tokens show one of four action symbols. Going through the regions in region order, for each region whose VP token shows a symbol, the player with the <strong>most</strong> troops there may carry out the matching bonus action. Ties for most troops earn no bonus. Bonus actions work exactly like the Action-Die actions:" },
            { t: "icons", items: [
              { img: "mine.png", term: "Mine", def: "Take one Corra." },
              { img: "extend.png", term: "Extend", def: "Deploy up to two basic troops to a region you already occupy." },
              { img: "maneuver.png", term: "Maneuver", def: "Move up to two troops to an adjacent region (or deploy two to your DZ)." },
              { img: "battle.png", term: "Battle", def: "Attack a region you occupy or one adjacent for 1 damage." },
            ] },
            { t: "note", variant: "note", title: "Numbers ignored here", text: "The victory-point numbers on VP tokens are ignored during Spoils — they only matter in the Victory Points phase." },
          ],
        },
        {
          id: "phase-3-4",
          title: "Phase 3: Groundwork · Phase 4: Draft",
          summary: "Reinforce, reroll, gain Corra, then draft dice.",
          blocks: [
            { t: "h", text: "Phase 3: Groundwork" },
            { t: "p", html: "Players carry this out simultaneously. Each player:" },
            { t: "dl", items: [
              { term: "Reinforce", def: "Place two of your basic troops in your deployment zone." },
              { term: "Discern", def: "Roll your All-Seeing Die and set it on your mat showing the new result (even if you didn't use it last turn). You may use the result at any time during your turns this round." },
              { term: "Allocate", def: "Take one Corra." },
            ] },
            { t: "h", text: "Phase 4: Draft" },
            { t: "p", html: "One player rolls all the Action Dice to form a <strong>draft pool</strong>. Starting with the first player and going clockwise, each player drafts one die and places it on their mat <em>without changing its face</em>, until each player has two. Then the player with the <strong>fewest</strong> victory points takes the last die in the pool as a third; if there's a tie for fewest, no one takes it." },
            { t: "note", variant: "tip", title: "Two-player drafting", text: "In a standard two-player game, each player drafts <strong>three</strong> dice instead of two. The last die still goes to the lowest-VP player (no one, if tied)." },
            { t: "note", variant: "note", title: "Players are never eliminated", text: "Losing all your troops doesn't take you out — you still draft dice, take turns, and may spend Corra to deploy fresh troops." },
          ],
        },
        {
          id: "phase-5",
          title: "Phase 5: Actions",
          summary: "Taking turns and spending your dice.",
          blocks: [
            { t: "p", html: "Starting with the first player, players take turns clockwise. On your turn you must spend one of your drafted Action Dice to perform its action (or simply discard it if you don't want the action). You may also spend Corra, use your All-Seeing Die, and activate your feat (see Dice & Actions). Spent dice return to the central pool." },
            { t: "p", html: "If you have no Action Die to spend, your turn is skipped (and you can't buy elites or use your All-Seeing Die). The Actions phase ends immediately at the end of the turn in which no player has any Action Dice left." },
          ],
        },
        {
          id: "phase-6",
          title: "Phase 6: Victory Points",
          summary: "Scoring the regions, and winning.",
          blocks: [
            { t: "p", html: "Examine each region in region order and award victory points:" },
            { t: "dl", items: [
              { term: "Control", def: "The player with the most troops in a region gets the number of VP shown on its token. If players are tied for most troops, no one scores that region." },
              { term: "Domination", def: "If the controlling player is also the only player with troops there, they get one extra VP." },
            ] },
            { t: "note", variant: "note", title: "Counting troops for control", text: "Each faction is counted <strong>separately</strong>: you control a region if you have more troops there than any single other faction — even if your opponents collectively outnumber you. Elite troops count as <strong>one</strong> troop for control (their vitality doesn't matter), unless an ability says otherwise. The Shores is never counted." },
            { t: "p", html: "Many elite troops can claim additional victory points from regions they're in. For each unique troop showing :vp-bonus: in a region you <strong>control or dominate</strong>, gain the indicated VP (only one bonus per specific elite type per region — two Stoics in one region grant a single bonus)." },
            { t: "note", variant: "warn", title: "Errata: control or dominate", text: "The v1.0 rulebook said elite VP bonuses are scored in regions you \"occupy.\" That's wrong — they only score in regions you <strong>control or dominate</strong>." },
            { t: "note", variant: "tip", title: "Winning", text: "If a player has reached or exceeded <strong>30 VP</strong>, they win. If more than one has, the highest total wins; ties break to whoever controls more regions (not counting the Shores); a remaining tie is settled by Wrock Paper Scissors (or a shared victory)." },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "solo",
      title: "Solo & Co-op Mode",
      sections: [
        {
          id: "solo-intro",
          title: "Overview & Key Components",
          summary: "One to four players vs a single AI faction.",
          blocks: [
            { t: "p", html: "In solo/co-operative mode, one to four players work together against a single AI faction. A scenario is one chapter of that AI faction's epic. Unless a standard rule is specifically superseded here, it still applies." },
            { t: "dl", items: [
              { term: "Faction alternate playmat", def: "Each faction has an AI side that explains how it behaves as an AI combatant (priority letters A/B/C, AI symbol, etc.)." },
              { term: "Faction scenario cards", def: "Each faction has three scenarios used when it plays as the AI. Every scenario supports one to four human players." },
            ] },
          ],
        },
        {
          id: "solo-setup",
          title: "Solo/Co-op Setup",
          summary: "What changes from standard setup.",
          blocks: [
            { t: "p", html: "Setup follows standard mode except as noted. The generic \"player\" can mean a human or the AI." },
            { t: "ul", items: [
              "<strong>Don't place VP tokens yet</strong> — wait until the AI faction (and thus the scenario) is known; place them as the scenario card instructs, filling any unspecified regions randomly.",
              "Set the Round Counter Die to 1 where everyone can see it.",
              "Roll the Chaos Die (d8) and place the AI Deployment Base (DB) token in the matching region — this is the <strong>deployment base</strong> where new AI troops appear. Roll the Chaos Die again and leave it showing that result.",
              "Choose an AI faction freely, then one human faction per human player. The AI takes 25 basic troops (plus a 26th by the VP tracker) and <strong>no feat card</strong>.",
              "Human players take a reduced number of basic troops and track a single collective score.",
            ] },
            { t: "h", text: "Action dice by player count" },
            { t: "dl", items: [
              { term: "1 player", def: "4 Action Dice" },
              { term: "2 players", def: "5 Action Dice" },
              { term: "3 players", def: "7 Action Dice" },
              { term: "4 players", def: "9 Action Dice" },
            ] },
            { t: "h", text: "Basic troop deployment (per human side)" },
            { t: "dl", items: [
              { term: "1 player", def: "Take 20 · deploy 4 at setup · 1 per round" },
              { term: "2 players", def: "Take 15 · deploy 3 at setup · 1 per round" },
              { term: "3 players", def: "Take 12 · deploy 2 at setup · 1 per round" },
              { term: "4 players", def: "Take 10 · deploy 1 at setup · 1 per round" },
            ] },
            { t: "p", html: "Rather than a deployment zone, the AI places <strong>four</strong> basic troops in its deployment base (regardless of player count). Randomly select one human player as the starting player." },
          ],
        },
        {
          id: "threat",
          title: "Threat",
          summary: "How the AI decides where to act.",
          blocks: [
            { t: "p", html: "Some scenarios and AI abilities use <strong>threat</strong>. Threat pertains to regions and changes throughout play. A region's threat is the sum, across all human factions, of <strong>+1 per human basic troop</strong> and <strong>+3 per human elite troop</strong> there. A region with no human troops has zero threat." },
            { t: "note", variant: "note", title: "Tie-breaking", text: "AI instructions often target the highest-threat region (across the map, among regions it occupies, or adjacent to them). Unless a tie-breaker is specified, ties go to the <strong>lowest region number</strong>." },
          ],
        },
        {
          id: "ai-rounds",
          title: "AI Rounds (Phases 1–4)",
          summary: "How the round changes against the AI.",
          blocks: [
            { t: "h", text: "Phase 1: AI Maintenance" },
            { t: "p", html: "Unless it's round 1, advance the round die and pass the First Player token to the next human player. Then advance the DB token to the next ascending region number (back to region 1 after region 8). Finally, perform these two steps a number of times equal to the round number:" },
            { t: "ol", items: [
              "<strong>Execute a Chaos Die effect</strong> — apply the effect for the number showing on the Chaos Die, per the scenario card's table.",
              "<strong>Advance the Chaos Die</strong> — to the next number (after 8, cycle to 1).",
            ] },
            { t: "example", title: "Example", text: "Round 1: apply Chaos effect #4, cycle to 5. Round 2: apply #5, cycle to 6. Round 3 (do it three times): apply #6, #7, then #8 — cycling to 1." },
            { t: "h", text: "Phase 2: Spoils" },
            { t: "p", html: "Skipped in round 1. If the AI would earn a bonus action, it carries it out the same way it resolves the equivalent face on its dice." },
            { t: "h", text: "Phase 3: Groundwork" },
            { t: "p", html: "Humans reinforce simultaneously (limited to the per-round troop count from the setup table). Then the AI reinforces by placing one basic troop per human player on the deployment base, rolls its All-Seeing Die, and takes one Corra." },
            { t: "h", text: "Phase 4: Draft" },
            { t: "p", html: "Humans draft normally, with one change: the lowest-VP human does <strong>not</strong> take the last die — instead the AI faction takes it, to use as its first Action Die." },
          ],
        },
        {
          id: "ai-actions",
          title: "AI Actions (Phase 5)",
          summary: "Turn order and how the AI uses its dice.",
          blocks: [
            { t: "p", html: "Turns begin with the First-Player human and go clockwise. After every human has taken a turn, the AI takes the <strong>same number of turns as there are human players</strong>, all in a row, before any human goes again. The AI always goes last — so it gets three turns total in solo, or two sets of turns in co-op." },
            { t: "p", html: "On its first turn the AI buys and deploys any elites it qualifies for, then carries out the action on its drafted die. That die is then rolled to determine each subsequent AI action (and only returns to the pool when the phase ends)." },
            { t: "h", text: "AI Action Die" },
            { t: "icons", items: [
              { img: "mine.png", term: "Mine", def: "Take two Corra and immediately spend them if able." },
              { img: "extend.png", term: "Extend", def: "Place four basic troops in the highest-threat region where it already has a troop (as many as available; ties to lowest region number)." },
              { img: "maneuver.png", term: "Maneuver", def: "Disperse the region where it has the most troops." },
              { img: "battle.png", term: "Battle", def: "Attack the highest-threat region it occupies or is adjacent to for 1 damage — then attack a second time (recalculate threat first; ties to lowest region number)." },
            ] },
            { t: "h", text: "AI All-Seeing Die" },
            { t: "p", html: "The AI spends its All-Seeing Die immediately after its first action of the round; if it can't, the chance is lost and the die is set aside to reroll next round." },
            { t: "icons", items: [
              { img: "mine.png", term: "Mine", def: "Take two Corra, then spend immediately if able." },
              { img: "strike.png", term: "Strike", def: "Attack the highest-threat region for 1 damage, then repeat once (recalculate threat; ties to lowest region number)." },
              { img: "assault.png", term: "Assault", def: "Attack the highest-threat region it occupies or is adjacent to for 2 damage, then repeat once." },
              { img: "double.png", term: "Double", def: "Repeat the Action-Die effect it used on its first turn (reassessing threat/conditions as needed)." },
            ] },
          ],
        },
        {
          id: "ai-economy",
          title: "Dispersing & AI Economy",
          summary: "Dispersing, spending Corra, dealing damage, gathering.",
          blocks: [
            { t: "h", text: "Dispersing" },
            { t: "steps", items: [
              { n: "1", title: "Move elites", html: "Move all elite troops in the origin region to the adjacent region with the highest threat (ties to lowest region number)." },
              { n: "2", title: "Scatter regulars", html: "Send one basic troop to each adjacent region in ascending region-number order, then a second to each in the same order, and so on — until only one basic troop remains." },
              { n: "3", title: "Leave one behind", html: "The final basic troop stays in the origin region. The disperse ends." },
            ] },
            { t: "note", variant: "note", title: "Dispersing edge cases", text: "If a region has only elite troops, dispersing moves them out and leaves the region empty (but if there's even one basic troop, one basic is always left behind). Elites that \"cannot move or be moved\" are ignored when dispersing." },
            { t: "h", text: "How the AI spends Corra" },
            { t: "p", html: "AI playmats mark undeployed elites with priority letters <strong>A, B, C</strong>. Elites must deploy left to right — an A before a B, a B before a C. The AI deploys whatever it can afford, preferring the highest letter possible, breaking ties to the leftmost, and repeats while it still has enough Corra. AI elites deploy to the deployment base unless an ability or scenario says otherwise. Abilities without priority letters are never bought with Corra — they're only triggered by the Chaos Die." },
            { t: "h", text: "How the AI deals damage & gathers" },
            { t: "ul", items: [
              "When dealing damage, the AI targets <strong>elite</strong> troops before basic ones; if several elites are valid, the human players choose which takes the hit.",
              "AI damage to a region <strong>may be split across different human factions</strong> (unlike the standard one-faction rule).",
              "When the AI gathers troops, it takes from its discard first, then its undeployed pool, then from map regions lowest region number to highest.",
              "When an AI elite returns to its mat, it fills the <strong>lowest</strong> available letter (C before B before A) — there's never a die in A unless all later slots are filled too.",
            ] },
          ],
        },
        {
          id: "solo-faq",
          title: "Solo/Co-op Clarifications",
          summary: "Official answers for AI-mode questions.",
          blocks: [
            { t: "faq", items: [
              { q: "If the player takes the Exodus action in solo, does the AI still get 3 actions?", a: "Yes. Spending two Action Dice on Exodus means you only get two actions that round, but the AI always takes three in solo — you're considered to skip your third action, so the AI takes its second and third back-to-back." },
              { q: "What happens when the round counter would exceed 6?", a: "Just leave it at round 6 and keep playing." },
              { q: "For VP-based scenarios, do you lose if the AI reaches the target VP before you?", a: "Yes — you lose if the AI hits the required VP ahead of you. If both sides exceed it in the same round, the side with the most VP wins." },
              { q: "Will the AI disperse even if it leaves a region with no troops?", a: "Yes — it disperses elite-only regions, leaving them empty. But if the region has even one basic troop, one basic is always left behind. Elites that \"cannot move or be moved\" are ignored when dispersing." },
              { q: "Does the AI consider abilities when choosing which region to attack?", a: "No. The AI follows its threat instructions strictly and ignores abilities — e.g. it will still attack a Stoic's region for no damage rather than retarget." },
              { q: "How does the AI prioritize which elites to deploy?", a: "It deploys whatever it can afford, preferring the highest letter (A before B…); among same-letter options it deploys the leftmost; then it checks again with any leftover Corra." },
              { q: "When AI elites return to the faction mat, which letter do they fill?", a: "The lowest available — C before B before A. There's never a die in the A slot unless all preceding slots are filled." },
              { q: "When AI basic troops are defeated, do they go to a discard?", a: "Yes, just as in PvP." },
              { q: "Show of Strength: how many Rams does a solo player place at setup?", a: "Zero. Rams are only added at setup when there are multiple human players." },
            ] },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "faq",
      title: "Clarifications & FAQ",
      sections: [
        {
          id: "faq-general",
          title: "General Gameplay",
          summary: "Official answers to common rules questions.",
          blocks: [
            { t: "faq", items: [
              { q: "Do you use the Round Counter Die in PvP?", a: "No. It exists so solo/co-op (and future factions) can track rounds; there's no need to track round numbers in a standard PvP game." },
              { q: "Are feats chosen in secret during setup?", a: "Yes — choose secretly and reveal only after everyone has chosen. You're not meant to use knowledge of others' feats when picking your own." },
              { q: "Running out of Corra — do you take it one at a time or all you're owed?", a: "One at a time, in player order (AI last), until the supply is gone. E.g. in a 4-player game where each is owed 2 but only 3 remain, players 1–3 each get 1." },
              { q: "At setup, are VP tokens placed face-up or face-down?", a: "Face-up." },
              { q: "Can you use Extend to add troops to your deployment zone?", a: "Yes — but Extend requires the region to already contain at least one of your troops, so your deployment zone must already hold one of yours." },
              { q: "What regions are considered adjacent to each other?", a: "Regions sharing a border (or joined by a land bridge). Deployment zones ↔ regions 1–6. R1: DZ + R5. R2: DZ + R6. R3: DZ + R6. R4: DZ + R5. R5: DZ + R1, 4, 6, 7. R6: DZ + R2, 3, 5, 7. R7: R5, 6, 8. R8: R7." },
              { q: "Is \"deploying\" considered a move?", a: "No. Abilities triggered by a troop moving (such as the Ram's) are not triggered when a troop is deployed." },
              { q: "How exactly are attacks resolved?", a: "Choose one region and one faction within it; divide the damage among that faction's troops as you like. If you defeat them all and have damage left, it's lost — you can't redirect it to another faction or region." },
              { q: "Double on the All-Seeing Die: must you resolve the second instance the same way?", a: "No. You repeat the action but may do it differently — e.g. a second Maneuver can move different troops, or deploy instead of move." },
              { q: "For control, are elite troops worth more than basic ones?", a: "No. Unless an ability says otherwise, an elite counts as one troop for control, the same as a basic; its vitality is irrelevant to the count." },
              { q: "When you buy an elite troop, is it automatically deployed?", a: "Yes — it deploys when bought. Some elites specify where; otherwise it goes to your deployment zone." },
              { q: "Can you control the Shores?", a: "No. Although it's a region, the Shores is never counted for control — only numbered regions are." },
              { q: "For determining control, do you count other factions together or separately?", a: "Separately. You control a region if you have more troops than any single other faction, even if your opponents collectively outnumber you." },
              { q: "Are you required to carry out an elite's ability if you can?", a: "Yes — you must apply the ability text if it applies and can resolve, even if it's less ideal. (E.g. Ooglan attacking a 1-Vitality Nameless deals 1, not the All-Seeing Assault's 2.)" },
              { q: "Do you have to be able to resolve an ability in full to use it?", a: "No — do as much as possible and skip the parts you can't (e.g. Ooglan's Parasite still defeats a troop even with no Horde in the discard to add)." },
              { q: "When multiple troops move, is it one at a time or simultaneous?", a: "Simultaneous. Finish all movement, then anything that triggers off the movement (such as Trappers) resolves." },
            ] },
          ],
        },
        {
          id: "faq-factions",
          title: "Faction & Elite Rulings",
          summary: "Official answers about specific factions, elites, and feats.",
          blocks: [
            { t: "h", text: "Aldan" },
            { t: "faq", items: [
              { q: "Field Advantage Feat — does it also affect Phase 2: Spoils?", a: "No. Field Advantage lets the Aldan control regions where they're tied for the most troops, but Spoils depends on having the most troops present, not on control — so a tie doesn't activate it for Spoils." },
              { q: "Camouflage Feat — can \"defeat\" abilities still hit Aldan troops while Camouflage is active?", a: "Yes. Abilities that straight-up defeat troops (like the Ooglan's Parasite or the Eye for an Eye feat) aren't considered damaging, so they can still defeat Aldan troops during Camouflage." },
            ] },
            { t: "h", text: "Guild" },
            { t: "faq", items: [
              { q: "Crysen — does the damage replace or add to the Battle action's 1 damage?", a: "It replaces it. If a region you attack with Battle has at least one Crysen, the Guild deals damage equal to the total number of Crysen in play (all of them on the board, not just in that region)." },
              { q: "Do multiple Crysen in the target region multiply the damage?", a: "No. As long as at least one Crysen is in the attacked region, the damage equals the total Crysen in play; extra Crysen in that same region don't add more." },
              { q: "Stellen — do multiple Stellen let you steal multiple Corra?", a: "No. One Stellen or several, the Guild still steals just 1 Corra if the region has at least one Stellen." },
              { q: "Who does the Guild steal Corra from, and must they have Corra?", a: "From the faction being attacked, and only if that faction has Corra to steal — there's no substitute from the supply; otherwise the Guild simply gains nothing." },
            ] },
            { t: "h", text: "Koda" },
            { t: "faq", items: [
              { q: "Grizzled — extra damage for more than one Grizzled in the attacked region?", a: "No. +1 damage if there's at least one Grizzled in the attacked region; multiple Grizzled still only add +1 total." },
              { q: "Trapper — what happens to it after it's revealed and resolved?", a: "Once activated, the Trapper is removed from the playmat and returned to the Koda's faction mat." },
              { q: "Trapper — multiple Trappers in one region when an opponent moves in?", a: "They all activate; the Koda player chooses the order to resolve them." },
              { q: "Trapper (Steal Corra) — what if the moving faction has no Corra?", a: "The Koda steal 1 only if the mover has it; with none to steal, the Koda get nothing (not from the supply)." },
              { q: "Trapper (Attack 2 damage) — what's attacked?", a: "The faction that moved in; the damage can go to any of that faction's troops in the region, not just the troop that moved." },
              { q: "Trapper (Deploy 2 Runts) — where do the Runts come from?", a: "From the Koda playmat. If there are none there, the Runts can't come from the discard and the deploy simply can't happen." },
              { q: "Advanced Trapping Feat — do steal/attack Trapper actions need a faction in the Trapper's region?", a: "Yes. A Trapper can only affect its own region; with no opposing faction there, the steal and attack actions have no effect." },
              { q: "Mutation Feat — where do removed Runts go?", a: "To the discard, as if defeated." },
            ] },
            { t: "h", text: "Ooglan" },
            { t: "faq", items: [
              { q: "Nameless — does the damage replace or add to Battle's 1 damage?", a: "It replaces it — the Ooglan deal damage equal to that Nameless's Vitality (e.g. 3 Vitality = 3 damage, not 4)." },
              { q: "Multiple Nameless in the same region — how is it resolved?", a: "Pick one and use that troop's Vitality; you don't add the Nameless's Vitalities together." },
              { q: "Parasitic Influence Feat — twice, or once in an adjacent region?", a: "Twice. Defeat a basic troop and add a Horde in an Ooglan-occupied region, then do it again in a different region adjacent to the first — and the Ooglan need not occupy that second region." },
            ] },
            { t: "h", text: "Runen" },
            { t: "faq", items: [
              { q: "Ram — if it moves twice, does its ability trigger twice?", a: "Yes. Each time the Ram moves (e.g. via a Maneuver then an All-Seeing Double) its ability triggers." },
              { q: "Ram — can you move your own troops with it?", a: "Yes, but you can't damage your own troops, so spending Corra for damage won't affect moved Runen troops. The Ram also can't move itself." },
            ] },
            { t: "h", text: "Paldeyn (expansion)" },
            { t: "faq", items: [
              { q: "Vanguard Reinforcements Feat — does gaining multiple Corra at once trigger it multiple times?", a: "No. Gaining several Corra from one effect is a single instance, so it triggers once; you forgo all the Corra from that instance to deploy a Lyon, Ryder, or Ironwill." },
              { q: "Can it trigger from stealing Corra?", a: "Yes — stealing counts as gaining. But triggering this replaces the steal, so the opposing faction keeps the Corra you'd have stolen." },
              { q: "Do you pay the cost of the elite you deploy this way?", a: "No. Forgoing the Corra is the cost; you pay nothing extra even if the elite's cost is higher than the Corra you'd have gained." },
            ] },
            { t: "h", text: "Venna (expansion)" },
            { t: "faq", items: [
              { q: "Cauldron — can you deploy it to a deployment zone?", a: "Yes, but it's pointless: deployment zones don't count for control and can't be attacked, negating most Cauldron benefits." },
              { q: "Cauldron — multiple in a region: multiple Tyros each round?", a: "No. A region with at least one Cauldron gets one Tyro per round (if a Tyro is in the discard); extra Cauldrons don't add more." },
              { q: "Hag — multiple Hags: multiple damage back to the attacker?", a: "No. The Venna deal 1 damage back if the region has at least one Hag, regardless of how many." },
              { q: "Hag — must the attacker be in the Hag's region to be damaged?", a: "Yes. The attacking faction must have troops in the Hag's region; \"the attacker\" is the faction, so any of its troops there suffices, and the Venna choose which troop takes the damage." },
              { q: "Enhanced Sorcery Feat — do multiple Venna elites multiply the damage?", a: "No. +1 damage when attacking a region with a Hag, Acolyte, or Cauldron — always just +1, even with multiple Venna elites there." },
            ] },
          ],
        },
        {
          id: "errata",
          title: "Errata",
          summary: "Corrections to the printed v1.0 rules and scenario cards.",
          blocks: [
            { t: "p", html: "These corrections to the published v1.0 rulebook are already reflected in the rules above; they're collected here for reference." },
            { t: "ul", items: [
              "<strong>Component count:</strong> there are <strong>36</strong> Elite Troop Dice, not 39 (the per-die counts listed add to 36, excluding expansion factions).",
              "<strong>Basic troop colors:</strong> Aldan troops are <strong>orange</strong> (p6 says maroon); Guild troops are <strong>pink</strong> (p6 says dark blue).",
              "<strong>Elite VP bonuses:</strong> scored only in regions you <strong>control or dominate</strong> (p11 erroneously says \"occupy\").",
              "<strong>Koda Trapper:</strong> once activated, the Trapper returns to its faction mat.",
            ] },
            { t: "h", text: "Scenario corrections" },
            { t: "dl", items: [
              { term: "Cull the Weak", def: "Should read: \"For each region with 2 or more AI troops, not counting regions 5 or 6, <strong>all AI troops in that region</strong> move 1 region toward regions 5 or 6.\" (The original omitted what moves.)" },
              { term: "Bring the Rain", def: "Should read: \"Satisfy at least 2 of 3 conditions at the end of each round <strong>for 6 rounds</strong>.\" (You need 6 successful rounds to win — the end condition was missing.)" },
            ] },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "credits",
      title: "Credits",
      sections: [
        {
          id: "credits",
          title: "Credits",
          summary: "Who made Wroth.",
          blocks: [
            { t: "dl", items: [
              { term: "Publishers", def: "Adam Carlson & Josh Carlson" },
              { term: "Game Design", def: "Manny Trembley" },
              { term: "Solo/Co-op Design", def: "Adam Carlson" },
              { term: "Illustration & Creative Writing", def: "Manny Trembley" },
              { term: "Graphic Design", def: "Gui Landgraf" },
              { term: "Rulebook", def: "Jeff Tidball" },
            ] },
            { t: "p", html: "© 2025 Chip Theory Games. All rights reserved. Rules text here is adapted/summarized for reference and is not a substitute for the official rulebook." },
          ],
        },
      ],
    },
  ],
});

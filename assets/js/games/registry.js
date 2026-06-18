/* Global game registry. Each game file calls Rulebooks.register({...}). */
window.Rulebooks = window.Rulebooks || {
  games: [],
  byId: {},
  register: function (game) {
    this.games.push(game);
    this.byId[game.id] = game;
  },
  get: function (id) {
    return this.byId[id];
  },
};

var playlist = {
  drake: "Nice for What",
  cardiB: "I Like It",
  postMalone: "Psycho",
}
function updatePlaylist(playlist, "lilBaby", "Yes Indeed") {
  return playlist.assign({}, playlist, {[lilBaby: "Yes Indeed"]});
}
function removeFromPlaylist("drake", "Nice for What") {
  return delete playlist.drake;
}

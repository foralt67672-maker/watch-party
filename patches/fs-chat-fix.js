// Delegated fallback: forward clicks that target the close icon to the real button
// This helps when event handlers are lost due to reparenting into fullscreen
// or when a covering element intercepts pointer events.
document.addEventListener('click', function (e) {
  try {
    var target = e.target;
    if (!target) return;
    if (target.closest && target.closest('#fs-chat-close')) {
      var b = document.getElementById('fs-chat-close');
      if (b) b.click();
    }
  } catch (err) {}
});

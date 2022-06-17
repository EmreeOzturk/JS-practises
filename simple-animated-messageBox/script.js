$("h2").click(2000, function (e) {
  e.preventDefault();
  $("section").slideToggle();
});
$("span").click(2000, () => {
  $("section").slideUp();
  $("header").slideToggle();
});

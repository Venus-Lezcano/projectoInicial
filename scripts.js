function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Mayk sorrindo, usando óculos pretos e camisa preta"
    )
  } else {
    img.setAttribute("alt", "Mayk sorrindo, usando óculos e camisa preta")
  }
}

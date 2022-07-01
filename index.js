const canvas = document.getElementById("canvas")
const log = document.getElementById("log")

const ctx = canvas.getContext("2d")

const video = document.createElement("video")
video.src = "big-buck-bunny_trailer.webm"
video.autoPlay = true
video.loop = true
video.muted = true

video.onerror = (e) => {
  log.innerHTML += e
}

video.oncanplay = (e) => {
  requestAnimationFrame(updateCanvas)
  video.play()
}

function updateCanvas() {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
  requestAnimationFrame(updateCanvas)
}

const canvas = document.getElementById("canvas")
const log = document.getElementById("log")

const ctx = canvas.getContext("2d")
const video = document.createElement("video")
// video.src = "big-buck-bunny_trailer.webm"
video.src = "Big_Buck_Bunny_720_10s_2MB.mp4"
video.autoPlay = true
video.loop = true
video.muted = true

video.onerror = () => {
  log.innerHTML += video.error.message
}

function updateCanvas() {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
  requestAnimationFrame(updateCanvas)
}

video.play().catch((e) => {
  log.innerHTML += e.message
})

requestAnimationFrame(updateCanvas)

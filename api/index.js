const express = require('express');
const cors = require('cors');

const app = express();

// CORS allow gochuu (HTML frontend irraa akka waamamuuf)
app.use(cors());
app.use(express.json());

// Tarree vidiyoo fi stream keessan (As irratti ida'uu fi jijjiiruu dandeessu)
const videos = [
  {
    id: "1",
    title: "Colors Bangla Stream",
    platform: "youtube",
    url: "https://www.youtube.com/watch?v=scl4WxAjzts"
  },
  {
    id: "2",
    title: "Nature Relaxation 4K",
    platform: "mp4",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  },
  {
    id: "3",
    title: "TikTok Sample Video",
    platform: "tiktok",
    url: "https://www.tiktok.com/@user/video/7123456789012345678"
  },
  {
    id: "4",
    title: "Facebook Video Test",
    platform: "facebook",
    url: "https://www.facebook.com/watch/?v=123456789"
  }
];

// Main API Route
app.get('/', (req, res) => {
  res.json({
    status: "success",
    message: "StreamHub API is running!",
    endpoints: {
      get_videos: "/api/videos"
    }
  });
});

// Vidiyoowwan fi Live Streams kennuuf Route
app.get('/api/videos', (req, res) => {
  res.json(videos);
});

// App Vercel irratti hojjechuuf
module.exports = app;

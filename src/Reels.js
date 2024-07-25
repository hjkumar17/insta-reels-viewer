import React, { useState, useEffect } from "react";
import axios from "axios";

const Reels = () => {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReels = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`
        );

        const reelsData = response.data.data.filter(
          (item) => item.media_type === "VIDEO"
        );

        setReels(reelsData);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch reels", error);
        alert("Failed to load Instagram reels");
      }
    };

    fetchReels();
  }, []);

  if (loading) {
    return <div>Loading reels...</div>;
  }

  return (
    <div style={styles.container}>
      <h2>Your Instagram Reels</h2>
      <div style={styles.reelsContainer}>
        {reels.map((reel) => (
          <div key={reel.id} style={styles.reel}>
            <a href={reel.permalink} target="_blank" rel="noopener noreferrer">
              <video
                style={styles.video}
                src={reel.media_url}
                controls
                poster={reel.thumbnail_url}
              />
            </a>
            <p>{reel.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  reelsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
  },
  reel: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    overflow: "hidden",
  },
  video: {
    width: "100%",
    height: "auto",
  },
};

export default Reels;

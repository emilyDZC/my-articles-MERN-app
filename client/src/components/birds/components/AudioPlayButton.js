import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const AudioPlayButton = ({ url }) => {
  const [play, setPlay] = useState(false);
  const [pause, setPause] = useState(true);

  const audio = new Audio(url);

  const playAudio = () => {
    setPlay(true);
    setPause(false);
    audio.play();
  };

  const pauseAudio = () => {
    setPause(true);
    setPlay(false);
    audio.pause();
  };

  const handleClick = () => {
    pause ? playAudio() : pauseAudio();
    // fetchObject();
  };

  return (
    <div onClick={() => handleClick}>
      <FontAwesomeIcon icon={faPlay} />
    </div>
  );
};

export default AudioPlayButton;

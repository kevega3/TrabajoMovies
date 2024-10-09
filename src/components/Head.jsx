import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Typography } from 'antd';
import YouTube from 'react-youtube';
import './css/modal.css';

const { Title, Paragraph } = Typography;

export const Head = ({ movie, getConfig, trailer, isOpen, onClose }) => {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);

  const handleClose = () => {
    setPlaying(false);
    if (playerRef.current) {
      playerRef.current.stopVideo(); // Detener el video correctamente
    }
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      setPlaying(false);
      if (playerRef.current) {
        playerRef.current.stopVideo(); // Asegurarse de que se detenga al cerrar el modal
      }
    }
  }, [isOpen]);

  const handlePlayTrailer = () => {
    setPlaying(true);
  };

  // Esta función se ejecuta cuando el reproductor de YouTube está listo
  const onPlayerReady = (event) => {
    playerRef.current = event.target; // Asignar la referencia del reproductor
  };

  return (
    <Modal
      visible={isOpen}
      onCancel={handleClose}
      footer={null}
      width="100%"
      closable={false}
      style={{ maxWidth: '1000px', top: 20 }}
      bodyStyle={{
        padding: 0,
        height: '80vh',
        backgroundImage: movie?.backdrop_path
          ? `url("${getConfig.IMAGE_PATH}${movie.backdrop_path}")`
          : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
      }}
    >
      {movie && (
        <div
          className="viewtrailer"
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          {playing ? (
            <>
              <YouTube
                videoId={trailer?.key}
                className="reproductor container"
                containerClassName="youtube-container amru"
                opts={{
                  width: '100%',
                  height: '100%',
                  playerVars: {
                    autoplay: 1,
                    controls: 1,
                    cc_load_policy: 0,
                    fs: 0,
                    iv_load_policy: 0,
                    modestbranding: 0,
                    rel: 0,
                    showinfo: 0,
                  },
                }}
                onReady={onPlayerReady} // Asignar referencia al reproductor
              />
              <Button
                onClick={handleClose}
                className="close-button"
                type="primary"
                style={{ position: 'absolute', top: 10, right: 10 }}
              >
                X
              </Button>
            </>
          ) : (
            <div
              className="container"
              style={{
                padding: '20px',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                borderBottomLeftRadius: '10px',
                borderBottomRightRadius: '10px',
              }}
            >
              <Title level={2} style={{ color: 'white', marginBottom: '20px' }}>
                {movie.title}
              </Title>
              <Paragraph style={{ color: 'white', marginBottom: '20px' }}>
                {movie.overview}
              </Paragraph>
              {trailer ? (
                <Button
                  className="play-button"
                  onClick={handlePlayTrailer}
                  type="primary"
                  size="large"
                  icon={<span role="img" aria-label="play">▶️</span>}
                >
                  Ver trailer
                </Button>
              ) : (
                <Paragraph style={{ color: 'white' }}>
                  Ohs, parece que este trailer no está habilitado.
                </Paragraph>
              )}
            </div>
          )}
        </div>
      )}
    </Modal>
  );
};

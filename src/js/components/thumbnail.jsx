import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoaderImage = styled.img`
  position: absolute;
  top: -5000px;
  left: -5000px;
`;

const TeaserImage = styled.img`
  webkit-box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  moz-box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

const Layer = styled.div`
  background: rgba(0, 0, 0, 0.2);
  min-height: 450px;
  position: relative;
  overflow: hidden;
`;

const Background = styled.div`
  background-image: linear-gradient(black, black), url(${(props) => props.src});
  background-size: cover;
  background-blend-mode: saturation;
`;

const Headline = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
`;

const Thumbnail = (props) => {
  const [loading, setLoading] = React.useState(true);
  const [hover, setHover] = React.useState(false);
  const {
    src, target, headline, children,
  } = props;
  const layerTop = 380;
  const TextLayerStyle = {
    position: "absolute",
    left: "0px",
    top: layerTop + "px",
    background: "rgba(255, 255, 255, 1)",
    color: "black",
    height: "100%",
  };

  return (
    <div className="fl w-100 w-50-m w-third-l">
      <LoaderImage
        src={src}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
      />

      { loading ? <div className="spinner" /> : null }

      { !loading ? (
        <a
          className="near-black no-underline center"
          target="_blank"
          href={target}
          rel="noopener noreferrer"
                onMouseEnter={ () => setHover(true) }
                onMouseLeave={ () => setHover(false) }
        >
          <motion.div
            className="ma2 pa3 box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ opacity: { duration: 0.3 } }}
          >
            <Background src={src}>
              <Layer
                className="pv2 ph3 near-white">
                <motion.div
                  style={TextLayerStyle}
                  animate={{ top: hover ? 0 : layerTop }}
                  >
                  <Headline
                    className="tc mv3 f2 bg-white"
                  >
                    {headline}
                  </Headline>
                  <div className="pt4 bt b--near-black">
                    <TeaserImage
                      src={src}
                      className="fl pa1 mw4 mh4 mb2 ba b--gray"
                    />
                    { children }
                  </div>
                </motion.div>
              </Layer>
            </Background>
          </motion.div>
        </a>
      ) : null }
    </div>
  );
};

Thumbnail.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
};

export default Thumbnail;

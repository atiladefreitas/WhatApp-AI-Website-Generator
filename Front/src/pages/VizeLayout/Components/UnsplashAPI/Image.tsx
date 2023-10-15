import './imageStyles.css';

interface ImageProps {
  data: {
    urls: {
      small: string;
    };
    alt_description: string;
  };
}

const Image: React.FC<ImageProps> = ({ data }) => {
  return (
    <div className='imgWrapper'>
      <img src={data.urls.small} alt={data.alt_description} style={{borderRadius:'8px'}}/>
    </div>
  );
};

export default Image;

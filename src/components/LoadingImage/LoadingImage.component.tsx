import React, { useState } from "react";
import "./LoadingImage.styles.scss";
import loaderGif from "../../assets/gifs/loading.gif";

interface LoadingImageProps {
    src: string;
    alt: string;
    className: string;
}

const LoadingImage: React.FC<LoadingImageProps> = ({ src, alt, className }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        const delay = Math.random() * (1500 - 500) + 500;

        setTimeout(() => {
            setIsLoading(false);
        }, delay);
    };

    return (
        <div className="loading-image">
            {isLoading && (
                <div className="image-loader">
                    <img alt="Loading..." src={loaderGif} className="image-loader-gif" />
                </div>
            )}
            <img src={src} alt={alt} className={className} onLoad={handleImageLoad} style={{ display: isLoading ? "none" : "inline" }} />
        </div>
    );
};

export default LoadingImage;
